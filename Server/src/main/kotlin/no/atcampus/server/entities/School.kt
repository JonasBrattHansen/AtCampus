package no.atcampus.server.entities

import javax.persistence.*

@Entity
@Table(name = "schools")
class School(
    @Id
@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "schools_school_id_sequence")
@SequenceGenerator(name = "schools_school_id_sequence", allocationSize = 1)
@Column(name = "school_id")
val id: Long? = null,
@Column(name = "school_name")
val schoolName: String
){
    override fun toString(): String {
        return "School(id=$id, schoolName=$schoolName)"
    }
}