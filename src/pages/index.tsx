import axios from "axios";
import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("");

  const addProduct = async () => {
    try {
      const productInfo = {
        name,
      };
      console.log("object", productInfo);
      const res = await axios.post("/api/products", productInfo);
    } catch (error) {
      console.log(error);
    }
  };

  const getUser = async () => {
    try {
      const res = await axios.get("/api/users");
      console.log("res", res);
    } catch (error) {
      console.log(error);
    }
  };

  console.log("tetettetetee");

  return (
    <>
      <div>
        <input
          className="border-2 outline-none"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
      </div>
      <button onClick={getUser} className="border-2">
        Click me
      </button>
    </>
  );
}
