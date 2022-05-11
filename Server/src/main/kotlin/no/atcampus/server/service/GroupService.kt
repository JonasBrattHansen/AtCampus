package no.atcampus.server.service

import no.atcampus.server.entities.Group
import no.atcampus.server.entities.School
import no.atcampus.server.entities.User
import no.atcampus.server.repo.*
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.data.repository.findByIdOrNull
import java.time.LocalDate
import javax.persistence.EntityNotFoundException
import kotlin.Exception

class GroupService(
    @Autowired private val userRepo: UserRepo,
    @Autowired private val groupRepo: GroupRepo,
    @Autowired private val schoolRepo: SchoolRepo,
    @Autowired private val userGroupRepo: UserGroupRepo
    ) {

    fun getGroupsByName(name: String): MutableList<Group> {
        return groupRepo.findGroupsByName(name)
    }

    fun getGroupsByUserId(id: Long): MutableList<Group>{
        val user = userRepo.findByIdOrNull(id)
        user?.let {
            val userGroups = userGroupRepo.findUserGroupsByUser(user)
            val groups = mutableListOf<Group>()
            userGroups.map {
                groups.add(it.group)
            }
            return groups
        }
        throw EntityNotFoundException("Could not find user with id $id")
    }

    fun getGroupsBySchool(id: Long): MutableList<Group>{
        val school = schoolRepo.findByIdOrNull(id)
        school?.let {
            return groupRepo.findGroupsBySchool(it)
        }
        throw EntityNotFoundException("Could not find school with id $id")
    }

    fun updateGroupById(id: Long, groupDetails: GroupDetails){
        val group = groupRepo.findByIdOrNull(id)
        group?.let {
            val updatedGroup = Group(
                id = id,
                name = groupDetails.name ?: it.name,
                description = groupDetails.description ?: group.description,
                image = groupDetails.image ?: group.image,
                admin = groupDetails.admin ?: group.admin,
                school = groupDetails.school ?: group.school,
                dateCreated = group.dateCreated ?: LocalDate.now()
            )
            groupRepo.save(updatedGroup)
        }
        throw EntityNotFoundException("Could not find group with id $id")
    }

    fun addGroup(groupDetails: GroupDetails): Group{
        val group = Group(
            name = groupDetails.name ?: throw Exception("GroupDetails must include name"),
            description = groupDetails.description ?: throw Exception("GroupDetails must include description"),
            image = groupDetails.image ?: throw Exception("GroupDetails must include image"),
            admin = groupDetails.admin ?: throw Exception("GroupDetails must include admin"),
            school = groupDetails.school ?: throw Exception("GroupDetails must include school")
        )
        return groupRepo.save(group)
    }

}

data class GroupDetails (
    val name: String?,
    val description: String?,
    val image: String?,
    val admin: User?,
    val school: School?
)