"use server";

import { revalidateTag } from "next/cache";
import { requestHandler } from "../requestHandler";

// get all Vehicle
export const getAllVehicle = async () => {
  const response = await requestHandler<VehicleType[]>("/cars", "GET", {
    next: {
      tags: ["cars"],
    },
  });

  return response;
};

// get single Vehicle
export const getSingleVehicle = async ({ id }: { id: string }) => {
  const response = await requestHandler<VehicleType>(`/cars/${id}`, "GET", {
    next: {
      tags: ["cars"],
    },
  });

  return response;
};

// get Vehicles by category
export const getVehiclesByCategory = async ({ id }: { id: string }) => {
  const response = await requestHandler<VehicleType[]>(
    `/cars/category/${id}`,
    "GET",
    {
      next: {
        tags: ["cars"],
      },
    }
  );

  return response;
};

// save Vehicle into database
export const saveVehicle = async (data: VehicleType) => {
  const response = await requestHandler<VehicleType>("/cars", "POST", {
    body: data,
  });

  if (response.code === "success") {
    revalidateTag("cars");
  }

  return response;
};

// update Vehicle into database
export const updateVehicle = async (params: {
  data: VehicleType;
  id: string;
}) => {
  const { data, id } = params;

  const response = await requestHandler<VehicleType>(`/cars/${id}`, "PUT", {
    body: data,
  });

  if (response.code === "success") {
    revalidateTag("cars");
  }

  return response;
};

// delete Vehicle into database
export const deleteVehicle = async (id: string) => {
  const response = await requestHandler<VehicleType>(`/cars/${id}`, "DELETE");

  if (response.code === "success") {
    revalidateTag("cars");
  }

  return response;
};
