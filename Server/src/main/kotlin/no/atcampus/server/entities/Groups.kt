package no.atcampus.server.entities

import com.fasterxml.jackson.annotation.JsonIgnore
import org.hibernate.mapping.Join
import java.time.LocalDate
import javax.persistence.*

@Entity
@Table(name = "groups")
class Group (
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY, generator = "groups_group_id_sequence")
    @SequenceGenerator(name = "groups_group_id_sequence", sequenceName = "groups_group_id_sequence", allocationSize = 1)
    @Column(name = "group_id")
    val id: Long? = null,
    @Column(name = "group_name")
    val name: String,
    @Column(name = "group_description")
    val description: String,
    @Column(name = "group_image")
    val image: String,
    @ManyToOne(cascade = [CascadeType.ALL])
    @JoinColumn(name = "group_admin", referencedColumnName = "user_id")
    val admin: User,
    @ManyToOne(cascade = [CascadeType.ALL])
    @JoinColumn(name = "group_school", referencedColumnName = "school_id")
    val school: School,
    @Column(name = "group_date_created")
    val dateCreated: LocalDate? = LocalDate.now(),

){
    override fun toString(): String {
        return "Group(id=$id, name='$name', description='$description', image='$image', admin=$admin, school=$school, dateCreated=$dateCreated)"
    }
}