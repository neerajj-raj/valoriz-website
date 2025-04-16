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

interface HighlightsViewProps {
  highlights: Record<string, any>;
}

const HighlightsView: FC<HighlightsViewProps> = ({}) => {
  return (
    <section className="flex flex-col justify-center min-h-screen py-16 lg:py-26">
      <div className="container">
        <div className="w-full lg:w-10/12 mx-auto">
          <h2 className="text-h3 lg:text-h2">
            Turning complexity into simplicity, <br />
            so you can <span className="text-primary">focus on success</span>
          </h2>
        </div>
      </div>
    </section>
  );
};

export default HighlightsView;
