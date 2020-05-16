const express = require('express');
const router = express.Router();
const Controller = require('../controllers/controller');

router.get("/", Controller.getFirstMessage);

router.post("/createRoom", )


module.exports = router;