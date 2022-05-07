const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'andrew@mead.io',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, $(name). Let me know how you get along with the app.`
    })
}

const sendCancellationEmail = (email, name) => {
    sgMail.send({
        from: email,
        to: 'andrew@mead.io',
        subject: 'Sorry to see you go!',
        text: `Goodbye , $(name). I hope to see you back sometime soon.`
    })
}
// sgMail.send({
//     to: 'andrew@mead.io',
//     from: 'andrew@mead.io',
//     subject: 'This is my first creation!',
//     text: 'I hope this one actually gets to you'
// })

// Create an account on sendgrid

module.exports = {
    sendWelcomeEmail,
    sendCancellationEmail
}