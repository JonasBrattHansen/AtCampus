package no.atcampus.server.integration

import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.http.MediaType.APPLICATION_JSON
import org.springframework.test.annotation.DirtiesContext
import org.springframework.test.context.ActiveProfiles
import org.springframework.test.web.servlet.MockMvc
import org.springframework.test.web.servlet.get
import org.springframework.test.web.servlet.post
import org.springframework.test.web.servlet.put


@SpringBootTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
@AutoConfigureMockMvc
@ActiveProfiles("test")
@DirtiesContext(classMode = DirtiesContext.ClassMode.BEFORE_EACH_TEST_METHOD)
class UserController {


    @Autowired private lateinit var mockMvc: MockMvc


    @Test
    fun getAllUsersTest(){

        val loggedInUser = mockMvc.post("/api/login"){
            contentType = APPLICATION_JSON
            content = "{\n" +
                    "    \"email\": \"test@mail.com\",\n" +
                    "    \"password\": \"pirate\"\n" +
                    "}"
        }.andExpect { status { isOk() } }
            .andReturn()

        val cookie = loggedInUser.response.getCookie("access_token")


        val user = mockMvc.get("/api/user/all") {
            cookie?.let { cookie(it) }
        }
            .andExpect { status { isOk() } }
            .andExpect { content { contentType(APPLICATION_JSON) } }
            .andReturn()

        assert(user.response.contentAsString.contains("Martin"))

    }

    @Test
    fun getSpecificUserTest() {

        val loggedInUser = mockMvc.post("/api/login"){
            contentType = APPLICATION_JSON
            content = "{\n" +
                    "    \"email\": \"test@mail.com\",\n" +
                    "    \"password\": \"pirate\"\n" +
                    "}"
        }.andExpect { status { isOk() } }
            .andReturn()


        val cookie = loggedInUser.response.getCookie("access_token")

        val user = mockMvc.get("/api/user/1") {
            cookie?.let { cookie(it) }
        }
            .andExpect { status { isOk() } }
            .andExpect { content { contentType(APPLICATION_JSON) } }
            .andReturn()

        assert(user.response.contentAsString.contains("Martin"))

    }

    @Test
    fun getUserByEmailTest() {

        val loggedInUser = mockMvc.post("/api/login"){
            contentType = APPLICATION_JSON
            content = "{\n" +
                    "    \"email\": \"test@mail.com\",\n" +
                    "    \"password\": \"pirate\"\n" +
                    "}"
        }.andExpect { status { isOk() } }
            .andReturn()

        val cookie = loggedInUser.response.getCookie("access_token")

        val user = mockMvc.get("/api/user/email/syvert@edjord.com") {
            cookie?.let { cookie(it) }
        }
            .andExpect { status { isOk() } }
            .andExpect { content { contentType(APPLICATION_JSON) } }
            .andReturn()

        assert(user.response.contentAsString.contains("@")
        )
    }


    @Test
    fun updateUserTest() {

        val loggedInUser = mockMvc.post("/api/login"){
            contentType = APPLICATION_JSON
            content = "{\n" +
                    "    \"email\": \"test@mail.com\",\n" +
                    "    \"password\": \"pirate\"\n" +
                    "}"
        }.andExpect { status { isOk() } }
            .andReturn()

        val cookie = loggedInUser.response.getCookie("access_token")


        val user = mockMvc.put("/api/user/update/1"){
            cookie?.let { cookie(it) }

            contentType = APPLICATION_JSON
            content = "{\n" +
                    "    \"lastName\": \"jonas\"\n" +
                    "}"
        }
            .andExpect { status { is2xxSuccessful() }  }
            .andReturn()
            assert(user.response.contentAsString.contains("jonas"))
    }

    @Test
    fun getAllGroupsFromUserTest() {
        val loggedInUser = mockMvc.post("/api/login"){
            contentType = APPLICATION_JSON
            content = "{\n" +
                    "    \"email\": \"test@mail.com\",\n" +
                    "    \"password\": \"pirate\"\n" +
                    "}"
        }.andExpect { status { isOk() } }
            .andReturn()

        val cookie = loggedInUser.response.getCookie("access_token")


        val userGroups = mockMvc.get("/api/user/1/group") {
            cookie?.let { cookie(it) }
        }
            .andExpect { status { isOk() } }
            .andExpect { content { contentType(APPLICATION_JSON) } }
            .andReturn()

        assert(userGroups.response.contentAsString.contains("testgroup"))

    }


}
