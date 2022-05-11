package no.atcampus.server.controller

import no.atcampus.server.service.GroupService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController

@RestController
class TestController(@Autowired private val groupService: GroupService) {

    @GetMapping("/")
    fun getAllGroups(): String{
        return groupService.getAllGroups().toString()
    }

}