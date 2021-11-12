const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: "hotmail",
    auth: {
        user: "ejpm10@outlook.com",
        pass: "Ejpm1910",
    }
});

const options = {
    from: "ejpm10@outlook.com",
    to: "erickpinedahn10@gmail.com",
    subject: "Enviado desde nodemailer (Tarea SW202103)",
    text: "Su código de reestablecimiento de contraseña es: " + Math.floor(Math.random() * 100),
};

transporter.sendMail(options, function(err, info) {
    if (err) {
        console.log(err);
        return;
    }
    console.log("sent: " + info.response);
});