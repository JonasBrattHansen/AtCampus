package no.atcampus.server.repo

import no.atcampus.server.entities.Comment
import no.atcampus.server.entities.Post
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface CommentRepo: JpaRepository<Comment, Long> {

    fun findCommentsByPost(post: Post): MutableList<Comment>
}