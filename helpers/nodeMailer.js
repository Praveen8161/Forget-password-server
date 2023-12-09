import nodemailer from 'nodemailer';

export async function sentMail(id, token){
    let transport = nodemailer.createTransport({
        service: 'gmail',
        host: 'smtp:gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: process.env.EMAIL_NAME,
            pass: process.env.EMAIL_APP_PASSWORD
        }
    });

    let details = {
        from: process.env.EMAIL_NAME,
        to: 'rkoprvn@gmail.com',
        subject: 'Password Change Request ',
        html: `<h5>Hi there, we have received a password reset request</h5>
        <p>Click the below button to reset your password:</p>
        <p>The link will be valid for 15 minutes</p>
        <div style="text-align: center;">
          <a href="http://localhost:9000/reset/${id}/${token}" target="_blank" style="background-color: #4CAF50; color: white; padding: 14px 25px; text-align: center; text-decoration: none; display: inline-block; border-radius: 15px;">
            Reset Password
          </a>
        </div>`
    }
    
    try {
        let res = await transport.sendMail(details);
        console.log(`Message sent: ${res.messageId}`);
        return res;
    } catch (err) {
        console.error({error: err});
    }
}