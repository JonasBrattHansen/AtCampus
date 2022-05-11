package no.atcampus.server.service

import no.atcampus.server.entities.Comment
import no.atcampus.server.entities.Post
import no.atcampus.server.repo.GroupRepo
import no.atcampus.server.repo.PostRepo
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.data.repository.findByIdOrNull
import org.springframework.stereotype.Service
import javax.persistence.EntityNotFoundException

@Service
class PostService(
    @Autowired private val groupRepo: GroupRepo,
    @Autowired private val postRepo: PostRepo
) {

    fun findPostsByGroup(groupId: Long): MutableList<Post>{
        val group = groupRepo.findByIdOrNull(groupId)
        group?.let {
            return postRepo.findPostsByGroup(it)
        }
        throw EntityNotFoundException("Could not find the group with id $groupId")
    }

    fun findPostById(id: Long): Post {
        val post = postRepo.findByIdOrNull(id)
        post?.let {
            return post
        }
        throw EntityNotFoundException("Could not find the post with id $id")
    }

    fun deletePost(id: Long): Post{
        val post = postRepo.findByIdOrNull(id)
        post?.let {
            postRepo.deleteById(id)
            return post
        }
        throw EntityNotFoundException("Could not find post with id $id")
    }
}