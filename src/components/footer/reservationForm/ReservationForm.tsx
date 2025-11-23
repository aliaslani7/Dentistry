import { Box, Button, TextField } from "@mui/material";

const ReservationForm = () => {
  return (
    <Box>
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
        <TextField
          select
          size="small"
          fullWidth
          //   label="نوع خدمت"
          defaultValue=""
          margin="normal"
          SelectProps={{ displayEmpty: true }}
        >
          <option value="" disabled>
            نوع خدمت
          </option>
          <option value="cleaning">تمیز کردن دندان</option>
          <option value="filling">پر کردن دندان</option>
          <option value="whitening">سفید کردن دندان</option>
        </TextField>
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
