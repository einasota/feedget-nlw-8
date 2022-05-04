import express from 'express'
import { SubmitFeedbackUseCase } from './use-cases/submit-feedback-use-case'
import { PrismaFeedbacksRepository } from './repositories/prisma/prisma-feedbacks-repository'
import { NodemailerMailService } from './services/nodemailer/nodemailer-mail-service'

export const routes = express.Router()

routes.post('/feedbacks', async (req,res) => {
    const { type, comment, screenshot } = req.body
    const prismaFeedbacksRepository = new PrismaFeedbacksRepository()
    const nodemailerMailService = new NodemailerMailService()
    const submitFeedbackUseCase = new SubmitFeedbackUseCase(prismaFeedbacksRepository,nodemailerMailService) 

    await submitFeedbackUseCase.execute({
        type, comment, screenshot
    })
    return res.status(201).send();
})