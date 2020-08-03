/**
 * All imports basic libraries.
 */
import jwt from 'jsonwebtoken';

const token = jwt.sign({ foo: 'bar' }, 'shhhhh');

console.log(`The example token is: ${token}`);