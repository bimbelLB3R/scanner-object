import React, { useState } from "react";

const Formulir = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lakukan logika pengiriman formulir atau yang Anda perlukan di sini
  };

  return (
    <div>
      <div className="bg-green-800/80  flex items-center ">
        <div className="w-full h-screen">
          <h2 className="text-center text-green-100 font-bold text-2xl uppercase p-5">
            formulir pendaftaran
          </h2>
          <div className="bg-gray-200/80 p-10 rounded-lg shadow  m-4 ">
            <form action="">
              <div className="">
                {currentPage === 1 && (
                  <>
                    <div className="mb-5">
                      <label
                        for="name"
                        className="block mb-2 font-bold text-gray-600"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Put in your fullname."
                        className="border border-gray-300 shadow p-3 w-full rounded mb-"
                      />
                    </div>
                    <div className="mb-5">
                      <label
                        for="name"
                        className="block mb-2 font-bold text-gray-600"
                      >
                        Tempat,tanggal lahir
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Tempat,tanggal lahir."
                        className="border border-gray-300 shadow p-3 w-full rounded mb-"
                      />
                    </div>
                    <div className="mb-5">
                      <label
                        for="name"
                        className="block mb-2 font-bold text-gray-600"
                      >
                        Jenis Kelamin
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Laki-laki / Peremuan."
                        className="border border-gray-300 shadow p-3 w-full rounded mb-"
                      />
                    </div>
                  </>
                )}
                {currentPage === 2 && (
                  <>
                    <div className="mb-5">
                      <label
                        for="name"
                        className="block mb-2 font-bold text-gray-600"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Put in your fullname."
                        className="border border-gray-300 shadow p-3 w-full rounded mb-"
                      />
                    </div>
                    <div className="mb-5">
                      <label
                        for="name"
                        className="block mb-2 font-bold text-gray-600"
                      >
                        Tempat,tanggal lahir
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Tempat,tanggal lahir."
                        className="border border-gray-300 shadow p-3 w-full rounded mb-"
                      />
                    </div>
                    <div className="mb-5">
                      <label
                        for="name"
                        className="block mb-2 font-bold text-gray-600"
                      >
                        Jenis Kelamin
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Laki-laki / Peremuan."
                        className="border border-gray-300 shadow p-3 w-full rounded mb-"
                      />
                    </div>
                  </>
                )}
              </div>
              {/* Tambahkan tombol Next dan Previous */}
              {currentPage > 1 && (
                <div className="flex justify-end m-2">
                  <button onClick={prevPage} className="mr-2 ">
                    <div>
                      <p>
                        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                          &lt;
                        </span>
                        --- Sebelumnya
                      </p>
                    </div>
                  </button>
                </div>
              )}
              {currentPage < 2 && (
                <div className="flex justify-end m-2">
                  <button onClick={nextPage} className="mr-2 ">
                    <div>
                      <p>
                        Berikutnya ---
                        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                          &gt;
                        </span>
                      </p>
                    </div>
                  </button>
                </div>
              )}
              {/* Tambahkan tombol submit di halaman terakhir */}
              {currentPage === 2 && (
                <button className="block w-full bg-blue-500 text-white font-bold p-4 rounded-lg">
                  Submit
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Formulir;
