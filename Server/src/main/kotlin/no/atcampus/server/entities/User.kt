package no.atcampus.server.entities;

import com.fasterxml.jackson.annotation.JsonIgnore
import org.hibernate.annotations.Cascade
import java.time.LocalDate
import javax.persistence.*;

@Entity
@Table(name = "users")
class User (
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "users_user_id_sequence")
    @SequenceGenerator(name = "users_user_id_sequence", allocationSize = 1)
    @Column(name = "user_id")
    val id: Long? = null,
    @Column(name = "user_first_name")
    val firstName: String,
    @Column(name = "user_last_name")
    val lastName: String,
    @Column(name = "user_email")
    val email: String,
    @Column(name = "user_password")
    val password: String,
    @Column(name = "user_phone_number")
    val phoneNumber: String,
    @ManyToOne(cascade = [CascadeType.ALL])
    @JoinColumn(name = "user_school", referencedColumnName = "school_id")
    val school: School,
    @ManyToOne(cascade = [CascadeType.ALL])
    @JoinColumn(name = "user_program", referencedColumnName = "program_id")
    val program: Program,
    @Column(name = "user_profile_image")
    val userProfileImage: String?,
    @Column(name = "user_date_created")
    val dateCreated: LocalDate? = LocalDate.now(),
    @OneToMany(cascade = [CascadeType.ALL])
    @JoinColumn(referencedColumnName = "user_id")
    val userGroups: MutableList<UserGroup> = mutableListOf()
){
    override fun toString(): String {
        return "User(id=$id, firstName='$firstName', lastName='$lastName', email='$email', password='$password', phoneNumber='$phoneNumber', school=$school, program=$program, userProfileImage=$userProfileImage, dateCreated=$dateCreated, userGroups=$userGroups)"
    }
}
