import Header from "./Header";
import Sidebar from "./Sidebar";
function DefaultLayout({ children }) {
  //DefaultLayout được gán bằng Layout mà Page là con của Layout theo component App vì vậy chidlren sẽ là Page (route)
  return (
    <div>
      <Header />
      <div className="container">
        <Sidebar />
        <div className="content">{children}</div>
      </div>
    </div>
  );
}

export default DefaultLayout;
