package no.atcampus.server.service

import no.atcampus.server.entities.*
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

    fun addPost(postDetails: PostDetails): Post{
        val post = Post(
            title = postDetails.title ?: throw Exception("PostDetails must include a title"),
            body = postDetails.body ?: throw Exception("PostDetails must include a body"),
            user = postDetails.user ?: throw Exception("PostDetails must include an user"),
            group = postDetails.group ?: throw Exception("PostDetails must include a group"),
        )
        return postRepo.save(post)
    }

    fun updatePostInfo(id: Long, updatePosts: PostDetails): Post {
        val post = postRepo.findByIdOrNull(id)

        post?.let {
            val updatedPost = Post(
                id = id,
                title = updatePosts.title ?: post.title,
                body = updatePosts.body?: post.body,
                user = updatePosts.user?: post.user,
                group = updatePosts.group?: post.group
            )

            return postRepo.save(updatedPost)
        }
        throw EntityNotFoundException("Could not find post with id $id")
    }
}

data class PostDetails(val id: Long?, val title: String?, val body: String?, val user: User?, val group: Group?)