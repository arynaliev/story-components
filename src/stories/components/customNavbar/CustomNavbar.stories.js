import CustomNavbar from "./CustomNavbar";
import primaryLogo from "../../assets/Chicago Bakes-primary-logo/Chicago Bakes-logos_transparent.png";
import secondaryLogo from "../../assets/Chicago-Bakes-secondary-logo/Chicago Bakes-logos_transparent.png";

export default {
  title: "Molecule/CustomNavbar",
  component: CustomNavbar,
};

export const Primary = {
  args: {
    logo: primaryLogo,
    navList: ["Cakes", "Order now", "About", "Login"],
    cartVariant: "contained",
  },
};

export const Secondary = {
  args: {
    logo: secondaryLogo,
    navList: ["Menu", "Order now", "Contact Us", "About", "Login"],
    cartVariant: "outlined",
  },
};
