import React, { useContext } from "react";
import { Box, Button, Heading, Text, Input, Label } from "theme-ui";
import { Scrollbars } from "react-custom-scrollbars";
import Drawer from "components/popup-drawer";
import { DrawerContext } from "../../contexts/drawer/drawer.context";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import { Link } from "react-scroll";
import {
  FaFacebookF,
  FaTwitter,
  FaGithubAlt,
  FaDribbble,
} from "react-icons/fa";
import menuItems from "./header.data";

const social = [
  {
    path: "/",
    icon: <FaFacebookF />,
  },
  {
    path: "/",
    icon: <FaTwitter />,
  },
  {
    path: "/",
    icon: <FaGithubAlt />,
  },
  {
    path: "/",
    icon: <FaDribbble />,
  },
];

const ModalDrawer = () => {
  const { state, dispatch } = useContext(DrawerContext);

  // Toggle drawer
  const toggleHandler = React.useCallback(() => {
    dispatch({
      type: "MODAL-TOGGLE",
    });
  }, [dispatch]);

  return (
    <Drawer
      // width="375px"
      drawerHandler={
        <Button
          className="donate__btn"
          variant="secondary"
          aria-label="Get Started"
        >
          Пробний Урок
        </Button>
      }
      open={state.modalIsOpen}
      toggleHandler={toggleHandler}
      closeButton={<IoMdClose size="24px" color="#000000" />}
      drawerStyle={styles.drawer}
      closeBtnStyle={styles.close}
    >
      <Scrollbars autoHide>
        <Box sx={styles.content}>
          <Box sx={styles.menu}>
            <Heading>Звʼязок з нами 😎</Heading>
            <Text sx={styles.menuText}>
              Залиште свої контактні дані, і менеджер нашої онлайн-школи
              англійської мови з вами зв’яжеться,
            </Text>
            <Box as="form" onSubmit={(e) => e.preventDefault()}>
              <Label htmlFor="name">Ваше Імʼя</Label>
              <Input name="name" id="name" mb={3} />
              <Label htmlFor="phone">Ваш номер телефону</Label>
              <Input type="phone" name="phone" id="phone" mb={3} />
              <Button>Записатись на пробний урок 😍</Button>
            </Box>
          </Box>

          <Box sx={styles.menuFooter}>
            <Box sx={styles.social}>
              {social.map(({ path, icon }, i) => (
                <Box as="span" key={i} sx={styles.social.icon}>
                  <Link to={path}>{icon}</Link>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Scrollbars>
    </Drawer>
  );
};

const styles = {
  drawer: {
    width: "100vw",
    height: "100%",
    backgroundColor: "dark",
    "@media screen and (min-width: 380px)": {
      width: "87vw",
    },
    "@media screen and (min-width: 740px)": {
      width: "475px",
    },
  },

  close: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: "25px",
    right: "30px",
    zIndex: "1",
    cursor: "pointer",
  },

  content: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    pt: "100px",
    pb: "40px",
    px: "30px",
  },

  menu: {
    width: "100%",

    display: "flex",
    flexDirection: "column",
    a: {
      fontSize: "16px",
      fontWeight: "500",
      color: "text_white",
      py: "15px",
      cursor: "pointer",
      borderBottom: "1px solid #e8e5e5",
      transition: "all 0.25s",
      "&:hover": {
        color: "secondary",
      },
      "&.active": {
        color: "secondary",
      },
    },
  },

  menuText: {
    marginBottom: "20px",
  },

  menuFooter: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    mt: "auto",
  },

  social: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    icon: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "text",
      fontSize: 14,
      mr: "15px",
      transition: "all 0.25s",
      cursor: "pointer",
      ":last-child": {
        mr: "0",
      },
      "&:hover": {
        color: "secondary",
      },
    },
  },

  button: {
    color: "white",
    fontSize: "14px",
    fw: "700",
    height: "45px",
    borderRadius: "5px",
    cursor: "pointer",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    py: "0",
  },
};

export default ModalDrawer;
