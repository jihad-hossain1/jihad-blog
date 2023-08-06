"use client";

import Categories from "@/components/HomePage/Categories";
import PopularProducts from "@/components/HomePage/PopularProducts";
import { Suspense } from "react";
import { Dna } from "react-loader-spinner";

// import Categories from "@/components/HomePage/Categories";
export const revalidate = 5;
const HomePage = () => {
  return (
    <main className="container mx-auto">
      <Categories></Categories>
      <Suspense
        fallback={
          <div className="flex justify-center items-center">
            <Dna
              visible={true}
              height="80"
              width="80"
              ariaLabel="dna-loading"
              wrapperStyle={{}}
              wrapperClass="dna-wrapper"
            />
          </div>
        }
      >
        <PopularProducts></PopularProducts>
      </Suspense>
    </main>
  );
};

export default HomePage;
