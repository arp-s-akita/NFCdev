import { Box, Typography } from "@mui/material";

type Props = {
  img: string;
  name: string;
  URL: string;
};

export const SliderCard: React.FC<Props> = (props: Props) => {
  return (
    <Box>
      <a href={props.URL}>
        <Box sx={{ backgroundColor: "#f6f5f3" }}>
          <img
            src={props.img}
            alt=""
            style={{
              display: "block",
              width: "400px",
              height: "400px",
              borderRadius: "50px",
              padding: 10,
            }}
          />
          <Typography
            sx={{
              padding: "10px",
              fontFamily: "'M PLUS Rounded 1c', sans-serif",
            }}
          >
            {props.name}
          </Typography>{" "}
        </Box>
      </a>
    </Box>
  );
};
