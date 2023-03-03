import React from "react";

type Props = {};

export default function SSlide({}: Props) {
  const styles: React.CSSProperties = {
    backgroundImage: "url(/Hero_2.jpg)",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <div style={styles} className="bg-cover">
      <h1>SSlide</h1>
    </div>
  );
}
