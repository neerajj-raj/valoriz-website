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
import Link from "next/link";
import Icon from "@core/icon/Icon";
import IconMail from "@app/common/icons/IconMail";
import Telephone from "@app/common/icons/Telephone";

interface FooterNavProps {
  contents?: Record<string, any>;
}

const FooterNav: FC<FooterNavProps> = ({}) => {
  return (
    <div className="grid grid-cols-2 xl:grid-cols-4 grid-auto-cols-[30%] gap-x-4 gap-y-14 mt-12 text-white">
      <div className="col-span-2 xl:col-span-1">
        <h6 className="text-h6">Registered Office</h6>
        <div className="mt-6">
          <p>T5, 7th floor </p>
          <p>Tejaswini Building,</p>
          <p>Technopark, Trivandrum, India</p>
        </div>
        <div className="mt-8">
          <p>3rd Floor</p>
          <p>Thapasya Building</p>
          <p>Infopark, Ph-1</p>
          <p>Kochi, India</p>
        </div>
        <div className="mt-8">
          <p>704-A</p>
          <p>Aspin commercial tower</p>
          <p>Sheikh Zayed Road</p>
          <p>Dubai, UAE</p>
        </div>
        <div className="flex items-center text-md mt-8 xl:mt-12">
          <span className="me-4">
            <Icon src={Telephone} variant="white" />
          </span>
          <Link href="tel:+91 471 270 0666">+91 471 270 0666</Link>
        </div>
        <div className="flex items-center text-md mt-6 xl:mt-8">
          <span className="me-4">
            <Icon src={IconMail} variant="white" />
          </span>
          <Link href="mailto:info@valoriz.com">info@valoriz.com</Link>
        </div>
      </div>
      <div className="col-span-2 xl:col-span-1">
        <div className="flex xl:block flex-wrap space-x-4 xl:space-x-0">
          <div>
            <h6 className="text-h6">Company</h6>
            <div>
              <Link className="block xl:text-md mt-6" href=" ">
                About Us
              </Link>
              <Link className="block xl:text-md mt-6" href=" ">
                Works
              </Link>
              <Link className="block xl:text-md mt-6" href=" ">
                Our Clients
              </Link>
              <Link className="block xl:text-md mt-6" href=" ">
                Awards and Recognitions
              </Link>
              <Link className="block xl:text-md mt-6" href=" ">
                Careers
              </Link>
              <Link className="block xl:text-md mt-6" href=" ">
                Life At Valoriz
              </Link>
              <Link className="block xl:text-md mt-6" href=" ">
                Download Brochure
              </Link>
            </div>
          </div>
          <div className="xl:mt-16">
            <h6 className="text-h6">More</h6>
            <div>
              <Link className="block xl:text-md mt-6" href=" ">
                Blogs
              </Link>
              <Link className="block xl:text-md mt-6" href=" ">
                Podcasts
              </Link>
              <Link className="block xl:text-md mt-6" href=" ">
                Webinars
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h6 className="text-h6">Services</h6>
        <div>
          <Link className="block xl:text-md mt-6" href=" ">
            Digital Commerce
          </Link>
          <Link className="block xl:text-md mt-6" href=" ">
            Data Analytics
          </Link>
          <Link className="block xl:text-md mt-6" href=" ">
            Mobile Applications
          </Link>
          <Link className="block xl:text-md mt-6" href=" ">
            AI & ML
          </Link>
          <Link className="block xl:text-md mt-6" href=" ">
            Enterprise Software
          </Link>
          <Link className="block xl:text-md mt-6" href=" ">
            QA & Testing
          </Link>
          <Link className="block xl:text-md mt-6" href=" ">
            Cloud Modernization
          </Link>
          <Link className="block xl:text-md mt-6" href=" ">
            Product Engineering
          </Link>
          <Link className="block xl:text-md mt-6" href=" ">
            Digital Process Automation
          </Link>
          <Link className="block xl:text-md mt-6" href=" ">
            Digital Experience
          </Link>
        </div>
      </div>
      <div>
        <h6 className="text-h6">Industries</h6>
        <div>
          <Link className="block xl:text-md mt-6" href=" ">
            Distribution
          </Link>
          <Link className="block xl:text-md mt-6" href=" ">
            Retail
          </Link>
          <Link className="block xl:text-md mt-6" href=" ">
            Real Estate
          </Link>
          <Link className="block xl:text-md mt-6" href=" ">
            Hospitality
          </Link>
          <Link className="block xl:text-md mt-6" href=" ">
            Manufacturing
          </Link>
          <Link className="block xl:text-md mt-6" href=" ">
            Edutech
          </Link>
          <Link className="block xl:text-md mt-6" href=" ">
            Entertainment
          </Link>
          <Link className="block xl:text-md mt-6" href=" ">
            Travel & Tourism
          </Link>
          <Link className="block xl:text-md mt-6" href=" ">
            Healthcare
          </Link>
          <Link className="block xl:text-md mt-6" href=" ">
            Fintech
          </Link>
          <Link className="block xl:text-md mt-6" href=" ">
            Brands
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FooterNav;
