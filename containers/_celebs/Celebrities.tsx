import Image from "next/image";
import React from "react";

const Celebrities = () => {
  return (
    <div className="my-24 max-w-[1440px] rounded-xl bg-slate-900 p-4 mx-auto">
      <h1 className="text-4xl mb-10">Famous Celebrities</h1>
      <div className=" grid grid-cols-1 sm:grid-cols-2 place-items-center	lg:grid-cols-4 gap-4">
        <div className="flex flex-col items-center max-w-md">
          <Image
            width={200}
            height={200}
            src="https://picsum.photos/id/64/300/300"
            alt=""
            className="rounded-full"
          />
          <h3 className="text-xl font-bold my-6">Benedict Cumberbatch</h3>
          <p className="px-4 line-clamp-2">
            Benedict Timothy Carlton Cumberbatch CBE is an English actor. Known
            for his work on screen and stage, he has received various accolades,
            including a BAFTA TV Award, a Primetime Emmy Award and a Laurence
            Olivier Award, in addition to nominations for two Academy Awards,
            two BAFTA Film Awards and four Golden Globes.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <Image
            width={200}
            height={200}
            src="https://picsum.photos/id/64/300/300"
            alt=""
            className="rounded-full"
          />
          <h3 className="text-xl font-bold my-6">Benedict Cumberbatch</h3>
          <p className="px-4 line-clamp-2">
            Benedict Timothy Carlton Cumberbatch CBE is an English actor. Known
            for his work on screen and stage, he has received various accolades,
            including a BAFTA TV Award, a Primetime Emmy Award and a Laurence
            Olivier Award, in addition to nominations for two Academy Awards,
            two BAFTA Film Awards and four Golden Globes.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <Image
            width={200}
            height={200}
            src="https://picsum.photos/id/64/300/300"
            alt=""
            className="rounded-full"
          />
          <h3 className="text-xl font-bold my-6">Benedict Cumberbatch</h3>
          <p className="px-4 line-clamp-2">
            Benedict Timothy Carlton Cumberbatch CBE is an English actor. Known
            for his work on screen and stage, he has received various accolades,
            including a BAFTA TV Award, a Primetime Emmy Award and a Laurence
            Olivier Award, in addition to nominations for two Academy Awards,
            two BAFTA Film Awards and four Golden Globes.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <Image
            width={200}
            height={200}
            src="https://picsum.photos/id/64/300/300"
            alt=""
            className="rounded-full"
          />
          <h3 className="text-xl font-bold my-6">Benedict Cumberbatch</h3>
          <p className="px-4 line-clamp-2">
            Benedict Timothy Carlton Cumberbatch CBE is an English actor. Known
            for his work on screen and stage, he has received various accolades,
            including a BAFTA TV Award, a Primetime Emmy Award and a Laurence
            Olivier Award, in addition to nominations for two Academy Awards,
            two BAFTA Film Awards and four Golden Globes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Celebrities;
