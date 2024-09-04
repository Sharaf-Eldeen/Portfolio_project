import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function ColorButtons() {
  return (
    <Stack direction="row" spacing={30} sx={{ marginTop: "8px" }}>
      <Button
        variant="contained"
        color="primary"
        href="/files/MahmoudRedaResume.pdf"
        download="MahmoudRedaResume.pdf"
      >
        Download CV
      </Button>
      <Button
        variant="contained"
        color="primary"
        href="mailto:mahmoudsharaf796@gmail.com"
      >
        Contact me
      </Button>
    </Stack>
  );
}
