"use client";
import React, { useEffect } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";
import { useState } from "react";

export default function Scan2() {
  const [scanResult, setScanResult] = useState(null);
  useEffect(() => {
    const scanner = new Html5QrcodeScanner("reader", {
      qrbox: {
        width: 250,
        height: 250,
      },
      fps: 5,
    });
    scanner.render(success, error);
    function success(result) {
      scanner.clear();
      setScanResult(result);
    }
    function error(err) {
      console.warn(err);
    }
  }, []);

  useEffect(() => {
    // Fungsi untuk memainkan audio
    const playAudio = () => {
      const audioElem = document.getElementById("audioku");

      if (audioElem) {
        audioElem.play();
      }
    };

    // Memeriksa apakah ada scanResult dan memainkan audio jika ada
    if (scanResult) {
      playAudio();
    }
  }, [scanResult]);

  return (
    <div>
      {scanResult ? (
        <div className="flex justify-center">
          {/* Success: <a href={"http://" + scanResult}>{scanResult}</a> */}
          <div>
            <audio id="audioku" controls>
              <source
                src="https://drive.google.com/uc?id=1YQ4FwNk1nEEaLtDpgeBmW99zquHqWrb5"
                type="audio/mpeg"
              />
              Your browser does not support the audio element.
            </audio>
            <a href="/scan" className="p-2 m-6 bg-blue-400 text-center">
              Back
            </a>
          </div>
        </div>
      ) : (
        <div id="reader"></div>
      )}
    </div>
  );
}
