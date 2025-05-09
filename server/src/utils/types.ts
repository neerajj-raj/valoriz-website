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
export interface ContactsRequest {
  firstName: string;
  lastName: string;
  email: string;
  dialCode: string;
  phoneNo: string;
  projectIdea: string;
}

export interface CareerRequest {
  firstName: string;
  lastName: string;
  email: string;
  dialCode: string;
  phoneNo: string;
  about: string;
  role: string;
}