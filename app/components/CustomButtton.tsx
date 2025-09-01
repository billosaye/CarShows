"use client";

import React from "react";

import { CustomButttonProps } from "@/types";

const CustomButtton = ({
  title,
  containerStyles,
  handleClick,
  btnType = "button",
  rightIcon,
  textStyles,

  isDisabled = false,
}: CustomButttonProps) => {
  return (
    <button
      disabled={isDisabled}
      type={btnType}
      className={`custom-btn text-white rounded-full mt-10 ${
        containerStyles || ""
      }`}
      onClick={handleClick}
    >
      <span className={`flex-1${textStyles}`}>{title}</span>
    </button>
  );
};

export default CustomButtton;
