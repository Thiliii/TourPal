import colors from "../assets/Style/colors";

const navbarStyles = {
  signInUpBtn: {
    color: colors.black,
    cursor: "pointer",
    "&:hover": {
      fontWeight: "bold",
    },
  },

  NavbarHeading: {
    color: colors.black,
    cursor: "pointer",
    fontWeight: 600,
    fontFamily: "Poppins",
    fontSize: 18,
    lineHeight: 2.0,
    letterSpacing: 0,
    textAlign: "center",
  },
};

export default navbarStyles;
