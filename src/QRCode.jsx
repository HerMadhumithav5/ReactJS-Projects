import { useState } from "react";
import "./QRCode.css";

function QRCode() {
  const [image, setImage] = useState();
  const [link, setLink] = useState("");
  const [size, setSize] = useState();

  function api() {
    const img = `https://api.qrserver.com/v1/create-qr-code/?size=${size}x150&data=${link}`;
    setImage(img);
  }

  return (
    <>
      <div className="body">
        <h1>QR Code Generator</h1>
        <img src={image} alt="" />
        <div className="link">
          Link: <input type="text" onChange={(e) => setLink(e.target.value)} />
        </div>
        <div className="size">
          Size:
          <input type="number" onChange={(e) => setSize(e.target.value)} />
        </div>
        <button className="qr-button" onClick={api}>
          Generate
        </button>
      </div>
    </>
  );
}

export default QRCode;
