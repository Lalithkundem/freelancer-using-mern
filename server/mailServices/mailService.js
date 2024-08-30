import nodemailer from "nodemailer";
import dotenv from 'dotenv';
dotenv.config();


const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    auth: {
        user: process.env.EMAIL_USER,
        pass:process.env.PASS
    }
});

const contentCreater = (username) => {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Responsive Image</title>
    <style>
        .container {
            text-align: center;
            background-color:#234411;
            color:white;
            width:100%;
            height:150px;
            font-size:50px;
        }
        .name{
            color:"black";
            font-size:"10px";
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Freelancer</h1>
    </div>
    <div class="name">
        <h2>Hello ${username} </h2>
    </div>
    <h2>Please Login with your credentials.</h2>
    <h2>Thank You for registering</h2>
    <p>best Regrads</p>

</body>
</html>
`
}


const sendRegistrationMail = async(to, username) => {
    const mailOptions = {
        from: `Nodemailer <${process.env.EMAIL_USER}>  `,
        to: `Nodemailer <${to}>`,
        subject: "Registration Successful",
        html:contentCreater(username),
    };

    try {
        let info = await transporter.sendMail(mailOptions);
        console.log("Message sent: %s", info.messageId);
        return info;
    } catch (error) {
        console.error("Error sending email:", error);
        throw error;
    }
};

export default sendRegistrationMail ;
