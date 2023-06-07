import React from "react";
import { Card } from "./Card";
import cupcake from "../assets/asset/cupcake.png";
import pizza from "../assets/asset/pizza.png";
import kebab from "../assets/asset/kebab.png";
import salmon from "../assets/asset/salmon.png";
import doughnut from "../assets/asset/doughnut.png";
import { Button } from "./Button";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import "./Category.css";

export const Category = () => {
  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <div>
      <div className={`container py-10 md:py-32`}>
        <div className={`mx-auto md:px-20`}>
          <span className={`text-MobileSubHeading md:text-SubHeading font-medium`}>
            Browser Our Category
            <p className={`text-primary_green`}>Receipt</p>
          </span>
          <div
            id="slider"
            className={`no-scrollbar 
            flex 
            mt-10 
            gap-x-4
            py-10
            whitespace-nowrap 
            text-center 
            scroll  
            overflow-x-scroll 
            scroll-smooth`}
          >
            <div>
              <Card className={`bg-accent_green`}>
                <Card.Img className={`cursor-pointer`}>
                  <img className={`py-[3px]`} src={cupcake} alt="cupcake" />
                </Card.Img>
                <Card.Text>Cupcake</Card.Text>
                <Card.Item>22 Item</Card.Item>
              </Card>
            </div>
            <div>
              <Card className={`bg-accent_blue`}>
                <Card.Img>
                  <img src={pizza} alt="Pizza" />
                </Card.Img>
                <Card.Text>Pizza</Card.Text>
                <Card.Item> 25 Item</Card.Item>
              </Card>
            </div>
            <div>
              <Card className={`bg-accent_purple`}>
                <Card.Img>
                  <img src={kebab} alt="Kebab" />
                </Card.Img>
                <Card.Text>Kebab</Card.Text>
                <Card.Item> 12 Item</Card.Item>
              </Card>
            </div>
            <div>
              <Card className={`bg-accent_red`}>
                <Card.Img>
                  <img src={salmon} alt="Salmon" />
                </Card.Img>
                <Card.Text>Salmon</Card.Text>
                <Card.Item> 22 Item</Card.Item>
              </Card>
            </div>
            <div>
              <Card className={`bg-accent_green_2`}>
                <Card.Img>
                  <img src={doughnut} alt="Doughnut" />
                </Card.Img>
                <Card.Text>doughnut</Card.Text>
                <Card.Item> 22 Item</Card.Item>
              </Card>
            </div>

            <div>
              <Card className={`bg-accent_green`}>
                <Card.Img>
                  <img src={doughnut} alt="Doughnut" />
                </Card.Img>
                <Card.Text>doughnut</Card.Text>
                <Card.Item> 22 Item</Card.Item>
              </Card>
            </div>
            <div>
              <Card className={`bg-accent_green`}>
                <Card.Img>
                  <img src={doughnut} alt="Doughnut" />
                </Card.Img>
                <Card.Text>doughnut</Card.Text>
                <Card.Item> 22 Item</Card.Item>
              </Card>
            </div>
            <div>
              <Card className={`bg-accent_green`}>
                <Card.Img>
                  <img src={doughnut} alt="Doughnut" />
                </Card.Img>
                <Card.Text>doughnut</Card.Text>
                <Card.Item> 22 Item</Card.Item>
              </Card>
            </div>
          </div>
          <div className={`flex gap-x-3 justify-end mt-10`}>
            <Button
              onClick={slideLeft}
              className={`bg-primary_green text-netral_white py-1`}
            >
              <IconChevronLeft className={`bg-netral_white rounded-full stroke-primary_green `} />
              Prev
            </Button>
            <Button
              onClick={slideRight}
              className={`bg-primary_green text-netral_white py-1`}
            >
              Next
              <IconChevronRight className={`bg-netral_white rounded-full stroke-primary_green`} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
