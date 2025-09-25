import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "AI/ML",
      icon: "🤖",
      skills: [
        { name: "Python", level: 90 },
        { name: "PyTorch", level: 85 },
        { name: "YOLOv8", level: 85 },
        { name: "OpenCV", level: 85 },
        { name: "OpenAI", level: 80 },
        { name: "CNN", level: 85 }
      ]
    },
    {
      title: "Web Development",
      icon: "💻",
      skills: [
        { name: "React", level: 80 },
        { name: "Django", level: 85 },
        { name: "FastAPI", level: 85 },
        { name: "JavaScript", level: 80 },
        { name: "HTML/CSS", level: 85 },
        { name: "Flutter", level: 75 }
      ]
    },
    {
      title: "Cloud & Backend",
      icon: "☁️",
      skills: [
        { name: "AWS", level: 80 },
        { name: "Docker", level: 75 },
        { name: "MySQL", level: 85 },
        { name: "PostgreSQL", level: 80 },
        { name: "Redis", level: 70 },
        { name: "Lambda", level: 75 }
      ]
    },
    {
      title: "System Programming",
      icon: "⚙️",
      skills: [
        { name: "C", level: 80 },
        { name: "C++", level: 75 },
        { name: "Lex/Yacc", level: 70 },
        { name: "Git", level: 85 },
        { name: "Linux", level: 75 },
        { name: "API", level: 85 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#748DAE] mb-4">Skills & Technologies</h2>
          <p className="text-lg text-[#748DAE]">다양한 기술 스택을 활용한 프로젝트 경험</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 ${
              index % 2 === 0 ? 'transform hover:-rotate-1' : 'transform hover:rotate-1'
            }`}>
              <div className="text-center mb-6">
                <div className={`w-16 h-16 ${
                  index % 4 === 0 ? 'bg-gradient-to-br from-[#9ECAD6] to-[#748DAE]' :
                  index % 4 === 1 ? 'bg-gradient-to-br from-[#748DAE] to-[#9ECAD6]' :
                  index % 4 === 2 ? 'bg-gradient-to-br from-[#F5CBCB] to-[#9ECAD6]' :
                  'bg-gradient-to-br from-[#9ECAD6] to-[#F5CBCB]'
                } rounded-full flex items-center justify-center mx-auto mb-3`}>
                  <span className="text-2xl">{category.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-[#748DAE]">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-[#748DAE] font-medium group-hover:text-[#9ECAD6] transition-colors">{skill.name}</span>
                      <span className="text-[#748DAE] text-sm font-bold">{skill.level}%</span>
                    </div>
                    <div className="relative w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                      <div 
                        className={`h-3 rounded-full transition-all duration-1000 ${
                          skillIndex % 3 === 0 ? 'bg-gradient-to-r from-[#9ECAD6] to-[#748DAE]' :
                          skillIndex % 3 === 1 ? 'bg-gradient-to-r from-[#748DAE] to-[#9ECAD6]' :
                          'bg-gradient-to-r from-[#F5CBCB] to-[#9ECAD6]'
                        }`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
