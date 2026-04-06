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
      <Comparison />
      <Roles />
      <Policies />
      <HowToJoin />
      <CtaCompact
        title="Bạn đã sẵn sàng tham gia C-ACN?"
        subtitle="Đăng ký ngay để bắt đầu hành trình môi giới chuyên nghiệp"
      />
      <Events />
      <TiecPartnership />
      <CtaCompact
        title="Đăng ký ngay để nhận ưu đãi đào tạo"
        subtitle="Chương trình dành riêng cho Agent của Citics"
      />
      <Faq />
      <News />
      <FinalCta />
      <Footer />
    </>
  );
}
