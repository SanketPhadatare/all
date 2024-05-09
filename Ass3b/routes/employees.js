const express = require("express")
const router = express.Router();
const Employee = require("../models/employee");
//const employee = require("../models/employee");
router.get("/", async(req,res)=>{
    try{
        const employees = await Employee.find()
        res.json(employees)
    }
    catch(err)
    {
        res.send("Error is:"+err)
    }
})
router.post("/", async(req,res)=>{
   const employee = new Employee({
    name : req.body.name,
    address : req.body.address
   })
 try{
    const e1 = await employee.save()
    res.send(e1)
    res.json(e1)
   }
 catch(err)
   {
    res.send("Error is:"+err)
   }
})
router.patch('/update/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };
        const result = await Employee.findByIdAndUpdate(id, updatedData, options);
        res.json(result);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
router.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Employee.findByIdAndDelete(id)
        res.send(`Document with ${data.name} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})
module.exports = router