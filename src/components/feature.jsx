import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Features = () => {
  const featuresData = [
    {
      title: "Our Speciality",
      items: [
        "Well trained teachers & staffs",
        "20 students only per class",
        "100% English communication",
        "Eco-friendly environment",
        "Latest teaching & learning technology",
        "Emphasis on holistic growth of child",
        "CCTV Surveillance"
      ],
    },
    {
      title: "Interests",
      items: [
        "Drawing competition",
        "Recitation competition",
        "Dancing activity/competition",
        "Fancy dress competition",
        "Quiz competition",
        "Different events celebrations",
      ],
    },
    {
      title: "Sport & Fitness",
      items: [
        "Indoor Games",
        "Outdoor Games",
        "Zumba dance",
        "Yoga Activity",
        "Swimming pool for kids",
      ],
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {featuresData.map((feature, index) => (
          <div key={index} className="text-center">
            <h2 className="text-xl font-bold mb-4">{feature.title}</h2>
            <ul className="text-left space-y-2">
              {feature.items.map((item, idx) => (
                <li key={idx} className="flex items-center">
                  <i className="fas fa-check-circle text-green-500 mr-2"></i>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
