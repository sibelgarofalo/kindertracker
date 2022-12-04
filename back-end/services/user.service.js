const User = require('./user.model');

require('./mongo').connect();

const registerUser = async (req, res, next) => {
    try {
        const { email, password, firstname, lastname } = req.body;

        // check
        const exists = await User.countDocuments({ email: email}).exec();
        if (exists > 0) {
            throw new Error(`The email ${email} is already taken`);
        }

        // create
        const user = new User({email, password, firstname, lastname});
        const result = await user.save();
        res.status(200).json(result);
    } catch (error) {
        return next(error);
    }
}

const getUsers = (req, res) => {
    const docquery = User.find({});
    docquery
        .exec()
        .then(users => {
            res.status(200).json(users);
        })
        .catch(error => {
            res.status(500).send(error);
            return;
        });
}

function checkServerError(res, error) {
    if (error) {
        res.status(500).send(error);
        return error;
    }
}

module.exports = {
    getUsers,
    registerUser
};