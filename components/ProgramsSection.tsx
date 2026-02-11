
import React from 'react';
import { Subject } from '../types.ts';

const subjects = [
  {
    name: Subject.MATHS,
    description: "From Algebra to Calculus. We reinforce classroom logic and solve complex school assignments together.",
    icon: "∑",
    gradient: "from-blue-500 to-indigo-600",
    tags: ["Algebra", "Geometry", "Calculus"]
  },
  {
    name: Subject.PHYSICS,
    description: "Mastering Mechanics, Electricity, and Thermodynamics through simplified school-aligned tutorials.",
    icon: "⚛",
    gradient: "from-indigo-500 to-purple-600",
    tags: ["Mechanics", "Optics", "Energy"]
  },
  {
    name: Subject.CHEMISTRY,
    description: "Organic and Inorganic chemistry made simple. We help students excel in their school lab reports and theories.",
    icon: "🧪",
    gradient: "from-purple-500 to-pink-600",
    tags: ["Organic", "Acids & Bases", "Stoichiometry"]
  },
  {
    name: Subject.CODING,
    description: "Building the next generation of creators. Logic-first teaching in Python, Web Dev, and AI basics.",
    icon: "</>",
    gradient: "from-teal-500 to-blue-600",
    tags: ["Python", "JavaScript", "AI"]
  }
];

const specializedPrograms = [
  {
    title: "Lesson Tutorials",
    subtitle: "Daily/Weekly Support",
    desc: "Reinforcing what was taught at school today. We help solve assignments, projects, and clarify difficult school topics."
  },
  {
    title: "Holiday Coaching",
    subtitle: "Intensive Revision",
    desc: "Keep the momentum going during breaks. We review the past term and prepare students for the one ahead."
  },
  {
    title: "Foundation Building",
    subtitle: "Bridging the Gap",
    desc: "Specifically for students with foundational problems. We go back to basics to ensure future success in STEM."
  }
];

const ProgramsSection: React.FC = () => {
  return (
    <section id="programs" className="py-24 bg-white px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-indigo-600 font-black tracking-widest uppercase text-xs mb-4">Our Curriculum</h2>
            <h3 className="text-4xl sm:text-5xl font-black text-gray-900 leading-tight">
              Specialized <span className="text-indigo-600 underline decoration-indigo-100 underline-offset-8">STEM Subjects</span>
            </h3>
            <p className="mt-6 text-lg text-gray-500 font-medium">
              We don't teach a different curriculum; we master the one your child is currently learning at school.
            </p>
          </div>
          <div className="hidden md:flex space-x-4">
            <div className="px-6 py-3 bg-gray-50 rounded-2xl border border-gray-100 text-sm font-bold text-gray-400">Grade 7 - 12</div>
          </div>
        </div>

        {/* Subjects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {subjects.map((sub, idx) => (
            <div key={idx} className="group relative bg-white p-8 rounded-[2.5rem] border border-gray-100 hover:border-indigo-200 transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-100/50 overflow-hidden">
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${sub.gradient} opacity-[0.03] group-hover:opacity-[0.08] transition-opacity rounded-bl-[5rem]`}></div>
              
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${sub.gradient} flex items-center justify-center text-white text-2xl font-black mb-8 shadow-lg shadow-indigo-100`}>
                {sub.icon}
              </div>
              
              <h4 className="text-xl font-black text-gray-900 mb-4">{sub.name}</h4>
              <p className="text-gray-500 text-sm leading-relaxed font-medium mb-8">
                {sub.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {sub.tags.map((tag, i) => (
                  <span key={i} className="text-[10px] font-black uppercase tracking-widest text-indigo-400 px-3 py-1 bg-indigo-50 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Specialized Modes */}
        <div className="bg-gray-50 rounded-[3.5rem] p-10 sm:p-16 border border-gray-100">
          <div className="text-center mb-16">
            <h3 className="text-2xl sm:text-3xl font-black text-gray-900 mb-4">Flexible Tutoring Modes</h3>
            <p className="text-gray-500 font-medium">Tailored support depending on your child's current academic state.</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {specializedPrograms.map((prog, idx) => (
              <div key={idx} className="relative pl-8 border-l-2 border-indigo-100 hover:border-indigo-600 transition-colors duration-500">
                <span className="absolute -left-[11px] top-0 w-5 h-5 bg-white border-4 border-indigo-600 rounded-full shadow-sm"></span>
                <p className="text-[10px] font-black text-indigo-600 uppercase tracking-[0.2em] mb-2">{prog.subtitle}</p>
                <h4 className="text-xl font-black text-gray-900 mb-4">{prog.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed font-medium">
                  {prog.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
