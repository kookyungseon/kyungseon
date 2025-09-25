import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "AI/ML",
      icon: "🤖",
      skills: [
        { name: "Python", level: 90 },
        { name: "PyTorch", level: 85 },
        { name: "TensorFlow", level: 80 },
        { name: "OpenCV", level: 85 },
        { name: "Scikit-learn", level: 85 },
        { name: "Pandas", level: 90 }
      ]
    },
    {
      title: "Data Analysis",
      icon: "📊",
      skills: [
        { name: "NumPy", level: 85 },
        { name: "Matplotlib", level: 80 },
        { name: "Seaborn", level: 75 },
        { name: "SQL", level: 90 },
        { name: "R", level: 75 },
        { name: "Statistics", level: 80 }
      ]
    },
    {
      title: "Web Development",
      icon: "💻",
      skills: [
        { name: "React", level: 80 },
        { name: "Django", level: 80 },
        { name: "FastAPI", level: 85 },
        { name: "Node.js", level: 75 },
        { name: "MySQL", level: 85 },
        { name: "JavaScript", level: 80 }
      ]
    },
    {
      title: "Tools & Others",
      icon: "🛠️",
      skills: [
        { name: "Git", level: 80 },
        { name: "Docker", level: 70 },
        { name: "Linux", level: 75 },
        { name: "AWS", level: 70 },
        { name: "FTP", level: 75 },
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
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-[#9ECAD6] rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">{category.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-[#748DAE]">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-[#748DAE] font-medium">{skill.name}</span>
                      <span className="text-[#748DAE] text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-[#9ECAD6] to-[#748DAE] h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
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
