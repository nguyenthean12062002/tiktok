import styles from "./headerStyles.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);
function Header() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("content")}>Header</div>
    </div>
  );
}

export default Header;
