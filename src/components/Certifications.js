import React, { useState, useEffect } from 'react';
import { Award, CheckCircle, Trophy, Star, Sparkles, Medal, Crown } from 'lucide-react';

const Certifications = () => {
  const [visibleItems, setVisibleItems] = useState([]);

  const certifications = [
    {
      name: "데이터아키텍처 준전문가",
      code: "DAsP",
      description: "Data Architecture Semi-Professional",
      date: "2024.10.25",
      gradient: "from-cyan-500 to-cyan-600",
      icon: CheckCircle
    },
    {
      name: "데이터분석 준전문가",
      code: "ADsP",
      description: "Advanced Data Analytics Semi-Professional",
      date: "2024.11.29",
      gradient: "from-slate-600 to-slate-700",
      icon: CheckCircle
    },
    {
      name: "빅데이터 분석기사",
      code: "BigData Analyst",
      description: "Big Data Analysis Specialist",
      date: "2025.07.11",
      gradient: "from-cyan-500 to-cyan-600",
      icon: Award
    },
    {
      name: "SQL 개발자",
      code: "SQLD",
      description: "SQL Developer",
      date: "2025.09.19",
      gradient: "from-slate-600 to-slate-700",
      icon: CheckCircle
    },
    {
      name: "토익스피킹",
      code: "TOEIC Speaking",
      description: "TOEIC Speaking Test",
      date: "2025.09.01",
      grade: "IM3",
      gradient: "from-cyan-500 to-cyan-600",
      icon: Star
    }
  ];

  const externalAwards = [
    {
      title: "SW 개발 부문 최우수상 (2위)",
      competition: "2024 충청권 ICT 이노베이션 아이디어 및 SW 개발 공모전",
      organization: "세종테크노파크 원장상",
      date: "2024.09.11",
      gradient: "from-cyan-500 to-cyan-600",
      icon: Trophy
    }
  ];

  const internalAwards = [
    {
      title: "2024년 충북 오픈소스 컨트리뷰션 최우수상 (1위)",
      competition: "충북 오픈소스 컨트리뷰션",
      organization: "충북대학교 SW중심대학사업단",
      date: "2024.09.09",
      gradient: "from-slate-600 to-slate-700",
      icon: Crown
    },
    {
      title: "융복합 프로젝트형 클라우드 서비스(MSA) 개발 최우수상",
      competition: "멀티캠퍼스 융복합 프로젝트",
      organization: "멀티캠퍼스",
      date: "2023.02.16",
      gradient: "from-cyan-500 to-cyan-600",
      icon: Medal
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setVisibleItems((prev) => [...prev, index]);
          }
        });
      },
      { threshold: 0.1 }
    );

    const items = document.querySelectorAll('[data-cert-item]');
    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="certifications" className="py-24 px-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* 배경 효과 */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-slate-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent">
              자격증 & 수상내역
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            데이터 전문성과 기술 역량을 인정받은 자격증 및 수상 경력
          </p>
          <div className="flex justify-center mt-8">
            <Sparkles className="text-cyan-400 animate-spin" size={32} />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* 자격증 섹션 */}
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 p-8 rounded-3xl shadow-2xl">
            <div className="flex items-center mb-8">
              <div className="p-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 shadow-lg mr-4">
                <Award className="text-white" size={32} />
              </div>
              <h3 className="text-3xl font-bold text-white">자격증</h3>
            </div>
            
            <div className="space-y-6">
              {certifications.map((cert, index) => {
                const IconComponent = cert.icon;
                const isVisible = visibleItems.includes(index);
                
                return (
                  <div
                    key={index}
                    data-cert-item
                    data-index={index}
                    className={`transition-all duration-1000 transform ${
                      isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                    }`}
                    style={{ transitionDelay: `${index * 150}ms` }}
                  >
                    <div className="relative group">
                      <div className={`absolute inset-0 bg-gradient-to-r ${cert.gradient} rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-500`}></div>
                      
                      <div className="relative bg-slate-700/50 backdrop-blur-sm border border-slate-600/50 p-6 rounded-2xl hover:shadow-lg transition-all duration-300">
                        <div className="flex items-start space-x-4">
                          <div className={`p-3 rounded-xl bg-gradient-to-r ${cert.gradient} shadow-lg flex-shrink-0`}>
                            <IconComponent className="text-white" size={24} />
                          </div>
                          <div className="flex-1">
                            <h4 className="text-xl font-bold text-white mb-2">{cert.name}</h4>
                            <p className="text-cyan-400 font-medium mb-2">{cert.code} {cert.grade && `- ${cert.grade}`}</p>
                            <p className="text-gray-300 text-sm mb-2">{cert.description}</p>
                            <p className="text-gray-400 text-sm">취득일: {cert.date}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* 수상내역 섹션 */}
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 p-8 rounded-3xl shadow-2xl">
            <div className="flex items-center mb-8">
              <div className="p-3 rounded-2xl bg-gradient-to-r from-slate-600 to-slate-700 shadow-lg mr-4">
                <Trophy className="text-white" size={32} />
              </div>
              <h3 className="text-3xl font-bold text-white">수상내역</h3>
            </div>
            
            {/* 대외 수상 */}
            <div className="mb-10">
              <h4 className="text-xl font-bold text-cyan-400 mb-6 flex items-center">
                <Star className="mr-3" size={20} />
                대외 수상
              </h4>
              {externalAwards.map((award, index) => {
                const IconComponent = award.icon;
                const isVisible = visibleItems.includes(index + 10);
                
                return (
                  <div
                    key={index}
                    data-cert-item
                    data-index={index + 10}
                    className={`transition-all duration-1000 transform ${
                      isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                    }`}
                    style={{ transitionDelay: `${index * 150}ms` }}
                  >
                    <div className="relative group mb-6">
                      <div className={`absolute inset-0 bg-gradient-to-r ${award.gradient} rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-500`}></div>
                      
                      <div className="relative bg-slate-700/50 backdrop-blur-sm border border-slate-600/50 p-6 rounded-2xl hover:shadow-lg transition-all duration-300">
                        <div className="flex items-start space-x-4">
                          <div className={`p-3 rounded-xl bg-gradient-to-r ${award.gradient} shadow-lg flex-shrink-0`}>
                            <IconComponent className="text-white" size={24} />
                          </div>
                          <div className="flex-1">
                            <h5 className="text-xl font-bold text-white mb-2">{award.title}</h5>
                            <p className="text-gray-300 mb-2">{award.competition}</p>
                            <p className="text-cyan-400 font-medium mb-2">{award.organization}</p>
                            <p className="text-gray-400 text-sm">{award.date}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* 교내 수상 */}
            <div>
              <h4 className="text-xl font-bold text-cyan-400 mb-6 flex items-center">
                <Crown className="mr-3" size={20} />
                교내 수상
              </h4>
              {internalAwards.map((award, index) => {
                const IconComponent = award.icon;
                const isVisible = visibleItems.includes(index + 20);
                
                return (
                  <div
                    key={index}
                    data-cert-item
                    data-index={index + 20}
                    className={`transition-all duration-1000 transform ${
                      isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                    }`}
                    style={{ transitionDelay: `${index * 150}ms` }}
                  >
                    <div className="relative group mb-6">
                      <div className={`absolute inset-0 bg-gradient-to-r ${award.gradient} rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-500`}></div>
                      
                      <div className="relative bg-slate-700/50 backdrop-blur-sm border border-slate-600/50 p-6 rounded-2xl hover:shadow-lg transition-all duration-300">
                        <div className="flex items-start space-x-4">
                          <div className={`p-3 rounded-xl bg-gradient-to-r ${award.gradient} shadow-lg flex-shrink-0`}>
                            <IconComponent className="text-white" size={24} />
                          </div>
                          <div className="flex-1">
                            <h5 className="text-xl font-bold text-white mb-2">{award.title}</h5>
                            <p className="text-gray-300 mb-2">{award.competition}</p>
                            <p className="text-cyan-400 font-medium mb-2">{award.organization}</p>
                            <p className="text-gray-400 text-sm">{award.date}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
