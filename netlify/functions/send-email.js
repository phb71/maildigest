let apiKey = process.env.POSTMARK_API_TOKEN;
let postmark = require("postmark")
let client = new postmark.ServerClient(apiKey);

// HOW DO WE USE THE NETLIFY ENV VARIABLE 'POSTMARK_API_TOKEN'

exports.handler = (event, context, callback) => {
    client.sendEmail(
        {
            From: "info@urban-hideout.com",
            To: "paul@urban-hideout.com",
            Subject: "test email",
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