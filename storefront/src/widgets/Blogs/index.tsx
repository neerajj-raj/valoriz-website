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
import { CommonProps } from "@lib/types";
import BlogsView from "./view";

interface BlogsProps {
  blogs: CommonProps;
}

const Blogs: FC<BlogsProps> = ({ blogs }) => {
  return <BlogsView blogs={blogs} />;
};

export default Blogs;
