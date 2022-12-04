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
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());
const port = process.env.PORT || 4000;

/** swagger */
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

/** routing */
app.use('/messages', messageRouter);
app.use('/auth', authRouter);

/** error */
const failSafeHandler = (err, req, res, next) => {
  console.error('\x1b[31m', err);
  res.header("Content-Type", 'application/json');
  res.status(500).json({
    error: {message: err.message, status: 500}
  });
}
app.use(failSafeHandler);

/** console logger */
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})