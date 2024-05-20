import Link from 'next/link'
import React from 'react'
import { FaDrupal, FaUpload } from 'react-icons/fa'

function page() {
  return (
    <div className='container mt-24 ml-28'>
     

    <form class="max-w-sm mx-auto">

      <div class="mb-5">
        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Title</label>
        <input type="text" value="" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Iphone 15 pro max" required />
      </div>

      <div class="mb-5">
        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Prize</label>
        <input type="text" id="password" placeholder='$99' class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
      </div>


      <div class="mb-5">
<label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select Product Category</label>
  <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">

    <option>Select One</option>
    <option>Fashion</option>
    <option>Vehicle</option>
    <option>Toys</option>
    <option>Grocery</option>
    <option>Electronics</option>
    <option>Mobiles</option>
  </select>
      </div>

      <div class="mb-5">
      <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product About</label>
  <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="About Product... "></textarea>
</div>

      <div class="mb-5 max-w-lg mx-auto h-12">
      <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="user_avatar">Upload file</label>
  <input class=" w-full p-2 h-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="user_avatar_help" id="user_avatar" type="file"/>
 </div>

      <button type="submit" class="text-white flex items-center px-4 py-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full mt-12 sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Update---<FaDrupal /></button>
    </form>
     
           </div>
  )
}

export default page