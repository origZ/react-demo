import React, { memo, useState } from "react";
import { QRCodeGeneratorWrapper } from "./style";
import QRCode from "react-qr-code";

const QRCodeGenerator = memo(() => {
  const [qrCode, setQrCode] = useState("");
  const [input, setInput] = useState("");

  function handleGeneratorQrCode() {
    setQrCode(input);
    setInput("");
  }
  return (
    <QRCodeGeneratorWrapper>
      <h1>QR Code Generator</h1>
      <div>
        <input
          type="text"
          name="qr-code"
          value={input}
          placeholder="Enter your value here"
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          disabled={input && input.trim() !== "" ? false : true}
          onClick={handleGeneratorQrCode}
        >
          Generator
        </button>
      </div>
      <div>
        <QRCode id="qr-code-value" value={qrCode} size={400} bgColor="#fff" />
      </div>
    </QRCodeGeneratorWrapper>
  );
});

export default QRCodeGenerator;
