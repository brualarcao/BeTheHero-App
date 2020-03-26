const express = require('express')
const crypto = require('crypto')
const routes = express.Router()
const OngController = require('./controllers/OngController')
const IncidentController = require('./controllers/IncidentController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')
// Login
routes.post('/sessions', SessionController.create)

// Ong Requisitions
routes.get('/ongs', OngController.index)
routes.post('/ongs', OngController.create)

// Profile Requisitions
routes.get('/profile', ProfileController.index)

// Incidents Requisitions
routes.get('/incidents', IncidentController.index)
routes.post('/incidents', IncidentController.create)
routes.delete('/incidents/:id', IncidentController.delete)


module.exports = routes

// Rota e Recurso

/** Metodos HTTP:
 * GET: Buscar uma informacao no back-end 
 * POST: Criar uma informacao no back-end
 * PUT: Alterar uma informacao no back-end
 * DEL: Deletar uma informacao no back-end
 */

 /**Tipos de parametros:
  * 
  * Query params: Parametros nomeados e enviados na rota apos o simbolo de "?"(Filtros, paginacao)
  * Route params: Parametros utilizados para identificar recursos ":id"
  * Request Body: Corpo da requisicao usado para criar ou alterar recursos 
  */