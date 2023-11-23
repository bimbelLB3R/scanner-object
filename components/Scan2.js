"use client";
import React, { useEffect } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Scan2() {
  const [scanResult, setScanResult] = useState(null);
  const router = useRouter();

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
    // Check if the result does not start with "https://drive.google.com"
    if (scanResult && !scanResult.startsWith("https://drive.google.com")) {
      // Display an alert
      alert("QRcode belum terdaftar!!!");

      // Redirect to the main page
      router.push("/");
    }
  }, [router, scanResult]);

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
        <div className="flex justify-center items-center m-auto h-screen bg-[url('/image/bambu.jpeg')] bg-cover bg-no-repeat">
          {/* Success: <a href="">{scanResult}</a> */}
          <div>
            <audio id="audioku" controls>
              <source
                // src="https://drive.google.com/uc?id=1YQ4FwNk1nEEaLtDpgeBmW99zquHqWrb5"
                src={scanResult}
                type="audio/mpeg"
              />
              <source src={scanResult} type="audio/aac" />
              <source src={scanResult} type="audio/wav" />
              <source src={scanResult} type="audio/ogg" />
              <source src={scanResult} type="audio/flac" />
              <source src={scanResult} type="audio/webm" />
              Your browser does not support the audio element.
            </audio>
            <div className="flex items-center justify-center space-x-3 mt-10">
              <a
                href="/scan"
                className="p-2 bg-green-400 text-center rounded-full"
              >
                Ulangi
              </a>
              <a href="/" className="p-2 bg-green-400 text-center rounded-full">
                HALAMAN UTAMA
              </a>
            </div>
          </div>
        </div>
      ) : (
        <div id="reader"></div>
      )}
    </div>
  );
}
