import { SES } from 'aws-sdk';
import { InjectAwsService } from 'nest-aws-sdk';
import { HttpStatus, HttpException, Injectable, Logger } from '@nestjs/common';
import { createTransport, SentMessageInfo, Transporter } from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

@Injectable()
export class SESManagerService {
  private readonly _transporter: Transporter;
  private readonly logger = new Logger(SESManagerService.name);
  constructor(@InjectAwsService(SES) private readonly ses: SES) {
    this._transporter = createTransport({ SES: ses });
  }
  public async sendEmailWithAttachments(
    from: string | Mail.Address,
    subject,
    html,
    toAddresses,
    attachments,
    replyTo?: string | Mail.Address,
  ) {
    const mailOptions: Mail.Options = {
      from: from,
      subject,
      html,
      to: toAddresses,
      attachments,
      replyTo: replyTo,
      inReplyTo: replyTo,
    };
    this._transporter
      .sendMail(mailOptions)
      .then((info: SentMessageInfo) => {
        this.logger.log('success[sendMail]:', info);
        return {
          statusCode: HttpStatus.OK,
          message: 'Mail Sent',
          data: info,
        };
      })
      .catch((err) => {
        this.logger.log(err);
        this.logger.log('error[sendMail]:', err);
        throw new HttpException(
          {
            statusCode: HttpStatus.BAD_REQUEST,
            message: 'Failed to send',
            data: err,
          },
          HttpStatus.BAD_REQUEST,
        );
      });
  }
}
