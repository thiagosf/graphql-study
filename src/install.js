const { utils } = require('./helpers')

module.exports = (models) => {
  return new Promise((resolve, reject) => {
    const {
      Teacher,
      Parent,
      Student,
      ParentStudent,
      Class,
      sequelize
    } = models

    const data = [{
      model: Teacher,
      data: [{
        id: 1,
        name: 'João',
        email: 'joao@graphql-study.com',
        password: '123456'
      }]
    }, {
      model: Parent,
      data: [{
        id: 1,
        name: 'Maria',
        email: 'maria@graphql-study.com'
      }, {
        id: 2,
        name: 'Jose',
        email: 'jose@graphql-study.com'
      }]
    }, {
      model: Student,
      data: [{
        id: 1,
        name: 'Gabriel'
      }, {
        id: 2,
        name: 'Joana'
      }]
    }, {
      model: ParentStudent,
      data: [{
        ParentId: 1,
        StudentId: 1
      }, {
        ParentId: 2,
        StudentId: 2
      }]
    }, {
      model: Class,
      data: [{
        id: 1,
        TeacherId: 1,
        name: 'Matemática'
      }, {
        id: 2,
        TeacherId: 1,
        name: 'Português'
      }]
    }]

    console.log('-- creating tables')
    sequelize.sync({ force: true })
      .then(() => {
        console.log('---- done')
        const promises = data.map(item => {
          return () => {
            console.log('-- model:', item.model.name)
            console.log('---- data:', item.data)
            return item.model.bulkCreate(item.data)
          }
        })
        return utils.queuePromises(promises)
          .then(data => resolve({ success: true, data }))
      })
      .catch(reject)
  })
}
