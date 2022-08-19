CREATE KEYSPACE IF NOT EXISTS prueba19aug WITH replication = {
    'class': 'SimpleStrategy',
    'replication_factor': '1'
};
CREATE TABLE prueba19aug.users (
    user_id UUID,
    user_name TEXT,
    password TEXT,
    bio TEXT,
    created_at TIMESTAMP,
    updated_at TIMESTAMP,
    delete_at TIMESTAMP,
    PRIMARY KEY (user_id, user_name),
) WITH CLUSTERING ORDER BY (user_name ASC);
CREATE TABLE prueba19aug.comments (
    comment_id UUID,
    body TEXT,
    id_user UUID,
    id_article UUID,
    created_at TIMESTAMP,
    delete_at TIMESTAMP,
    PRIMARY KEY (comment_id, body, id_user, id_article),
) WITH CLUSTERING ORDER BY (body ASC, id_user ASC, id_article ASC);
CREATE TABLE prueba19aug.articles (
    articles_id UUID,
    title TEXT,
    description TEXT,
    id_user UUID,
    created_at TIMESTAMP,
    updated_at TIMESTAMP,
    delete_at TIMESTAMP,
    PRIMARY KEY (articles_id, title, id_user),
) WITH CLUSTERING ORDER BY (title ASC, id_user ASC);
CREATE TABLE prueba19aug.blocked_users (
    blocked_user_id INT,
    id_user UUID,
    id_article UUID,
    PRIMARY KEY (blocked_user_id, id_user, id_article),
) WITH CLUSTERING ORDER BY (id_user ASC, id_article ASC);

-- INSERTION TEST

INSERT INTO prueba19aug.users (
    user_id,
    user_name,
    password,
    bio,
    created_at
) VALUES (
    UUID(),
    'jersonptt',
    '123',
    'developer',
    dateof(now())
)