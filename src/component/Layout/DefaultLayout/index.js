import Header from "../component/Header";
import Sidebar from "./Sidebar";
import styles from "./defaultLayoutStyles.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);
function DefaultLayout({ children }) {
  //DefaultLayout được gán bằng Layout mà Page là con của Layout theo component App vì vậy chidlren sẽ là Page (route)
  return (
    <div>
      <Header />
      {/* phần chiếm toàn màn hình */}
      <div className={cx("wrapper")}>
        {/* khối bao sidebar và content */}
        <div className={cx("container")}>
          {/* sidebar */}
          <Sidebar />
          {/* content */}
          <div className={cx("content")}>{children}</div>
        </div>
      </div>
    </div>
  );
}

export default DefaultLayout;
