const dbConn = require("../config/db.config")

const peopleModel = {
    tableName: 'people',
    fields: {
        regId: "RegID",
        firstName: "fname",
        lastName: "lname",
        NIC: "NIC",
        DOB: "DOB",
        homeNo: "home_no",
        address: "address",
        phone: "phone",
        status: "status",
        incomeStatus: "income_status"
    }
}

const createPeople = async (regID, firstName, lastName, nic, dob, homeNo, address, phone, status, incomeStatus) => {
    await dbConn.query(`INSERT INTO ${peopleModel.tableName}
                           (${peopleModel.fields.regId},
                            ${peopleModel.fields.firstName},
                            ${peopleModel.fields.lastName},
                            ${peopleModel.fields.NIC},
                            ${peopleModel.fields.DOB},
                            ${peopleModel.fields.homeNo},
                            ${peopleModel.fields.address},
                            ${peopleModel.fields.phone},
                            ${peopleModel.fields.status},
                            ${peopleModel.fields.incomeStatus})
                           VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`, [regID, firstName, lastName, nic, new Date(dob), homeNo, address, phone, status, incomeStatus]);
}

const getAllPeople = async () => {
    const [rows] = await dbConn.query(`SELECT * FROM ${peopleModel.tableName}`);

    if (rows.length > 0) return rows;
    return null;
}

const getPeopleAboveAge = async (ageLimit) => {
    const [rows] = await dbConn.query(`SELECT * FROM ${peopleModel.tableName} WHERE TIMESTAMPDIFF(YEAR, ${peopleModel.fields.DOB}, CURDATE()) > ${ageLimit}`)

    if (rows.length > 0) return rows;
    return null;
}

const findPeopleByRegId = async (regId) => {
    const [rows] = await dbConn.query(`SELECT * FROM ${peopleModel.tableName} WHERE ${peopleModel.fields.regId} = ? LIMIT 1`, regId);

    if (rows.length > 0) return rows[0];
    return null;
}

module.exports = {
    createPeople,
    getAllPeople,
    getPeopleAboveAge,
    findPeopleByRegId
}
