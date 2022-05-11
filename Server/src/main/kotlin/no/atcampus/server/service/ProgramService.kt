package no.atcampus.server.service

import no.atcampus.server.entities.Program
import no.atcampus.server.repo.ProgramRepo
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.data.repository.findByIdOrNull
import org.springframework.stereotype.Service
import javax.persistence.EntityNotFoundException

@Service
class ProgramService(
    @Autowired private val programRepo: ProgramRepo
) {
    fun findProgramByName(name: String): Program {
        return programRepo.findProgramByProgramName(name)
    }


    fun findProgramById(id: Long) : Program{
        val program = programRepo.findByIdOrNull(id)

        program?.let {
            return program
        }
        throw EntityNotFoundException("Could not find the program with id $id")
    }
}