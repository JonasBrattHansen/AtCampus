package no.atcampus.server.service

import io.mockk.every
import io.mockk.mockk
import no.atcampus.server.GenerateTestData
import no.atcampus.server.repo.GroupRepo
import no.atcampus.server.repo.PostRepo
import org.junit.jupiter.api.Test
import org.springframework.data.repository.findByIdOrNull

class PostServiceUnitTest {

    private val groupRepo = mockk<GroupRepo>()
    private val postRepo = mockk<PostRepo>()
    private val postService = PostService(groupRepo, postRepo)
    private val testData = GenerateTestData()

    @Test
    fun testGetPostById(){

        every {
            postRepo.findByIdOrNull(any())
        } answers {
            testData.post
        }

        val post = postService.findPostById(1)
        assert(post.body.startsWith("DRITKULE!!!!!!"))
    }

/*
    @Test
    fun testFindPostsByGroup(){

    }
*/


    @Test
    fun testDeletePost(){

        every {
            postRepo.findByIdOrNull(any())
        } answers {
            testData.post
        }

        every {
            postRepo.deleteById(any())
        } answers {
            testData.post
        }

        assert(postService.deletePost(1) == testData.post)

    }
}