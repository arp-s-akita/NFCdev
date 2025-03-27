import { motion } from "framer-motion";
import { SliderCard } from "../molecules/SliderCard";
import { Box } from "@mui/material";

// スライド用の画像データ
const images = [
  {
    src: "https://img1.kakaku.k-img.com/images/productimage/fullscale/K0001568352.jpg",
    link: "https://gdlp01.c-wss.com/gds/6/0300006546/03/dpc995-reference-2.pdf",
  },
  {
    src: "https://akerun.com/wp-content/themes/akerun_renew/src/imgs/entry_and_exit/akerunctl/akerun-akerunctl-setuplist4_02.jpg",
    link: "https://funabori.golfnavi.co.jp/wp-content/themes/golfnavi/images/howto03.pdf",
  },
  {
    src: "https://www.nuro.jp/article/_wp/wp-content/uploads/2022/04/wifi-shurui1.jpg",
    link: "https://support.microsoft.com/ja-jp/windows/windows-%E3%81%A7-wi-fi-%E3%83%8D%E3%83%83%E3%83%88%E3%83%AF%E3%83%BC%E3%82%AF%E3%81%AB%E6%8E%A5%E7%B6%9A%E3%81%99%E3%82%8B-1f881677-b569-0cd5-010d-e3cd3579d263",
  },
  {
    src: "https://www.pc-koubou.jp/magazine/wp-content/uploads/2020/11/bc9a2ec2dca8af635ef044a6573b1212.jpg",
    link: "https://www.pc-koubou.jp/magazine/35662?srsltid=AfmBOopnpoRegJGCh-YWHaJG-rb73PCTICCjR7Aw-US-7zLFWUKFgDeJ",
  },
];

export const Slide = () => {
  return (
    <motion.div
      className="slider"
      animate={{ x: ["0%", "-100%"] }} // スライドを右から左へ
      initial={{ x: "0%" }} // 最初の位置を0%に設定
      transition={{
        repeat: Infinity, // 無限ループ
        duration: 30, // 1周の時間（調整可能）
        ease: "linear", // スムーズな動き
      }}
      style={{
        display: "flex", // 水平方向に並べる
        position: "relative", // 絶対位置にする
      }}
    >
      <Box sx={{ display: "flex", position: "relative" }}>
        {/* スライドを2セット用意して無限ループにする */}
        {[...images, ...images].map((src, index) => (
          <SliderCard
            key={index}
            img={src.src}
            URL={src.link}
            name={""} // 名前は空に設定
          />
        ))}
      </Box>
    </motion.div>
  );
};
