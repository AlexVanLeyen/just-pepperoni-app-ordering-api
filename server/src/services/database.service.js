/**
 * services/database.service.js
 * 
 * Simple little fake database service.
 */
var fakeDatabase = {};
module.exports = {
    generateId: () => require('crypto').randomBytes(10).toString('hex'),
    store: (id, data) => {
        fakeDatabase[id] = data;
    },
    get: (id) => fakeDatabase[id],
    list: () => Object.values(fakeDatabase),
    remove: (id) => {
        delete fakeDatabase[id]
    },
    clear: () => {
        fakeDatabase = {};
    }
};