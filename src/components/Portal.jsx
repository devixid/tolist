import { createPortal } from "react-dom";
import PropTypes from "prop-types";

function Portal({ id, children }) {
  const portalId = id || "portal-root";
  const container = document.getElementById(portalId);

  if (container) {
    return createPortal(children, container);
  }

  return null;
}

Portal.propTypes = {
  id: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Portal;
