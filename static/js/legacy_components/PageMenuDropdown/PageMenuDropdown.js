import "./PageMenuDropdown.scss";
import ArrowIcon from "../Icons/ArrowIcon";
import Link from "../../components/Routing/Link";
import React from "react";
import Button from "../../widgets/Button/Base";
import translate from "../../utilities/translate";
import translations from "./translations";
import useEscapePress from "../../hooks/useEscapePress";

const trans = translate(translations);

const PageMenuDropdown = ({
  className = "",
  items = [],
  activeItem,
  isOpen = false,
  close,
  open,
  collapsed = false,
  locale,
}) => {
  useEscapePress(close);

  return items.length > 0 ? (
    <div
      className={`page-menu-dropdown ${className} ${
        isOpen ? "is-expanded" : ""
      } ${collapsed ? "collapsed" : ""}`}
    >
      <div className="wrapper">
        <div className="container container-page">
          <ul className={!isOpen ? "not-expanded" : ""}>
            <li className="show-xl toggler active">
              {activeItem ? activeItem.label : ""}
              <div className="toggler-button">
                <Button
                  onClick={() => (isOpen ? close() : open())}
                  aria-label={trans(locale)("toggle")}
                >
                  <ArrowIcon />
                </Button>
              </div>
            </li>
            {items.map(({ key, label, link }) => (
              <li
                key={key}
                className={key === activeItem.key ? "active hide-xl" : ""}
              >
                <Link href={link}>{label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  ) : null;
};

export default PageMenuDropdown;
