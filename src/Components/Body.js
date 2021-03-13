import React from "react";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Shot3 from "../Assets/shot3.jpg";

export default function Body() {
  return (
    <>
      <div className="content-area background">
        <br />
        <Row className="justify-content-center align-items-center h4 ml-5 mr-5">
          <div>
            Singer, Arts Administrator, Radio Host, Speaker & Activist who focuses on using my voice to people from different
            communities. Decentering whiteness and prioritizing those historically excluded from systematic structures,
            specifically in the arts.
          </div>
          <br/>
        </Row>
        <Row className="justify-content-center">
          <Image className="imageOption" src={Shot3} />
        </Row>
      </div>
      
    </>
  );
}
