import React from "react";
import PageMenuDropdown from "../../../../legacy_components/PageMenuDropdown";

// SubCategories :: Props -> React.Component
export default ({ menuItems, activeItem, open, close, isOpen, collapsed }) => (
  <PageMenuDropdown
    items={menuItems}
    activeItem={activeItem}
    open={open}
    close={close}
    isOpen={isOpen}
    collapsed={collapsed}
    className="show-xl"
  />
);
