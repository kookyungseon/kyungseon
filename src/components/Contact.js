import React, { useState } from 'react';
import { Mail, Github, Linkedin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 폼 제출 로직
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#748DAE] mb-4">Contact</h2>
          <p className="text-xl text-[#9ECAD6] font-medium">Let's Connect!</p>
          <p className="text-lg text-[#748DAE] mt-4 max-w-2xl mx-auto">
            AI와 데이터 사이언스 분야에서 함께 일하고 싶으시거나, 프로젝트에 대해 더 자세히 알고 싶으시다면 언제든 연락주세요.
          </p>
        </div>

        {/* 중앙 정렬된 단일 컬럼 레이아웃 */}
        <div className="max-w-4xl mx-auto">
          {/* 연락처 정보 - 상단에 가로 배치 */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-[#9ECAD6] to-[#748DAE] rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="text-white" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-[#748DAE] mb-2">Email</h3>
              <p className="text-[#748DAE]">koo0685@naver.com</p>
            </div>

            <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-[#9ECAD6] to-[#748DAE] rounded-full flex items-center justify-center mx-auto mb-4">
                <Github className="text-white" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-[#748DAE] mb-2">GitHub</h3>
              <p className="text-[#748DAE]">github.com/kookyungseon</p>
            </div>

            <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-[#9ECAD6] to-[#748DAE] rounded-full flex items-center justify-center mx-auto mb-4">
                <Linkedin className="text-white" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-[#748DAE] mb-2">LinkedIn</h3>
              <p className="text-[#748DAE]">linkedin.com/in/kyungseon</p>
            </div>
          </div>

          {/* 연락 폼 - 중앙에 배치 */}
          <div className="bg-gradient-to-br from-[#FFEAEA] to-[#F5CBCB] rounded-3xl p-8 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#748DAE] mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-[#9ECAD6] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#748DAE] focus:border-transparent"
                  placeholder="이름을 입력해주세요"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#748DAE] mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-[#9ECAD6] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#748DAE] focus:border-transparent"
                  placeholder="이메일을 입력해주세요"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-[#748DAE] mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-[#9ECAD6] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#748DAE] focus:border-transparent"
                  placeholder="제목을 입력해주세요"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#748DAE] mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-[#9ECAD6] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#748DAE] focus:border-transparent"
                  placeholder="메시지를 입력해주세요"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#748DAE] text-white py-3 px-6 rounded-lg hover:bg-[#9ECAD6] transition-colors font-medium flex items-center justify-center space-x-2"
              >
                <Send size={20} />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
