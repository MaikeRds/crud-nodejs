const NeDB = require('nedb');

const db = new NeDB({
    filename: "database/users.db",
    autoload: true
});

const models = {}



//  const route = app.route("/users")
//  const routeAdm = app.route("/users/admins")
//const routeId = app.route("/users/:id")

models.findAll = () => {
    return new Promise((resolve, reject) => {
        db.find({}, async function (err, users) {
                err ? reject(err) : resolve(users);
        })
    });
};

module.exports = models;

/*

const findAll = (request, response) => {
    neDB.find({}).sort({ name: 1 }).exec((exception, customers) => {
        if (exception) {
            const setence = 'Deu ruim na tentativa de LISTAR o customer';
            console.error(setence, exception);

            response.status(exception.status | 400);
            response.json({ 'mensagem': setence });
        }
        console.log('Lista de customers', customers);
        response.json(customers);
    });
}*/