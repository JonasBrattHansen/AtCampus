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
        val program =  programRepo.findProgramByProgramName(name)

        program?.let {
            return program
        }
        throw EntityNotFoundException("Could not find a program with name $name")
    }

    fun findProgramById(id: Long) : Program{
        val program = programRepo.findByIdOrNull(id)

        program?.let {
            return program
        }
        throw EntityNotFoundException("Could not find the program with id $id")
    }

    fun deleteProgram(id : Long) : Program {
        val program = programRepo.findByIdOrNull(id)
        program?.let {
            programRepo.deleteById(id)
            return program
        }
        throw EntityNotFoundException("Could not find program with id $id")

    }

    fun updateProgramInfo(id: Long, updatedProgramInfo: UpdatedProgramInfo): Program {
        val program = programRepo.findByIdOrNull(id)
        program?.let {
            val updatedProgram = Program(
                id = id,
                programName = updatedProgramInfo.programName ?: program.programName
            )

            return programRepo.save(updatedProgram)
        }
        throw EntityNotFoundException("Could not find program with id $id")
    }

}
data class UpdatedProgramInfo(val programName: String?)