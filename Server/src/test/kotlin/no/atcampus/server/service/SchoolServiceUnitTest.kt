package no.atcampus.server.service
import io.mockk.every
import io.mockk.mockk
import no.atcampus.server.GenerateTestData
import no.atcampus.server.repo.SchoolRepo
import org.junit.jupiter.api.Test
import org.springframework.data.repository.findByIdOrNull

class SchoolServiceUnitTest {
    private val schoolRepo = mockk<SchoolRepo>()
    private val schoolService = SchoolService(schoolRepo)
    private val testData = GenerateTestData()

    @Test
    fun testGetSchoolBySchoolName() {
        every {
            schoolRepo.findSchoolBySchoolName(any())
        } answers {
            testData.school
        }
        val school = schoolService.findSchoolBySchoolName("Høyskolen Kristiania")
        assert(school.schoolName.startsWith("Høy"))
    }

    @Test
    fun testGetSchoolById() {
        every {
            schoolRepo.findByIdOrNull(any())
        } answers {
            testData.school
        }
        val program = schoolService.findSchoolById(1)
        assert(program.schoolName.startsWith("Høy"))
    }
}