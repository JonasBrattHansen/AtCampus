package no.atcampus.server.service

import io.mockk.every
import io.mockk.mockk
import no.atcampus.server.GenerateTestData
import no.atcampus.server.repo.GroupRepo
import no.atcampus.server.repo.SchoolRepo
import no.atcampus.server.repo.UserRepo
import org.junit.Test


class GroupServiceUnitTest {

    private val userRepo = mockk<UserRepo>()
    private val groupRepo = mockk<GroupRepo>()
    private val schoolRepo = mockk<SchoolRepo>()
    private val groupService = GroupService(userRepo, groupRepo, schoolRepo)
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

}