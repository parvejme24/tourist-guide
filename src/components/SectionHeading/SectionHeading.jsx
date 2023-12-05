import React from "react";

const SectionHeading = ({ title, subTitle }) => {
  return (
    <div className="bg-[url('https://c4.wallpaperflare.com/wallpaper/855/698/460/science-fiction-cityscape-futuristic-star-wars-wallpaper-preview.jpg')] bg-fixed bg-no-repeat bg-center bg-cover h-[250px] flex justify-center items-center text-white text-center">
      <div>
        <h2 className="text-3xl font-bold mb-3">{title}</h2>
        <p>{subTitle}</p>
      </div>
    </div>
  );
};

export default SectionHeading;
