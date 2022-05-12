package no.atcampus.server.repo

import no.atcampus.server.entities.Program
import no.atcampus.server.entities.School
import no.atcampus.server.entities.User
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface UserRepo : JpaRepository<User, Long>{
    fun findUserByEmail(email: String): User?
    fun findUsersBySchool(school: School): MutableList<User>
    fun findUsersByProgram(program: Program): MutableList<User>
}
