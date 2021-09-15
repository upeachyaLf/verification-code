import React, {useState} from "react";
import { useHistory } from "react-router-dom";

import routes from "../../constants/routes";
import { postVerificationCode } from "../../App.service";

function Verification() {
  const [code, setCode] = useState("");
  const [error_msg, setErrorMsg] = useState("");

  const history = useHistory();

  const handleChange = (event) => {
    if (!isNaN(event.target.value)) setCode(event.target.value)
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const result = await postVerificationCode({verificationCode: code});
    if (result.error) {
      setErrorMsg(result.error)
    } else {
      history.push(routes.SUCCESS);
    }
  }

  return (
    <div className="container">
      <div className="align-center">
        <h4> Verification Code </h4>
        <div id="divOuter">
          <div id="divInner">
            <input id="partitioned" 
              key="verificationCode"
              type="text" maxlength="6" 
              value = {code}
              onChange={handleChange}/>
          </div>
        </div> 
        <p className="error-msg"> {error_msg} </p>
        <button className="btn-default" onClick={handleSubmit}>
          SUBMIT
        </button>
      </div>
    </div>
  );
}

export default Verification;
