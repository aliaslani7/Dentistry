declare global {
  interface Window {
    __sectionRefs?: { [key: string]: HTMLElement | null };
  }
}
import { Box, Typography, useTheme } from "@mui/material";
import BackToTop from "../components/BackToTop";
import Cards from "../pages/cards/Cards";
import Hero from "../pages/hero/Hero";
import AboutMe from "../pages/aboutMe/AboutMe";
import ReservationForm from "../components/footer/reservationForm/ReservationForm";
import { useRef } from "react";
// import { useGsapBgColorOnScroll } from "../pages/cards/useGsapBgColorOnScroll";
// import { grey, teal } from "@mui/material/colors";

import { useEffect } from "react";
import Descriptions from "../pages/descriptions/Descriptions";
import AccordionDescription from "../components/accordion/AccordionDescription";
import ListDrawer from "../components/listBlog/drawer/Listdrawer";
import BlogCards from "../pages/blog/Blogcards";
const HomePage = () => {
  const theme = useTheme();
  const homeSectionRef = useRef<HTMLDivElement>(null);
  const cardsSectionRef = useRef<HTMLDivElement>(null);
  const aboutSectionRef = useRef<HTMLDivElement>(null);
  const contactSectionRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.__sectionRefs = window.__sectionRefs || {};
      window.__sectionRefs["home"] = homeSectionRef.current;
      window.__sectionRefs["services"] = cardsSectionRef.current;
      window.__sectionRefs["about"] = aboutSectionRef.current;
      window.__sectionRefs["contact"] = contactSectionRef.current;
    }
  }, []);
  // useGsapBgColorOnScroll(cardsSectionRef, grey[900], "");
  return (
    <Box>
      {/* Hero Section */}
      <Box ref={homeSectionRef} sx={{ minHeight: "100vh" }}>
        <Hero />
      </Box>
      {/* خدمات */}
      <Box ref={cardsSectionRef} sx={{ transition: "background 0.4s" }}>
        <Cards />
      </Box>
      {/* درباره */}
      <Box ref={aboutSectionRef} sx={{ minHeight: "100vh", py: 10 }}>
        <Typography variant="h3" sx={{ textAlign: "-moz-left" }}>
          درباره ما
        </Typography>
        <AboutMe />
        <Descriptions />
        <Box
          alignContent={"center"}
          alignItems={"center"}
          width={1200}
          display={"flex"}
          flexDirection={"column"}
          margin={"0 auto"}
          mb={10}
          textAlign={"center"}
          gap={2}
        >
          <Typography variant="h4" color={theme.palette.primary.main}>
            خدمات دیجیتال دندانپزشکی؛ نسل جدید تجربه درمان راحت و دقیق
          </Typography>
          <Typography>
            دندانپزشکی دیجیتال نسل جدیدی از خدمات را ارائه می‌دهد که هدف آن
            افزایش دقت، کاهش درد و کوتاه کردن زمان درمان است. در این روش به جای
            ابزارهای سنتی، از اسکنرها، دوربین‌های سه‌بعدی و دستگاه‌های هوشمند
            استفاده می‌شود تا تجربه درمان برای بیمار بسیار راحت‌تر و
            قابل‌اعتمادتر باشد. مثلاً در قالب‌گیری دیجیتال دیگر خبری از خمیرهای
            حجیم و آزاردهنده نیست؛ دندان‌ها با یک اسکن سریع و کاملاً دقیق ثبت
            می‌شوند و نتیجه آن بدون خطا برای طراحی روکش، لمینت یا ارتودنسی
            استفاده می‌شود. در بخش بی‌حسی نیز تکنولوژی جدید تزریق دیجیتال کمک
            می‌کند تا ماده بی‌حسی با فشار کنترل‌شده وارد بافت شود و بیمار
            کم‌ترین درد و سوزش را احساس کند. از طرف دیگر، سیستم‌های طراحی لبخند
            دیجیتال این امکان را فراهم می‌کنند که قبل از شروع درمان، شکل نهایی
            لبخند شبیه‌سازی و به بیمار نشان داده شود. این کار باعث می‌شود فرد با
            خیال راحت تصمیم بگیرد و نتیجه درمان دقیقاً مطابق انتظارش باشد.
            همچنین دستگاه‌های تصویربرداری سه‌بعدی یا CBCT به دندانپزشک اجازه
            می‌دهند ساختارهای داخلی فک و دندان‌ها را با وضوح بالا بررسی کند و
            برای درمان‌هایی مثل ایمپلنت برنامه‌ریزی دقیق‌تری انجام دهد. در
            بسیاری از کلینیک‌ها حتی امکان ساخت روکش و لمینت در همان روز با
            دستگاه‌های CAD/CAM وجود دارد که باعث می‌شود درمان سریع، دقیق و بدون
            جلسات طولانی باشد. به طور کلی، دندانپزشکی دیجیتال به معنای تجربه‌ای
            راحت‌تر، سریع‌تر و ایمن‌تر است؛ روشی که خطاهای انسانی را کم می‌کند،
            نتیجه درمان را قابل پیش‌بینی‌تر می‌سازد و کیفیت خدمات را به شکل
            چشمگیری افزایش می‌دهد. اگر فردی به دنبال تجربه‌ای بدون استرس و
            حرفه‌ای در دندانپزشکی باشد، انتخاب روش‌های دیجیتال بهترین گزینه برای
            اوست.
          </Typography>
        </Box>
        <Box>
          <BlogCards />
        </Box>
        <Box>
          <ListDrawer />
        </Box>
        <AccordionDescription />
      </Box>
      <Box ref={contactSectionRef}>
        <ReservationForm />
      </Box>
      <BackToTop />
    </Box>
  );
};

export default HomePage;
