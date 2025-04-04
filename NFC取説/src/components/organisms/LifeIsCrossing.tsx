import { Box, Container, Typography } from "@mui/material";

export const LifeIsCrossing = () => {
  return (
    <Box sx={{ py: 8, backgroundColor: '#ffffff' }}>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          align="center"
          sx={{
            mb: 8,
            fontFamily: "'M PLUS Rounded 1c', sans-serif",
            fontWeight: 'bold',
            borderBottom: '2px solid #000',
            paddingBottom: '10px',
            display: 'inline-block',
            width: '100%',
            textAlign: 'center'
          }}
        >
          LIFE is CROSSING
        </Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            width: '100%'
          }}
        >
          <a
            href="https://maisonmarc.com/life-is-crossing"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'block', width: '100%', maxWidth: '800px' }}
          >
            <Box
              component="img"
              src="/images/スクリーンショット 2025-04-02 17.50.30.png"
              alt="LIFE is CROSSING - だれかとだれかの人生があつまる場所、らいふ いず くろっしんぐ。"
              sx={{
                width: '100%',
                height: 'auto',
                mb: 10,
                borderRadius: 2,
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.02)'
                }
              }}
            />
          </a>
        </Box>
      </Container>
    </Box>
  );
}; 