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
import express, { Request, Response } from 'express';
import { sendContactEmail } from './handler/email';

const app = express();
const port = 8080;

app.use(express.json());

app.post('/email/contact-us', async (req: Request, res: Response) => {  
  const isSented = await sendContactEmail(req?.body);
  isSented ? res.status(200).send("Email sented"): res.status(500).send("Something went wrong");
});

// Start server
app.listen(port, () => {
  console.log(`Express server running at http://localhost:${port}`);
});
