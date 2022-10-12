import { useDispatch, useSelector } from "react-redux";
import {
  changeBackgroundColor,
  changeBarColor,
  changeBarPosition,
} from "../../features/settings/settingSlice";

export default function Personalization() {
  const backgroundColor = useSelector(
    (state) => state.setting.background.backgroundColor
  );
  const bar = useSelector((state) => state.setting.bar);
  const dispatch = useDispatch();

  const subTitleStyle = "text-5xl";

  return (
    <>
      <section>
        <h2 className={subTitleStyle}>Color</h2>

        <label>Background Color:</label>
        <input
          type="color"
          value={backgroundColor}
          onChange={(e) => dispatch(changeBackgroundColor(e.target.value))}
        />
      </section>

      <section>
        <h2 className={subTitleStyle}>Bar</h2>

        <label>Position:</label>
        <select
          value={bar.position}
          onChange={(e) => dispatch(changeBarPosition(e.target.value))}
        >
          <option value="bottom-0">Bottom</option>
          <option value="top-0">Top</option>
        </select>

        <label>Color:</label>
        <input
          type="color"
          value={bar.color}
          onChange={(e) => dispatch(changeBarColor(e.target.value))}
        />
      </section>
    </>
  );
}
