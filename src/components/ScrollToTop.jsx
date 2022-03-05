import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useWindowScroll } from "react-use";

function ScrollToTop() {
  const { y: pageYOffset } = useWindowScroll();
  const [visible, setVisiblity] = useState(false);

  useEffect(() => {
    if (pageYOffset > 400) {
      setVisiblity(true);
    } else {
      setVisiblity(false);
    }
  }, [pageYOffset]);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  if (!visible) {
    return false;
  }

  return (
    <div
      className="scroll-to-top cursor-pointer text-center"
      onClick={scrollToTop}
    >
      <FontAwesomeIcon icon="check-square" />
    </div>
  );
}

export default ScrollToTop;
