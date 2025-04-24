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
import OurPartnersView from "@widgets/OurPartners/view";

interface OurPartnersProps {
  ourPartners: Record<string, any>;
}

const OurPartners: FC<OurPartnersProps> = ({ ourPartners }) => {
  return <OurPartnersView ourPartners={ourPartners} />;
};

export default OurPartners;
