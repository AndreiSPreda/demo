import React, { useState } from "react";
import CarView from "../../components/CarView";
import { useAppContext } from "../App/context";
import onChange from "react";
import { useEffect } from "react";
import { fetchUsersApi } from "../../api";
import { Cascader } from "antd";
import { cars, locations } from "./options"
import Data from "../../db";



export default function Cars() {
  const [vehicles, setVehicles] = useState(Data.cars);
  const [carType, setCarType] = useState();
  const [location, setLocation] = useState();

  const onCarTypeChange = (type) => {
    console.log(type);
    setCarType(type);
  }
  const onLocationChange = (loc) => {
    console.log();
    setLocation(loc);
  }
  useEffect(() => {
    setVehicles(() => {
      const typeVehicles = Data.cars.filter((vehicle) => {
        if (!carType) {
          return true;
        }

        return carType.includes(vehicle.marca) && carType.includes(vehicle.model);

      });
      const newVehicles = typeVehicles.filter((vehicle) => {
        if (!location) {
          return true;
        }
        return location.includes(vehicle.country) && location.includes(vehicle.city)
      })
      return newVehicles;
    })
  }, [carType, location])

  return (
    <div >
      <br />
      <br />

      <Cascader size="large" options={cars} onChange={onCarTypeChange} />
      <Cascader size="large" options={locations} onChange={onLocationChange} />
      <br />
      <br />
      <CarView cars={vehicles} />
    </div>
  )

};

