import React from "react";
import PropTypes from "prop-types";

// Provider :: Props -> React.Component
class Provider extends React.Component {
  constructor(props) {
    super(props);

    props.pushPageNavigation(this.props.type);
  }

  render() {
    return <div data-is="taboola-provider">{this.props.children}</div>;
  }
}

Provider.propTypes = {
  type: PropTypes.oneOf(["home", "article", "category"]).isRequired,
  children: PropTypes.node.isRequired,
};

export default Provider;
