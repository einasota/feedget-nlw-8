import { mailservice, MailService, SendMailData } from "../mail-service";

export class NodemailerMailService implements MailService {
    async sendMail({subject, body}: SendMailData){
    await mailservice.sendMail({
        from: 'Equipe Feedget <oi@feedget.com>',
        to: 'Jhonata Souza <einasota@gmail.com>',
        subject,
        html: body,
    })
    };
}