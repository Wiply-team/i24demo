import {
  compose,
  filter,
  isEmpty,
  map,
  pipe,
  prop,
  propEq,
  sortBy,
} from "ramda";
import {
  closeSubCategories,
  openSubCategories,
} from "../../../../store/modules/category";
import SubCategoriesMenu from "./SubCategoriesMenu";
import { connect } from "react-redux";

// formatMenuItem :: Object -> Object
const formatMenuItem = (category) => ({
  key: category.id,
  label: category.name,
  link: category.frontendUrl,
});

// formatNavbarItems :: [Category] -> [Item]
const formatNavbarItems = pipe(
  filter(propEq(true, "navbar")),
  sortBy(prop("navbarPosition")),
  map(formatMenuItem)
);

// mapStatetoProps :: State -> Props
const mapStatetoProps = (state) => ({
  activeItem: formatMenuItem(state.category.category),
  menuItems: isEmpty(state.category.category.tree.children)
    ? []
    : [
        formatMenuItem(state.category.category.tree.parent),
        ...formatNavbarItems(state.category.category.tree.children),
      ],
  isOpen: state.category.subCategoriesMenuOpened,
  collapsed: state.header.collapsed,
});

// mapDispatchToProps :: (Action * -> State) -> Props
const mapDispatchToProps = (dispatch) => ({
  open: compose(dispatch, openSubCategories),
  close: compose(dispatch, closeSubCategories),
});

// SubCategoriesMenu :: Props -> React.Component
export default connect(mapStatetoProps, mapDispatchToProps)(SubCategoriesMenu);
