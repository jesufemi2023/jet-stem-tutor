
import React from 'react';

const features = [
  {
    title: "Curriculum Reinforcement",
    description: "We work on what school teachers have already taught. No confusing new systems—just deeper understanding and better performance.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    color: "bg-blue-600"
  },
  {
    title: "Values & Character",
    description: "Our aim is to raise responsible, disciplined, and God-fearing individuals who are ready to make a positive impact on society.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    color: "bg-indigo-600"
  },
  {
    title: "STEM Foundation",
    description: "Struggling with the basics? We build from scratch. Our coaching focuses on Math, Physics, Chemistry, and Coding essentials.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a2 2 0 00-1.96 1.414l-.727 2.903a2 2 0 01-3.156 1.157l-2.414-1.811a2 2 0 00-2.422 0l-2.414 1.811a2 2 0 01-3.156-1.157l-.727-2.903a2 2 0 00-1.96-1.414l-2.387.477a2 2 0 00-1.022.547" />
      </svg>
    ),
    color: "bg-purple-600"
  },
  {
    title: "Guidance & Counseling",
    description: "Personalized support for students experiencing difficulties. We provide a safe space for academic and personal growth.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    color: "bg-teal-600"
  }
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-gray-50/50 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-16">
          <h2 className="text-indigo-600 font-black tracking-widest uppercase text-xs sm:text-sm mb-4">Holistic Approach</h2>
          <h3 className="text-3xl sm:text-5xl font-black text-gray-900 leading-tight">
            Our mission is your child's <span className="text-indigo-600">total growth.</span>
          </h3>
          <p className="mt-6 text-lg text-gray-600 font-medium">
            We offer more than just tutoring. We provide a support system that builds technical mastery and strong personal character.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-500 border border-gray-100 group">
              <div className={`${feature.color} w-14 h-14 rounded-2xl flex items-center justify-center text-white mb-8 group-hover:scale-110 transition duration-500 shadow-lg`}>
                {feature.icon}
              </div>
              <h4 className="text-xl font-black text-gray-900 mb-4">{feature.title}</h4>
              <p className="text-gray-500 leading-relaxed font-medium">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
