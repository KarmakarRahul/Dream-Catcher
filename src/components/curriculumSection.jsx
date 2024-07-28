import React from 'react';
import 'tailwindcss/tailwind.css';

const CurriculumSection = () => {
  return (
    <section className="bg-gray-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-8">Our Curriculum</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-bold mb-4 text-blue-500">Playful Learning</h3>
            <p className="text-gray-700">Integrating educational concepts into play activities, like using building blocks for math skills or dramatic play for social skills.</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-bold mb-4 text-blue-500">Social Skills Development</h3>
            <p className="text-gray-700">Encouraging cooperation, sharing, and communication through group activities and role-playing.</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-bold mb-4 text-blue-500">Creative Arts</h3>
            <p className="text-gray-700">Incorporating music, dance, drawing, and crafting to foster creativity and self-expression.</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-bold mb-4 text-blue-500">Physical Activity</h3>
            <p className="text-gray-700">Providing opportunities for gross motor skills development through games, movement activities, and outdoor play.</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-bold mb-4 text-blue-500">Language and Literacy</h3>
            <p className="text-gray-700">Introducing books, storytelling, and language games to build vocabulary and early reading skills.</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-bold mb-4 text-blue-500">Problem-Solving</h3>
            <p className="text-gray-700">Offering puzzles, science experiments, and exploratory play to develop critical thinking and problem-solving skills.</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-bold mb-4 text-blue-500">Emotional Growth</h3>
            <p className="text-gray-700">Helping children understand and express their feelings through activities and discussions.</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-bold mb-4 text-blue-500">Exploration and Curiosity</h3>
            <p className="text-gray-700">Encouraging exploration of the environment, nature, and different cultures to spark curiosity and a love of learning.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurriculumSection;
