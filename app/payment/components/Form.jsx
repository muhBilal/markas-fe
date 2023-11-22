"use client";
import React from 'react';

const Form = ({data}) => {
    return (
        <form className="max-w-lg mx-auto">
            <div className="mb-5">
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nama</label>
                <input type="text" id="name" name='name' defaultValue={data.name} onChange={(e) => data.name = e.target.value} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
            </div>
            <div className="mb-5">
                <label htmlFor="gender" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Gender</label>
                
                <div className="flex">
                    <div className="flex items-center me-4">
                        <input id="inline-radio" type="radio" value="pria" name="gender" onChange={(e) => data.gender = e.target.value} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label htmlFor="inline-radio" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Pria</label>
                    </div>
                    <div className="flex items-center me-4">
                        <input id="inline-radio" type="radio" value="wanita" name="gender" onChange={(e) => data.gender = e.target.value} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label htmlFor="inline-radio" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Wanita</label>
                    </div>
                </div>

            </div>
            <div className="mb-5">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                <input type="email" id="email" name='email' onChange={(e) => data.email = e.target.value} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
            </div>
            <div className="mb-5">
                <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nomor Telepon</label>
                <input type="number" id="text" name='no_telepon' onChange={(e) => data.no_telepon = e.target.value} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
            </div>
            <div className="mb-5">
                <label htmlFor="instansi" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Instansi/Komunitas/Perusahaan</label>
                <input type="text" id="instansi" name='instansi' onChange={(e) => data.instansi = e.target.value} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
            </div>
            <div className="mb-5">
                <label htmlFor="jenis_kegiatan" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Jenis Kegiatan</label>
                <input type="text" id="jenis_kegiatan" onChange={(e) => data.jenis_kegiatan = e.target.value} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
            </div>
            <div className="mb-5">
                <label htmlFor="nama_kegiatan" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nama Kegiatan</label>
                <input type="text" id="nama_kegiatan" onChange={(e) => data.nama_kegiatan = e.target.value} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
            </div>
            <div className="mb-5">
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Deskripsi Singkat</label>
                <textarea id="message" rows="8" onChange={(e) => data.deskripsi = e.target.value} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
            </div>
        </form>
    )
}

export default Form