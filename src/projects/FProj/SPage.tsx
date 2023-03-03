import React from "react";

type Props = {};

export default function SPage({}: Props) {
  const styles: React.CSSProperties = {
    // backgroundImage: "url(/pngTree_bg1.jpg)",
    height: "100%",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridTemplateRows: "1fr 1fr",
  };
  return (
    <div style={styles}>
      <div
        className="first bg-cover"
        style={{
          gridColumn: "2/3",
          gridRow: "1/3",
          backgroundImage: "url(/akin.jpg)",
        }}
      ></div>
      <div
        className="second center-items center-text"
        style={{ background: "rgb(199, 155, 71)" }}
      >
        <div>
          <h1>Millenials and Cars</h1>
          <h3>It's complicated</h3>
        </div>
      </div>
      <div
        className="third bg-cover"
        style={{ backgroundImage: "url(/Hero_2.jpg)" }}
      ></div>
    </div>
  );
}
