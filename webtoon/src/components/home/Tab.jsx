import style from "./tab.module.scss";
import className from "classnames/bind";

const cx = className.bind(style);

const Tab = ({ onHandleButtonClick, selectedBtn }) => {
  const days = [
    { value: 0, label: "일" },
    { value: 1, label: "월" },
    { value: 2, label: "화" },
    { value: 3, label: "수" },
    { value: 4, label: "목" },
    { value: 5, label: "금" },
    { value: 6, label: "토" },
  ];

  return (
    <div className={cx("tab-container")}>
      {days.map((day) => (
        <button
          key={day.value}
          onClick={onHandleButtonClick}
          value={day.value}
          className={cx(selectedBtn == day.value ? "tab-btn" : "")}
        >
          {day.label}
        </button>
      ))}
    </div>
  );
};

export default Tab;
