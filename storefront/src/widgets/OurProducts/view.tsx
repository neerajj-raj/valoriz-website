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
import Icon from "@core/icon/Icon";
import Button from "@core/button/Button";
import { hasArrayElements } from "@utils/commonUtils";
import ArrowRight from "@app/common/icons/ArrowRight";

interface OurProductsViewProps {
  ourProducts: Record<string, any>;
}

const OurProductsView: FC<OurProductsViewProps> = ({ ourProducts }) => {
  return (
    <section className="py-16 xl:py-26">
      <div className="container">
        <h2 className="text-h4 xl:text-h2">{ourProducts?.title}</h2>
        <div className="grid xl:grid-cols-2 gap-y-12 xl:gap-y-26 gap-x-6 mt-16 xl:mt-26">
          {hasArrayElements(ourProducts?.products) &&
            ourProducts?.products?.map((product: Record<string, any>) => (
              <div className="border-b xl:border-b-0 border-gray-light last:border-b-0 pb-12 xl:pb-0" key={product?.name}>
                <Image src={product?.logo} alt={product?.name} width={145} height={38} />
                <p className="text-h6 mt-8">{product?.description}</p>
                <Link href={product?.link} className="flex items-center text-sm pt-6">
                  Learn More <Icon src={ArrowRight} className="ms-1" size="sm" />
                </Link>
              </div>
            ))}
        </div>
        <div className="flex justify-center mt-16 xl:mt-26">
          <Button className="flex items-center justify-center" variant="outline-secondary">
            <span className="me-2">View All Products</span>
            <Icon src={ArrowRight} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default OurProductsView;
