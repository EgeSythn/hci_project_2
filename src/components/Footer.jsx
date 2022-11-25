import {
  createStyles,
  Container,
  Group,
  ActionIcon,
  Center,
  Text,
  Grid,
  Image,
} from "@mantine/core";
import {
  IconBrandTwitter,
  IconBrandYoutube,
  IconBrandInstagram,
} from "@tabler/icons";

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: 600,
    borderTop: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  inner: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,

    [theme.fn.smallerThan("xs")]: {
      flexDirection: "column",
    },
  },

  links: {
    [theme.fn.smallerThan("xs")]: {
      marginTop: theme.spacing.md,
    },
  },
}));

export function Footer() {
  const { classes } = useStyles();

  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <Grid>
          <Grid.Col span={12}>
            <a
              href="https://www.flaticon.com/free-icons/accessibility"
              title="accessibility icons"
            >
              <Text color={"black"} style={{ fontFamily: "sans-serif" }}>
                Accessibility icons created by Smashicons - Flaticon
              </Text>
            </a>
          </Grid.Col>
        </Grid>
      </Container>
    </div>
  );
}

export default Footer;
