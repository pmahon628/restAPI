let express = require('express')
let router = express.Router()

// Query string => query proeprty on the request object
// localhost:1348/person?name=pat&age=29
router.get('/person', (req, res) =>  {
    if(req.query.name){
    res.send(`You have requested a person ${req.query.name}`)
    }
    else{
    res.send('You have requested a person')
    }
})

// params property on the request object
//locahost:1348/person/pat
router.get('/person:name', (req, res) => {
    res.send(`You have requested a person', ${req.params.name}`)
})

router.get('/person/error', (req, res) => {
    throw new  Error('This is a forced error')
})

module.exports = router