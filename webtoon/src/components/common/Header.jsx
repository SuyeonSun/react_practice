import style from "./header.module.scss";
import className from "classnames/bind";

const cx = className.bind(style);

const Header = () => {
  return (
    <div className={cx("header-container")}>
      <button>NAVER</button>
      <button>웹툰</button>
      <button>웹소설</button>
      <button>시리즈</button>
    </div>
  );
};
export default Header;
