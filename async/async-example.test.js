import { it, describe, expect } from 'vitest';

import { generateToken, generateTokenPromise } from './async-example.js';

describe('generateToken()', () => {
    it('should generate a token value', (done) => {
        const testUserEmail = 'test@test.com';
        
        generateToken(testUserEmail, (err, token) => {
            try{
                expect(token).toBeDefined();
                // expect(token).toBe('test');
                done();
            }catch(err){
                done(err);
            }
        });
    });
});