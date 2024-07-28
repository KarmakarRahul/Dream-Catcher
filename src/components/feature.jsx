import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Features = () => {
  const featuresData = [
    {
      title: "Competitions",
      items: [
        "Drawing Competition",
        "Quiz Competition",
        "Well Trained Teachers / Staff",
        "Recitation Competition",
        "Dancing Activity/Competition"
      ]
    },
    {
      title: "Interests",
      items: [
        "Educational Tours",
        "20 Students Only in One Class",
        "100% English Communication",
        "Fancy Dress",
        "Creative Writing"
      ]
    },
    {
      title: "Sport & Fitness",
      items: [
        "Indoor Games",
        "Extra-Curricular Activities",
        "Sports",
        "Yoga Activity",
        "Eco Friendly Environment"
      ]
    }
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
