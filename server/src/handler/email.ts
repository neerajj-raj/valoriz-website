/*
 * Copyright(c) 2025 Valoriz.
 *
 * All rights reserved.
 *
 * This software is the confidential and proprietary information of Magrabi ("Confidential
 * Information"). You shall not disclose such Confidential Information and shall use it only in
 * accordance with the terms of the contract agreement you entered into with Magrabi.
 *
 *
 * @author Neeraj
 */

import nodemailer from 'nodemailer';
import { getCareerTemplate, getContactTemplate } from "../utils/templates";
import { CareerRequest, ContactsRequest } from "../utils/types";
import dotenv from "dotenv";
import { Options } from 'nodemailer/lib/mailer';

dotenv.config();

const mailtrapToken = process.env.MAILTRAP_TOKEN || "";
const contactTemplateId = process.env.CONTACT_TEMPLATE_ID ?? "";
const contactToEmail = process.env.CONTACT_TO_EMAIL ?? "";

var transport = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 587,
  auth: {
    user: "98663c56d9927b",
    pass: "cc014126d7ab5f"
  }
});

export const sendEmailToGateway = async (mailOptions: Options): Promise<boolean> => {
  try {
    const info = await transport.sendMail(mailOptions);
    console.log('Email sent:', info.response);
    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
}

export const sendContactEmail = async (body: ContactsRequest) => {
  const mailOptions = {
    from: 'neeraj.sachin2024@gmail.com',
    to: 'neeraj.r@valoriz.com',
    subject: `Valoriz : New Message From- ${body?.firstName} ${body?.lastName}`,
    html: getContactTemplate(body)
  };

  // Send the email
  return await sendEmailToGateway(mailOptions);
}

export const sendJobApplicationEmail = async (body: CareerRequest, resume?: Express.Multer.File) => {
  if (!resume) return false;
  const mailOptions = {
    from: 'neeraj.sachin2024@gmail.com',
    to: 'neeraj.r@valoriz.com',
    subject: `Valoriz : ${body?.role} - Job Application Received `,
    html: getCareerTemplate(body),
        attachments: [
      {
        filename: resume.originalname,
        content: resume.buffer,        
        contentType: resume.mimetype,
      },
    ],
  };

  // Send the email
  return await sendEmailToGateway(mailOptions);
}