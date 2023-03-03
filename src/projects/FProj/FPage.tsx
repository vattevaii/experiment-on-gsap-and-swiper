import React from "react";

type Props = {};

export default function FPage({}: Props) {
  const styles: React.CSSProperties = {
    backgroundImage: "url(/pngTree_bg1.jpg)",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <div style={styles} className="bg-cover">
      <h1>FPage</h1>
    </div>
  );
}
