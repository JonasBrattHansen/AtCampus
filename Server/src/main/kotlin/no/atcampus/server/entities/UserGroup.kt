package no.atcampus.server.entities

import java.time.LocalDate
import javax.persistence.CascadeType
import javax.persistence.Column
import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.GenerationType
import javax.persistence.Id
import javax.persistence.JoinColumn
import javax.persistence.ManyToOne
import javax.persistence.SequenceGenerator
import javax.persistence.Table

@Entity
@Table(name = "user_group")
class UserGroup (
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "user_group_user_group_id_seq")
    @SequenceGenerator(name = "user_group_user_group_id_seq", sequenceName = "user_group_user_group_id_seq", allocationSize = 1)
    @Column(name = "user_group_id")
    val id: Long? = null,
    @ManyToOne(cascade = [CascadeType.ALL])
    @JoinColumn(name = "user_id", referencedColumnName = "user_id")
    val user: User,
    @ManyToOne(cascade = [CascadeType.ALL])
    @JoinColumn(name = "group_id", referencedColumnName = "group_id")
    val group: Group,
    @Column(name = "is_favorite")
    val favorite: Boolean? = false,
    @Column(name = "date_joined")
    val dateJoined: LocalDate? = LocalDate.now()
){
    override fun toString(): String {
        return "UserGroup(id=$id, user=$user, group=$group, favorite=$favorite, dateJoined=$dateJoined)"
    }
}