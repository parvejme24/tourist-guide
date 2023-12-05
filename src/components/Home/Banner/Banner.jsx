import { Button } from "keep-react";
import React from "react";

const Banner = () => {
  return (
    <div class="bg-[url('https://cdn.content.tuigroup.com/adamtui/2023_7/5_8/5d6fff6b-0ea4-4133-905f-b0360086db56/LOC_000122_shutterstock_1473983906_Majorca_FC_blogWebOriginalCompressed.jpg?i10c=img.resize(width:1920);img.crop(width:1920,height:650)')] bg-[#00000054] bg-blend-overlay bg-no-repeat bg-cover bg-center h-[400px]">
      <div className="container mx-auto flex items-center justify-start h-full">
        <div className="space-y-3 md:w-3/4 lg:w-1/2">
          <h3 className="text-2xl font-semibold uppercase text-center md:text-left text-white">
            Welcome to Travely
          </h3>
          <h2 className="md:text-5xl lg:text-6xl font-bold text-4xl text-white text-center md:text-left">
            Showing You The World, One Country At A Time
          </h2>
          <Button className="mx-auto md:mx-0" size="md" type="outlinePrimary">
            Explore More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
