import React, { CSSProperties } from "react";

type Styles = {
  styles: CSSProperties;
};

const StyleProps = ({ styles }: Styles) => {
  return <div style={styles}></div>;
};

export default StyleProps;
