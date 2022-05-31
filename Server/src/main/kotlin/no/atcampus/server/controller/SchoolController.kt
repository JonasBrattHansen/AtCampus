package no.atcampus.server.controller

import no.atcampus.server.entities.*
import no.atcampus.server.service.GroupService
import no.atcampus.server.service.*
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/api/school")
class SchoolController(
    @Autowired private val schoolService: SchoolService,
    @Autowired private val groupService: GroupService

) {
    @GetMapping("/all")
    fun getSchools(): ResponseEntity<MutableList<SchoolEntity>>{
        return ResponseEntity.ok(schoolService.findAllSchool())
    }

}
