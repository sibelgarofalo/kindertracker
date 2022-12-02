const express = require('express');
const router = express.Router();

router.post('/register', (req, res, next) => {
    /*  
    #swagger.parameters['user'] = {
            in: 'body',
            description: 'The User to be registered',
            schema: {
            $email: 'email@domain.com',
            $password: '*****',
            $firstname: 'John',
            $lastname: 'Doe'
        }
    } 
    #swagger.tags = ['Authentication']
    #swagger.summary = 'Register a User'
    #swagger.description = 'Register a new User'
    */
    const { email, password, firstname, lastname } = request.body;
    res.setHeader('Content-Type', 'application/json')
    res.json({'message': 'messages'});
});

router.post('/validate', (req, res, next) => {
    /*  
    #swagger.parameters['code'] = {
            in: 'body',
            description: 'The validation code',
            schema: {
            $email: 'email@domain.com',
            $code: '*****'
        }
    } 
    #swagger.tags = ['Authentication']
    #swagger.summary = 'Validate a User'
    #swagger.description = 'Validate a new User'
    */
    const { email, code } = request.body;
    res.setHeader('Content-Type', 'application/json')
    res.json({'message': 'messages'});
});

router.post('/forgot', (req, res, next) => {
    /*  
    #swagger.parameters['forgot'] = {
            in: 'body',
            description: 'The email of the disabled account',
            schema: {
            $email: 'email@domain.com'
        }
    } 
    #swagger.tags = ['Authentication']
    #swagger.summary = 'Forgot a Password'
    #swagger.description = 'Forgot a Password'
    */
    const { password } = request.body;
    res.setHeader('Content-Type', 'application/json')
    res.json({'message': 'messages'});
});

router.post('/login', (req, res, next) => {
    /*  
    #swagger.parameters['login'] = {
            in: 'body',
            description: 'The credentials',
            schema: {
            $email: 'email@domain.com',
            $password: '*****'
        }
    } 
    #swagger.tags = ['Authentication']
    #swagger.summary = 'Login a User'
    #swagger.description = 'Login a User'
    */
    const { email, password } = request.body;
    res.setHeader('Content-Type', 'application/x-www-form-urlencoded')
    res.json({'message': 'messages'});
});

module.exports = router;