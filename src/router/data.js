const router = require('express').Router()

const Student = require('./../model/schema')

//To get all data
router.get('/student', async (req, res) => {
    try {
        const data = await Student.find()
        res.status(200).send(data)
    } catch (err) {
        console.log(err)
    }
})

// to get data by id
router.get('/student/:id', async (req, res) => {
    const _id = req.params.id
    try {
        const check = await Student.find({ _id })
        if (check) {
            res.status(200).send(check)
        } else {
            res.status(404).json({ message: "Invalid credentials" })
        }
    } catch (err) {
        console.log(err)
    }
})

//TO post data

router.post('/student',async (req, res) => {
    let info = req.query
    if (!info.name || !info.currentClass || !info.division) {
        return res.status(400).json({ message: "Plzz fill the proper information." })
    }
    try {
        const userData = new Student( info )
        const result = await userData.save()
        if (result) {
            res.status(201).json({ message: `Id of student is ${result.id}` })
        } else {
            res.status(201).json({ message: "Registration Error" })

        }

    } catch (err) {
        console.log(err)
    }

})

//TO update the document
router.patch('/student/:id',async (req, res) => {
    const _id = req.params.id
    const data = req.query
    // console.log(_id)
    // if(!data.name || !data.currentClass || !data.division){
    //     return res.status(400).json({message:'fill proper information.'})
    // }
    try {
        const check = await Student.find({ _id })
        if (check) {
            const update =await Student.findByIdAndUpdate(_id, data, {
                new: true
            })
            // console.log(update)
            if(update){
                res.status(200).json({message:"Update Successfull"})
            }else{
                res.status(400).json({message:"Invalid credential"})
            }   
        }else{
            res.status(400).json({message:"Invalid credential"})

        }

    } catch (err) {
        console.log(err)
    }
})

//To delete the document

router.delete('/student/:id', async (req, res) => {
    let _id = req.params.id
    try {
        const present = await Student.find({ _id })
        if (present) {
            const data = await Student.deleteOne({ _id })
            if (data) {
                res.status(200).send(data)
            } else {
                res.status(400).json({ meassage: "Invalid Credential" })
            }
        } else {
            res.status(400).json({ message: "Invalid credentials" })
        }

    } catch (err) {
        console.log(err)
    }

})

module.exports = router
