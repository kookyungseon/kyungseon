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
      icon: CheckCircle
    },
    {
      name: "데이터분석 준전문가",
      code: "ADsP",
      description: "Applied Data Science Professional",
      date: "2024.11.29",
      icon: CheckCircle
    },
    {
      name: "빅데이터 분석기사",
      code: "BigData Analyst",
      description: "Big Data Analysis Specialist",
      date: "2025.07.11",
      icon: Award
    },
    {
      name: "SQL 개발자",
      code: "SQLD",
      description: "SQL Developer",
      date: "2025.09.19",
      icon: CheckCircle
    },
    {
      name: "토익스피킹",
      code: "TOEIC Speaking",
      description: "TOEIC Speaking Test",
      date: "2025.09.01",
      grade: "IM3",
      icon: Star
    }
  ];

  const externalAwards = [
    {
      title: "SW 개발 부문 최우수상 (2위)",
      competition: "2024 충청권 ICT 이노베이션 아이디어 및 SW 개발 공모전",
      organization: "세종테크노파크 원장상",
      date: "2024.09.11",
      icon: Trophy
    }
  ];

  const internalAwards = [
    {
      title: "2024년 충북 오픈소스 컨트리뷰션 최우수상 (1위)",
      competition: "충북 오픈소스 컨트리뷰션",
      organization: "충북대학교 SW중심대학사업단",
      date: "2024.09.09",
      icon: Crown
    },
    {
      title: "융복합 프로젝트형 클라우드 서비스(MSA) 개발 최우수상",
      competition: "멀티캠퍼스 융복합 프로젝트",
      organization: "멀티캠퍼스",
      date: "2023.02.16",
      icon: Medal
    }
  ];

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
    <section id="certifications" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16 text-gray-900">🏅 Certifications & 🎖️ Achievements</h2>

        {/* 자격증 섹션 */}
        <div className="mb-16">
          <h3 className="text-3xl font-semibold text-gray-800 mb-8 flex items-center">
            <CheckCircle className="text-gray-600 mr-3" size={28} /> 자격증
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                ref={(el) => (cardRefs.current[index] = el)}
                data-index={index}
                className={`transform transition-all duration-700 ease-out ${
                  visibleCards[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-gray-100 rounded-lg mr-4">
                      <cert.icon className="text-gray-600" size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">{cert.name}</h4>
                      <p className="text-sm text-gray-600">{cert.code}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">{cert.description}</p>
                  <div className="flex items-center text-gray-500 text-xs">
                    <Calendar size={14} className="mr-1" />
                    {cert.date}
                    {cert.grade && (
                      <>
                        <span className="mx-2">•</span>
                        <span className="font-medium">{cert.grade}</span>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 수상내역 섹션 */}
        <div>
          <h3 className="text-3xl font-semibold text-gray-800 mb-8 flex items-center">
            <Trophy className="text-gray-600 mr-3" size={28} /> 수상내역
          </h3>
          <div className="space-y-6">
            {externalAwards.map((award, index) => (
              <div
                key={`ext-${index}`}
                ref={(el) => (cardRefs.current[certifications.length + index] = el)}
                data-index={certifications.length + index}
                className={`transform transition-all duration-700 ease-out ${
                  visibleCards[certifications.length + index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${(certifications.length + index) * 100}ms` }}
              >
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start">
                    <div className="p-3 bg-gray-100 rounded-lg mr-4">
                      <award.icon className="text-gray-600" size={24} />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">{award.title}</h4>
                      <p className="text-gray-600 mb-2">{award.competition}</p>
                      <p className="text-gray-500 text-sm mb-2">{award.organization}</p>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Calendar size={14} className="mr-1" />
                        {award.date}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {internalAwards.map((award, index) => (
              <div
                key={`int-${index}`}
                ref={(el) => (cardRefs.current[certifications.length + externalAwards.length + index] = el)}
                data-index={certifications.length + externalAwards.length + index}
                className={`transform transition-all duration-700 ease-out ${
                  visibleCards[certifications.length + externalAwards.length + index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${(certifications.length + externalAwards.length + index) * 100}ms` }}
              >
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start">
                    <div className="p-3 bg-gray-100 rounded-lg mr-4">
                      <award.icon className="text-gray-600" size={24} />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">{award.title}</h4>
                      <p className="text-gray-600 mb-2">{award.competition}</p>
                      <p className="text-gray-500 text-sm mb-2">{award.organization}</p>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Calendar size={14} className="mr-1" />
                        {award.date}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;