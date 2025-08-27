"use client"

import React from 'react'

import { CustomButttonProps } from '@/types'

const CustomButtton = ({ title, containerStyles, handleClick }: CustomButttonProps) => {
  return (
    <button
      disabled={false}
      type={'button'}
      className={`custom-btn ${containerStyles}`}
      onClick={()=>{handleClick}}
    >
      <span className={`flex-1`}>{title}</span>
    </button>
  )
}

export default CustomButtton

