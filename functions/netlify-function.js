const TEST_VAR_2 = process.env.TEST_VAR_2;

exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    body: TEST_VAR_2
  };
};
