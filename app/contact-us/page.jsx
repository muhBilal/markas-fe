import React from 'react'
import Container from '../component/Container'

const page = () => {
  return (
    <Container>
        <div className="flex flex-col md:flex-row justify-between lg:px-32 md:mt-32 mt-20">
            <div className="flex flex-col">
                <h1 className="text-xl md:text-2xl lg:text-4xl font-bold uppercase text-center md:text-left">contact us</h1>
                <p className="text-gray-500 mt-5 xl:mt-20 text-sm md:text-md xl:text-xl md:w-[300px] lg:w-[350px] xl:w-[500px] 2xl:w-[700px] text-center md:text-left">
                    Need to get in touch with us? Either fill out the form with your inquiry or find the department email you'd like to contact below.
                </p>
            </div>
            <div className="shadow-xl rounded-md xl:p-10 p-5 mt-10 md:mt-0 border">
                <form className="max-w-sm mx-auto">
                    <div className="md:grid grid-cols-2 gap-5">
                        <div className="mb-5">
                            <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                            <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="markas@gmail.com" required />
                        </div>
                        <div className="mb-5">
                            <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nama</label>
                            <input type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='admin magang' required />
                        </div>
                        <div className="mb-5 col-span-2">
                            <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Pesan yang ingin disampaikan</label>
                            <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
                        </div>
                    </div>
                    <button type="submit" className="text-white bg-primary focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>
                </form>
            </div>
        </div>
    </Container>
  )
}

export default page