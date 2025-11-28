import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
  useTheme,
} from "@mui/material";
import { useState } from "react";

const AccordionDescription = () => {
  const [expanded, setExpanded] = useState<string | false>(false);
  const handleChange =
    (panel: string) => (_: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  const theme = useTheme();
  return (
    <Box>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography
            p={1}
            variant="h6"
            component="span"
            sx={{ width: "33%", flexShrink: 0 }}
          >
            معرفی کلینیک دندانپزشکی
          </Typography>
        </AccordionSummary>
        <AccordionDetails
        sx={{bgcolor:theme.palette.customPaletteColors.header.headerIcon}}
        >
          <Typography>
            کلینیک ما با بهره‌گیری از جدیدترین تجهیزات و تیمی مجرب، خدمات
            دندانپزشکی را با بالاترین کیفیت ارائه می‌دهد.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography
            p={1}
            component="span"
            variant="h6"
            sx={{ width: "33%", flexShrink: 0 }}
          >
            خدمات ترمیمی و زیبایی
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            ارائه انواع خدمات ترمیمی، سفید کردن دندان، لمینت و کامپوزیت با
            استفاده از مواد درجه یک و تکنولوژی روز دنیا.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <Typography
            p={1}
            component="span"
            variant="h6"
            sx={{ width: "33%", flexShrink: 0 }}
          >
            ایمپلنت و پروتز دندانی
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            کاشت ایمپلنت‌های دندانی و ساخت پروتزهای ثابت و متحرک با بهترین کیفیت
            و ماندگاری بالا.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel4-content"
          id="panel4-header"
        >
          <Typography
            p={1}
            component="span"
            variant="h6"
            sx={{ width: "33%", flexShrink: 0 }}
          >
            درمان ریشه و عصب‌کشی
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            درمان تخصصی ریشه و عصب‌کشی با دستگاه‌های پیشرفته و کمترین میزان درد
            و ناراحتی برای بیماران.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
      >
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel5-content"
          id="panel5-header"
        >
          <Typography
            p={1}
            component="span"
            variant="h6"
            sx={{ width: "33%", flexShrink: 0 }}
          >
            ارتودنسی و اصلاح طرح لبخند
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            خدمات ارتودنسی ثابت و متحرک، اصلاح ناهنجاری‌های فکی و دندانی و طراحی
            لبخند زیبا و طبیعی.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel6"}
        onChange={handleChange("panel6")}
      >
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel6-content"
          id="panel6-header"
        >
          <Typography
            p={1}
            component="span"
            variant="h6"
            sx={{ width: "33%", flexShrink: 0 }}
          >
            جراحی‌های دندان و لثه
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            انجام انواع جراحی‌های دندان، لثه و دندان عقل با رعایت کامل اصول
            بهداشتی و ایمنی.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel7"}
        onChange={handleChange("panel7")}
      >
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel7-content"
          id="panel7-header"
        >
          <Typography
            p={1}
            component="span"
            variant="h6"
            sx={{ width: "33%", flexShrink: 0 }}
          >
            مشاوره و آموزش بهداشت دهان و دندان
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            ارائه مشاوره تخصصی و آموزش‌های لازم جهت حفظ سلامت دهان و دندان برای
            تمامی گروه‌های سنی.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default AccordionDescription;
