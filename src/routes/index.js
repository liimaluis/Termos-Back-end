const Router = require ('express')

const userController = require('../controller/index')

const routes = Router()

routes.get('/', (req, res) => {
    res.send('Olá Mundo')
})

routes.post('/users', userController.creatUser)

module.exports = routes