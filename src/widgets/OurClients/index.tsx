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
import OurClientsView from "@widgets/OurClients/view";
import { hasArrayElements } from "@utils/commonUtils";

interface OurClientsProps {
  ourClients: Record<string, any>;
}

const OurClients: FC<OurClientsProps> = ({ ourClients }) => {
  return hasArrayElements(ourClients?.clients) && <OurClientsView ourClients={ourClients} />;
};

export default OurClients;
