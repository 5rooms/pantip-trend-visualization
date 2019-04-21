import express from 'express'
import axios from 'axios'
import { UnsupportContentType } from '../misc/error'

const router = express.Router()

router.route('/').get((req, res, next) => {
  const { endpoint } = req.query
  axios(`https://ptdev03.mikelab.net${endpoint}`)
    .then(response => { res.status(200).send(response.data) })
    .catch(() => { throw UnsupportContentType(next) })
})

export default router
