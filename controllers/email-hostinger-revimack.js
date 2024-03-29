const nodemailer = require('nodemailer');

const mail = {
  user: process.env.USER_REVIMACK,
  pass: process.env.PASSWORD_REVIMACK
}

const emailRevimack  = async( req, res, next) => {  
   
    const { name, email, phone, message } = req.body;
console.log(req.body)
  

    const contentHtml=`
    
    <h1> Consulta Revimack Agro </h1>
    <ul>
        <li>name: ${name} </li>
        <li>email: ${email} </li>
        <li>phone: ${phone} </li>
        <li>message: ${message} </li>
    </ul>
    `

async function sendMail(){
    try {

        
        let transporter = nodemailer.createTransport({
            host: "smtp.hostinger.com",
            greetingTimeout : 1000 * (60), // try adding greetingTimeout property 
            port: 465,
            tls: {
                 rejectUnauthorized: false
            },
            secure: true, // true for 465, false for other ports
            auth: {
              user: mail.user, // generated ethereal user
              pass: mail.pass, // generated ethereal password
            },
          });

          const mailOptions = {
            from: "Revimack Agro <contacto@revimackagro.com>",
            to: mail.user,
            subject: "Consulta-Contacto",
            text:"Formulario de contacto Revimack",
            html: contentHtml,
        };
        
        const result = await transporter.sendMail(mailOptions);     
        res.status(200).json("true")
      
        return result


    } catch (error) {
        next(error)
   }
}

sendMail()
.then (result => res.status(200))
.catch(error =>  next(error))

}
  
  module.exports =  { 
                     emailRevimack
                    }

