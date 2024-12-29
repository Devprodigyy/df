import React from "react";

const cardData = [
  {
    id: 1,
    title: "Video Editing",
    description: "This is the first card description.",
    image: "https://plus.unsplash.com/premium_photo-1663040316559-8684ca45d7e9?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    title: "Graphic Design",
    description: "This is the second card description.",
    image: "https://plus.unsplash.com/premium_photo-1661281347096-4a250151f422?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    title: "Website Development",
    description: "This is the third card description.",
    image: "https://plus.unsplash.com/premium_photo-1678566153919-86c4ba4216f1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    title: "Logo Design",
    description: "This is the fourth card description.",
    image: "https://plus.unsplash.com/premium_photo-1726873328193-2fcde532707f?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    title: "Digital Marketing",
    description: "This is the third card description.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGRpZ2l0YWwlMjBtYWtldGluZ3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 4,
    title: "SEO",
    description: "This is the fourth card description.",
    image: "https://images.unsplash.com/photo-1543286386-2e659306cd6c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  
 
];

const Card = () => {
  return (
    <div className="p-6 min-h-[60vh] xl:w-[80%] mx-auto">
      <h1 className="text-[4vh] font-bold mb-6 text-center text-black">Responsive Cards</h1>
      <div className="flex flex-wrap justify-center gap-6 ">
        {cardData.map((card) => (
          <div
            key={`${card.id}-${card.title}`}
            className="w-[80%] sm:w-[60%] flex flex-col bg-white p-2 shadow-md rounded-lg overflow-hidden hover:scale-105 md:w-80 border-[2px] border-black"
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4 flex-grow">
              <h2 className="text-lg font-semibold">{card.title}</h2>
              <p className="text-gray-600 mt-2">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
