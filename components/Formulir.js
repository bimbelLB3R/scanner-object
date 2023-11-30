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
      <div className=" flex items-center ">
        <div className="w-full h-screen">
          <div className="bg-gray-200/80 p-5 rounded-lg shadow  m-4 ">
            <h2 className="text-center text-green-900 font-bold text-2xl uppercase p-5">
              formulir pendaftaran
            </h2>
            <form action="">
              <div className="border-b-8 border-blue-900/50 border-t-4">
                {currentPage === 1 && (
                  <div className="overflow-auto h-[400px]">
                    <div className="p-5">
                      <div className="p-3 bg-green-600 text-white font-bold rounded text-xl">
                        <p>Data Siswa</p>
                      </div>
                      <div className="mb-5">
                        <label
                          for="jenjang"
                          className="block mb-2 font-bold text-gray-600"
                        >
                          Jenjang
                        </label>
                        <select className="p-3 w-full text-gray-600 rounded">
                          <option value="">Pilih Jenjang</option>
                          <option value="Sekolah Dasar">Sekolah Dasar</option>
                          <option value="Pre School">Pre School</option>
                        </select>
                      </div>
                      <div className="mb-5">
                        <label
                          for="nama"
                          className="block mb-2 font-bold text-gray-600"
                        >
                          Nama Lengkap
                        </label>
                        <input
                          type="text"
                          id="nama"
                          name="nama"
                          placeholder="Isi nama lengkap"
                          className="border border-gray-300 shadow p-3 w-full rounded mb-"
                        />
                      </div>
                      <div className="mb-5">
                        <label
                          for="panggilan"
                          className="block mb-2 font-bold text-gray-600"
                        >
                          Nama Panggilan
                        </label>
                        <input
                          type="text"
                          id="panggilan"
                          name="panggilan"
                          placeholder="Isi nama panggilan"
                          className="border border-gray-300 shadow p-3 w-full rounded mb-"
                        />
                      </div>
                      <div className="mb-5">
                        <label
                          for="kelamin"
                          className="block mb-2 font-bold text-gray-600"
                        >
                          Jenis Kelamin
                        </label>
                        <select className="p-3 w-full text-gray-600 rounded">
                          <option value="">Pilih Jenis Kelamin</option>
                          <option value="Laki-laki">Laki-laki</option>
                          <option value="Peremuan">Peremuan</option>
                        </select>
                      </div>
                      <div className="mb-5">
                        <label
                          for="tempat"
                          className="block mb-2 font-bold text-gray-600"
                        >
                          Tempat Lahir
                        </label>
                        <input
                          type="text"
                          id="tempat"
                          name="tempat"
                          placeholder="Isi tempat kelahiran"
                          className="border border-gray-300 shadow p-3 w-full rounded mb-"
                        />
                      </div>
                      <div className="mb-5">
                        <label
                          for="tanggal"
                          className="block mb-2 font-bold text-gray-600"
                        >
                          Tanggal Lahir
                        </label>
                        <input
                          type="date"
                          id="tanggal"
                          name="tanggal"
                          placeholder="Isi tanggal kelahiran"
                          className="border border-gray-300 shadow p-3 w-full rounded mb-"
                        />
                      </div>
                      <div className="mb-5">
                        <label
                          for="khusus"
                          className="block mb-2 font-bold text-gray-600"
                        >
                          Apakah berkebutuhan khusus?
                        </label>
                        <select className="p-3 w-full text-gray-600 rounded">
                          <option value="">Pilih</option>
                          <option value="Ya">Ya</option>
                          <option value="Tidak">Tidak</option>
                        </select>
                      </div>
                      <div className="mb-5">
                        <label
                          for="agama"
                          className="block mb-2 font-bold text-gray-600"
                        >
                          Agama
                        </label>
                        <select className="p-3 w-full text-gray-600 rounded">
                          <option value="">Pilih</option>
                          <option value="Islam">Islam</option>
                        </select>
                      </div>
                      <div className="mb-5">
                        <label
                          for="urutan"
                          className="block mb-2 font-bold text-gray-600"
                        >
                          Anak Ke-
                        </label>
                        <input
                          type="text"
                          id="urutan"
                          name="urutan"
                          placeholder="Isi 1 atau 2 dst"
                          className="border border-gray-300 shadow p-3 w-full rounded mb-"
                        />
                      </div>
                      <div className="mb-5">
                        <label
                          for="saudara"
                          className="block mb-2 font-bold text-gray-600"
                        >
                          Jumlah Saudara Kandung
                        </label>
                        <input
                          type="text"
                          id="saudara"
                          name="saudara"
                          placeholder="Isi 1 atau 2 dst"
                          className="border border-gray-300 shadow p-3 w-full rounded mb-"
                        />
                        <p className="text-xs">
                          Contoh jawaban 4 orang, Jumlah Adik=2, jumlah kakak=1
                          orang
                        </p>
                      </div>
                      <div className="mb-5">
                        <label
                          for="tinggal"
                          className="block mb-2 font-bold text-gray-600"
                        >
                          Alamat Tempat Tinggal
                        </label>
                        <input
                          type="text"
                          id="tinggal"
                          name="tinggal"
                          placeholder="Isi alamat lengkap"
                          className="border border-gray-300 shadow p-3 w-full rounded mb-"
                        />
                      </div>
                    </div>
                  </div>
                )}
                {currentPage === 2 && (
                  <div className="overflow-auto h-[400px]">
                    <div className="p-5">
                      <div className="p-3 bg-green-600 text-white font-bold rounded text-xl">
                        <p>Data Ayah</p>
                      </div>
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
                    </div>
                  </div>
                )}
              </div>
              {/* Tambahkan tombol Next dan Previous */}
              {currentPage > 1 && (
                <div className="flex justify-end m-2">
                  <button onClick={prevPage} className="mr-2 ">
                    <div className="p-3 bg-blue-600 hover:bg-blue-400 rounded text-white">
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
                    <div className="p-3 bg-blue-600 hover:bg-blue-400 rounded text-white">
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
                <button className="block w-full bg-red-500 text-white font-bold p-4 rounded-lg">
                  Kirim Data
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
