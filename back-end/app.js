/** imports */
const express = require('express');
const exphbs = require('express-handlebars');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require("cors");

/** routing */
const messageRouter = require('./routes/message');
const authRouter = require('./routes/auth');

/** swagger */
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger-output.json');

/** bootstrap */
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());
const port = process.env.PORT || 4000;

/** swagger */
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

/** routing */
app.use('/messages', messageRouter);
app.use('/auth', authRouter);

/** console logger */
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})