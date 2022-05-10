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
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "comments_comment_sequence_id")
    @SequenceGenerator(name = "comments_comment_sequence_id", sequenceName = "comments_comment_sequence_id", allocationSize = 1)
    @Column(name = "comment_id")
    val id: Long? = null,
    @Column(name = "comment_body")
    val body: String,

)