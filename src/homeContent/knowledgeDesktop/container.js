import KnowlogedDesktopView from "./presentational";
import { useState } from "react";

const KnowlogedDesktop = () => {
  const [selected, setSelected] = useState("developer");

  const selectKnowledgeFn = (e) => {
    setSelected(e.target.value);
  };

  return (
    <KnowlogedDesktopView
      selected={selected}
      selectKnowledgeFn={selectKnowledgeFn}
    />
  );
};

export default KnowlogedDesktop;
