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
import { CareerRequest, ContactsRequest } from "./types";

export const getContactTemplate = (request: ContactsRequest) => {
    return ` <html>
    <head>
      <style>
      body {
        font-family: Arial, sans-serif;
        color: #333;
        margin: 0;
        padding: 20px;
        background-color: #f9f9f9;
      }
      .card {
        background-color: #ffffff;
        border-radius: 10px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        margin: 0 auto;
        max-width: 600px;
        padding: 25px;
        text-align: left;
      }
      h1 {
        color: black;
        font-size: 26px;
        margin-bottom: 20px;
        border-bottom: 2px solid #28a745;
        padding-bottom: 10px;
      }
      p {
        font-size: 16px;
        line-height: 1.6;
        margin-bottom: 20px;
        color: #333;
      }
        ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        li {
          margin-bottom: 10px;
          font-size: 15px;
          color: #555;
        }
        strong {
          color: black;
        }
        .message {
          background-color: #f1f1f1;
          padding: 15px;
          border-radius: 5px;
          font-style: italic;
          color: #444;
        }
        .highlight {
          color: #28a745;
          font-weight: bold;
        }
      </style>
    </head>
    <body>
      <div class="card">
        <h1>New Message Received</h1>
        <p>Dear Team,</p>
        <p>A new message has been received from <strong>${request?.firstName} ${request?.lastName}</strong> at <span class="highlight">valoriz.com</span></p>
        <p class="message">Message: <strong>${request?.projectIdea || 'N/A'}</strong></p>
        <ul>
          <li><strong>Email:</strong> ${request?.email || 'N/A'}</li>
          <li><strong>Phone:</strong> ${request?.dialCode} ${request?.phoneNo}</li>
          <li><strong>Sent At:</strong> ${new Date().toLocaleString()}</li>
        </ul>
        <br>
        <p>Best regards,</p>
        <p class="highlight">Valoriz Team</p>
      </div>
    </body>
  </html>`
};


export const getCareerTemplate = (body: CareerRequest, resume?: Express.Multer.File) => {
    return `<html>
      <head>
        <style>
          body {
            font-family: Arial, sans-serif;
            color: #333;
            margin: 0;
            padding: 20px;
            background-color: #f9f9f9;
          }
          .card {
            background-color: #ffffff;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            margin: 0 auto;
            max-width: 600px;
            padding: 25px;
            text-align: left;
          }
          h1 {
            color: black;
            font-size: 26px;
            margin-bottom: 20px;
            border-bottom: 2px solid #28a745;
            padding-bottom: 10px;
          }
          p {
            font-size: 16px;
            line-height: 1.6;
            margin-bottom: 20px;
            color: #333;
          }
          ul {
            list-style: none;
            padding: 0;
          }
          li {
            margin-bottom: 10px;
            font-size: 15px;
            color: #555;
          }
          strong {
            color: black;
          }
          .highlight {
            color: #28a745;
            font-weight: bold;
          }
        </style>
      </head>
      <body>
        <div class="card">
          <h1>New Job Application Received</h1>
          <p>Dear Team,</p>
          <p>A new job application has been received from <strong>${body?.firstName}&nbsp;${body?.lastName || ''}</strong> for the position of <strong>${body.role || 'N/A'}</strong> at <span class="highlight">valoriz.com</span>.</p>
          <ul>
            <li><strong>Email:</strong> ${body?.email}</li>
            <li><strong>Phone:</strong> ${body?.dialCode} ${body?.phoneNo}</li>
            <li><strong>About:</strong> ${body?.about}</li>
            <li><strong>Applied At:</strong> ${new Date().toLocaleString()}</li>
            </ul>
          <br>
          <p>Best regards,</p>
          <p class="highlight">Valoriz Team</p>
        </div>
      </body>
      </html>`
};
