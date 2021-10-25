import express from "express"
const router = express.Router()
import nodemailer from "nodemailer"

router.post("/", (req, res) => {
  let data = req.body

  let smtpTransport = nodemailer.createTransport({
    service: "Gmail",
    port: 465,
    auth: {
      type: "OAuth2",
      user: "caltekmail2021@gmail.com",
      pass: "45654513aB$%^",
      clientId:
        "708032881609-4oqufeo2mr41hg70jl5e2n8qvo5b4a7r.apps.googleusercontent.com",
      clientSecret: "YESljfRVfNFjq13iOLYMA8sY",
      refreshToken:
        "1//040rh-sQiH5T5CgYIARAAGAQSNwF-L9IrWqKNw8dCL6wR_7oDAzqGoAVqsOd7OvvbX8xvVgsiqSKd2jK0oHuEfTqu618JTna89gg"
    }
  })

  let mailOptions = {
    from: data.email,
    to: "Gabehaus@gmail.com",
    subject: `Message from ${data.name}`,
    html: `
        <h3>Information</h3>
        <ul>
        <li>Name: ${data.name}</li>
        <li>Email: ${data.email}</li>
        </ul>

        <h3>Message</h3>
        <p>${data.message}</p>
        `
  }

  smtpTransport.sendMail(mailOptions, (error, response) => {
    if (error) {
      res.send(error)
      console.log("error: ", error)
    } else {
      res.send("Success")
      console.log("success")
    }

    smtpTransport.close()
  })
})

// @route DELETC api/items/:id
//@desc DELETE An Item
// @access Private

export default router
