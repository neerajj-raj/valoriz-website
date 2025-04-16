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
import Icon from "@core/icon/Icon";
import Button from "@core/button/Button";
import { hasArrayElements } from "@utils/commonUtils";
import CircleArrowRight from "@app/common/icons/CircleArrowRight";

interface OurDeliveriesProps {
  deliveries: Array<Record<string, any>>;
}

const OurDeliveries: FC<OurDeliveriesProps> = ({ deliveries }) => {
  return (
    hasArrayElements(deliveries) && (
      <section className="bg-gray-light py-6 xl:py-20">
        <div className="container">
          <div className="xl:w-2/3 mx-auto text-center">
            <h2 className="text-h1 xl:text-display2">The Difference We Make</h2>
            <h4 className="text-h4 mt-4">
              The Power of continuous improvement is what we believe in. With bold visions, transformative journeys, and collaborative environments, we pave the
              way for what&apos;s next.
            </h4>
          </div>
          <div className="xl:w-8/12 mx-auto text-center">
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 mt-8 lg:mt-16">
              {deliveries?.map((each: Record<string, any>) => (
                <div
                  className="text-center border border-gray-200 lg:border-0 rounded-xl bg-white px-6 lg:px-10 py-8 lg:py-10 transition-all"
                  key={each?.title}
                >
                  <h3 className="text-h2 lg:text-h1">{each?.title}</h3>
                  <p className="lg:text-lg mt-2">{each?.subTitle}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="text-center mt-8 lg:mt-16">
            <Button variant="outline-secondary" className="flex items-center gap-3 pl-2 mx-auto">
              <Icon src={CircleArrowRight} />
              <span>Know More</span>
            </Button>
          </div>
        </div>
      </section>
    )
  );
};

export default OurDeliveries;
