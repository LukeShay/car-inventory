import type { NextPage } from "next";
import { useState, useEffect } from "react";
import { Car } from "./api/cars";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const [cars, setCars] = useState<Car[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    async function run() {
      const res = await fetch("/api/cars");

      setCars(await res.json());
      setLoading(false);
    }

    if (loading) {
      run();
    }
  }, []);

  if (loading) {
    return <div>loading</div>;
  }

  return (
    <main className={styles.wrapper}>
      <input
        className={styles.input}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul className={styles.carList}>
        {cars
          .filter(
            ({ make, model, mileage, year }) =>
              make.toLowerCase().includes(search.toLowerCase()) ||
              String(mileage).toLowerCase().includes(search.toLowerCase()) ||
              String(year).toLowerCase().includes(search.toLowerCase()) ||
              model.toLowerCase().includes(search.toLowerCase())
          )
          .map(({ id, make, model, mileage, year }) => (
            <li key={id} className={styles.carListElement}>
              <div>
                <strong>Year:</strong> {year}
              </div>
              <div>
                <strong>Make:</strong> {make}
              </div>
              <div>
                <strong>Model:</strong> {model}
              </div>
              <div>
                <strong>Mileage:</strong> {mileage}
              </div>
            </li>
          ))}
      </ul>
    </main>
  );
};

export default Home;
