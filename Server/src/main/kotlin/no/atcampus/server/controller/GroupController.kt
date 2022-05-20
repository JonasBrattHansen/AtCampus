package no.atcampus.server.controller

import no.atcampus.server.entities.*
import no.atcampus.server.service.GroupDetails
import no.atcampus.server.service.GroupService
import no.atcampus.server.service.PostService
import no.atcampus.server.service.UserService
import no.atcampus.server.service.*
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/api/group")
class GroupController(
    @Autowired private val userService: UserService,
    @Autowired private val groupService: GroupService,
    @Autowired private val postService: PostService
) {

    @GetMapping("/all")
    fun getAllGroups(): ResponseEntity<MutableList<GroupEntity>>{
        return ResponseEntity.ok(groupService.getAllGroups())
    }

    @GetMapping("/{id}")
    fun getSpecificGroup(@PathVariable id: String): ResponseEntity<GroupEntity>{
        return ResponseEntity.ok(groupService.getGroupById(id.toLong()))
    }

    @GetMapping("/{id}/post")
    fun getAllPostsByGroup(@PathVariable id: String): ResponseEntity<MutableList<PostEntity>>{
        return ResponseEntity.ok(postService.findPostsByGroup(id.toLong()))
    }

    @PostMapping("/create")
    fun createGroup(@RequestBody groupDetails: GroupDetails): ResponseEntity<GroupEntity>{
        return ResponseEntity.ok(groupService.addGroup(groupDetails))
    }

    @GetMapping("/{groupId}/user")
    fun getAllUsersFromGroup(@PathVariable groupId: Long): ResponseEntity<MutableList<UserEntity>>{
        return ResponseEntity.ok().body(userService.getUsersByGroup(groupId))
    }

    @PostMapping("/{groupId}/user/{userId}")
    fun addUserToGroup(@PathVariable groupId: Long, @PathVariable userId: Long): ResponseEntity<GroupEntity>{
        return ResponseEntity.ok(groupService.addUserToGroup(userId, groupId))
    }

    @PostMapping("/request/{userId}/{groupId}")
    fun addGroupRequestToGroup(@PathVariable userId: Long, @PathVariable
    groupId: Long): ResponseEntity<GroupRequestEntity>{
        return ResponseEntity.ok(groupService.addGroupRequestToGroup(userId, groupId))
    }

    @PostMapping("/{id}/post")
    fun addPostToGroup(@PathVariable("id") groupId: Long, @RequestBody postDetails: PostDetails): ResponseEntity<PostEntity>{
        val newPost = postService.addPost(postDetails)
        return ResponseEntity.ok().body(newPost)
    }


}
