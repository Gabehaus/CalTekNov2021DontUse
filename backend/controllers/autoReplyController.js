import asyncHandler from "express-async-handler"
import nodemailer from "nodemailer"

// @desc    Create new order
// @route   POST /api/orders
// @access  Private
const deliveryAutoReply = asyncHandler(async (req, res) => {
  let {
    orderItems,
    name,
    address,
    email,
    shippedOn,
    shipService,
    arrivesIn,
    trackingNumber
  } = req.body

  //   let orderHTML = orderItems.map(
  //     or => `<li>Product: ${or.name}</li> ``<li>Quantity: ${or.qty}</li> `
  //   )

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
    from: "caltekmail2021@gmail.com",
    to: email,
    subject: `Your order has been shipped from Cal Tek Solutions!`,
    html: `
        <h3>Products Shipped</h3>
        ${orderItems
          .map(or => or.name + `, Quantity: ` + or.qty + `<br>`)
          .join("")}

        <h3>Shipping Information</h3>
        <ul>
        <li>Recipient: ${address.recipient}</li>
        <li>Shipping Address: ${address.address}, ${address.city}, ${
      address.state
    } ${address.postalCode}, ${address.country}</li>
        <li>Shipped On: ${shippedOn}</li>
        <li>Shipping Service: ${shipService}</li>
        <li>Tracking Number: ${trackingNumber}</li>
        <li>Arrives In: ${arrivesIn}</li>
        </ul>

        <h3>Message</h3>
        <p>Thank you for shopping with Cal Tek Solutions!</p>
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

export { deliveryAutoReply }
