import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const sendGridMail = require('@sendgrid/mail');
    sendGridMail.setApiKey(process.env.SENDGRID_API_KEY);

    const msgToMe = {
      to: 'sshk1031.ski@gmail.com',
      from: 'ssh1031.ski@gmail.com',
      subject: 'Portfolioからのお問い合わせ',
      text: req.body.name + 'さんからのお問い合わせです。\n' + 'メッセージ: ' + req.body.message + '\n アドレス: \n' + req.body.email,
      html: `
        <p>【名前】</p>
        <p>${req.body.name}</p>
        <p>【メールアドレス】</p>
        <p>${req.body.email}</p>
        <p>【メッセージ】</p>
        <p>${req.body.message}</p>
      `,
    };

    const msgToUser = {
      to: req.body.email,
      from: 'ssh1031.ski@gmail.com',
      subject: 'お問い合わせありがとうございます',
      text: req.body.name + '様、お問い合わせありがとうございます。\n' + '以下の内容で送信しました。\n' + 'メッセージ: ' + req.body.message + '\n アドレス: \n' + req.body.email,
      html: `
        <p>${req.body.name}様、お問い合わせありがとうございます。</p>
        <p>以下の内容で送信しました。</p>
        <p>【名前】</p>
        <p>${req.body.name}</p>
        <p>【メールアドレス】</p>
        <p>${req.body.email}</p>
        <p>【メッセージ】</p>
        <p>${req.body.message}</p>
      `,
    };

    (async () => {
      try {
        await sendGridMail.send(msgToMe);
        await sendGridMail.send(msgToUser);
        res.status(200).json({ message: 'success' });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'error' });
      }
    })();
  }
}