package no.atcampus.server.controller

import no.atcampus.server.entities.Group
import no.atcampus.server.service.GroupService
import no.atcampus.server.service.UserGroupService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController

@RestController
class UserGroupController(
    @Autowired private val userGroupService: UserGroupService
    ) {
    @GetMapping("/user/group")
    fun getGroupsByUser(@RequestParam userId: Long) : String{
        val userGroup = userGroupService.getGroupsOfUser(userId)
        return userGroup.toString()
    }
}