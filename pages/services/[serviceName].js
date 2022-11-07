import Link from "next/link";
import React from "react";
import Layout from "../../components/layout";
import { useRouter } from "next/router";

const ServiceName = () => {
  const router = useRouter();
  const { serviceName } = router.query;
  return (
    <>
      <Layout>
        <div className=" px-2 max-w-screen-xl mx-auto mt-10">
          <Link
            href="/"
            className="mb-20 px-3 py-2 text-white bg-slate-800 block-inline"
          >
            Go back
          </Link>
          <h1 className="text-4xl mt-10">{serviceName}</h1>
        </div>
      </Layout>
    </>
  );
};

export default ServiceName;
