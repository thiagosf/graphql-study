# GraphQL Study

A GraphQL study

## Features

- [ ] Docker
- [ ] GraphQL
- [ ] MySQL
- [ ] Redis
- [ ] Logging
- [ ] JWT
- [ ] Tests
- [ ] Linting
- [ ] i18n

## App's scope

Take attendance.

- [ ] Teacher's login
- [ ] Students list
- [ ] Take attendance
- [ ] Parents notification

## Database definition

- teachers
  * id
  * name
  * email
  * password

- parents
  * id
  * name
  * email

- students
  * id
  * name

- parent_students
  * id
  * parent_id
  * student_id

- class
  * id
  * teacher_id
  * name

- class_students
  * id
  * class_id
  * student_id
  * is_present
  * date

- notifications
  * id
  * teacher_id
  * parent_id
  * class_id
  * student_id
  * attempts
  * status
  * date
