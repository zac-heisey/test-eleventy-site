const { TEST_VAR_1 } = process.env;

exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    body: TEST_VAR_1
  };
};
