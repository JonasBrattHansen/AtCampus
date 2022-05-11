package no.atcampus.server.service

import no.atcampus.server.entities.School
import no.atcampus.server.repo.SchoolRepo
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.data.repository.findByIdOrNull
import org.springframework.stereotype.Service
import javax.persistence.EntityNotFoundException

@Service
class SchoolService(
    @Autowired private val schoolRepo: SchoolRepo
) {

    fun findSchoolBySchoolName(name: String): School {
        return schoolRepo.findSchoolBySchoolName(name)
    }


    fun findSchoolById(id: Long) : School {
        val school = schoolRepo.findByIdOrNull(id)

        school?.let {
            return school
        }
        throw EntityNotFoundException("Could not find the program with id $id")
    }
}