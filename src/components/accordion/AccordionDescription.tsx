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
import { accordionData } from "./accordionData";

const AccordionDescription = () => {
  const [expanded, setExpanded] = useState<string | false>(false);
  const handleChange =
    (panel: string) => (_: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  const theme = useTheme();
  return (
    <Box>
      <Typography variant="h3" gutterBottom p={2}>پرسش‌های متداول</Typography>
      {accordionData.map((item) => {
        const panelId = `panel${item.id}`;
        return (
          <Accordion
            expanded={expanded === panelId}
            onChange={handleChange(panelId)}
            key={item.id}
          >
            <AccordionSummary
              expandIcon={<ExpandMore />}
              aria-controls={`${panelId}-content`}
              id={`${panelId}-header`}
            >
              <Typography
                p={1}
                variant="h6"
                component="span"
                sx={{ width: "33%", flexShrink: 0 }}
              >
                {item.title}
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                bgcolor:
                  theme.palette.customPaletteColors.accordion.descriptionBG,
              }}
            >
              <Typography>{item.content}</Typography>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </Box>
  );
};

export default AccordionDescription;
