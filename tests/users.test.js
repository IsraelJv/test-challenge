// You already have the methods imported
const { default: expect } = require('expect');
const {getUser, getUsers} = require('../users');


// Make a test to verify if the method getUser(id) works correctly
// Verify any data of the resulting object you want

describe('Test function getUser', () => {
    test('should return a user object for a valid id', () => {
        expect(getUser(1)).toEqual({
            id: 1,
            username: "hpLover4",
            email: "sirious90@gmail.com",
            password: "hArrydotCom"
        });
    });

    test('should return undefined for an invalid id', () => {
        expect(getUser(999)).toBeUndefined();
    });
});

describe('Test function getUsers', () => {
    test('should return an array of all users', () => {
        expect(getUsers()).toEqual([
            {
                id: 1,
                username: "hpLover4",
                email: "sirious90@gmail.com",
                password: "hArrydotCom"
            },
            {
                id: 2,
                username: "piderman",
                email: "parkerdapete@gmail.com",
                password: "2D$aLzX9(_2"
            },
            {
                id: 3,
                username: "goosemotionless",
                email: "dotmeheart@outlook.com",
                password: "12345abcde"
            },
            {
                id: 4,
                username: "unsurejudy",
                email: "babariley77@gmail.com",
                password: "Kashmir1970"
            }
        ]);
    });
})

