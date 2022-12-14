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

describe('generateTokenPromise()', () => {
    it('should generate a token value', () => {
        const testUserEmail = 'test@test.com';
        
        return generateTokenPromise(testUserEmail).then((token) => {
            expect(token).toBeDefined();
        });
        //expect(generateTokenPromise(testUserEmail)).resolves.toBeDefined();
    });

    it('should generate a token value ', async () => {
        const testUserEmail = 'test@test.com';
        const token = await generateTokenPromise(testUserEmail);
        expect(token).toBeDefined();
    });
});