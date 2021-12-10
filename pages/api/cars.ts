// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export type Car = {
  id: number;
  make: string;
  model: string;
  mileage: number;
  year: number;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Car[]>
) {
  res.status(200).json([
    {
      id: 1,
      make: "Ford",
      model: "Fiesta",
      mileage: 10000,
      year: 2018,
    },
    {
      id: 2,
      make: "Ford",
      model: "Focus",
      mileage: 40,
      year: 2021,
    },
    {
      id: 3,
      make: "Chevorlet",
      model: "Corvette",
      mileage: 10,
      year: 2021,
    },
    {
      id: 4,
      make: "Chevorlet",
      model: "Colorado",
      mileage: 50000,
      year: 2016,
    },
  ]);
}
