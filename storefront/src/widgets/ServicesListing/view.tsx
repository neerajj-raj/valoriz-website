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
import Image from "next/image";
import { hasArrayElements } from "@utils/commonUtils";
import OurDeliveries from "./components/OurDeliveries";

interface ServicesViewProps {
  services: Record<string, any>;
}

const ServicesView: FC<ServicesViewProps> = ({ services }) => {
  return (
    <>
      <section className="py-6 xl:py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4 xl:gap-8">
            {hasArrayElements(services?.ourServices) &&
              services?.ourServices?.map((each: Record<string, any>) => (
                <Link href={each?.link} key={each?.title}>
                  <div className="h-full rounded text-center bg-gray-100 hover:bg-gray-200 duration-300 py-16 px-8">
                    <Image src={each?.media} width={200} height={200} alt={each?.title} className="ml-auto mr-auto" />
                    <h3 className="text-xl lg:text-h2 mt-8">{each?.title}</h3>
                    <h4 className="lg:text-xl mt-2 lg:mt-4">{each?.description}</h4>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
      <OurDeliveries deliveries={services?.deliveries} />
    </>
  );
};

export default ServicesView;
