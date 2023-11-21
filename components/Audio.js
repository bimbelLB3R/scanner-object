// pages/index.js
import Head from "next/head";

export default function Audio() {
  return (
    <div>
      <Head>
        <title>Audio Autoplay</title>
      </Head>
      <audio autoPlay controls preload="auto">
        <source
          src="https://drive.google.com/uc?id=1YQ4FwNk1nEEaLtDpgeBmW99zquHqWrb5"
          type="audio/mpeg"
        />
        Your browser does not support the audio element.
      </audio>
      <p>This is your Next.js page with autoplaying audio from Google Drive.</p>
    </div>
  );
}
