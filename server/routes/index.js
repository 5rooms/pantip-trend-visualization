/**
 * Routers module
 * @module routes
 */

import express from 'express'

import EventRouter from './events'
import MikeRouter from './mike'
import { send } from '../misc/response'

const router = express.Router()

router.get('/', (req, res) => {
  send({ 'pantip-trend-visualization': 'api' }, req, res)
})

router.use('/events', EventRouter)
router.use('/mike', MikeRouter)

module.exports = router
