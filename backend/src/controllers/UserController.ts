import { Request, Response } from "express";
import EmailService from "../services/EmailService";

const users = [
  { name: 'Lucas', email: 'lucassilva@vilaapps.com.br' },
];

export default {
  async index(req: Request, res: Response) {

    return res.json(users);
  },

  async create(req: Request, res: Response) {
    const emailService = new EmailService();

    emailService.sendMail({
      to: {
        name: 'Lucas',
        email: 'lucassilva@vilaapps.com.br'
      },
      message: {
        subject: 'Bem-vindo ao sistema com types',
        body: 'ta curtindo?'
      },
    });

    res.send();
  }
};
