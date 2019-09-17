import nodemailer from 'nodemailer'
import dotenv from 'dotenv'

dotenv.config()

export default async function handle(req, res) {
    const {name, message, email} = req.body
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_PASS
        }
    })
    try {
        const info = await transporter.sendMail({
            from: process.env.GMAIL_USER,
            to: `${process.env.GMAIL_USER}, ${process.env.WEBMASTER_EMAIL}`,
            subject: `Query from DU Trampoline website [${Date.now()}]`,
            text: `${message}\n\n-- [FROM: "${name}" <${email}>]`
            // could do HTML, but be sure to sanitise first!!!
        })
        res.json({info})
    } catch (err) {
        console.log({err})
        res.json({error: err})
    }
}