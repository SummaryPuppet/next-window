import { useDispatch, useSelector } from "react-redux";
import { changeBackgroundColor } from "../../features/settings/settingSlice";

export default function Personalization() {
  const backgroundColor = useSelector((state) => state.setting.backgroundColor)
  const dispatch = useDispatch();

  return (
    <>
      <section>
        <label>Background Color</label>

        <input
          type="color"
          value={backgroundColor}
          onChange={(e) => dispatch(changeBackgroundColor(e.target.value))}
        />
      </section>

      <section></section>
    </>
  );
}
