import styles from "./sidebarStyles.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);
function Sidebar() {
  return <div className={cx("wrapper")}></div>;
}

export default Sidebar;
