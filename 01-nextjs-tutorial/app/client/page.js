"use client";
import { useState } from "react";

const ClientPage = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1 className="text-7xl font-bold mb-4">{count}</h1>
      <div className="flex justify-between">
      <button className="btn btn-primary" onClick={() => setCount(count + 1)}>
        increase
      </button>
      <button className="btn btn-secondary" onClick={() => setCount(count - 1)}>
        descrease
      </button>
      <button className="btn btn-accent" onClick={() => setCount(count / 2)}>
        divide
      </button>
      <button className="btn btn-warning" onClick={() => setCount(count * 2)}>
        multiply
      </button>
</div>
    </div>
  );
};
export default ClientPage;
