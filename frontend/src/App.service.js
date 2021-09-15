import axios from "axios";

import envVariable from "./constants/envVariables";

export const postVerificationCode = async (data) => {
	const { verificationCode } = data;
	try {
		const result = await axios({
			method: 'post',
			url: `${envVariable.BACKEND_URL}verification-code`,
			data: {
				verificationCode
			}
		})
		return result.data
	} catch (err) {
		const [error] = err?.response?.data?.errors;
		return { error: error?.verificationCode || 'Something went wrong!'}
	}
}

