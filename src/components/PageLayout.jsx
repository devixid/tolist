import { memo } from "react";
import PropTypes from "prop-types";

import Navbar from "./Navbar";

function PageLayout({ children }) {
  return (
    <>
      <Navbar />

      {children}
    </>
  );
}

PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default memo(PageLayout);
