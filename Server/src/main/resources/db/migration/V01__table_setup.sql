CREATE TABLE Users (
    user_id bigserial PRIMARY KEY,
    user_first_name varchar(30) NOT NULL,
    user_last_name varchar(40) NOT NULL,
    user_email varchar(100) NOT NULL,
    user_password varchar(255) NOT NULL,
    user_phone_number varchar(15) NOT NULL,
    user_school bigint NOT NULL,
    user_program bigint NOT NULL,
    user_profile_image varchar(255),
    user_date_created date not null default current_date
)