const { peopleController } = require("../controllers");
const { Router } = require('express');

const router = Router();

router
    .route('/')
    .get(peopleController.getAllPeople)
    .post(peopleController.createPeople);

router
    .route('/getVoters').get(peopleController.getPeopleAbove18);

module.exports = router;
