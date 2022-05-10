package no.atcampus.server.service

import no.atcampus.server.entities.User
import no.atcampus.server.repo.UserRepo
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service

@Service
class UserService(@Autowired private val userRepo: UserRepo) {

    fun getUserById(id: Long): User {
        return userRepo.getById(id)
    }

}