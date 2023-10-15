import { useLoaderData } from "react-router-dom";
import "./App.css";
import CoffeeCard from "./components/CoffeeCard";
import { useState } from "react";

function App() {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);
  return (
    <>
      <h1 className=" text-4xl mt-10 text-center text-purple-600">
        Hot Hot Cold Coffee {coffees.length}
      </h1>

      <div className=" grid grid-cols-2 gap-5 mt-20 mb-10">
        {coffees.map((coffee) => (
          <CoffeeCard key={coffee._id} coffee={coffee} coffees={coffees} setCoffees={setCoffees}></CoffeeCard>
        ))}
      </div>
    </>
  );
}

export default App;
