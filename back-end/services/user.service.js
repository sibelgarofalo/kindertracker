const User = require('./user.model');
const JsonWebToken = require('jsonwebtoken');

require('./mongo').connect();

const registerUser = async (req, res, next) => {
    try {
        const { email, password, firstname, lastname } = req.body;

        // check
        const exists = await User.countDocuments({ email: email }).exec();
        if (exists > 0) {
            throw new Error(`The email ${email} is already taken`);
        }

        // create
        const user = new User({ email, password, firstname, lastname });
        const result = await user.save();
        res.status(200).json(result);
    } catch (error) {
        return next(error);
    }
}

const loginUser = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        // check
        const user = await User.findOne({ email: email }).exec();
        // exists
        if (!user) {
            res.status(401).json({ error: { message: 'Account error', status: 401 } });
            return;
        }
        // active
        if (!user.isActive) {
            res.status(401).json({ error: { message: 'Account error, user is not active', status: 401 } });
            return;
        }
        // password
        await user.comparePassword(password, (matchError, isMatch) => {
            if (matchError) {
                res.status(401).json({ error: { message: 'Account error', status: 401 } });
            } else if (!isMatch) {
                res.status(401).json({ error: { message: 'Account error', status: 401 } });
            } else {
                const token = JsonWebToken.sign(
                    { email: email, firstname: user.firstname, lastname: user.lastname },
                    '123abc'
                )
                res.status(200).json({ token: token });
            }
        })
    } catch (error) {
        return next(error);
    }
}

module.exports = {
    registerUser,
    loginUser
};