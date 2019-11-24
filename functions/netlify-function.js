const TEST_VAR_2 = process.env.TEST_VAR_2;
const API_URL = process.env.API_URL;

exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    body: `TEST_VAR_2: ${TEST_VAR_2} | API_URL: ${API_URL}`
  };
};
