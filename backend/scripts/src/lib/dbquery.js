// execute query

function query(query) {
    return new Promise(function(resolve, reject) {
        db.query(query, (err, result) => {
            if (err) {
                console.log("Error with da db", err);
                reject(err)
            }
           resolve(result);
        });
    })
}

module.exports = query;