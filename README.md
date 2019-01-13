# GraphQL Study

A GraphQL study

## Features

- [ ] Docker
- [ ] GraphQL
- [x] MySQL
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

- Teacher
  * id
  * name
  * email
  * password

- Parent
  * id
  * name
  * email

- Student
  * id
  * name

- ParentStudent
  * id
  * parentId
  * studentId

- Class
  * id
  * teacherId
  * name

- ClassStudent
  * id
  * classId
  * studentId
  * isPresent
  * date

- Notification
  * id
  * teacherId
  * parentId
  * classId
  * studentId
  * attempts
  * status
  * date
