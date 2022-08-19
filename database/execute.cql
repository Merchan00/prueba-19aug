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