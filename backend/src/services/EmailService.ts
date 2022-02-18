// Tipando parâmetros de função
interface IMailTo {
  name: string;
  email: string;
}

// Tipando parâmetros de função
interface IMailMessage {
  subject: string;
  body: string;
  attachment?: string[];
}

// Tipando parâmetros de função
interface IMessageDTO {
  to: IMailTo;
  message: IMailMessage;
}

// Tipando classes
interface IEmailService {
  sendMail(request: IMessageDTO): void;
}

class EmailService implements IEmailService {
  sendMail(request: IMessageDTO): void {
    throw new Error("Method not implemented.");
  }
}

export default EmailService;
