"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import AddBlog from "./add";

export default function Add() {
  return (
    <div>
    <AddBlog onSubmit={()=>{}} />
  </div>
  );
}
