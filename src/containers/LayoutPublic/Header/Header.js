import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import Image from 'react-bootstrap/lib/Image';

import { Heading, Spacing } from 'components';
import { Grid } from 'restyled';

import ButtonMenu from './ButtonMenu';

import YOLogo from './yo-logo.svg';

class Header extends Component {
  state = { isMobileMenuVisible: false };

  toggleMobileMenu = () => {
    this.setState((prevState) => ({ isMobileMenuVisible: !prevState.isMobileMenuVisible }));
  }

  closeMobileMenu = () => {
    if (this.state.isMobileMenuVisible) this.setState({ isMobileMenuVisible: false });
  }

  render() {
    return (
      <Fragment>
        <div className="yo-header" data-aos="fade-down" data-aos-delay="250" data-aos-offset="0">
          <Grid>
            <Grid.Row colEqualHeight colMobileEqual="middle">
              <Grid.Col xs={4}>
                <NavLink to="/" onClick={this.closeMobileMenu}>
                  <Image src={YOLogo} className="yo-header__logo" alt="yo-logo" responsive />
                </NavLink>
              </Grid.Col>

              <Grid.Col
                xs={8}
                className="text-right"
                smHidden
                mdHidden
                lgHidden
              >
                <ButtonMenu
                  isOpen={this.state.isMobileMenuVisible}
                  onClick={this.toggleMobileMenu}
                />
              </Grid.Col>

              <Grid.Col
                sm={8}
                className="text-right"
                contentAlign="middle"
                xsHidden
              >
                <Heading size={4} typeface="bold" inline>
                  <NavLink
                    to="/olenka"
                    className="yo-header__menu-item"
                    activeClassName="yo-header__menu-item--active"
                  >
                    about Olenka
                  </NavLink>
                  <Spacing width={24} />
                  <NavLink
                    to="/yevhen"
                    className="yo-header__menu-item"
                    activeClassName="yo-header__menu-item--active"
                  >
                    about Yevhen
                  </NavLink>
                  {/*
                  <Spacing width={24} />
                  <NavLink
                    to="#"
                    className="yo-header__menu-item"
                    activeClassName="yo-header__menu-item--active"
                  >
                    contact us
                  </NavLink>
                  */}
                </Heading>
              </Grid.Col>
            </Grid.Row>
          </Grid>
        </div>

        <div className={`yo-header__menu-mobile yo-header__menu-mobile--${this.state.isMobileMenuVisible ? 'visible' : 'invisible'}`}>
          <Grid>
            <Heading
              size={4}
              typeface="bold"
              center
            >
              <Grid.Row>
                <Grid.Col xs={6} noPadding>
                  <NavLink
                    to="/olenka"
                    className="yo-header__menu-item"
                    activeClassName="yo-header__menu-item--active"
                  >
                    about Olenka
                  </NavLink>
                </Grid.Col>
                <Grid.Col xs={6} noPadding>
                  <NavLink
                    to="/yevhen"
                    className="yo-header__menu-item"
                    activeClassName="yo-header__menu-item--active"
                  >
                    about Yevhen
                  </NavLink>
                </Grid.Col>
              </Grid.Row>
            </Heading>
          </Grid>
        </div>
      </Fragment>
    );
  }
}

export default Header;
