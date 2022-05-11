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

}