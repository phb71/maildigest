
const axios = require('axios');

let postmarkKey = process.env.POSTMARK_API_TOKEN;
let openweatherKey = process.env.OPENWEATHER_API_TOKEN;

let postmark = require("postmark")
let emailClient = new postmark.ServerClient(postmarkKey);

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const d = new Date();
const dayName = days[d.getDay()];

// Using Async
exports.handler = async function (event, context) {
    
    const weatherTemp = await axios.get(
        'https://api.openweathermap.org/data/2.5/weather?lat=46.6013&lon=4.0650&appid='+ openweatherKey + '&units=metric'
      );

    const emailSend = await emailClient.sendEmail({
        From: "info@urban-hideout.com",
        To: "paul@urban-hideout.com",
        Subject: dayName + ' digest',
        HtmlBody: new String(weatherTemp.data.main.temp),
        TextBody: "test"
    })

    console.log("Response:");
    console.log(emailSend.To);
    console.log(emailSend.SubmittedAt);
    console.log(emailSend.Message);
    console.log(emailSend.MessageID);
    console.log(emailSend.ErrorCode);
    
    return {
        statusCode: 200,
      };
   
}