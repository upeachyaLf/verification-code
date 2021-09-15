
const VerificationCodeM = require('../models/verification-code.modal');
const errorMessages = require('../constants/errorMessage');
const createErrorArray = require('../services/createErrorArray');

exports.postVerificationCode = (req, res) => {
  const { verificationCode: code } = req.body
  const verificationCode = new VerificationCodeM({
    verificationCode: code
  });
  verificationCode.save()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      var errorArray = createErrorArray(err);
      res.status(500).send({
          errors: errorArray || errorMessages.POST_VERIFICATION_CODE
      });
  });
};
