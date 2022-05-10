package no.atcampus.server.controller

import no.atcampus.server.service.UserService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController

@RestController
class ProgramController(@Autowired private val userService: UserService) {

    @GetMapping("/user")
    fun getUserById(@RequestParam id: Long): String{
        return userService.getUserById(id).toString()
    }

}