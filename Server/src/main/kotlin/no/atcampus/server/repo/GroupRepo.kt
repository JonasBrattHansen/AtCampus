package no.atcampus.server.repo

import no.atcampus.server.entities.Group
import no.atcampus.server.entities.School
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface GroupRepo : JpaRepository<Group, Long>{
    fun findGroupsByName(name: String): MutableList<Group>
    fun findGroupsBySchool(school: School): MutableList<Group>
}