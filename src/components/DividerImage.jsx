import {
  AppShell,
  useMantineTheme,
  Header,
  Image,
  Text,
  Title,
} from "@mantine/core";
import headerbackground from "../assets/headerbackground.png";

function DividerImage(props) {
  const { alt } = props;
  return (
    <Image
      radius="md"
      height={10}
      style={{
        paddingTop: "5%",
        paddingBottom: "5%",
        paddingLeft: "2.5%",
        paddingRight: "2.5%",
      }}
      src={headerbackground}
      alt={alt}
    />
  );
}

export default DividerImage;
