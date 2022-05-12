package no.atcampus.server.service

import io.mockk.every
import io.mockk.mockk
import no.atcampus.server.GenerateTestData
import no.atcampus.server.entities.User
import no.atcampus.server.repo.GroupRepo
import no.atcampus.server.repo.UserGroupRepo
import no.atcampus.server.repo.UserRepo
import org.junit.jupiter.api.Test
import org.springframework.data.repository.findByIdOrNull
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

}
