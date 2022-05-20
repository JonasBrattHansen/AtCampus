package no.atcampus.server.repo

import no.atcampus.server.entities.GroupRequestEntity
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface GroupRequestRepo:JpaRepository<GroupRequestEntity, Long>