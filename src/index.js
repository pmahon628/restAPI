let express = require('express')

let app = express()

app.use(express.static('public'))

const PORT = process.env.PORT || 1348
app.listen(PORt, () => console.info(`Server has started on ${PORT}`))
