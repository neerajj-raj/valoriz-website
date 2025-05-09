"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
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
const express_1 = __importDefault(require("express"));
const email_1 = require("./handler/email");
const app = (0, express_1.default)();
const port = 8080;
app.use(express_1.default.json());
app.post('/email/contact-us', async (req, res) => {
    const isSented = await (0, email_1.sendContactEmail)(req?.body);
    isSented ? res.status(200).send("Email sented") : res.status(500).send("Something went wrong");
});
// Start server
app.listen(port, () => {
    console.log(`Express server running at http://localhost:${port}`);
});
