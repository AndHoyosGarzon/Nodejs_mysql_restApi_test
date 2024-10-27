import Router from 'express'
import { createEmployee, deleteEmployee, getEmployees, getIdEmployee, updateEmployee } from '../controller/employees.controller.js'

const router = Router()

router.get('/employees', getEmployees)
router.get('/employee/:id', getIdEmployee)

router.post('/employees', createEmployee)

router.patch('/employee/:id', updateEmployee)

router.delete('/employee/:id', deleteEmployee)


export default router