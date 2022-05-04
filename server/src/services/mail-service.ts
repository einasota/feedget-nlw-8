import nodemailer from 'nodemailer'

export const mailservice = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "397c9447dc185b",
      pass: "e25532d63c1008"
    }
});

export interface SendMailData {
    subject: string;
    body: string;
}

export interface MailService {
    sendMail: (data: SendMailData) => void;
}