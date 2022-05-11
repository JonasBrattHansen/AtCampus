package no.atcampus.server.repo

import no.atcampus.server.entities.Group
import no.atcampus.server.entities.User
import no.atcampus.server.entities.UserGroup
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface UserGroupRepo : JpaRepository<UserGroup, Long> {
    fun findUserGroupsByUser(user: User): MutableList<UserGroup>
    fun findUserGroupsByGroup(group: Group): MutableList<UserGroup>
}