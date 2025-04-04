import { GridContainer, ProductLink, ProductImage } from "./ProductGrid.styles";

interface ProductImage {
  src: string;
  link: string;
}

interface ProductGridProps {
  images: ProductImage[];
}

export const ProductGrid = ({ images }: ProductGridProps) => {
  return (
    <GridContainer>
      {images.map((image, index) => (
        <ProductLink
          key={index}
          href={image.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <ProductImage
            src={image.src}
            alt={`商品画像 ${index + 1}`}
          />
        </ProductLink>
      ))}
    </GridContainer>
  );
}; 