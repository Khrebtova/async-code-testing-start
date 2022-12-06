import { it, expect, beforeEach, beforeAll, afterAll, afterEach } from 'vitest';
import { User } from './hooks';

const testEmail = 'test@test.com';
let user;

beforeAll(() => { 
    user = new User(testEmail); 
    console.log('beforeAll');
});

beforeEach(() => { 
    user = new User(testEmail);
    console.log('beforeEach');         
});

//or
afterEach(() => { 
    user = new User(testEmail); 
    console.log('afterEach');
});

afterAll(() => { 
    console.log('afterAll');     
});

//concurrent tests are run in parallel and are not guaranteed to run in order
//or add concurrent to describe block

it.concurrent('should update the email', () => {  
  const newTestEmail = 'test2@test.com';
  //const user = new User(testEmail);

  user.updateEmail(newTestEmail);
  expect(user.email).toBe(newTestEmail);
});

it('should have an email property', () => {
  //const testEmail = 'test@test.com';
  // const user = new User(testEmail);

  expect(user).toHaveProperty('email');
});

it('should store the provided email value', () => {
  //const testEmail = 'test@test.com';
  //const user = new User(testEmail);

  expect(user.email).toBe(testEmail);
});

it('should clear the email', () => {
  //const testEmail = 'test@test.com';
  //const user = new User(testEmail);

  user.clearEmail();
  expect(user.email).toBe('');
});

it('should still have an email property after clearing the email', () => {
  //const testEmail = 'test@test.com';
  //const user = new User(testEmail);
  
  user.clearEmail();
  expect(user).toHaveProperty('email');
});