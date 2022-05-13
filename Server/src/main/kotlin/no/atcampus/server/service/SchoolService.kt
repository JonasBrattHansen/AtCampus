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

    fun findSchoolByName(name: String): School {
        val school = schoolRepo.findSchoolBySchoolName(name)

        school?.let {
            return school
        }
        throw EntityNotFoundException("Could not find a school with name $name")
    }
    fun findSchoolById(id: Long) : School {
        val school = schoolRepo.findByIdOrNull(id)

        school?.let {
            return school
        }
        throw EntityNotFoundException("Could not find the program with id $id")
    }

    fun deleteSchool(id : Long) : School{
       val school = schoolRepo.findByIdOrNull(id)
        school?.let {
            schoolRepo.deleteById(id)
            return school
        }
        throw EntityNotFoundException("Could not find school with id $id")
    }

    fun updateSchoolInfo(id: Long, updatedSchoolInfo: UpdatedSchoolInfo): School {
        val school = schoolRepo.findByIdOrNull(id)

        school?.let {
            val updatedSchool = School(
                id = id,
                schoolName = updatedSchoolInfo.schoolName ?: school.schoolName
            )

            return schoolRepo.save(updatedSchool)
        }
        throw EntityNotFoundException("Could not find school with id $id")
    }


}

data class UpdatedSchoolInfo(val schoolName: String?)