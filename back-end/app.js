/** imports */
const express = require('express');
const cors = require("cors");

/** swagger */
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

/** bootstrap */
const app = express();
app.use(cors());
const port = process.env.PORT || 4000;

/** swagger */
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

/** routing */
const messageRouter = require('./routes/message');
app.use('/messages', messageRouter);

/** homepath */
app.get('/', (req, res) => {
  res.send(JSON.stringify({'message': 'Hello World'}))
})

/** console logger */
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})