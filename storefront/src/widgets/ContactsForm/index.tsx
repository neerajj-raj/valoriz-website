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
import { FC } from "react";
import ContactsFormView from "@widgets/ContactsForm/view";

interface ContactsFormProps {
  contents?: Record<string, any>;
}

const ContactsForm: FC<ContactsFormProps> = ({ contents }) => {
  // const handleFormSubmit = async (formData: FormData) => {
  //   "use server";

  //   const request = {
  //     firstName: formData.get("firstName"),
  //     lastName: formData.get("lastName"),
  //     email: formData.get("email"),
  //     mobile: formData.get("mobile"),
  //     message: formData.get("message"),
  //   };
  //   console.info("request", request);
  //   await new Promise((res) => setTimeout(res, 100000));
  //   console.info("request submitted");
  // };
  return <ContactsFormView contents={contents} />;
};

export default ContactsForm;
