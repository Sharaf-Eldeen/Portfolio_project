import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function ColorButtons() {
  return (
    <Stack direction="row" spacing={30} sx={{ marginTop: "8px" }}>
      <Button variant="contained" color="primary">
        Download CV
      </Button>
      <Button variant="contained" color="primary">
        Contact me
      </Button>
    </Stack>
  );
}
