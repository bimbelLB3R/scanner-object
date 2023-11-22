import React from "react";

const Formulir = () => {
  return (
    <div>
      <div className="bg-green-800/80  flex items-center ">
        <div className="w-full">
          <h2 className="text-center text-green-100 font-bold text-2xl uppercase p-5">
            formulir pendaftaran
          </h2>
          <div className="bg-gray-200/80 p-10 rounded-lg shadow  mx-auto ">
            <form action="">
              <div className="">
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
                <div className="mb-5">
                  <label
                    for="name"
                    className="block mb-2 font-bold text-gray-600"
                  >
                    Nama Ayah
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="ayah."
                    className="border border-gray-300 shadow p-3 w-full rounded mb-"
                  />
                </div>
                <div className="mb-5">
                  <label
                    for="name"
                    className="block mb-2 font-bold text-gray-600"
                  >
                    Pekerjaan Ayah
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Pekerjaan."
                    className="border border-gray-300 shadow p-3 w-full rounded mb-"
                  />
                </div>

                <div className="mb-5">
                  <label
                    for="twitter"
                    className="block mb-2 font-bold text-gray-600"
                  >
                    Penghasilan per bulan
                  </label>
                  <input
                    type="text"
                    id="twitter"
                    name="twitter"
                    placeholder="Penghasilan."
                    className="border border-red-300 shadow p-3 w-full rounded mb-"
                  />
                  <p className="text-sm text-red-400 mt-2">Wajib diisi</p>
                </div>
              </div>

              <button className="block w-full bg-blue-500 text-white font-bold p-4 rounded-lg">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Formulir;
