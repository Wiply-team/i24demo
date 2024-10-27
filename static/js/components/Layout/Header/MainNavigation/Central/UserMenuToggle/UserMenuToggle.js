import React from "react";
import styles from "./UserMenuToggle.module.css";
import translate from "../../../../../../utilities/translate";
import translations from "./translations";
import ProfileIcon from "../../../../../../legacy_components/Icons/ProfileIcon";
import Button from "../../../../../../widgets/Button/Base";
import Dropdown from "../../../Dropdown";
import { getLocales } from "../../../../../../utilities/locales";
import PropTypes from "prop-types";
import SignInModal from "../../../../../User/SignInModal";
import ClientOnly from "../../../../../../legacy_components/ClientOnly";

const trans = translate(translations);

// UserMenuToggle :: Props -> React.Component
const UserMenuToggle = ({
  locale,
  isSignInModalOpen,
  isSignedIn,
  isProfileActive,
  isFavoritesActive,
  openSignIn,
  closeSignIn,
  onSignOut,
}) => (
  <>
    {isSignedIn ? (
      <div className={styles.wrapper}>
        <Dropdown>
          <Dropdown.Toggle>
            <Button
              id="user-menu-toggle"
              onClick={() => {}}
              aria-label={trans(locale)("label")}
            >
              <ProfileIcon height={26} />
            </Button>
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Menu.Link
              href={trans(locale)("profileLink")}
              isActive={isProfileActive}
            >
              {trans(locale)("profileLabel")}
            </Dropdown.Menu.Link>
            <Dropdown.Menu.Link
              href={trans(locale)("favoritesLink")}
              isActive={isFavoritesActive}
            >
              {trans(locale)("favoritesLabel")}
            </Dropdown.Menu.Link>
            <Dropdown.Menu.Button onClick={onSignOut}>
              {trans(locale)("signOut")}
            </Dropdown.Menu.Button>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    ) : (
      <div className={styles.wrapper}>
        <Button
          id="user-menu-toggle"
          onClick={openSignIn}
          aria-label={trans(locale)("signIn")}
        >
          <ProfileIcon height={26} />
        </Button>
      </div>
    )}
    <ClientOnly>
      <SignInModal isOpen={isSignInModalOpen} onClose={closeSignIn} />
    </ClientOnly>
  </>
);

UserMenuToggle.propTypes = {
  locale: PropTypes.oneOf(getLocales()).isRequired,
  isSignedIn: PropTypes.bool.isRequired,
  isSignInModalOpen: PropTypes.bool.isRequired,
  isProfileActive: PropTypes.bool.isRequired,
  isFavoritesActive: PropTypes.bool.isRequired,
  openSignIn: PropTypes.func.isRequired,
  closeSignIn: PropTypes.func.isRequired,
  onSignOut: PropTypes.func.isRequired,
};

export default UserMenuToggle;
