package no.atcampus.server.service

import no.atcampus.server.entities.Group
import no.atcampus.server.entities.User
import no.atcampus.server.entities.UserGroup
import no.atcampus.server.repo.UserGroupRepo
import no.atcampus.server.repo.UserRepo
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service

@Service
class UserGroupService(@Autowired private val userGroupRepo: UserGroupRepo,
                        @Autowired private val userRepo: UserRepo) {

    fun getGroupsOfUser(userId: Long): List<Group>{
        val groups = mutableListOf<Group>()
        userGroupRepo.findAllByUser(userRepo.findById(userId).orElse(null)).map {
            groups.add(it.group)
        }
        return groups
    }
}