const express = require('express');
const router = express.Router();
const Controller = require('../controllers/controller');


/**
 * @description
 * route for creating new room on server
 */
router.post("/createRoom", Controller.createRoom);

/**
 * @description
 * dummy route
 */
router.get("/socketPort", (req, res, next) => {
    res.json({url: (process.env.PORT || 3000)});
});

/**
 * @description
 * route for delivering name of private room with some id
 */
router.get("/getName/:idSobe", Controller.getNameOfRoom);

/**
 * @description
 * route which catches data from
 * dialog form
 */
router.patch("/sendRules", Controller.setRules);


/**
 * @description
 * route for delivering data for users in private with params_id 
 */

router.get("/getPlayers/:roomId", Controller.getPlayers);
module.exports = router;
