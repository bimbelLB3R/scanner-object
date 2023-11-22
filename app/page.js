"use client";
import YoutubePlayer from "@/components/YoutubePlayer";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [isYoutubePopupOpen, setYoutubePopupOpen] = useState(false);

  const openYoutubePopup = () => {
    setYoutubePopupOpen(true);
  };

  const closeYoutubePopup = () => {
    setYoutubePopupOpen(false);
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-24 pl-16 pr-16 pb-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Belajar&nbsp;
          <code className="font-mono font-bold">Bermakna-Berpetualang</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-green-800 dark:via-green-600 lg:static lg:h-auto lg:w-auto lg:bg-none ">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0 font-extrabold text-xl"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            By SATT
          </a>
        </div>
      </div>

      <div className="relative flex place-items-center ">
        <Image
          className="relative"
          src="/logosatt.png"
          alt="logo satt"
          width={75}
          height={75}
          priority
        />
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left text-green-800">
        <a
          href="/scan"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Scan{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Eksplorasi Suara Alam.
          </p>
        </a>

        <a
          href="#"
          onClick={openYoutubePopup}
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Profil{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Mengenal lebih dekat Sekolah Alam Tanjug Tabalong
          </p>
        </a>

        <a
          href="#"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Video Dokumentasi{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Video dokumentasi kegiatan, terbaru dan ter up date
          </p>
        </a>

        <a
          href="#"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Daftar Menjadi Siswa{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Formulir pendaftaran siswa baru secara on line
          </p>
        </a>
      </div>
      {isYoutubePopupOpen && (
        <div className="absolute top-0 z-20  w-full bg-green-900/50">
          <div className="flex items-center justify-center h-screen m-auto">
            <div>
              <div className="flex items-center justify-end">
                <button
                  className="text-2xl p-1 m-2 text-red-800 border-1 underline"
                  onClick={closeYoutubePopup}
                >
                  X
                </button>
              </div>

              <YoutubePlayer />
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
