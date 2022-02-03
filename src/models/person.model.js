var dbConn = require('../../config/dbconfig');

var Person = function (person) {
    this.id = person.id;
    this.name = person.name;
    this.phone = person.phone;
    this.quantity = person.quantity;

}

// get all persons
Person.getAllPersons = (result) => {
    dbConn.query('SELECT * FROM persons', (err, res) => {
        if (err) {
            console.log('Error while fetching employess', err);
            result(null, err);
        } else {
            console.log('Persons fetched successfully');
            result(null, res);
        }
    })
}

// get person by ID from DB
Person.getPersonByID = (id, result) => {
    dbConn.query('SELECT * FROM persons WHERE id=?', id, (err, res) => {
        if (err) {
            console.log('Error while fetching person by id', err);
            result(null, err);
        } else {
            result(null, res);
        }
    })
}

// create new person
Person.createPerson = (personReqData, result) => {
    dbConn.query('INSERT INTO persons SET ? ', personReqData, (err, res) => {
        if (err) {
            console.log('Error while inserting data');
            result(null, err);
        } else {
            console.log('Person created successfully');
            result(null, res)
        }
    })
}

// update person
Person.updatePerson = (id, personReqData, result) => {
    dbConn.query("UPDATE persons SET first_name=?,name=?,phone=?,quantity=?,organization=?,designation=?,salary=? WHERE id = ?", [personReqData.first_name, personReqData.name, personReqData.phone, personReqData.quantity, personReqData.organization, personReqData.designation, personReqData.salary, id], (err, res) => {
        if (err) {
            console.log('Error while updating the person');
            result(null, err);
        } else {
            console.log("Person updated successfully");
            result(null, res);
        }
    });
}

// delete person
Person.deletePerson = (id, result) => {
    // dbConn.query('DELETE FROM persons WHERE id=?', [id], (err, res)=>{
    //     if(err){
    //         console.log('Error while deleting the person');
    //         result(null, err);
    //     }else{
    //         result(null, res);
    //     }
    // })
    dbConn.query("UPDATE persons SET is_deleted=? WHERE id = ?", [1, id], (err, res) => {
        if (err) {
            console.log('Error while deleting the person');
            result(null, err);
        } else {
            console.log("Person deleted successfully");
            result(null, res);
        }
    });
}

module.exports = Person;