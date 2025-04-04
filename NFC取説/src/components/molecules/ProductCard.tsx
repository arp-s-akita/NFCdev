import { Box, Typography, Paper } from "@mui/material";

type Props = {
  image: string;
  link?: string;
};

export const ProductCard = ({ image, }: Props) => {
  return (
    <Paper 
      elevation={0}
      sx={{
        borderRadius: 2,
        overflow: 'hidden',
        transition: 'transform 0.3s ease',
        width: '280px',
        position: 'relative',
        '&:hover': {
          transform: 'translateY(-4px)',
        }
      }}
    >
      <Box
        component="img"
        src={image}
        sx={{
          width: '100%',
          height: '220px',
          objectFit: 'cover',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.19)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          opacity: 0,
          transition: 'opacity 0.3s ease',
          '&:hover': {
            opacity: 1,
          }
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontFamily: "'M PLUS Rounded 1c', sans-serif",
            fontWeight: 'bold',
            color: 'white',
            textAlign: 'center',
            padding: 2
          }}
        >
        </Typography>
      </Box>
    </Paper>
  );
}; 