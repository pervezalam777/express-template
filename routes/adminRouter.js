//@ts-nocheck
const path = require('path');

const express = require('express');

const adminRouter = express.Router();

function validate(req, res, next) {
  res.locals.validated = true;
  console.log("VALIDATED")
  //TODO: 403 forbidden if user is not authorized.
  next()
}

adminRouter.use(validate);

adminRouter.get('/', (req, res, next) => {
  console.log("is validated ",res.locals.validated)
  console.log('admin route')
})

module.exports = adminRouter;
