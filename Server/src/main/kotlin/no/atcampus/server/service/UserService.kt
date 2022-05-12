package no.atcampus.server.service

import no.atcampus.server.entities.Group
import no.atcampus.server.entities.Program
import no.atcampus.server.entities.School
import no.atcampus.server.entities.User
import no.atcampus.server.repo.GroupRepo
import no.atcampus.server.repo.UserGroupRepo
import no.atcampus.server.repo.UserRepo
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.data.repository.findByIdOrNull
import org.springframework.stereotype.Service
import java.time.LocalDate
import javax.persistence.EntityNotFoundException

@Service
class UserService(
    @Autowired private val userRepo: UserRepo,
    @Autowired private val groupRepo: GroupRepo,
    @Autowired private val userGroupRepo: UserGroupRepo
) {

    fun getUserByEmail(email: String): User?{
        val user = userRepo.findUserByEmail(email)
        user?.let {
            return user
        }
        throw EntityNotFoundException("Could not find the user with email $email")
    }

    fun getUsersByGroup(group: Group): List<User>{
        val users = userGroupRepo.findUserGroupsByGroup(group)
        val userList = users.map { user -> userRepo.getById(user.id!!) }
        return userList
    }

    fun getUserById(id: Long): User{
        val user = userRepo.findByIdOrNull(id)
        user?.let {
            return user
        }
        throw EntityNotFoundException("Could not find the user with id $id")
    }

    fun updateUserById(id: Long, userDetail: UserDetail): User{
        val user = userRepo.findById(id)

        val updatedUser = User(
            id = user.get().id,
            firstName = userDetail.firstName ?: user.get().firstName,
            lastName = userDetail.lastName ?: user.get().lastName,
            email = userDetail.email ?: user.get().email,
            password = userDetail.password ?: user.get().password,
            phoneNumber = userDetail.phoneNumber ?: user.get().phoneNumber,
            school = userDetail.school ?: user.get().school,
            program = userDetail.program ?: user.get().program,
            userProfileImage = userDetail.userProfileImage ?: user.get().userProfileImage,
            dateCreated = userDetail.dateCreated ?: user.get().dateCreated
        )
        userRepo.save(updatedUser)
        return updatedUser
    }

    fun updateUserProfileImage(id: Long, imageUrl: String): User{
        val user = userRepo.findById(id)

        val updatedUser = User(
            id = user.get().id,
            firstName = user.get().firstName,
            lastName = user.get().lastName,
            email = user.get().email,
            password = user.get().password,
            phoneNumber = user.get().phoneNumber,
            school = user.get().school,
            program = user.get().program,
            userProfileImage = imageUrl,
            dateCreated = user.get().dateCreated
        )
        userRepo.save(updatedUser)
        return updatedUser
    }

    fun addUser(user: UserDetail): User{
        val newUser = User(
            firstName = user.firstName ?: throw Exception("UserDetails must include firstname"),
            lastName = user.lastName ?: throw Exception("UserDetails must include lastname"),
            email = user.email ?: throw Exception("UserDetails must include email"),
            password = user.password ?: throw Exception("UserDetails must include password"),
            phoneNumber = user.phoneNumber ?: throw Exception("UserDetails must include phoneNumber"),
            school = user.school ?: throw Exception("UserDetails must include school"),
            program = user.program ?: throw Exception("UserDetails must include program"),
            userProfileImage = user.userProfileImage ?: throw Exception("UserDetails must include userProfileImage"),
            dateCreated = user.dateCreated ?: throw Exception("UserDetails must include dateCreated"),
        )
        userRepo.save(newUser)
        return newUser
    }



}

data class UserDetail(
    val id: Long?,
    val firstName: String?,
    val lastName: String?,
    val email: String?,
    val password: String?,
    val phoneNumber: String?,
    val school: School?,
    val program: Program?,
    val userProfileImage: String?,
    val dateCreated: LocalDate?,
)
