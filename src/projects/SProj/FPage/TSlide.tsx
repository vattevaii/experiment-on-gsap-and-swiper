import React from "react";

type Props = {};

export default function TSlide({}: Props) {
  const styles: React.CSSProperties = {
    backgroundImage: "url(/akin.jpg)",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <div style={styles} className="bg-cover">
      <h1>TSlide</h1>
    </div>
  );
}
