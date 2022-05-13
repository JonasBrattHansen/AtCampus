package no.atcampus.server.service

import io.mockk.every
import io.mockk.mockk
import no.atcampus.server.GenerateTestData
import no.atcampus.server.entities.Program
import no.atcampus.server.entities.School
import no.atcampus.server.entities.User
import no.atcampus.server.repo.GroupRepo
import no.atcampus.server.repo.UserGroupRepo
import no.atcampus.server.repo.UserRepo
import org.junit.jupiter.api.Test
import org.springframework.data.repository.findByIdOrNull
import java.time.LocalDate
import java.util.*

class UserServiceUnitTest {

    private val userRepo = mockk<UserRepo>()
    private val groupRepo = mockk<GroupRepo>()
    private val userGroupRepo = mockk<UserGroupRepo>()
    private val userService = UserService(userRepo, groupRepo, userGroupRepo)
    private val testData = GenerateTestData()


    @Test
    fun testGetUserByEmail(){
        every { userRepo.findUserByEmail(any()) } answers {
            testData.user
        }
        val user = userService.getUserByEmail("jensjenka@gmail.com")
        assert(user!!.firstName == "Jens")
    }

    /*
        Weird error
     */
    @Test
    fun testGetUsersByGroup(){
        every { userGroupRepo.findUserGroupsByGroup(any()) } answers {
            mutableListOf(testData.userGroup)
        }
        every { userRepo.getById(any()) } answers {
            testData.user
        }

        val userList = userService.getUsersByGroup(testData.group)
        assert(userList.size == 1)
        assert(userList[0].firstName.contains("Jens"))
    }

    @Test
    fun testGetUserById(){
        every { userRepo.findByIdOrNull(any()) } answers {
            testData.user
        }
        val user = userService.getUserById(testData.user.id!!)
        assert(user.firstName == "Jens")

    }

    @Test
    fun testUpdateUserById(){
        every { userRepo.findById(any()) } answers {
            Optional.of(testData.user)
        }
        val userDetail = UserDetail(id = null, firstName = "test", null, null,
            null, null, null, null, null, null)

        every { userRepo.save(any()) } answers {
            firstArg()
        }

        val updatedUser = userService.updateUserById(1, userDetail)
        assert(updatedUser.firstName == "test")
        assert(updatedUser.lastName == "Jenka")
    }

    @Test
    fun testUpdateUserProfileImage(){
        every { userRepo.findById(any()) } answers {
            Optional.of(testData.user)
        }
        every { userRepo.save(any()) } answers {
            firstArg()
        }
        assert(testData.user.userProfileImage!!.contains("flickr"))
        val updatedUser = userService.updateUserProfileImage(1, "wow nice imagelink")
        assert(updatedUser.userProfileImage!!.contains("wow nice imagelink"))

    }

    @Test
    fun testAddUser(){
        val userDetail = UserDetail(id = null,
            firstName = "test",
            lastName = "test",
            email = "test",
            password = "test",
            phoneNumber = "test",
            school = School(1, "test"),
            program = Program(1, "test"),
            userProfileImage = "test", dateCreated = LocalDate.now())

        every { userRepo.save(any()) } answers {
            firstArg()
        }

        val newUser = userService.addUser(userDetail)
        assert(newUser.firstName == "test")

    }


}
