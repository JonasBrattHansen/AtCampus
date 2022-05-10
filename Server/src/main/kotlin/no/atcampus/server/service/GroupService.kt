package no.atcampus.server.service

import no.atcampus.server.entities.Group
import no.atcampus.server.repo.GroupRepo
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service

@Service
class GroupService(@Autowired private val groupRepo : GroupRepo) {

    fun getGroupById(id: Long): Group {
        return groupRepo.getById(id)
    }

}