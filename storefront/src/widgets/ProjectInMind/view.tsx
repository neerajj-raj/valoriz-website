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
import IconMail from "@app/common/icons/IconMail";
import Button from "@core/button/Button";
import Icon from "@core/icon/Icon";
import { hasArrayElements } from "@utils/commonUtils";
import Image from "next/image";
import { FC } from "react";

interface ProjectInMindViewProps {
  projectInMind: Record<string, any>;
}

const ProjectInMindView: FC<ProjectInMindViewProps> = ({ projectInMind }) => {
  return (
    <section className="py-16 xl:py-26 bg-light-gradient">
      <div className="container">
        <h2 className="text-h4 xl:text-h2">{projectInMind?.title}</h2>
        <h5 className="text-h6 xl:text-h5 mt-4">{projectInMind?.description}</h5>
        <div className="flex xl:justify-evenly flex-col xl:flex-row flex-wrap my-24 space-y-16 xl:space-y-0">
          {hasArrayElements(projectInMind?.countries) &&
            projectInMind?.countries?.map((country: Record<string, any>) => (
              <div className="flex items-start xl:items-center space-x-6" key={country?.name}>
                <Image src={country?.flag} width={64} height={64} alt={country?.name} />
                <div>
                  <p className="text-h6">{country?.name}</p>
                  <p className="text-h5">
                    <span className="text-gray-600">{country?.countryCode}</span> {country?.phoneNo}
                  </p>
                </div>
              </div>
            ))}
        </div>
        <div className="flex justify-center flex-wrap space-y-8 xl:space-y-0 xl:space-x-8">
          <a href={`mailto:${projectInMind?.email?.mailId}`}>
            <Button className="flex items-center justify-center w-full xl:w-auto" variant="outline-secondary">
              <Icon src={IconMail} />
              <span className="ms-2">{projectInMind?.email?.title}</span>
            </Button>
          </a>
          <Button className="flex items-center justify-center w-full xl:w-auto">
            <span className="me-2">Request A Quote</span>
            <Icon src={ArrowRight} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectInMindView;
