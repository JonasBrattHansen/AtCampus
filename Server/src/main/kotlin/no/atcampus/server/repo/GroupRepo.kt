package no.atcampus.server.repo

import no.atcampus.server.entities.Group
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface GroupRepo : JpaRepository<Group, Long>