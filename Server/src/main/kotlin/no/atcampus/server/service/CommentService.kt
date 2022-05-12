package no.atcampus.server.service

import no.atcampus.server.entities.*
import no.atcampus.server.repo.CommentRepo
import no.atcampus.server.repo.PostRepo
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.data.repository.findByIdOrNull
import org.springframework.stereotype.Service
import java.time.LocalDate
import javax.persistence.EntityNotFoundException

@Service
class CommentService(
    @Autowired private val commentRepo: CommentRepo,
    @Autowired private val postRepo: PostRepo
) {

    fun findCommentsByPost(postId: Long): MutableList<Comment>{
        //Used findByIdOrNull to not use Optional<Post>, and instead Post?.
        val post = postRepo.findByIdOrNull(postId)
        post?.let {
            return commentRepo.findCommentsByPost(it)
        }
        throw EntityNotFoundException("Could not find the post with id $postId")
    }

    fun findCommentsById(id: Long): Comment{
        val comment = commentRepo.findByIdOrNull(id)
        comment?.let {
            return comment
        }
        throw EntityNotFoundException("Could not find the comment with id $id")
    }

    fun deleteComment(id: Long): Comment{
        val comment = commentRepo.findByIdOrNull(id)
        comment?.let {
            commentRepo.deleteById(id)
            return comment
        }
        throw EntityNotFoundException("Could not find comment with id $id")
    }

    fun updateComments(id: Long, updateComment: UpdateComment): String{
            var comment = commentRepo.findByIdOrNull(id)
            comment?.let {
                val updatedComment = Comment(
                    id = comment.id,
                    body = updateComment.body ?: comment.body,
                    post = updateComment.post ?: comment.post,
                    user = updateComment.user ?: comment.user
                )
                commentRepo.save(updatedComment)
            }
            throw EntityNotFoundException("Could not update comments with id: $id")
        }
    }

data class UpdateComment(val id: Long?, val body: String?, val post: Post?, val user: User? )
