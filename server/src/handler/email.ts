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

const nodemailer = require('nodemailer');
import { ContactsRequest } from "../utils/types";
import dotenv from "dotenv";

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

export const sendContactEmail = async (body: ContactsRequest) => {
    const mailOptions = {
        from: 'neeraj.sachin2024@gmail.com',
        to: 'neeraj.r@valoriz.com',
        subject: 'Sending Email using Node.js',
        text: 'That was easy!'
      };
      
      // Send the email
      transport.sendMail(mailOptions, function(error: any, info: any){
        if (error) {
          console.log('Error:', error);
        } else {
          console.log('Email sent:', info.response);
        }
      });
      return true;
}