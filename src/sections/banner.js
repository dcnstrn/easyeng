/** @jsx jsx */
import { jsx, Box, Container, Heading, Text, Button, Image } from "theme-ui";
import banner from "assets/banner-1.png";
import paypal from "assets/paypal.png";
import google from "assets/google.png";
import dropbox from "assets/dropbox.png";
import { Link } from "react-scroll";

const Banner = () => {
  return (
    <Box id="home" as="section" variant="section.banner" sx={styles.banner}>
      <Container>
        <Box sx={styles.contentWrapper}>
          <Box sx={styles.content}>
            <Heading sx={styles.title}>
              Онлайн школа для <span sx={styles.span}>Покращення</span> вашої
              Англійскої
            </Heading>
            <Text as="p" sx={styles.text}>
              Це місце, де на вас чекають найкращі вчителі, передові навчальні
              методики та інтерактивні заняття англійською онлайн
            </Text>
            <Button variant="primary" sx={styles.button}>
              <Link
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="pricing"
              >
                {" "}
                Обрати курс
              </Link>
            </Button>
            {/* <Box sx={styles.clients}>
              <Image src={paypal} alt="paypal" />
              <Image src={google} alt="google" />
              <Image src={dropbox} alt="dropbox" />
            </Box> */}
          </Box>
          <Box sx={styles.illustration}>
            <Image src={banner} alt="banner" />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Banner;

const styles = {
  banner: {
    // background:
    //   "-webkit-linear-gradient(315deg, hsla(293, 100%, 97%, 1) 0%, hsla(0, 0%, 97%, 1) 100%)",
    background:
      "-webkit-linear-gradient(180deg, hsla(309, 100%, 97%, 1) 0%, hsla(0, 0%, 100%, 1) 100%)",
    paddingBottom: 20,
  },
  contentWrapper: {
    display: [null, null, null, "flex", "grid"],
    gridTemplateColumns: "repeat(2, 1fr)",

    alignItems: "center",
    justifyContent: "center",
    minHeight: [null, null, null, null, null, "100vh"],
    pt: [100, null, null, 120, 130, 120, 0],
  },
  content: {
    maxWidth: [507, null, null, 324, 450],
  },
  title: {
    fontWeight: "bold",
    fontSize: ["30px", null, null, null, "42px", "40px", "60px"],
    lineHeight: 1.33,
    letterSpacing: "-1px",
    color: "textSecondary",
  },
  span: {
    color: "primary",
  },
  text: {
    fontSize: ["14px", "14px", "14px", "16px", "16px", "18px"],
    lineHeight: [1.85, 1.85, 1.85, 1.85, 1.85, 2.33],
    color: "textSecondary",
    mt: ["14px", "19px"],
  },
  button: {
    display: ["none", "flex"],
    mt: [45, 45, 45, 25, 25],
  },
  clients: {
    display: "flex",
    alignItems: "center",
    mt: ["20px", "45px", "45px", "30px", "45px"],
    img: {
      maxWidth: ["80px", "100%", "100%", "100%"],
      "+ img": {
        ml: ["14px", "28px", "28px", "20px"],
      },
    },
  },
  illustration: {
    display: ["block", "block"],
    mt: ["30px", "30px", 0],
    mb: ["60px", "60px", 0],
    img: {
      maxWidth: ["100%", "100%", "100%", "100%", "90%", "90%", "100%"],
    },
  },
};
