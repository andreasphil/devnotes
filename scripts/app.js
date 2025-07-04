import { useThemeColor } from "../vendor/andreasphil/design-system@v0.49.0/scripts/utils.js";

useThemeColor();

// Workaround to prevent flickering of links when the page is loaded, also
// see style/style.css
document
  .querySelector(":root")
  .style.setProperty("--link-transition-duration", "var(--transition-duration");
