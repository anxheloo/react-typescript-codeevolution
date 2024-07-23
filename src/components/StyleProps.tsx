import React from "react";

type Styles = {
  styles: React.CSSProperties;
};

const StyleProps = ({ styles }: Styles) => {
  return <div style={styles}></div>;
};

export default StyleProps;
