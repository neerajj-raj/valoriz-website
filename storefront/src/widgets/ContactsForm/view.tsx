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
"use client";
import { FC } from "react";
import Icon from "@core/icon/Icon";
import Button from "@core/button/Button";
import CircleArrowRight from "@app/common/icons/CircleArrowRight";
import { useFormStatus } from "react-dom";

interface ContactsFormViewProps {
  contents?: Record<string, any>;
  handleFormSubmit?: () => void;
}

const ContactsFormView: FC<ContactsFormViewProps> = ({}) => {
  const { pending } = useFormStatus();
  return (
    <section className="mt-20 py-6 xl:py-20">
      <div className="container">
        <div className="grid xl:grid-cols-2 ">
          <div className="xl:w-[70%]">
            <h3 className="text-h2 xl:text-display2 mb-8">Have A Project In Mind?</h3>
          </div>
          <div>
            <form>
              <div className="flex flex-col md:flex-row md:space-x-4">
                <div className="w-full mb-8">
                  <label className="block font-medium mb-1" htmlFor="first-name">
                    First Name
                  </label>
                  <input
                    className="w-full border border-gray-700 focus:outline-none p-4"
                    type="text"
                    id="name"
                    placeholder="Your First Name"
                    required
                    name="firstName"
                  />
                </div>
                <div className="w-full mb-8">
                  <label className="block font-medium mb-1" htmlFor="last-name">
                    Last Name
                  </label>
                  <input
                    className="w-full border border-gray-700 focus:outline-none p-4"
                    type="text"
                    id="name"
                    placeholder="Your Last Name"
                    required
                    name="lastName"
                  />
                </div>
              </div>
              <div className="flex flex-col md:flex-row md:space-x-4">
                <div className="w-full mb-8">
                  <label className="block font-medium mb-1" htmlFor="mail">
                    Email
                  </label>
                  <input
                    className="w-full border border-gray-700 focus:outline-none p-4"
                    type="mail"
                    id="name"
                    placeholder="Your Email ID"
                    required
                    name="email"
                  />
                </div>
                <div className="w-full mb-8">
                  <label className="block font-medium mb-1" htmlFor="mobile">
                    Mobile
                  </label>
                  <input
                    className="w-full border border-gray-700 focus:outline-none p-4"
                    type="text"
                    id="name"
                    placeholder="Your Mobile Number"
                    required
                    name="mobile"
                  />
                </div>
              </div>
              <div className="w-full mb-8">
                <label className="block font-medium mb-1" htmlFor="mail">
                  Tell Us More About Your Project
                </label>
                <textarea
                  className="w-full border border-gray-700 focus:outline-none p-4"
                  id="message"
                  rows={4}
                  placeholder="Tell Us About Your Project"
                  required
                  name="message"
                />
              </div>
              <Button variant="outline-secondary" className="items-center gap-3 pl-2 inline-flex transition-all duration-300" disabled={pending} type="submit">
                {pending ? (
                  <>Submitting</>
                ) : (
                  <>
                    <Icon src={CircleArrowRight} size="lg" />
                    Send Enquiry
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactsFormView;
