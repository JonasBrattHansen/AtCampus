package no.atcampus.server.entities

import javax.persistence.Column
import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.GenerationType
import javax.persistence.Id
import javax.persistence.SequenceGenerator
import javax.persistence.Table

@Entity
@Table(name = "comment")
class Comment (
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "comment_comment_id_seq")
    @SequenceGenerator(name = "comment_comment_id_seq", sequenceName = "comment_comment_id_seq", allocationSize = 1)
    @Column(name = "comment_id")
    val id: Long? = null,
    @Column(name = "comment_body")
    val body: String,

)