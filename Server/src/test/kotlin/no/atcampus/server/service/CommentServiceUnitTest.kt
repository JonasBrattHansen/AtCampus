package no.atcampus.server.service

import io.mockk.every
import io.mockk.mockk
import no.atcampus.server.GenerateTestData
import no.atcampus.server.repo.CommentRepo
import no.atcampus.server.repo.PostRepo
import org.junit.jupiter.api.Test
import org.springframework.data.repository.findByIdOrNull

class CommentServiceUnitTest {

    private val commentRepo = mockk<CommentRepo>()
    private val postRepo = mockk<PostRepo>()
    private val commentService = CommentService(commentRepo, postRepo)
    private val testData = GenerateTestData()

    @Test
    fun testGetCommentById(){

        every {
            commentRepo.findByIdOrNull(any())
        } answers {
            testData.comment
        }

        val comment = commentService.findCommentsById(1)
        assert(comment.body.startsWith("Det stemmer!"))
    }

    @Test
    fun testFindCommentsByPost(){

        every {
            postRepo.findByIdOrNull(any())
        } answers {
            testData.post
        }

        every {
            commentRepo.findCommentsByPost(any())
        } answers {
            mutableListOf(testData.comment)
        }

        val comment = commentService.findCommentsByPost(1)
        assert(comment.size == 1)
        assert(comment[0].body.startsWith("Det stemmer"))
    }

    @Test
    fun testDeleteComment(){

        every {
            commentRepo.findByIdOrNull(any())
        } answers {
            testData.comment
        }

        every {
            commentRepo.deleteById(any())
        } answers {
            testData.comment
        }

        assert(commentService.deleteComment(1) == testData.comment)

    }

    @Test
    fun updateComments() {
        every {
            commentRepo.findByIdOrNull(any())
        } answers {
            testData.comment
        }

        every {
            commentRepo.save(any())
        } answers {
            firstArg()
        }
        val updateComments = UpdateComments(1, "test1", testData.post, testData.user)
        val updatedCommentInfo = commentService.updateComments(1, updateComments.body)
        assert(updatedCommentInfo == "test1")
    }
}