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

import Icon from "@core/icon/Icon";
import { hasArrayElements } from "@utils/commonUtils";
import Link from "next/link";
import { FC } from "react";

interface CopyRightProps {
  copyRights: Record<string, any>;
}

const CopyRight: FC<CopyRightProps> = ({ copyRights }) => {
  return (
    <div className="flex flex-wrap xl:justify-between">
      <div className="xl:flex w-full xl:w-1/2 text-white">
        <div className="flex items-center justify-center xl:justify-start space-x-6">
          {hasArrayElements(copyRights?.socialMedias) &&
            copyRights?.socialMedias?.map((each: Record<string, any>) => (
              <Link href={each?.link} key={each?.name}>
                <Icon src={each?.logo} variant="gray400" />
              </Link>
            ))}
        </div>
        <div className="flex justify-center space-x-2 xl:ms-12 mt-12 xl:mt-0">
          <Link href=" ">Privacy policy</Link>
          <span className="text-gray-600">|</span>
          <Link href=" ">Terms & Conditions</Link>
        </div>
      </div>
      <div className="w-full xl:w-1/2">
        <p className="text-gray-400 text-center xl:text-end mt-4 xl:mt-0">
          Valoriz <span className="text-gray-600">© 2025 All rights Reserved</span>
        </p>
      </div>
    </div>
  );
};

export default CopyRight;
