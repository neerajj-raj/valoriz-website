"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendContactEmail = void 0;
const nodemailer = require('nodemailer');
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const mailtrapToken = process.env.MAILTRAP_TOKEN || "";
const contactTemplateId = process.env.CONTACT_TEMPLATE_ID ?? "";
const contactToEmail = process.env.CONTACT_TO_EMAIL ?? "";
var transport = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "98663c56d9927b",
        pass: "cc014126d7ab5f"
    }
});
const sendContactEmail = async (body) => {
    const mailOptions = {
        from: 'neeraj.sachin2024@gmail.com',
        to: 'neeraj.r@valoriz.com',
        subject: 'Sending Email using Node.js',
        text: 'That was easy!'
    };
    // Send the email
    transport.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log('Error:', error);
        }
        else {
            console.log('Email sent:', info.response);
        }
    });
    return true;
};
exports.sendContactEmail = sendContactEmail;
