import Image from "next/image";
import React from "react";

const Celebrities = () => {
  return (
    <div className="my-12 max-w-[1440px] rounded-xl bg-slate-900 p-4 mx-auto">
      <h1 className="text-4xl mb-10">Famous Celebrities</h1>
      <div className="flex gap-6">
        <div className="max-w-1/3 flex-1 flex flex-col items-center">
          <Image
            width={300}
            height={300}
            src="https://picsum.photos/id/64/300/300"
            alt=""
            className="rounded-full"
          />
          <h3 className="text-xl font-bold my-6">Benedict Cumberbatch</h3>
          <p>
            Benedict Timothy Carlton Cumberbatch CBE is an English actor. Known
            for his work on screen and stage, he has received various accolades,
            including a BAFTA TV Award, a Primetime Emmy Award and a Laurence
            Olivier Award, in addition to nominations for two Academy Awards,
            two BAFTA Film Awards and four Golden Globes.
          </p>
        </div>
        <div className="max-w-1/3 flex-1 flex flex-col items-center">
          <Image
            width={300}
            height={300}
            src="https://picsum.photos/id/64/300/300"
            alt=""
            className="rounded-full"
          />
          <h3 className="text-xl font-bold my-6">Benedict Cumberbatch</h3>
          <p>
            Benedict Timothy Carlton Cumberbatch CBE is an English actor. Known
            for his work on screen and stage, he has received various accolades,
            including a BAFTA TV Award, a Primetime Emmy Award and a Laurence
            Olivier Award, in addition to nominations for two Academy Awards,
            two BAFTA Film Awards and four Golden Globes.
          </p>
        </div>
        <div className="max-w-1/3 flex-1 flex flex-col items-center">
          <Image
            width={300}
            height={300}
            src="https://picsum.photos/id/64/300/300"
            alt=""
            className="rounded-full"
          />
          <h3 className="text-xl font-bold my-6">Benedict Cumberbatch</h3>
          <p>
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
