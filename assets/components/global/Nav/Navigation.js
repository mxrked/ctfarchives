/**
 *
 *  This is the navigation
 *
 */

import { FaCode, FaCaretLeft } from "react-icons/fa";

import styles from "../../../styles/modules/Nav/Nav.module.css";

export const Navigation = () => {
  return (
    <nav
      id="pageNavigation"
      className={`${styles.navigation} overrides_Navigation`}
    >
      <div className={`${styles.navigation_inner}`}>
        <div className={`${styles.navigation_logo}`}>
          <FaCode className={`${styles.icon}`} />

          <h1>
            codingthefront <span>- Archives</span>
          </h1>
        </div>

        <div className={`${styles.back_link}`} id="backLink">
          <a href="/" className="half-second">
            <FaCaretLeft className={`${styles.icon} half-second`} />

            <span className="half-second">Go Back</span>
          </a>
        </div>
      </div>
    </nav>
  );
};
