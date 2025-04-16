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
import Image from "next/image";
import Icon from "@core/icon/Icon";
import Button from "@core/button/Button";
import CopyRight from "./components/CopyRight";
import FooterNav from "./components/FooterNav";
import Whatsapp from "@app/common/icons/Whatsapp";
import InstantScroll from "@components/InstantScroll";

interface FooterViewProps {
  footerContents: Record<string, any>;
}

const FooterView: FC<FooterViewProps> = ({ footerContents }) => {
  return (
    // TODO to add hide footer for sitemap
    <footer className="bg-black py-16 xl:pt-26">
      <div className="container">
        <div className="grid grid-cols-1">
          <div>
            <Image src="/images/common/valoriz-logo-white.svg" width={203} height={48} alt="Valoriz" />
            <p className="text-gray-600 text-md font-normal mt-4">Raising values through collaboration!</p>
          </div>
          <FooterNav />
          <div className="flex text-white justify-between items-center my-24 xl:my-16">
            <div className="w-full xl:w-auto">
              <Button
                className="flex items-center w-full h-16 text-[#139A53] text-xl font-semibold border border-[#139A53] hover:bg-[#139A53] hover:text-white"
                variant="secondary"
              >
                <Icon className="me-4" size="lg" src={Whatsapp} />
                Connect us via WhatsApp
              </Button>
            </div>
            <div className="hidden xl:block">
              <InstantScroll />
            </div>
          </div>
        </div>
        <CopyRight copyRights={footerContents?.copyRights} />
        <div className="xl:hidden text-center mt-24">
          <InstantScroll />
        </div>
      </div>
    </footer>
  );
};

export default FooterView;
