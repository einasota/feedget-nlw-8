import express from 'express';
import nodemailer from 'nodemailer'
import { prisma } from './prisma';
import {mailservice} from './mailservice'

const app = express()

app.use(express.json())

app.get('/',(req, res) => {
    return res.send('Hello World')
})

app.post('/feedbacks', async (req,res) => {
    const { type, comment, screenshot } = req.body
    const feedback = await prisma.feedback.create({
        data : {
            type,
            comment,
            screenshot,
        }
    })
    mailservice.sendMail({
        from: 'Equipe Feedget <oi@feedget.com>',
        to: 'Jhonata Souza <einasota@gmail.com>',
        subject: "Novo Feedback",
        html: [
            `<div style="font-family: sans-serif; font-size: 16px; color:#111;">`,
            `<p>Tipo do Feedback: ${type}</p>`, 
            `<p>Comentário: ${comment} </p>`,
            `</div>`
        ].join('\n')
    })
    return res.status(201).json({ data: feedback })
})

app.listen(3333, () => {
    console.log("Server Running in http://localhost:3333")
})