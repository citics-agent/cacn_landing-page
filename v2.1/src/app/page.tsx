import ClientEffects from "@/components/ClientEffects";
import Nav from "@/components/sections/Nav";
import Hero from "@/components/sections/Hero";
import Usp from "@/components/sections/Usp";
import Achievements from "@/components/sections/Achievements";
import Personas from "@/components/sections/Personas";
import AgentPainpoints from "@/components/sections/AgentPainpoints";
import CacnModel from "@/components/sections/CacnModel";
import Comparison from "@/components/sections/Comparison";
import EformMain from "@/components/sections/EformMain";
import Roles from "@/components/sections/Roles";
import Policies from "@/components/sections/Policies";
import HowToJoin from "@/components/sections/HowToJoin";
import CtaCompact from "@/components/sections/CtaCompact";
import Events from "@/components/sections/Events";
import TiecPartnership from "@/components/sections/TiecPartnership";
import Faq from "@/components/sections/Faq";
import News from "@/components/sections/News";
import FinalCta from "@/components/sections/FinalCta";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <ClientEffects />
      <Nav />
      <Hero />
      <EformMain />
      {/* <Usp /> */}
      <Achievements />
      <Personas />
      <AgentPainpoints />
      <CacnModel />
      {/* <Comparison /> */}
      <Roles />
      <Policies />
      {/* <HowToJoin /> */}
      <CtaCompact
        title="Bạn đã sẵn sàng tham gia C&#8209;ACN?"
        subtitle="Đăng ký ngay để bắt đầu hành trình môi giới chuyên nghiệp"
      />
      <Events />
      <section className="grain relative py-12 bg-gradient-hero">
        <TiecPartnership />
        <div className="max-w-[800px] mx-auto px-6 lg:px-[50px] relative z-10 text-center mt-10">
          <h2 className="text-h3 font-extrabold text-white mb-3 reveal max-w-[280px] sm:max-w-none mx-auto">Đăng ký ngay để nhận ưu đãi đào tạo</h2>
          <p className="text-white/60 mb-8 reveal reveal-delay-1">Chương trình dành riêng cho Agent của Citics</p>
          <div className="reveal reveal-delay-2">
            <a href="#form1" className="inline-block bg-amber text-blue font-bold text-sm px-8 py-4 rounded-[50px] hover:bg-amber-hover hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(255,191,1,0.4)] active:bg-amber-active active:translate-y-0 transition-all">
              Nhận ưu đãi
            </a>
          </div>
        </div>
      </section>
      <Faq />
      <News />
      <FinalCta />
      <Footer />
    </>
  );
}
