import image from "../assets/asset/Image.png";
import star from "../assets/asset/star4.png";
import background_image from "../assets/asset/bg.png";
import { Button } from "./Button";

const HeroSection = () => {
  const content = {
    title: "Good Food Us Good Mood",
    body: " I would think that conserving our natural resources should be a conservative position: Not to waste food, and not to throw away a lot of the food that we buy.",
  };

  return (
    <>
      <div
        className={`bg-repeat`}
        style={{ backgroundImage: `url(${background_image} )` }}
      >
        <div className={`container py-8 md:py-14`}>
          <div className={`flex flex-wrap items-center`}>
            <div className={`w-full md:w-1/2`}>
              <div className={`relative md:px-20 pb-10`}>
                <div
                  className={`text-MobileHeading md:text-Heading font-medium leading-none text-primary_green pb-7`}
                >
                  {content.title}
                </div>
                <div className={`leading-relaxed text-medium md:text-body tracking-wide  text-light_gray1 pb-7`} >
                  {content.body}
                </div>
                <div className={`flex gap-x-2`}>
                  <Button
                    className={`bg-primary_green py-4 text-xs md:text-lowest shadow-lg text-netral_white`}
                  >
                    Daftar Sekarang
                  </Button>
                  <Button className={`bg-light_gray2 py-4 text-xs md:text-lowest`}>About Us</Button>
                </div>
              </div>
            </div>
            <div className={`flex md:justify-center w-full md:w-1/2`}>
              <div>
                <Review />
              </div>
              <div className="flex items-center justify-center bg-[#F7F7F7] rounded-full h-[249px] w-[249px] md:h-[518px] md:w-[518px]">
                <div className="flex md:justify-center h-[198px] w-[198px] md:h-[412px] md:w-[412px]">
                  <img src={image} alt="bg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

function Review() {
  return (
    <div className="py-5 px-3 w-[255px] md:py-6 md:px-6 md:w-[392px] ml-28  md:-ml-48  flex gap-x-5 justify-start float-left bg-white/50 shadow-md backdrop-blur rounded-2xl bottom-0 md:bottom-9 absolute">
      <img className="w-12 md:w-20 bg-cover" src={image} alt="review" />
      <div className="flex flex-col ">
        <span className="text-sm md:text-xl font-medium">Green Salad Tomato</span>
        <p className="text-xs pt-1 text-light_gray1  md:text-base">Tomato</p>
        <img className="w-8 pt-1 md:w-20" src={star} alt="review" />
      </div>
    </div>
  );
}

export default HeroSection;
