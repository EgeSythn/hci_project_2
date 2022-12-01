import { Image, Center } from "@mantine/core";
import headerbackground from "../assets/headerbackground.png";

function DividerImage(props) {
  const { alt, size } = props;
  return (
    <Center>
      <Image
        radius="md"
        height={10}
        style={{
          width: `${size}%`,
          paddingTop: "5%",
          paddingBottom: "5%",
        }}
        src={headerbackground}
        alt={alt}
      />
    </Center>
  );
}

export default DividerImage;
