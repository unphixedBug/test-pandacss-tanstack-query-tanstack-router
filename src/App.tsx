import { css } from "../styled-system/css";
import "./index.css";

function App() {
  return (
    <div
      className={css({
        bg: "blue.500",
        color: "white",
        p: "4",
        fontSize: "2xl",
        borderRadius: "md",
      })}
    >
      🐼 PandaCSS fonctionne !
    </div>
  );
}

export default App;
