package no.atcampus.server.entities

import java.time.LocalDate
import javax.persistence.CascadeType
import javax.persistence.Column
import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.GenerationType
import javax.persistence.Id
import javax.persistence.JoinColumn
import javax.persistence.ManyToMany
import javax.persistence.ManyToOne
import javax.persistence.OneToMany
import javax.persistence.SequenceGenerator
import javax.persistence.Table

@Entity
@Table(name = "post")
class Post (
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "posts_post_id_sequence")
    @SequenceGenerator(name = "posts_post_id_sequence", allocationSize = 1)
    @Column(name = "post_id")
    val id: Long? = null,
    @Column(name = "post_title")
    val title: String,
    @Column(name = "post_bodu")
    val body: String,
    val dateCreated: LocalDate? = LocalDate.now(),
    @ManyToOne(cascade = [CascadeType.ALL])
    @JoinColumn(name = "user_id", referencedColumnName = "user_id")
    val user: User,
    @ManyToOne(cascade = [CascadeType.ALL])
    @JoinColumn(name = "group_id", referencedColumnName = "group_id")
    val group: Group
){
    override fun toString(): String {
        return "Post(id=$id, title='$title', body='$body', dateCreated=$dateCreated, user=$user, group=$group)"
    }
}