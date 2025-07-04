import { useTheme } from "../themeProvider/ThemeProvider.jsx";
import { Fab } from "@mui/material";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import MobileStepper from "@mui/material/MobileStepper";
import IconButton from "@mui/material/IconButton";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import TextFieldsIcon from "@mui/icons-material/TextFields";

const fontSizes = ["sm", "md", "lg", "xl", "2xl", "3xl"];

const fontSizeLabels = {
  sm: "Small",
  md: "Medium",
  lg: "Large",
  xl: "Extra Large",
  "2xl": "2X Large",
  "3xl": "3X Large",
};

const fontSizeToSlider = {
  sm: 0,
  md: 20,
  lg: 40,
  xl: 60,
  "2xl": 80,
  "3xl": 100,
};
const SettingsBubble = () => {
  const { theme, setTheme, fontSize, setFontSize } = useTheme();
  const currentIndex = fontSizes.indexOf(fontSize);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    console.log(`Theme changed to: ${theme === "light" ? "dark" : "light"}`);
  };

  const increaseFont = () => {
    const currentIndex = fontSizes.indexOf(fontSize);
    if (currentIndex < fontSizes.length - 1) {
      setFontSize(fontSizes[currentIndex + 1]);
    }
  };
  const decreaseFont = () => {
    const currentIndex = fontSizes.indexOf(fontSize);
    if (currentIndex > 0) {
      setFontSize(fontSizes[currentIndex - 1]);
    }
  };

  return (
    <>
      <div
        className={`${fontSizeToSlider[fontSize]} fixed bottom-4 right-4 z-50 `}
        dataTheme={theme}
      >
        <div className="dropdown dropdown-top dropdown-end z-50 ">
          <Fab color="primary" aria-label="Accessibility Settings">
            <AccessibilityNewIcon />
          </Fab>
          <ul
            tabIndex={0}
            className="dropdown-content menu rounded-box bg-base-300 z-50 w-[20rem]"
          >
            <li>
              <button onClick={toggleTheme} className="btn btn-ghost">
                {theme === "light" ? <LightModeIcon /> : <DarkModeIcon />}
                {theme === "light"
                  ? "Change to Dark Mode"
                  : "Change to Light Mode"}
              </button>
            </li>

            <li>
              <div className="flex justify-between items-center">
                <span className="text-sm">Font Size</span>
                <IconButton
                  onClick={increaseFont}
                  aria-label="Increase Font Size"
                  sx={{
                    backgroundColor: theme === "dark" ? "#1e293b" : "#f3f4f6", // Tailwind slate-800 or gray-200
                    color: theme === "dark" ? "#facc15" : "#f59e42", // Tailwind yellow-400 or orange-400
                    "&:hover": {
                      backgroundColor: theme === "dark" ? "#374151" : "#e5e7eb", // Tailwind slate-700 or gray-300
                    },
                  }}
                >
                  <AddIcon />
                </IconButton>
                {`${fontSizeLabels[fontSize]}`}
                <IconButton
                  onClick={decreaseFont}
                  aria-label="Decrease Font Size"
                  sx={{
                    backgroundColor: theme === "dark" ? "#1e293b" : "#f3f4f6", // Tailwind slate-800 or gray-200
                    color: theme === "dark" ? "#facc15" : "#f59e42", // Tailwind yellow-400 or orange-400
                    "&:hover": {
                      backgroundColor: theme === "dark" ? "#374151" : "#e5e7eb", // Tailwind slate-700 or gray-300
                    },
                  }}
                >
                  <RemoveIcon />
                </IconButton>
              </div>
              <div className="flex justify-center w-full mt-2 bg-base-100">
                <MobileStepper
                  variant="dots"
                  steps={fontSizes.length}
                  position="static"
                  activeStep={currentIndex}
                  sx={{
                    backgroundColor: "transparent",
                    borderRadius: 1,
                    boxShadow: "none",
                    "& .MuiMobileStepper-dot": {
                      backgroundColor: theme === "dark" ? "#999" : "#d1d5db", // Tailwind slate-700 or gray-300
                      opacity: 1,
                    },
                    "& .MuiMobileStepper-dotActive": {
                      backgroundColor: theme === "dark" ? "#facc15" : "#f59e42", // Tailwind yellow-400 or orange-400
                    },
                  }}
                />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SettingsBubble;
