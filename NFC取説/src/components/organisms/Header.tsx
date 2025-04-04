import { AppBar, Container, Box, Typography, useMediaQuery } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "'M PLUS Rounded 1c', sans-serif",
  },
});

export const Header = () => {

  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static" sx={{ boxShadow: "none" }}>
        <Box
          sx={{
            height: "30px",
            backgroundColor: "#ffffff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              color: "#000000",
              fontSize: "15px",
              width: "80%",
              alignContent: "flex-start",

              fontWeight: "900",
            }}
          >
            NFCproduct
          </Typography>
        </Box>
        <Box 
        sx={{ 
          py: { xs: 12, sm: 14, md: 16 }, 
          backgroundColor: '#ffffff',
          backgroundImage: 'url(../public/images/p_new0408_m_new04080.jpg)',
          backgroundSize: {
            xs: '150px',
            sm: '200px',
            md: '300px'
          },
          backgroundRepeat: 'repeat',
          backgroundPosition: 'center',
          position: 'relative',
          minHeight: { xs: '600px', sm: '650px', md: '700px' },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(255, 255, 255, 0.85)',
          }}
        />
        <Container 
          maxWidth="lg"
          sx={{ 
            position: 'relative',
            width: '100%',
            height: '100%',
            px: { xs: 2, sm: 4, md: 6 },
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: { xs: 6, sm: 8, md: 10 },
              width: '100%',
              margin: '0 auto'
            }}
          >
            <Box
              component="img"
              src="../public/images/IMG_0915.PNG"
              alt="メゾンマークオフィスロゴ"
              sx={{
                width: {
                  xs: '160px',
                  sm: '200px',
                  md: '240px'
                },
                height: 'auto',
                filter: 'drop-shadow(0 0 10px rgba(0, 0, 0, 0.15))',
                transition: 'all 0.3s ease',
                flexShrink: 0,
                display: 'block',
                '&:hover': {
                  filter: 'drop-shadow(0 0 15px rgba(0, 0, 0, 0.25))',
                  transform: 'scale(1.02)'
                }
              }}
            />
            <Typography
              variant="h4"
              sx={{
                fontSize: {
                  xs: '1.8rem',
                  sm: '2.4rem',
                  md: '3rem'
                },
                fontFamily: "'M PLUS Rounded 1c', sans-serif",
                fontWeight: 'bold',
                color: '#333333',
                textAlign: 'center',
                whiteSpace: { xs: 'pre-line', sm: 'nowrap' },
                wordBreak: { xs: 'keep-all', sm: 'normal' },
                width: '100%',
                maxWidth: { sm: '600px', md: '800px' },
                lineHeight: { xs: 1.4, sm: 1.2 }
              }}
            >
              {isMobile ? 
                "MAISON MARK\nオフィスの\n利用について" :
                "MAISON MARK オフィスの利用について"
              }
            </Typography>
          </Box>
        </Container>
      </Box>
      </AppBar>
    </ThemeProvider>
  );
};
