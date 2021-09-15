const routes = require('../constants/routes')
const codeC = require('../controllers/verification-code.controller');

module.exports = (app) => {
    app.post(
        routes.VERIFICATION_CODE, 
        codeC.postVerificationCode,
    );
}
