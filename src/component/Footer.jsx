import React from "react";
import logo from "../assets/asset/logo.png";
import { IconBrandInstagram, IconMail, IconPhone } from "@tabler/icons-react";
import { Button } from "./Button";

export const Footer = () => {
  return (
    <div className="py-14">
      <div className="container md:px-20">
        <div className="flex flex-wrap gap-x-5 md:grid md:grid-cols-4 text-light_gray1 bg-accent_green rounded-md p-4 md:p-16">
          {/* grid col 1 */}
          <div className={`flex flex-wrap gap-y-3 md:gap-y-8 pb-5 md:pb-0`}>
            <img src={logo} alt="elemes.id" />
            <div className="pt-4">
              Jl. Prof. DR. Satrio No.7, RT.3/RW.3, Karet Kuningan, Kecamatan
              Setiabudi, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta
              12950
            </div>
            <div className="flex gap-x-4">
              <button
                className="
              hover:scale-100  
              hover:rounded-full 
              p-2 
              hover:transition-all 
              hover:ease-in-out 
              hover:duration-150     
              hover:bg-primary_green"
              >
                <IconMail className=" stroke-primary_green hover:stroke-netral_white" />
              </button>

              <div
                className="
              hover:scale-100  
              hover:rounded-full 
              p-2 
              hover:transition-all 
              hover:ease-in-out 
              hover:duration-150     
              hover:bg-primary_green"
              >
                <IconPhone className=" stroke-primary_green hover:stroke-netral_white" />
              </div>

              <div
                className="
              hover:scale-100  
              hover:rounded-full 
              p-2 
              hover:transition-all 
              hover:ease-in-out 
              hover:duration-150     
              hover:bg-primary_green"
              >
                <IconBrandInstagram className=" stroke-primary_green hover:stroke-netral_white" />
              </div>
            </div>
          </div>
          {/* grid col 2 */}
          <div className="flex justify-center md:gap-y-6">
            <div>
              <h1 className="font-bold text-body text-slate-800">Categories</h1>
              <div className=" mt-3 md:mt-7 flex justify-start flex-col gap-y-2 md:gap-y-4">
                <span>Cupcake</span>
                <span>Pizaa</span>
                <span>Kebab</span>
                <span>Salmon</span>
                <span>Dougnut</span>
              </div>
            </div>
          </div>
          {/* grid col 3 */}
          <div className="flex md:px-8 justify-start gap-y-6">
            <div>
              <h1 className="font-bold text-body text-slate-800">About Us</h1>
              <div className="mt-3 md:mt-7 flex justify-start flex-col gap-y-2 md:gap-y-4">
                <span>About Us</span>
                <span>FAQ</span>
                <span>Report Problem</span>
              </div>
            </div>
          </div>
          {/* grid col 4 */}
          <div className="flex justify-center pt-5 md:pt-0 gap-y-6">
            <div>
              <h1 className="font-bold text-body text-slate-800">Newsletter</h1>
              <div className="mt-3 md:mt-7 flex justify-start flex-col gap-y-4">
                <span className="text-light_gray1">
                  Get now free 50% discount for alll products on your first
                  order
                </span>
                <div className="flex">
                    <input type="email" placeholder="Your Email Addres" className="py-3 px-2 md:px-5 rounded-l-lg border-primary_green" />
                    <Button className={`rounded-none rounded-r-lg text-netral_white bg-primary_green hover:bg-light_gray1`}>Send</Button>
                </div>
                <div className="flex gap-x-3">
                    <IconMail className={`stroke-primary_green`}/>
                    <span>elemesid@gmail.com</span>
                </div>
                <div className="flex gap-x-3">
                    <IconPhone className={`stroke-primary_green`}/>
                    <span> 0888 1111 2222 </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
