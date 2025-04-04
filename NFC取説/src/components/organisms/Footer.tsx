import { Box, Container, Grid,} from "@mui/material";

export const Footer = () => {
  return (
    <Box 
      sx={{ 
        py: { xs: 6, sm: 8, md: 10 },
        backgroundColor: '#ffffff',
        backgroundImage: 'url(../public/images/p_new0408_m_new04080.jpg)',
        backgroundSize: {
          xs: '150px',
          sm: '200px',
          md: '300px'
        },
        backgroundRepeat: 'repeat',
        backgroundPosition: 'center',
        position: 'relative'
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
      <Container maxWidth="lg" sx={{ position: 'relative' }}>
        <Grid container spacing={4}>
          </Grid>
      </Container>
    </Box>
  );
};