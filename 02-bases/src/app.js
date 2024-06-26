// const { emailTemplate } = require('./js-foundation/01-template');
// require('./js-foundation/02-destructuring');
// require('./js-foundation/03-callbacks');

// console.log(emailTemplate);
// console.log('Hola Mundo desde app.js');

// ----------

// const { getUserById } = require('./js-foundation/03-callbacks');
// const { getUserById } = require('./js-foundation/04-arrow');
// const id = 2;
// getUserById(id, (error, user) => {
//   if (error) {
//     throw new Error(error);
//   }
//   console.log(user);

// ---------- 05
// const { getUUID, getAge } = require('./plugins');
// const { buildMakePerson } = require('./js-foundation/05-factory');

// const makePerson = buildMakePerson({ getUUID, getAge });
// const obj = { name: 'John', birthdate: ' 1985-10-21' };
// const john = makePerson(obj);
// console.log(john);

// ---------- 06
const { getPokemonById } = require('./js-foundation/06-promises');

getPokemonById(1);
