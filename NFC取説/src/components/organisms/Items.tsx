import { Box, Container, Typography, } from "@mui/material";
import { ProductCard } from "../molecules/ProductCard";
import { Link } from "react-router-dom";

const manualItems = [
  {
    image: "images/2.png",
    link: "https://gdlp01.c-wss.com/gds/6/0300006546/03/dpc995-reference-2.pdf",
    isExternal: true
  },
  {
    image: "images/4.png",
    link: "https://funabori.golfnavi.co.jp/wp-content/themes/golfnavi/images/howto03.pdf",
    isExternal: true
  },
  {
    image: "images/3.png",
    link: "/wifi",
    isExternal: false
  },
  {
    image: "images/1.png",
    link: "https://www.pc-koubou.jp/magazine/35662?srsltid=AfmBOopnpoRegJGCh-YWHaJG-rb73PCTICCjR7Aw-US-7zLFWUKFgDeJ",
    isExternal: true
  }
];

export const Items = () => {
  return (
    <>
      <Box sx={{ 
        py: { xs: 12, sm: 14, md: 16 },
        minHeight: { xs: '600px', sm: '650px', md: '700px' },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <Container 
          maxWidth="lg"
          sx={{
            px: { xs: 2, sm: 4, md: 6 },
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            py: { xs: 4, sm: 6, md: 8 }
          }}
        >
          <Typography
            variant="h4"
            align="center"
            sx={{
              fontSize: {
                xs: '1.4rem',
                sm: '1.8rem',
                md: '2.2rem'
              },
              fontFamily: "'M PLUS Rounded 1c', sans-serif",
              fontWeight: 'bold',
              mb: { xs: 8, sm: 10, md: 12 },
              borderBottom: '2px solid #000',
              paddingBottom: '10px',
              display: 'inline-block',
              width: '100%',
              textAlign: 'center'
            }}
          >
            オフィス機器
          </Typography>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                sm: 'repeat(2, 1fr)',
                md: 'repeat(4, 1fr)'
              },
              gap: { xs: 4, sm: 5, md: 6 },
              width: '100%',
              maxWidth: { xs: '100%', sm: '90%', md: '100%' },
              margin: '0 auto',
              justifyContent: 'center',
              '& > a': {
                display: 'flex',
                justifyContent: 'center',
                width: '100%'
              }
            }}
          >
            {manualItems.map((item, index) => (
              item.isExternal ? (
                <a 
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ 
                    textDecoration: 'none',
                    width: '100%'
                  }}
                >
                  <ProductCard {...item} />
                </a>
              ) : (
                <Link 
                  key={index}
                  to={item.link}
                  style={{ 
                    textDecoration: 'none',
                    width: '100%'
                  }}
                >
                  <ProductCard {...item} />
                </Link>
              )
            ))}
          </Box>
        </Container>
      </Box>
    </>
  );
}; 