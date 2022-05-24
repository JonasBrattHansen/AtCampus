package no.atcampus.server.service

import no.atcampus.server.entities.*
import no.atcampus.server.repo.*
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.data.repository.findByIdOrNull
import org.springframework.stereotype.Service
import java.time.LocalDate
import javax.persistence.EntityNotFoundException
import kotlin.Exception

@Service
class GroupService(
    @Autowired private val userRepo: UserRepo,
    @Autowired private val groupRepo: GroupRepo,
    @Autowired private val schoolRepo: SchoolRepo,
    @Autowired private val userGroupRepo: UserGroupRepo,
    @Autowired private val groupRequestRepo: GroupRequestRepo
    ) {

    fun getAllGroups(): MutableList<GroupEntity>{
        return groupRepo.findAll()
    }

    //TODO: Probably not needed
    fun getAllUserGroups(): MutableList<UserGroupEntity>{
        return userGroupRepo.findAll()
    }

    fun getGroupById(id: Long): GroupEntity?{
        return groupRepo.findByIdOrNull(id)
    }

    fun getGroupsByName(name: String): MutableList<GroupEntity> {
        return groupRepo.findGroupEntitiesByName(name)
    }

    // No Error handling
    //TODO: Need to add more checking, with the UserRequestRepo
    fun addUserToGroup(userId: Long, groupId: Long): GroupEntity{
        val user = userRepo.findById(userId)
        val group = groupRepo.findById(groupId)

       userGroupRepo.save(UserGroupEntity(userEntity = user.get(), groupEntity = group.get()))

        return group.get()
    }


    fun getGroupsByUserId(id: Long): MutableList<GroupEntity>{
        val user = userRepo.findByIdOrNull(id)
        user?.let {
            val userGroups = userGroupRepo.findUserGroupEntitiesByUserEntity(user)
            val groupEntities = mutableListOf<GroupEntity>()
            userGroups.map {
                groupEntities.add(it.groupEntity)
            }
            return groupEntities
        }
        throw EntityNotFoundException("Could not find user with id $id")
    }

    fun getGroupsBySchool(id: Long): MutableList<GroupEntity>{
        val school = schoolRepo.findByIdOrNull(id)
        school?.let {
            return groupRepo.findGroupEntitiesBySchoolEntity(it)
        }
        throw EntityNotFoundException("Could not find school with id $id")
    }

    fun updateGroupById(id: Long, groupDetails: GroupDetails): GroupEntity{
        val group = groupRepo.findByIdOrNull(id)
        group?.let {
            val updatedGroupEntity = GroupEntity(
                id = id,
                name = groupDetails.name ?: it.name,
                description = groupDetails.description ?: group.description,
                image = groupDetails.image ?: group.image,
                admin = userRepo.findByIdOrNull(groupDetails.admin) ?: group.admin,
                schoolEntity = schoolRepo.findByIdOrNull(groupDetails.school) ?: group.schoolEntity,
                dateCreated = group.dateCreated ?: LocalDate.now()
            )
            return groupRepo.save(updatedGroupEntity)
        }
        throw EntityNotFoundException("Could not find group with id $id")
    }

    fun addGroup(email: String, groupDetails: GroupDetails): GroupEntity{
        val userEntity = userRepo.findUserEntityByEmail(email);
        
        val groupEntity = GroupEntity(
            name = groupDetails.name ?: throw Exception("GroupDetails must include name"),
            description = groupDetails.description ?: throw Exception("GroupDetails must include description"),
            image = groupDetails.image ?: "https://631ae89fcd069a398187-ee282e5b70d98fac94cba689ef7806d7.ssl.cf1.rackcdn.com/default_group_normal.png", //throw Exception("GroupDetails must include image"),
            admin = userEntity ?: throw Exception("GroupDetails must include user"), //userRepo.findByIdOrNull(groupDetails.admin) ?: throw Exception("GroupDetails must include admin"),
            schoolEntity = userEntity.schoolEntity ?: throw Exception("GroupDetails must include school")
        )
        
        return groupRepo.save(groupEntity)
    }


    fun addGroupRequestToGroup(userId: Long, groupId: Long): GroupRequestEntity{
        val groupRequest = GroupRequestEntity(
            userEntity = userRepo.findByIdOrNull(userId) ?: throw Exception("Must include userId"),
            groupEntity = groupRepo.findByIdOrNull(groupId) ?: throw Exception("Must include groupId")
        )
        return groupRequestRepo.save(groupRequest)
    }


}

data class GroupDetails (
    val name: String?,
    val description: String?,
    val image: String?,
    val admin: Long?,
    val school: Long?
)
