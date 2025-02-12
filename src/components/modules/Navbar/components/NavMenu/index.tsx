import { Fragment } from "react";
import { MainMenu } from "../MainMenu";
import { HamburgerMenu } from "../HamburgerMenu";

export const NavMenu = () => (
  <Fragment>
    <MainMenu />
    <HamburgerMenu />
  </Fragment>
);
