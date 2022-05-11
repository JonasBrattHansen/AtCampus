package no.atcampus.server.service

import io.mockk.every
import io.mockk.mockk
import no.atcampus.server.GenerateTestData
import no.atcampus.server.repo.ProgramRepo
import org.junit.jupiter.api.Test
import org.springframework.data.repository.findByIdOrNull

class ProgramServiceUnitTest {

    private val programRepo = mockk<ProgramRepo>()
    private val programService = ProgramService(programRepo)
    private val testData = GenerateTestData()


    @Test
    fun testGetProgramByName(){
        every {
            programRepo.findProgramByProgramName(any())
        } answers {
            testData.program
        }
        val program = programService.findProgramByName("Informasjonsteknologi - Programmering")
        assert(program.programName.startsWith("Informasjonsteknologi"))
    }

    @Test
    fun testGetProgramById(){
        every {
            programRepo.findByIdOrNull(any())
        } answers {
            testData.program
        }
        val program = programService.findProgramById(1)
        assert(program.programName.startsWith("Informasjonsteknologi"))
    }


}