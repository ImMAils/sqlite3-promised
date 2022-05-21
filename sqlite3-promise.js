module.exports = { dbGet, dbRun };

function dbGet(db, SQL) {
    return new Promise(function(resolve, reject) {
        db.serialize(() => {
            db.get(SQL, (err, callback) => {
                resolve(callback)
            })
        })
    })
}

function dbRun(db, SQL) {
    return new Promise(function(resolve, reject) {
        db.serialize(() => {
            db.run(SQL)
            resolve(true)
        })
    })
}