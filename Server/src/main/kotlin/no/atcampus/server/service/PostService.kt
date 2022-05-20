package no.atcampus.server.service

import no.atcampus.server.entities.*
import no.atcampus.server.repo.GroupRepo
import no.atcampus.server.repo.PostRepo
import no.atcampus.server.repo.UserRepo
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.data.repository.findByIdOrNull
import org.springframework.stereotype.Service
import javax.persistence.EntityNotFoundException

@Service
class PostService(
    @Autowired private val groupRepo: GroupRepo,
    @Autowired private val postRepo: PostRepo,
    @Autowired private val userRepo: UserRepo,

) {

    fun findPostsByGroup(groupId: Long): MutableList<PostEntity>{
        val group = groupRepo.findByIdOrNull(groupId)
        group?.let {
            return postRepo.findPostEntityByGroupEntity(it)
        }
        throw EntityNotFoundException("Could not find the group with id $groupId")
    }

    fun findPostById(id: Long): PostEntity {
        val post = postRepo.findByIdOrNull(id)
        post?.let {
            return post
        }
        throw EntityNotFoundException("Could not find the post with id $id")
    }

    fun deletePost(id: Long): PostEntity{
        val post = postRepo.findByIdOrNull(id)
        post?.let {
            postRepo.deleteById(id)
            return post
        }
        throw EntityNotFoundException("Could not find post with id $id")
    }


    fun addPost(postDetails: PostDetails): PostEntity{
        val postEntity = PostEntity(
            title = postDetails.title ?: throw Exception("PostDetails must include a title"),
            body = postDetails.body ?: throw Exception("PostDetails must include a body"),
            userEntity = userRepo.findByIdOrNull(postDetails.user ?: 0) ?: throw Exception("PostDetails must include an user"),
            groupEntity = groupRepo.findByIdOrNull(postDetails.group ?: 0) ?: throw Exception("PostDetails must include a group"),
        )
        return postRepo.save(postEntity)
    }

    fun updatePostInfo(id: Long, updatePosts: PostDetails): PostEntity {
        val post = postRepo.findByIdOrNull(id)

        post?.let {
            val updatedPostEntity = PostEntity(
                id = id,
                title = updatePosts.title ?: post.title,
                body = updatePosts.body?: post.body,
                userEntity = userRepo.findByIdOrNull(updatePosts.user ?: 0)?: post.userEntity,
                groupEntity = groupRepo.findByIdOrNull(updatePosts.group ?: 0)?: post.groupEntity
            )

            return postRepo.save(updatedPostEntity)
        }
        throw EntityNotFoundException("Could not find post with id $id")
    }
}

data class PostDetails(val id: Long?, val title: String?, val body: String?, val user: Long?, val group: Long?)