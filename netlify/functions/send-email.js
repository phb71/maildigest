let apiKey = process.env.POSTMARK_API_TOKEN;
let postmark = require("postmark")
let client = new postmark.ServerClient(apiKey);

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const d = new Date();
const dayName = days[d.getDay()];

exports.handler = (event, context, callback) => {
    client.sendEmail(
        {
            From: "info@urban-hideout.com",
            To: "paul@urban-hideout.com",
            Subject: dayName + ' digest',
            HtmlBody: "test",
            TextBody: "test"
        }
    ).then(response => {
        console.log(response.To);
        console.log(response.SubmittedAt);
        console.log(response.Message);
        console.log(response.MessageID);
        console.log(response.ErrorCode);
    });
}