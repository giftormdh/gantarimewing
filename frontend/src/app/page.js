// src/app/page.js
import React from "react";
import Image from "next/image";
import Layout from "./layout";

const Home = () => {
  return (
    <Layout>
      <div className="relative h-screen">
        <Image src="/bg-landing.svg" layout="fill" objectFit="cover" alt="Agritourism Village" />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold">Welcome to Our Agritourism Village</h1>
            <p className="text-2xl mt-4">Immerse Yourself in Green Tourism</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
