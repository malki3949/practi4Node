
import express from 'express'
import {
    getAll} from '../controlers/Cloude.js'




const router = express.Router()

router.get('', getAll)


export default router