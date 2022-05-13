package no.atcampus.server.repo

import no.atcampus.server.entities.School
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface SchoolRepo : JpaRepository<School, Long> {
    fun findSchoolBySchoolName(name : String) : School?
}