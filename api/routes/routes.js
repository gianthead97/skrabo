const express = require('express');
const router = express.Router();
const Controller = require('../controllers/controller');


router.post("/createRoom", Controller.createRoom);


module.exports = router;