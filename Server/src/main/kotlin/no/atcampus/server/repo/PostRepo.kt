package no.atcampus.server.repo

import no.atcampus.server.entities.GroupEntity
import no.atcampus.server.entities.PostEntity
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface PostRepo: JpaRepository<PostEntity, Long>{

    fun findPostEntityByGroupEntity(groupEntity: GroupEntity): MutableList<PostEntity>
}