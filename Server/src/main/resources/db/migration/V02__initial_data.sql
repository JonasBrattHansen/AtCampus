insert into programs
values (nextval('programs_program_id_seq'), 'testname');

insert into schools
values (nextval('schools_school_id_seq'), 'test school 1');

insert into roles values (nextval('roles_role_id_seq'), 'USER');

insert into roles values (nextval('roles_role_id_seq'), 'ADMIN');

insert into users
values (nextval('users_user_id_seq'), 'Martin', 'Olaussen', 'test@mail.com', '$2a$10$gXGktr8WhQavYsRRah732u3zoeIbbKFQmttADK2jPl6GgeX82I0Z.', '45677321', 1, 1,'testimage'); /* Password is pirate */

insert into users
values (nextval('users_user_id_seq'), 'Syvert', 'Eidjord', 'syvert@edjord.com', '$2a$12$z6vnEayVBe.opce7Pan0cOOGwXHqSsRENoebp1D1ijha6HMKsqLum', '43121234', 1, 1,'testimage'); /* Password is password */

insert into groups
values (nextval('groups_group_id_seq'), 'testgroup', 'this is a test description', 'testimage', 1, 1);

insert into user_roles
values (1, 1);

insert into user_roles
values (1, 2);

insert into user_roles
values (2, 1);

insert into group_request
values (nextval('group_request_group_request_id_seq'),1, 1);

insert into user_group
values (nextval('user_group_user_group_id_seq'), 1, 1, true);

insert into user_group
values (nextval('user_group_user_group_id_seq'), 2, 1, true);

insert into post
values (nextval('post_post_id_seq'), 'test post title', 'this is a test body', 1, 1);

insert into post
values (nextval('post_post_id_seq'), 'test post title 2', 'this is a test body 2', 2, 1);

insert into comment
values (nextval('comment_comment_id_seq'), 'this is a comment test body', 1, 1);

insert into comment
values (nextval('comment_comment_id_seq'), 'this is a comment test body2', 2, 2);