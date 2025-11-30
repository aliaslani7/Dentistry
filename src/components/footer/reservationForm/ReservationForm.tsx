import { Box, Button, TextField, Autocomplete } from "@mui/material";

type ServiceOption = { label: string; value: string };

const serviceOptions: ServiceOption[] = [
  { label: "ایمپلنت دندان", value: "implant" },
  { label: "روکش دندان", value: "crown" },
  { label: "عصب‌کشی (درمان ریشه)", value: "root-canal" },
  { label: "لمینت دندان", value: "laminate" },
  { label: "کامپوزیت دندان", value: "composite" },
  { label: "جرم‌گیری و بروساژ", value: "scaling" },
  { label: "ارتودنسی", value: "orthodontics" },
  { label: "جراحی لثه", value: "gum-surgery" },
  { label: "بلیچینگ (سفید کردن دندان)", value: "bleaching" },
  { label: "ترمیم و پر کردن دندان", value: "filling" },
  { label: "کشیدن دندان", value: "extraction" },
  { label: "درمان دندان عقل", value: "wisdom-tooth" },
];

const ReservationForm = () => {
  return (
    <Box p={7}>
      <Box display={"flex"} gap={2}>
        <TextField
          size="small"
          label="نام"
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <TextField
          size="small"
          label="نام خانوادگی"
          variant="outlined"
          fullWidth
          margin="normal"
        />
      </Box>
      <Box display={"flex"} gap={2}>
        <TextField
          size="small"
          label="شماره تلفن"
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <TextField
          size="small"
          label="ایمیل"
          variant="outlined"
          fullWidth
          margin="normal"
        />
      </Box>
      <Box display={"flex"} gap={2}>
        {/* Autocomplete چندانتخابی برای نوع خدمت */}
        <Autocomplete
          multiple
          options={serviceOptions}
          getOptionLabel={(option) => option.label}
          isOptionEqualToValue={(option, value) => option.value === value.value}
          renderInput={(params) => (
            <TextField
              {...params}
              label="نوع خدمت"
              size="small"
              margin="normal"
            />
          )}
          fullWidth
          sx={{
            "& .MuiAutocomplete-inputRoot": {
              cursor: "pointer",
            },
            "& .MuiChip-root": {
              direction: "rtl",
              display: "flex",
              alignItems: "center",
              height: 18,
              minHeight: 18,
              fontSize: "0.85rem",
              borderRadius: 2,
              padding: "0 2px",
              ".MuiChip-label": {
                paddingRight: "6px",
                paddingLeft: "2px",
                fontSize: "0.75em",
              },
              ".MuiChip-deleteIcon": {
                marginRight: "0px",
                marginLeft: "3px",
                order: 1,
                fontSize: "1.1em",
              },
            },
          }}
        />
        <TextField
          size="small"
          label="تاریخ"
          variant="outlined"
          fullWidth
          margin="normal"
        />
      </Box>
      <Box display={"flex"} gap={2}>
        <TextField
          size="small"
          label="توضیحات"
          variant="outlined"
          fullWidth
          margin="normal"
          multiline
          minRows={4}
        />
      </Box>
      <Box mt={2}>
        <Button variant="contained" color="inherit" fullWidth size="large">
          ثبت
        </Button>
      </Box>
    </Box>
  );
};

export default ReservationForm;
