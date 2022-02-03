const express = require('express');
const router = express.Router();

const personController = require('../controllers/person.contoller');

// get all persons
router.get('/', personController.getPersonList);

// get person by ID
router.get('/:id', personController.getPersonByID);

// create new person
router.post('/', personController.createNewPerson);

// update person
router.put('/:id', personController.updatePerson);

// delete person
router.delete('/:id', personController.deletePerson);

module.exports = router;