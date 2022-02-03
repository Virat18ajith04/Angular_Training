
const PersonModel = require('../models/person.model');

// get all person list
exports.getPersonList = (req, res) => {
    //console.log('here all persons list');
    PersonModel.getAllPersons((err, persons) => {
        console.log('We are here');
        if (err)
            res.send(err);
        console.log('Persons', persons);
        res.send(persons)
    })
}

// get person by ID
exports.getPersonByID = (req, res) => {
    //console.log('get emp by id');
    PersonModel.getPersonByID(req.params.id, (err, person) => {
        if (err)
            res.send(err);
        console.log('single person data', person);
        res.send(person);
    })
}

// create new person
exports.createNewPerson = (req, res) => {
    const personReqData = new PersonModel(req.body);
    console.log('personReqData', personReqData);
    // check null
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.send(400).send({ success: false, message: 'Please fill all fields' });
    } else {
        PersonModel.createPerson(personReqData, (err, person) => {
            if (err)
                res.send(err);
            res.json({ status: true, message: 'Person Created Successfully', data: person.insertId })
        })
    }
}

// update person
exports.updatePerson = (req, res) => {
    const personReqData = new PersonModel(req.body);
    console.log('personReqData update', personReqData);
    // check null
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.send(400).send({ success: false, message: 'Please fill all fields' });
    } else {
        PersonModel.updatePerson(req.params.id, personReqData, (err, person) => {
            if (err)
                res.send(err);
            res.json({ status: true, message: 'Person updated Successfully' })
        })
    }
}

// delete person
exports.deletePerson = (req, res) => {
    PersonModel.deletePerson(req.params.id, (err, person) => {
        if (err)
            res.send(err);
        res.json({ success: true, message: 'Person deleted successully!' });
    })
}