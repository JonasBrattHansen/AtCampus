package no.atcampus.server.repo

import no.atcampus.server.entities.Program
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface ProgramRepo : JpaRepository<Program, Long> {
    fun findProgramByProgramName(name: String): Program?

}