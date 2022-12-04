const express = require('express');
const router = express.Router();

const userService = require('../services/user.service');

router.post('/register', async (req, res, next) => {
    /*  
    #swagger.tags = ['Authentication']
    #swagger.summary = 'Register a User'
    #swagger.description = 'Register a new User'
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
    #swagger.responses[200] =             
        description: 'The User to be registered',
        schema: {
            $email: 'email@domain.com',
            $password: '*****',
            $firstname: 'John',
            $lastname: 'Doe'
        }
    #swagger.responses[500] =             
        description: 'Validation error',
        schema: {
            error: {
                message: 'message',
                status: 500
            }
        }
    */
    await userService.registerUser(req, res, next);
});

router.post('/login', async (req, res, next) => {
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
    await userService.loginUser(req, res, next);
});

module.exports = router;