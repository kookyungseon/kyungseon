import React, { useState, useEffect, useRef } from "react";
import { CheckCircle, Award, Star, Trophy, Crown, Medal, Calendar } from "lucide-react";

const Certifications = () => {
  const [visibleCards, setVisibleCards] = useState({});
  const cardRefs = useRef([]);

  const certifications = [
    {
      name: "데이터아키텍처 준전문가",
      code: "DAsP",
      description: "Data Architecture Semi-Professional",
      date: "2024.10.25",
      color: "blue",
      icon: CheckCircle
    },
    {
      name: "데이터분석 준전문가",
      code: "ADsP",
      description: "Applied Data Science Professional",
      date: "2024.11.29",
      color: "green",
      icon: CheckCircle
    },
    {
      name: "빅데이터 분석기사",
      code: "BigData Analyst",
      description: "Big Data Analysis Specialist",
      date: "2025.07.11",
      color: "red",
      icon: Award
    },
    {
      name: "SQL 개발자",
      code: "SQLD",
      description: "SQL Developer",
      date: "2025.09.19",
      color: "yellow",
      icon: CheckCircle
    },
    {
      name: "토익스피킹",
      code: "TOEIC Speaking",
      description: "TOEIC Speaking Test",
      date: "2025.09.01",
      grade: "IM3",
      color: "purple",
      icon: Star
    }
  ];

  const externalAwards = [
    {
      title: "SW 개발 부문 최우수상 (2위)",
      competition: "2024 충청권 ICT 이노베이션 아이디어 및 SW 개발 공모전",
      organization: "세종테크노파크 원장상",
      date: "2024.09.11",
      color: "gold",
      icon: Trophy
    }
  ];

  const internalAwards = [
    {
      title: "2024년 충북 오픈소스 컨트리뷰션 최우수상 (1위)",
      competition: "충북 오픈소스 컨트리뷰션",
      organization: "충북대학교 SW중심대학사업단",
      date: "2024.09.09",
      color: "blue",
      icon: Crown
    },
    {
      title: "융복합 프로젝트형 클라우드 서비스(MSA) 개발 최우수상",
      competition: "멀티캠퍼스 융복합 프로젝트",
      organization: "멀티캠퍼스",
      date: "2023.02.16",
      color: "purple",
      icon: Medal
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: "from-blue-500 to-blue-600",
      green: "from-green-500 to-green-600",
      red: "from-red-500 to-red-600",
      yellow: "from-yellow-500 to-yellow-600",
      purple: "from-purple-500 to-purple-600",
      gold: "from-yellow-400 to-yellow-600"
    };
    return colors[color] || "from-gray-500 to-gray-600";
  };

  const getBadgeColor = (color) => {
    const colors = {
      blue: "bg-blue-500/20 text-blue-400 border-blue-500/30",
      green: "bg-green-500/20 text-green-400 border-green-500/30",
      red: "bg-red-500/20 text-red-400 border-red-500/30",
      yellow: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
      purple: "bg-purple-500/20 text-purple-400 border-purple-500/30",
      gold: "bg-yellow-400/20 text-yellow-400 border-yellow-400/30"
    };
    return colors[color] || "bg-gray-500/20 text-gray-400 border-gray-500/30";
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleCards((prev) => ({
              ...prev,
              [entry.target.dataset.index]: true,
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    cardRefs.current.forEach((cardRef) => {
      if (cardRef) {
        observer.observe(cardRef);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="certifications" className="py-24 px-6 bg-gradient-to-br from-blue-900 to-purple-900 relative overflow-hidden">
      {/* 배경 패턴 */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Award className="text-yellow-400 mr-4" size={40} />
            <h2 className="text-5xl md:text-6xl font-bold text-white">
              🏅 Certifications & Awards
            </h2>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            데이터 전문성과 기술 역량을 인정받은 자격증 및 수상 경력
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* 자격증 섹션 */}
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 p-8 rounded-2xl shadow-2xl">
            <div className="flex items-center mb-8">
              <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl mr-4">
                <CheckCircle className="text-white" size={32} />
              </div>
              <h3 className="text-3xl font-bold text-white">자격증</h3>
            </div>
            
            <div className="grid gap-4">
              {certifications.map((cert, index) => {
                const IconComponent = cert.icon;
                return (
                  <div
                    key={index}
                    ref={(el) => (cardRefs.current[index] = el)}
                    data-index={index}
                    className={`bg-gray-900/50 p-6 rounded-xl border border-gray-600 transition-all duration-500 ease-out ${
                      visibleCards[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className={`p-2 rounded-lg bg-gradient-to-r ${getColorClasses(cert.color)}`}>
                          <IconComponent className="text-white" size={20} />
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-white">{cert.name}</h4>
                          <p className="text-gray-400 text-sm">{cert.description}</p>
                        </div>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getBadgeColor(cert.color)}`}>
                        {cert.code}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-gray-400">
                        <Calendar size={16} />
                        <span className="text-sm">{cert.date}</span>
                      </div>
                      {cert.grade && (
                        <span className="text-yellow-400 text-sm font-medium">({cert.grade})</span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* 수상내역 섹션 */}
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 p-8 rounded-2xl shadow-2xl">
            <div className="flex items-center mb-8">
              <div className="p-4 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl mr-4">
                <Trophy className="text-white" size={32} />
              </div>
              <h3 className="text-3xl font-bold text-white">수상내역</h3>
            </div>
            
            <div className="space-y-8">
              {/* 대외 수상 */}
              <div>
                <h4 className="text-xl font-bold text-white mb-6 flex items-center">
                  <Trophy className="mr-3 text-yellow-400" size={24} />
                  대외 수상
                </h4>
                {externalAwards.map((award, index) => {
                  const IconComponent = award.icon;
                  return (
                    <div
                      key={`ext-${index}`}
                      ref={(el) => (cardRefs.current[certifications.length + index] = el)}
                      data-index={certifications.length + index}
                      className={`bg-gray-900/50 p-6 rounded-xl border border-gray-600 mb-4 transition-all duration-500 ease-out ${
                        visibleCards[certifications.length + index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                      }`}
                      style={{ transitionDelay: `${(certifications.length + index) * 100}ms` }}
                    >
                      <div className="flex items-center mb-3">
                        <div className={`p-2 rounded-lg bg-gradient-to-r ${getColorClasses(award.color)} mr-3`}>
                          <IconComponent className="text-white" size={20} />
                        </div>
                        <h5 className="text-lg font-bold text-white">{award.title}</h5>
                      </div>
                      <p className="text-gray-400 mb-2">{award.competition}</p>
                      <p className="text-gray-300 font-medium mb-2">{award.organization}</p>
                      <div className="flex items-center space-x-2 text-gray-500">
                        <Calendar size={16} />
                        <span className="text-sm">{award.date}</span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* 교내 수상 */}
              <div>
                <h4 className="text-xl font-bold text-white mb-6 flex items-center">
                  <Crown className="mr-3 text-purple-400" size={24} />
                  교내 수상
                </h4>
                {internalAwards.map((award, index) => {
                  const IconComponent = award.icon;
                  return (
                    <div
                      key={`int-${index}`}
                      ref={(el) => (cardRefs.current[certifications.length + externalAwards.length + index] = el)}
                      data-index={certifications.length + externalAwards.length + index}
                      className={`bg-gray-900/50 p-6 rounded-xl border border-gray-600 mb-4 transition-all duration-500 ease-out ${
                        visibleCards[certifications.length + externalAwards.length + index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                      }`}
                      style={{ transitionDelay: `${(certifications.length + externalAwards.length + index) * 100}ms` }}
                    >
                      <div className="flex items-center mb-3">
                        <div className={`p-2 rounded-lg bg-gradient-to-r ${getColorClasses(award.color)} mr-3`}>
                          <IconComponent className="text-white" size={20} />
                        </div>
                        <h5 className="text-lg font-bold text-white">{award.title}</h5>
                      </div>
                      <p className="text-gray-400 mb-2">{award.competition}</p>
                      <p className="text-gray-300 font-medium mb-2">{award.organization}</p>
                      <div className="flex items-center space-x-2 text-gray-500">
                        <Calendar size={16} />
                        <span className="text-sm">{award.date}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;