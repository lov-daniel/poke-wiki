import { useTheme } from "../themeProvider/ThemeProvider.jsx";
import { FaUserGear, FaRegSun, FaRegMoon } from "react-icons/fa6";
import { useState } from "react";

const sliderToFontSize = {
  0: "md",
  25: "lg",
  50: "xl",
  75: "2xl",
  100: "3xl",
};

const fontSizeToSlider = {
  md: 0,
  lg: 25,
  xl: 50,
  "2xl": 75,
  "3xl": 100,
};
const SettingsBubble = () => {
  const { theme, setTheme, fontSize, setFontSize } = useTheme();

  const [sliderValue, setSliderValue] = useState(
    fontSizeToSlider[fontSize] ?? 0
  );

  const handleSliderChange = (e) => {
    const newValue = parseInt(e.target.value);
    setSliderValue(newValue);
    setFontSize(sliderToFontSize[newValue]);
  };

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    console.log(`Theme changed to: ${theme === "light" ? "dark" : "light"}`);
  };
  return (
    <>
      <div
        className={`${fontSizeToSlider[fontSize]} fixed bottom-4 right-4 z-50 `}
        dataTheme={theme}
      >
        <div className="dropdown dropdown-top dropdown-end z-50">
          <div
            tabIndex={0}
            role="button"
            className="btn rounded-full btn-ghost bg-base-300 hover:bg-base-200 focus:bg-base-200 border-2 border-base-200 hover:border-base-300 focus:border-base-300 "
            aria-label="Settings"
          >
            <FaUserGear size={"3em"} />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu rounded-box bg-base-300 z-50 w-[20rem]"
          >
            <li>
              <button onClick={toggleTheme} className="btn btn-ghost">
                {theme === "light" ? (
                  <FaRegSun style={{ size: "1.25em" }} />
                ) : (
                  <FaRegMoon style={{ size: "1.25em" }} />
                )}
                {theme === "light"
                  ? "Change to Dark Mode"
                  : "Change to Light Mode"}
              </button>
            </li>

            <div className="w-full px-4 py-2">
              <input
                type="range"
                min={0}
                max={100}
                value={sliderValue}
                className="range range-primary w-full"
                step={25}
                onChange={handleSliderChange}
                aria-label="Font Size"
              />
              <div className="flex justify-between mt-2 text-xs w-full">
                <span className="text-center w-12">normal</span>
                <span className="text-center w-12">large</span>
                <span className="text-center w-12">xl</span>
                <span className="text-center w-12">2xl</span>
                <span className="text-center w-12">3xl</span>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SettingsBubble;
