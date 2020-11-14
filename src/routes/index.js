const { response } = require('../app')

const routes = require('express').Router()
const userController = require('../controllers/user_controller')

routes.get('/ads', (req, res)=>{
  return res.json({msg:"test."})
})


routes.post('/ads', (req, res)=>{
  return response.json({ msg: "Deu certo."})
})

routes.get('/users', userController.index)

routes.get('/users/:id', userController.show)

routes.post('/users', userController.store)

routes.put('/users/:id', userController.update)

routes.delete('/users/:id', userController.delete)

module.exports = routes
