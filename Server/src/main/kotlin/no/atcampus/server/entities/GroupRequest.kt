package no.atcampus.server.entities

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
@Table(name = "group_request")
class GroupRequest (
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "group_request_group_request_id_seq")
    @SequenceGenerator(name = "group_request_group_request_id_seq", sequenceName = "group_request_group_request_id_seq", allocationSize = 1)
    @Column(name = "group_request_id")
    val id: Long? = null,
    @ManyToOne(cascade = [CascadeType.ALL])
    @JoinColumn(name = "user_id", referencedColumnName = "user_id")
    val user: User,
    @ManyToOne(cascade = [CascadeType.ALL])
    @JoinColumn(name = "group_id", referencedColumnName = "group_id")
    val group: Group
)