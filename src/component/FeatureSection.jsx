import React from 'react';

const FeatureSection = () => {
  const features = [
    {
      title: "Watch anywhere",
      description: "Enjoy from the web or with the Video app on your phone, tablet, or select Smart TVs — on up to 3 devices at once.",
      image: "https://images-na.ssl-images-amazon.com/images/G/01/digital/video/Magellan_MLP/PV_Benefits_Devices_UPDATED.png" 
    },
    {
      title: "X-Ray for more",
      description: "Use X-Ray for Movies and TV to identify actors and songs, explore actor bios, view trivia, and more.",
      image: "https://m.media-amazon.com/images/G/01/digital/video/Magellan_MLP/PV_Benefits_X-Ray_UPDATED.png"
    },
    {
      title: "Data saver",
      description: "Control data usage while downloading and watching videos on select phones or tablets.",
      image: "https://images-na.ssl-images-amazon.com/images/G/01/digital/video/Magellan_MLP/PV_Benefits_DataSaver_UPDATED.png"
    }
  ];

  return (
    <div className="bg-black text-white py-16 md:py-24 px-6 md:px-20 border-t border-gray-900">

      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 text-center">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center space-y-4 md:space-y-6 group">

            <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full overflow-hidden flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
               <img 
                src={feature.image} 
                alt={feature.title} 
                className="w-full h-full object-contain" 
              />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold pt-2 md:pt-4 tracking-tight text-white">
              {feature.title}
            </h3>
            <p className="text-[#aaaaaa] text-base md:text-xl leading-relaxed px-2 max-w-sm">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;