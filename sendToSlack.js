const axios = require('axios')

exports.main = (event, callback) => {

  const dealName = event.inputFields['dealname'];

  const headers = {
    'Content-Type': 'application/json'
  };

  const slackWebhookURL = "";
  const requestBody = {
	"text":`${dealName} is closed!`
    }


  axios
    .post(
      'slackWebhookURL',
      requestBody,
      { headers }
    )
    .then(response => {
      console.log(`Response from Slack: ${response.body}`);
    });
};