import React from "react";

type Props = {};

export default function TProj({}: Props) {
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
          gridColumn: "1/2",
          gridRow: "1/3",
          backgroundImage: "url(/akin.jpg)",
        }}
      ></div>
      <div
        className="second center-items center-text"
        style={{ background: "rgb(63, 65, 93)" }}
      >
        <div>
          <h1>Ask us how ZIG made the first move</h1>
          <h3>By embracing multi categories</h3>
        </div>
      </div>
      <div
        className="third bg-cover"
        style={{ backgroundImage: "url(/akin_g.jpg)" }}
      ></div>
    </div>
  );
}
