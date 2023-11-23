"use client";
import YoutubePlayer from "@/components/YoutubePlayer";
import Image from "next/image";
import { useState } from "react";
import TypingEffect from "@/components/TypingText";
import Formulir from "@/components/Formulir";
import Wa from "@/components/Wa";
import Head from "next/head";

export default function Home() {
  const [isYoutubePopupOpen, setYoutubePopupOpen] = useState(false);
  const [isFormulirPopupOpen, setFormulirPopupOpen] = useState(false);

  const textToType = "Belajar-Berpetualang-Bermakna";
  const openYoutubePopup = () => {
    setYoutubePopupOpen(true);
  };

  const closeYoutubePopup = () => {
    setYoutubePopupOpen(false);
  };
  // formulir
  const openFormulirPopup = () => {
    setFormulirPopupOpen(true);
  };

  const closeFormulirPopup = () => {
    setFormulirPopupOpen(false);
  };
  return (
    <>
      <Head>
        <title>Official SATT</title>
        <link
          rel="icon"
          type="image/png"
          sizes="4x16"
          href="/image/logosatt.png"
        />
        <meta
          name="description"
          content="Belajar, berpetualang dan bermakna"
          key="desc"
        />
        <meta
          property="og:image"
          itemProp="image"
          content="https://raw.githubusercontent.com/bimbelLB3R/ruleslb3r/main/public/image/image1.webp"
        />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-between pt-24 pl-16 pr-16 pb-24 bg-[url('/image/bambu.jpeg')] bg-cover bg-no-repeat">
        <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
          <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
            <code className="font-mono font-bold">
              <TypingEffect text={textToType} />
            </code>
          </p>
          <div className="fixed bottom-0  left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-green-800 dark:via-green-600 lg:static lg:h-auto lg:w-auto lg:bg-none ">
            <a
              className=" flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0 font-extrabold text-lg"
              href="https://maps.app.goo.gl/VUDG8CRvp9wV7FgFA"
              rel="noopener noreferrer"
            >
              <div className="flex items-center justify-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  className="bi bi-compass"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 16.016a7.5 7.5 0 0 0 1.962-14.74A1 1 0 0 0 9 0H7a1 1 0 0 0-.962 1.276A7.5 7.5 0 0 0 8 16.016m6.5-7.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0" />
                  <path d="m6.94 7.44 4.95-2.83-2.83 4.95-4.949 2.83 2.828-4.95z" />
                </svg>
                <p>Lokasi</p>
              </div>
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

        <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left text-green-900">
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
            <p className={`m-0 max-w-[30ch] text-sm `}>
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
            <p className={`m-0 max-w-[30ch] text-sm `}>
              Mengenal lebih dekat Sekolah Alam Tanjug Tabalong
            </p>
          </a>

          <a
            href="#"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Movie{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm `}>
              Film-film dokumenter di SATT
            </p>
          </a>

          <a
            href="#"
            onClick={openFormulirPopup}
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Join Now{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm `}>
              Formulir pendaftaran siswa baru secara on line
            </p>
          </a>
        </div>
        <Wa />
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
        {isFormulirPopupOpen && (
          <div className="absolute top-0 z-20  w-full bg-green-900/50">
            <div className="flex items-center justify-center ">
              <div>
                <div className="flex items-center justify-center">
                  <button
                    className="text-2xl p-1 m-2 text-red-800 border-1 underline"
                    onClick={closeFormulirPopup}
                  >
                    X
                  </button>
                </div>

                <Formulir />
              </div>
            </div>
          </div>
        )}
      </main>
    </>
  );
}
