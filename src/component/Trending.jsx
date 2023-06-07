import React from "react";
import { Card } from "./Card";
import Data from "./Data.json";
import { Button } from "./Button";

export const Trending = () => {
  return (
    <div className={`container py-10 md:py-32`}>
      <div className={`mx-auto md:px-20`}>
        <span
          className={`text-MobileSubHeading md:text-SubHeading font-medium`}
        >
          Browser Our Trending
          <p className={`text-primary_green`}>Receipt</p>
        </span>
        <div
          className={`flex gap-2 flex-wrap justify-center md:justify-start items-center pt-10`}
        >
          {Data &&
            Data.map((data, id) => {
              return (
                <div
                  className="rounded-lg"
                  style={{ backgroundColor: data.color }}
                >
                  <div key={id} className={`px-4 w-[300px] py-8`}>
                    <Card.Img>
                      <img src={data.image} alt="image" />
                    </Card.Img>
                    <Card.Text>{data.name}</Card.Text>
                    <Card.Item>{data.category}</Card.Item>
                    <Card.Any>
                      <img src={data.icon} alt="rating" />
                    </Card.Any>
                  </div>
                </div>
              );
            })}
        </div>
        <div className="flex mt-10 justify-center">
          <Button>All Receipt</Button>
        </div>
      </div>
    </div>
  );
};
