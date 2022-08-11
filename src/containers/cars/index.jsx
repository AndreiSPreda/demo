import React from "react";
import { Cascader } from "antd";
import {locations, cars } from "./options";
export default function Cars() {
  return <Cascader cars={cars} locations={locations} />;
}