import { pool } from "../DB/connectionDB.js"

export const getEmployees = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM employee')
        if(!rows){
            return res.status(400).json({msg: 'Error in request database'})
        }
        res.status(200).json(rows)
    } catch (error) {
        res.status(500).json({msg: 'Internal server error...!'})
    }
} 


export const getIdEmployee = async (req, res) => {
    const {id} = req.params

    try {
        const [employeeId] = await pool.query('SELECT * FROM employee WHERE id = ?', [id])
        if(employeeId.length < 1){
            return res.status(404).json({msg: 'User Id not found...!'})
        }
        res.status(200).json(employeeId[0])
    } catch (error) {
        res.status(500).json({msg: 'Internal server Error...!'})
    }
}

export const createEmployee =  async (req, res) => {
  const {name, salary} = req.body;
  try {
    if(!name || !salary){
        return res.status(400).json({msg: 'Error name or salary...!'})
    }

    const [rows] = await pool.query(`INSERT INTO employee(name, salary) VALUES (?, ?)`, [name, salary])

    res.status(201).json({name, salary, id:rows.insertId})
  } catch (error) {
    res.status(500).json({msg: 'Internal server error...!'})
  }
} 

export const updateEmployee = async (req, res) => {
   
    const {id} = req.params
    const {name, salary} = req.body

    try {
       const [updateEmployee] = await pool.query('UPDATE employee SET name = IFNULL(?, name), salary = IFNULL(?, salary) WHERE id = ?', [name, salary, id])
        
        if(updateEmployee.affectedRows <= 0){
            return req.status(404).json({msg: 'Employee not found...!'})
        }
        
       const [findIdEmployeeUpdating] = await pool.query('SELECT * FROM employee WHERE id = ?', [id])

       res.status(200).json(findIdEmployeeUpdating[0])

    } catch (error) {
        console.log(error.message)
        res.status(500).json({msg: 'Internal server Error...!'})      
    }



} 

export const deleteEmployee = async (req, res) => {
    const {id} = req.params
    try {
        const [findIdEmployee] = await pool.query(`
            DELETE FROM employee
            WHERE id = ?`, [id])

        if(findIdEmployee.affectedRows === 0){
            return res.status(404).json({msg: 'Error in delete employee...!'})
        }

        res.status(200).json({msg: 'Deleting employee successfully...!'})
    } catch (error) {
        res.status(500).json({msg: 'Internal server error...!'})
    }
    

} 