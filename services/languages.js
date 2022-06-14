const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getMultiple(page = 1){
    const offset = helper.getOffset(page, config.listPerPage);
    const rows = await db.query(
        `SELECT id, name, description, year 
        FROM languages LIMIT ${offset}, ${config.listPerPage}
        `
    );
    const data = helper.emptyOrRows(rows);
    const meta = (page);

    return {
        data,
        meta
    }
}


async function getUser(page = 1){
    const offset = helper.getOffset(page, config.listPerPage);
    const rows = await db.query(
        `SELECT id, username, password, email, role
        FROM users LIMIT ${offset}, ${config.listPerPage}
        `
    );
    const data = helper.emptyOrRows(rows);
    const meta = (page);

    return {
        data,
        meta
    }
}

async function create(language){
    const result = await db.query(
        ` INSERT INTO languages (name, description, year) VALUES
        ('${language.name}', '${language.description}', ${language.year}) `
    );

    let message = "Error in creating a language";
    if(result.affectedRows){
        message = "A new language has been added";
    }

    return { message }
}

async function update(id, language){
    const result = await db.query(
        ` UPDATE languages
        SET name='${language.name}',
        description= '${language.description}', 
        year=${language.year}
        WHERE id = ${id} `
    );

    let message = "Error in updating a language";
    if(result.affectedRows){
        message = "A new language has been updated";
    }

    return { message }
}

async function remove(id){
    const result = await db.query(
        `DELETE FROM languages
        WHERE id = ${id} `
    );

    let message = "Error in deleting a language";
    if(result.affectedRows){
        message = "A new language has been deleted";
    }

    return { message }
}

module.exports = {
    getUser, 
    getMultiple,
    create,
    update,
    remove
};