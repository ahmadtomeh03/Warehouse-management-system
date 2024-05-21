
const {validationResult } = require('express-validator');

const reservation_middel = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {

        return res.status(422).json({ errors: errors.array() });
    }
    next();

};

module.exports = reservation_middel;
