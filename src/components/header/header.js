/** @jsx jsx */
import { jsx, Container, Flex, Button, Box } from "theme-ui";
import { keyframes } from "@emotion/core";
import { Link } from "react-scroll";
import Logo from "components/logo";
import LogoDark from "assets/logo.svg";
import { DrawerProvider } from "../../contexts/drawer/drawer.provider";
import MobileDrawer from "./mobile-drawer";
import menuItems from "./header.data";
import Popup from "reactjs-popup";
import ModalDrawer from "./modal-drawer";

export default function Header({ className }) {
  return (
    <DrawerProvider>
      <header sx={styles.header} className={className} id="header">
        <Container sx={styles.container}>
          <Logo src={LogoDark} />

          <Flex as="nav" sx={styles.nav}>
            {menuItems.map(({ path, label }, i) => (
              <Link
                activeClass="active"
                to={path}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                key={i}
              >
                {label}
              </Link>
            ))}
          </Flex>

          {/* MODAL */}
          {/* <Popup
            trigger={
              <Button
                className="donate__btn"
                variant="secondary"
                aria-label="Get Started"
              >
                Get Started
              </Button>
            }
            modal
            nested
          >
            {(close) => (
              <div sx={styles.modal}>
                <button sx={styles.modal____close} onClick={close}>
                  &times;
                </button>
                <div sx={styles.modal____header}>  Звʼязок з нами </div>
                <div sx={styles.modal____content}>
                  Залиште свої контактні дані, і менеджер нашої онлайн-школи
                  англійської мови з вами зв’яжеться,
                </div>
                <div sx={styles.modal____actions}>
                  <form action="" sx={styles.modal____form}>
                    <input
                      type="name"
                      name="name"
                      placeholder="Ваше Імʼя"
                      required
                      sx={styles.modal____input}
                    />
                    <input
                      type="phone"
                      name="phone"
                      placeholder="Ваш номер телефону"
                      required
                      sx={styles.modal____input}
                    />

                    <Button
                      className="donate__btn"
                      variant="secondary"
                      aria-label="Get Started"
                    >
                      Замовити зворотній звонок
                    </Button>
                  </form>
                </div>
              </div>
            )}
          </Popup> */}
          {/* MODAL */}
          <Box sx={styles.button_wrapper}>
            <ModalDrawer />
            <MobileDrawer />
          </Box>
        </Container>
      </header>
    </DrawerProvider>
  );
}

const positionAnim = keyframes`
  from {
    position: fixed;
    opacity: 1;
  }

  to {
    position: absolute;
    opacity: 1;
    transition: all 0.4s ease;
  }
`;

const anvil = keyframes`
0% {
  transform: scale(1) translateY(0px);
  opacity: 0;
  box-shadow: 0 0 0 rgba(241, 241, 241, 0);
}
1% {
  transform: scale(0.96) translateY(10px);
  opacity: 0;
  box-shadow: 0 0 0 rgba(241, 241, 241, 0);
}
100% {
  transform: scale(1) translateY(0px);
  opacity: 1;
  box-shadow: 0 0 500px rgba(241, 241, 241, 0);
}
`;

const styles = {
  header: {
    color: "text",
    fontWeight: "body",
    py: 4,
    width: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    transition: "all 0.4s ease",
    animation: `${positionAnim} 0.4s ease`,
    ".donate__btn": {
      flexShrink: 0,
      mr: [15, 20, null, null, 0],
      ml: ["auto", null, null, null, 0],
    },
    "&.sticky": {
      position: "fixed",
      backgroundColor: "background",
      color: "#000000",
      boxShadow: "0 1px 2px rgba(0, 0, 0, 0.06)",
      py: 3,
      "nev > a": {
        color: "text",
      },
    },
  },
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  nav: {
    mx: "auto",
    display: "none",
    "@media screen and (min-width: 1024px)": {
      display: "block",
    },
    a: {
      fontSize: 2,
      fontWeight: "body",
      px: 5,
      cursor: "pointer",
      lineHeight: "1.2",
      transition: "all 0.15s",
      "&:hover": {
        color: "primary",
      },
      "&.active": {
        color: "primary",
      },
    },
  },

  button_wrapper: {
    display: "flex",
    alignItems: "center",
  },

  modal: {
    fontSize: "12px",
    paddingLeft: "20px",
    paddingRight: "20px",
    paddingTop: "10px",
    paddingBottom: "10px",
    margin: "30px",
    border: "1px solid rgba(38, 78, 118, 0.1)",
    position: "relative",
    background: "white",
    maxWidth: "600px",
    borderRadius: 20,

    animation: `${anvil} 0.4s cubic-bezier(0.38, 0.1, 0.36, 0.9) forwards`,
    transition: "all 0.3s",
    boxShadow: "0px 4px 25px rgba(38, 78, 118, 0.2) !important",
  },
  modal____header: {
    width: "100%",
    borderBottom: "1px solid gray",
    fontSize: "20px",
    fontWeight: "600",
    textAlign: "left",
  },
  modal____content: {
    width: "100%",
    padding: "10px 5px",
    fontSize: "14px",
  },
  modal____actions: {
    width: "100%",
    padding: "5px 5px",
    margin: "auto",
    textAlign: "center",
  },
  modal____form: {
    display: "flex",
    flexDirection: "column",
    paddingBottom: "10px",
  },
  modal____input: {
    padding: "20px",
    marginBottom: "20px",
    border: "none",
    borderBottom: "1px solid #cfcece",
  },
  modal____close: {
    cursor: "pointer",
    position: "absolute",
    display: "block",
    padding: "2px 5px",
    lineHeight: "20px",
    right: "-10px",
    top: "-10px",
    fontSize: "24px",
    background: "#ffffff",
    borderRadius: "18px",
    border: "1px solid #cfcece",
  },
};
