"use client";
import React, { useRef, useState } from "react";
import QrScanner from "qr-scanner";

const QRScanner = () => {
  const videoRef = useRef(null);
  const [result, setResult] = useState("No result");

  // kamera belakang hp
  const constraints = {
    video: { facingMode: { exact: "environment" } }, // 'user' untuk kamera depan
  };

  const startScanner = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ constraints });
      videoRef.current.srcObject = stream;
      QrScanner.scanImage(videoRef.current)
        .then((result) => setResult(result))
        .catch((error) => console.error(error));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <video ref={videoRef} autoPlay playsInline></video>
      <button onClick={startScanner}>Start Scanner</button>
      <p>{result}</p>
    </div>
  );
};

export default QRScanner;
