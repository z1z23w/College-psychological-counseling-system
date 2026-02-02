"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { AlertCircle, MessageCircle, Users, ClipboardCheck, ChevronRight, Phone, MapPin, Clock } from 'lucide-react';

// 动画变体
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6 } })
};

export default function Home() {
  return (
    <main>
      {/* 紧急求助条 */}
      <div className="bg-gradient-to-r from-[#E74C3C] to-[#C0392B] text-white py-3 px-4 flex justify-center items-center gap-2 text-sm md:text-base font-medium shadow-md relative z-40">
        <AlertCircle className="w-5 h-5 animate-pulse" />
        <span>24小时危机干预热线：010-12345678 | 校医院急诊：010-87654321</span>
      </div>

      {/* Hero Section */}
      <section id="home" className="relative h-[85vh] min-h-[600px] flex items-center justify-center bg-fixed bg-cover bg-center" 
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')" }}>
        
        {/* 遮罩层，让文字更清晰 */}
        <div className="absolute inset-0 bg-white/60 md:bg-white/40 backdrop-blur-[2px]"></div>
        
        <div className="container relative z-10 px-6 text-center">
          <motion.div initial="hidden" animate="visible" custom={1} variants={fadeUp}>
            <h1 className="text-4xl md:text-6xl font-bold text-[#5D9C59] mb-6 drop-shadow-sm">在这里，我们愿意倾听</h1>
            <p className="text-xl md:text-2xl text-slate-700 mb-10 max-w-2xl mx-auto font-light">
              关注心理健康，守护美好青春。<br/>无论您遇到学业压力、人际困扰还是情绪波动，这里都是您温暖的港湾。
            </p>
            <div className="flex gap-4 justify-center">
              {/* ✅ 修改：固定跳转到 /auth 登录页 */}
              <Link href="/auth">
                <Button className="bg-[#5D9C59] hover:bg-[#3E6D3B] text-white text-lg px-8 py-6 rounded-full shadow-xl hover:-translate-y-1 transition-all">
                  开始咨询
                </Button>
              </Link>
              <Link href="#services">
                <Button variant="outline" className="bg-white text-[#5D9C59] border-[#5D9C59] hover:bg-[#F0F7EF] text-lg px-8 py-6 rounded-full shadow-lg">
                  了解更多
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 section-title-bar">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">我们提供的服务</h2>
            <p className="text-slate-500">专业、保密、免费的校内心理支持服务体系</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { icon: MessageCircle, title: '个体咨询', desc: '一对一的私密空间，在安全的环境下倾诉心声，理清思绪，探索自我成长的方向。' },
              { icon: Users, title: '团体辅导', desc: '人际交往、压力管理、恋爱成长等主题小组，在互动中获得支持，发现不再孤单。' },
              { icon: ClipboardCheck, title: '心理测评', desc: '提供科学的SCL-90、SDS等心理健康量表测试，帮助您客观了解当下的心理状态。' },
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={index + 1}
                variants={fadeUp}
                className="bg-white p-10 rounded-[20px] shadow-[0_5px_15px_rgba(0,0,0,0.05)] border border-slate-50 text-center hover-card-up group"
              >
                <div className="w-24 h-24 bg-[#F0F7EF] text-[#5D9C59] rounded-full flex items-center justify-center mx-auto mb-6 text-4xl group-hover:bg-[#5D9C59] group-hover:text-white transition-colors duration-500">
                  <item.icon className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-slate-500 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-24 bg-[#F0F7EF]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 section-title-bar">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">专业师资团队</h2>
            <p className="text-slate-500">我们的咨询师均持有国家执业资格证书，经验丰富，温暖包容</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: '张雅婷', role: '中心主任 / 资深咨询师', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80', desc: '国家二级心理咨询师，从业15年。擅长解决学业压力、自我认同及家庭关系问题。' },
              { name: '李明哲', role: '专职心理咨询师', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80', desc: '擅长认知行为疗法（CBT）。专注于人际关系困扰、焦虑情绪调节及职业生涯规划。' },
              { name: '王建国', role: '驻校精神科医师', img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80', desc: '医学博士。负责心理危机干预、严重心理问题的评估与转介，睡眠障碍咨询。' },
            ].map((member, index) => (
              <motion.div 
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={index + 1}
                variants={fadeUp}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="h-64 overflow-hidden relative group">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
                <div className="p-8 text-center">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <span className="text-[#5D9C59] font-medium text-sm block mb-4">{member.role}</span>
                  <p className="text-slate-500 text-sm leading-relaxed">{member.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16 section-title-bar">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">常见问题解答</h2>
            <p className="text-slate-500">了解咨询流程，消除您的顾虑</p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {[
              { q: '心理咨询会完全保密吗？', a: '是的，保密是心理咨询的首要原则。除非涉及您自身或他人的生命安全风险，否则您的任何信息都不会在未征得您同意的情况下向第三方（包括老师、家长）透露。' },
              { q: '咨询需要收费吗？', a: '对于本校在读的全日制学生，我们提供的所有心理咨询服务均为**免费**的。' },
              { q: '一般咨询需要多长时间？', a: '通常每次个体咨询的时间为50分钟，每周进行一次。具体的咨询周期会根据您的问题性质和咨询目标，由您和咨询师共同商定。' },
            ].map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="bg-white border rounded-xl shadow-sm px-4 data-[state=open]:border-[#5D9C59]">
                <AccordionTrigger className="text-lg font-medium hover:text-[#5D9C59] hover:no-underline py-6">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 text-base pb-6 leading-relaxed bg-[#fafafa] -mx-4 px-8 pt-4 rounded-b-xl">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Contact / CTA Section */}
      <section id="contact" className="py-24 bg-[#F0F7EF]">
        <div className="container mx-auto px-6">
          <div className="bg-white rounded-[2rem] shadow-xl overflow-hidden flex flex-col md:flex-row">
            
            {/* 左侧信息 */}
            <div className="bg-[#5D9C59] text-white p-10 md:p-16 flex-1 flex flex-col justify-center">
              <h3 className="text-3xl font-bold mb-6">联系方式</h3>
              <p className="text-green-100 mb-10">如果您不方便在线预约，也可以直接来访或致电。</p>
              
              <div className="space-y-6 text-lg">
                <div className="flex items-center gap-4">
                  <MapPin className="w-6 h-6" />
                  <span>学生活动中心 305室</span>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="w-6 h-6" />
                  <span>010-88888888</span>
                </div>
                <div className="flex items-center gap-4">
                  <Clock className="w-6 h-6" />
                  <span>周一至周五 08:30 - 17:30</span>
                </div>
              </div>
            </div>

            {/* 右侧行动呼吁 */}
            <div className="flex-1 p-10 md:p-16 flex flex-col justify-center items-start">
              <h3 className="text-2xl font-bold mb-4 text-[#2C3E50]">准备好迈出第一步了吗？</h3>
              <p className="text-slate-500 mb-8">
                我们的在线预约系统全天候开放。登录后，您可以选择适合您的咨询师和时间段。
              </p>
              {/* ✅ 修改：固定跳转到 /auth 登录页 */}
              <Link href="/auth" className="w-full">
                <Button className="w-full bg-[#2C3E50] hover:bg-black text-white h-14 rounded-xl text-lg shadow-lg">
                  登录系统并预约
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}