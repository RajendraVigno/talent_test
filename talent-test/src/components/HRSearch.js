// src/components/Header.jsx
import React, { useEffect, useState } from "react";
import '../index.css';
import '../App.css';
const HRSearch = (props) => {


  return (

<div className="bg-gray-200 flex mt-2 ml-2 w-full">
  <div>
  <p className="px-2 text-lg">Select Criteria</p>
  </div>
  <div className="row-start-2 flex-none">
  <form class="">
  <label for="role" class="block mb-2 text-sm text-gray-900 dark:text-white">Role *</label>
  <select id="roles" class="w-50 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-none focus:ring-blue-500 focus:border-blue-500 block p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
    <option selected>Select</option>
    <option value="US">United States</option>
    <option value="CA">Canada</option>
    <option value="FR">France</option>
    <option value="DE">Germany</option>
  </select>
  </form>
  </div>
  <div>
    Hi
  </div>
</div>


  )
};

export default HRSearch;
