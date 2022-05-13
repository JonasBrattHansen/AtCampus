package no.atcampus.server

import no.atcampus.server.entities.*

class GenerateTestData (

    val school: School = School(id = 1, schoolName = "Høyskolen Kristiania"),
    val program: Program = Program(id = 1, programName = "Informasjonsteknologi - Programmering"),
    val user: User = User(id = 1, firstName = "Jens", lastName = "Jenka", email = "jensjenka@gmail.com", password = "jens123", phoneNumber = "95645234", school = school, program = program, userProfileImage = "http://flickr.com/image/jagajsdfe"),
    val user2: User = User(id = 2, firstName = "Martin", lastName = "Olaussen", email = "martinolaussen@gmail.com", password = "martin123", phoneNumber = "48529412", school = school, program = program, userProfileImage = "http://flickr.com/image/adsdfe"),
    val group: Group = Group(id = 1, name = "Kohort 9000", description = "Kohort 9 + Alle", image = "http://flickr.com/reafj123f", admin = user, school = school),
    val group2: Group = Group(id = 2, name = "Høye på Pæra", description = "Vi er kule", image = "http://flickr.com/afsdfag", admin = user2, school = school),
    val groupRequest: GroupRequest = GroupRequest(id = 1, user, group2),
    val userGroup: UserGroup = UserGroup(id = 1, user = user, group = group, favorite = true),
    val userGroup2: UserGroup = UserGroup(id = 2, user = user2, group = group2, favorite = false),
    val post: Post = Post(id = 1, title = "Kohort 9000 er...", body = "DRITKULE!!!!!!", user = user, group = group),
    val post2: Post = Post(id = 2, title = "Vi er alle sammen...", body = "høye på pæra. -Martin Olaussen", user = user2, group = group2),
    val comment: Comment = Comment(id = 1, body = "Det stemmer! Vi er best!", post = post, user = user),
    val comment2: Comment = Comment(id = 2, body = "Vi er faktisk alt for høye på pæra.", post = post2, user = user2)

)