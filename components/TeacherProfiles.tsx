
import React from 'react';

const teachers = [
  {
    name: "Dr. Sarah Jenkins",
    subject: "Mathematics & Physics",
    degree: "PhD in Applied Mathematics",
    experience: "15+ Years Exp.",
    bio: "Focused on building strong foundations and simplifying complex theories for Grades 10-12.",
    testimonial: "Top of the class thanks to Sarah!",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
    specialties: ["Calculus", "Physics"]
  },
  {
    name: "Prof. David Chen",
    subject: "Computer Science",
    degree: "MSc Computer Science, MIT",
    experience: "12+ Years Exp.",
    bio: "Ex-software architect passionate about teaching logic and coding to high school students.",
    testimonial: "My daughter built her first app!",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80",
    specialties: ["Python", "Java", "Web"]
  },
  {
    name: "Mrs. Elena Rodriguez",
    subject: "Chemistry & Biology",
    degree: "MSc in Organic Chemistry",
    experience: "10 Years Exp.",
    bio: "Expert in curriculum reinforcement and helping students master complex laboratory concepts.",
    testimonial: "Elena makes chemistry fun and easy.",
    image: "https://images.unsplash.com/photo-1594312915251-48db02a5c566?auto=format&fit=crop&w=600&q=80",
    specialties: ["Chemistry", "Biology"]
  }
];

const TeacherProfiles: React.FC = () => {
  return (
    <section id="teachers" className="py-24 bg-white px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-indigo-600 font-black tracking-widest uppercase text-xs sm:text-sm mb-4">Expert Mentors</h2>
          <h3 className="text-3xl sm:text-5xl font-black text-gray-900">Verified Professional Educators</h3>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto font-medium">
            Rigorous verification, verified credentials, and proven track records in secondary education.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teachers.map((teacher, idx) => (
            <div key={idx} className="bg-gray-50/50 rounded-[2.5rem] border border-gray-100 overflow-hidden hover:bg-white hover:shadow-2xl hover:shadow-indigo-100 transition-all duration-500 group flex flex-col">
              <div className="relative h-72 sm:h-80 overflow-hidden">
                <img 
                  src={teacher.image} 
                  alt={teacher.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-6 left-6 bg-white/95 backdrop-blur px-4 py-2 rounded-2xl flex items-center space-x-2 shadow-lg">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  <span className="text-[10px] font-black text-gray-900 uppercase tracking-widest">Verified Expert</span>
                </div>
              </div>
              
              <div className="p-8 flex-1 flex flex-col">
                <div className="mb-6">
                  <h4 className="text-2xl font-black text-gray-900 mb-1">{teacher.name}</h4>
                  <p className="text-indigo-600 font-bold text-sm tracking-wide uppercase">{teacher.subject}</p>
                </div>
                
                <div className="flex gap-4 mb-6 text-xs font-bold text-gray-500 uppercase tracking-tight">
                  <div className="flex items-center space-x-1.5">
                    <svg className="w-4 h-4 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" /></svg>
                    <span>{teacher.degree}</span>
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-8 leading-relaxed font-medium">
                  {teacher.bio}
                </p>

                <div className="mt-auto pt-8 border-t border-gray-100">
                  <div className="flex items-center justify-between">
                    <div className="flex -space-x-2">
                      {teacher.specialties.map((s, i) => (
                        <span key={i} className="px-3 py-1 bg-white border border-gray-100 rounded-full text-[10px] font-black text-gray-500 uppercase shadow-sm">
                          {s}
                        </span>
                      ))}
                    </div>
                    <button className="text-indigo-600 font-black text-xs uppercase tracking-widest hover:text-indigo-700 transition">
                      View CV
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeacherProfiles;
