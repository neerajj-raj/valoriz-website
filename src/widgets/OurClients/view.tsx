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
import ArrowRight from "@app/common/icons/ArrowRight";
import Button from "@core/button/Button";
import Icon from "@core/icon/Icon";
import Image from "next/image";
import { FC } from "react";

interface OurClientsViewProps {
  ourClients: Record<string, any>;
}

const OurClientsView: FC<OurClientsViewProps> = ({ ourClients }) => {
  return (
    <section className="py-16 lg:py-26">
      <div className="container">
        <div className="lg:flex">
          <h3 className="text-h4 lg:text-h2">{ourClients?.title}</h3>
          <p className="flex-1 text-h6 lg:text-h4 lg:text-end">{ourClients?.description}</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-16 md:gap-28 justify-between mt-20 lg:mt-30">
          {ourClients?.clients?.map((client: Record<string, any>, index: number) => (
            <div className="flex items-center justify-center" key={`client_${index + 1}`}>
              <Image src={client?.logo} alt={client?.name} width={120} height={60} className="w-full grayscale hover:grayscale-0 transition-all" />
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-24">
          <Button variant="outline-secondary" className="flex items-center">
            <span>View All Clients</span>
            <Icon src={ArrowRight} size="sm" className="ms-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default OurClientsView;
