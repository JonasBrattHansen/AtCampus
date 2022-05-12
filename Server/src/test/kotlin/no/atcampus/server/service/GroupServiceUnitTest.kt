package no.atcampus.server.service

import io.mockk.every
import io.mockk.mockk
import no.atcampus.server.GenerateTestData
import no.atcampus.server.repo.GroupRepo
import no.atcampus.server.repo.SchoolRepo
import no.atcampus.server.repo.UserGroupRepo
import no.atcampus.server.repo.UserRepo
import org.junit.Test
import org.springframework.data.repository.findByIdOrNull


class GroupServiceUnitTest {

    private val userRepo = mockk<UserRepo>()
    private val groupRepo = mockk<GroupRepo>()
    private val schoolRepo = mockk<SchoolRepo>()
    private val userGroupRepo = mockk<UserGroupRepo>()
    private val groupService = GroupService(userRepo, groupRepo, schoolRepo, userGroupRepo)
    private val testData = GenerateTestData()

    @Test
    fun testGetGroupsByName(){

        every {
            groupRepo.findGroupsByName(any())
        } answers {
            mutableListOf(testData.group)
        }

        val groups = groupService.getGroupsByName("Kohort 9000")
        assert(groups.size == 1 && groups[0].name.startsWith("Kohort"))

    }

    @Test
    fun testGetAllGroups(){

        every {
            groupRepo.findAll()
        } answers {
            mutableListOf(testData.group, testData.group2)
        }

        val groups = groupService.getAllGroups()
        assert(groups.size == 2 && groups[0].name.startsWith("Kohort"))

    }

    @Test
    fun testGetGroupsByUserId(){

        every {
            userRepo.findByIdOrNull(any())
        } answers {
            testData.user
        }

        every {
            userGroupRepo.findUserGroupsByUser(any())
        } answers {
            mutableListOf(testData.userGroup)
        }

        val groups = groupService.getGroupsByUserId(1)
        assert(groups.size == 1 && groups[0].name.startsWith("Kohort"))

    }

    @Test
    fun testGetGroupsBySchool(){

        every {
            schoolRepo.findByIdOrNull(any())
        } answers {
            testData.school
        }

        every {
            groupRepo.findGroupsBySchool(any())
        } answers {
            mutableListOf(testData.group, testData.group2)
        }

        val groups = groupService.getGroupsBySchool(1)
        assert(groups.size == 2 && groups[0].name.startsWith("Kohort"))

    }

    @Test
    fun testUpdateGroup(){

        every {
            groupRepo.findByIdOrNull(any())
        } answers {
            testData.group
        }

        every {
            groupRepo.save(any())
        } answers {
            testData.group
        }

        val groupDetails = GroupDetails(
            "Kohort 9000", "test", "test", testData.user, testData.school
        )
        val updatedGroup = groupService.updateGroupById(1, groupDetails)
        assert(updatedGroup.name.startsWith("Kohort"))

    }

    @Test
    fun testAddGroup(){
        val groupDetails = GroupDetails(
            "Kohort 9000", "test", "test", testData.user, testData.school
        )

        every {
            groupRepo.save(any())
        } answers {
            testData.group
        }

        val group = groupService.addGroup(groupDetails)
        assert(group.name.startsWith("Kohort"))
    }

}