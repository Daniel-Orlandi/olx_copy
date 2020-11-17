const { response } = require('../app')

//Imports 
const routes = require('express').Router()
const userController = require('../controllers/user_controller')
const locationController = require('../controllers/locations_controller')
const adsController = require('../controllers/ads_controller')
const adsPhotoController = require('../controllers/ads_photos_controller')
const fileController = require('../controllers/file_controller')

//User routes
routes.get('/users', userController.index)
routes.get('/users/:id', userController.show)
routes.post('/users', userController.store)
routes.put('/users/:id', userController.update)
routes.delete('/users/:id', userController.delete)

//Ads routes
routes.get('/ads', adsController.index)
routes.get('/ads/:id', adsController.show)
routes.post('/ads', adsController.store)
routes.put('/ads/:id', adsController.update)
routes.delete('/ads/:id', adsController.delete)

//Ads Photo routes
routes.get('/adsPhotos', adsPhotoController.index)
routes.get('/adsPhotos/:id', adsPhotoController.show)
routes.post('/adsPhotos', adsPhotoController.store)
routes.put('/adsPhotos/:id', adsPhotoController.update)
routes.delete('/adsPhotos/:id', adsPhotoController.delete)

//File routes
routes.get('/file', fileController.index)
routes.get('/file/:id', fileController.show)
routes.post('/file', fileController.store)
routes.put('/file/:id', fileController.update)
routes.delete('/file/:id', fileController.delete)

//Location routes
routes.get('/locations', locationController.index)
routes.get('/locations/:id', locationController.show)
routes.post('/locations', locationController.store)
routes.put('/locations/:id', locationController.update)
routes.delete('/locations/:id', locationController.delete)

module.exports = routes
