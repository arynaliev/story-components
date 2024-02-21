import CustomNavbar from "./CustomNavbar";
import PrimaryLogo from "../../assets/Chicago Bakes-primary-logo/Chicago Bakes-logos_transparent.png";
import SecondaryLogo from "../../assets/Chicago-Bakes-secondary-logo/Chicago Bakes-logos_transparent.png";

export default {
  title: "Molecule/CustomNavbar",
  component: CustomNavbar,
};

export const Primary = {
  args: {
    logoUrl: PrimaryLogo,
    logoType: "primary",
    navList: ["Cakes", "Order now", "About", "Reviews", "Login"],
    cart: "rounded",
  },
};

export const Secondary = {
  args: {
    logoUrl: SecondaryLogo,
    logoType: "secondary",
    navList: ["Menu", "Order now", "Contact Us", "About", "Login"],
    cart: "outlined",
  },
};
