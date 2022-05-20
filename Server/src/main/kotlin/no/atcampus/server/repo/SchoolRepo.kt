package no.atcampus.server.repo

import no.atcampus.server.entities.SchoolEntity
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface SchoolRepo : JpaRepository<SchoolEntity, Long> {
    fun findSchoolEntityBySchoolName(name : String) : SchoolEntity?
}