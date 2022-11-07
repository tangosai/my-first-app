import { useState } from "react";
import Layout from "../components/layout";
import Services from "../components/services";

export default function Home() {
  const [num, setNum] = useState(true);

  const increment = () => {
    setNum(flase);
  };
  const decrement = () => {
    if (num >= 0) {
      setNum(num - 1);
    } else setNum(0);
  };
  return (
    <>
      <Layout>
        {/* <Services /> */}
        <h3 className="text-3xl font-semibold mb-2 text-red-600">1</h3>
        <button
          className="mb-20 px-3 py-2 text-white bg-slate-800 block-inline"
          onClick={increment}
        >
          +
        </button>
        <button
          className="mb-20 px-3 py-2 text-white bg-slate-800 block-inline"
          onClick={decrement}
        >
          -
        </button>
      </Layout>
    </>
  );
}
