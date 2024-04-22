const axios = require('axios');

async function getStatus(config) {
  try {
    const response = await axios.request(config);
    console.log(JSON.stringify(response.data));
    return response.data.response;
  }
  catch (error) {
    console.log(error);
    return "ERROR"
  }
}

exports.main = async (context = {}) => {
  const { domain } = context.parameters;

  let config = {
    method: 'get',
    url: `https://www.sprocket.ninja/_hcms/api/domain_status?domain=${domain}`,
  };


  const response = await getStatus(config);

  return response;
};
