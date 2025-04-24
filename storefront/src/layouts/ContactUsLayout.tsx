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
import Header from "@widgets/Header";
import Footer from "@widgets/Footer";
import ServicesListing from "@widgets/ServicesListing";
import ContactsForm from "@widgets/ContactsForm";
import { pageTypes } from "@utils/constants";
import LazyWrapper from "@components/LazyWrapper";

interface ContactUsLayoutProps {
  contents: Record<string, any>;
}

const ContactUsLayout: FC<ContactUsLayoutProps> = ({ contents }) => {
  return (
    <>
      <Header pageType={pageTypes.CONTACT_US} />
      <ContactsForm />
      <LazyWrapper>
        <ServicesListing services={contents} />
        <Footer />
      </LazyWrapper>
    </>
  );
};

export default ContactUsLayout;
