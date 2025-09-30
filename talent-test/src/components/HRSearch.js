// src/components/Header.jsx
import React, { useEffect, useState } from "react";
import '../index.css';
import '../App.css';
import person1 from '../assets/person1.jpeg';
import person2 from '../assets/person2.jpg';
import person3 from '../assets/person3.jpeg';
import person4 from '../assets/person3.jpg';
import person5 from '../assets/person4.jpeg';
import person6 from '../assets/person5.jpeg';
import person7 from '../assets/person6.jpeg';
import person8 from '../assets/person8.jpeg';
import person9 from '../assets/person9.jpeg';
import person10 from '../assets/person10.jpeg';
import person11 from '../assets/person11.jpg';
import person12 from '../assets/person12.jpeg';
const HRSearch = (props) => {
const handleRoleSelect = () => {
      var staff = document.getElementsByClassName('staff');
       for(let i=0;i<staff.length;i++)
       {
          staff[i].classList.add('hidden')
       }
      if(document.getElementById('role').value =="Ad")
      {
         var staffadmin = document.getElementsByClassName('admin');
          for(let i=0;i<staffadmin.length;i++)
          {
              staffadmin[i].classList.remove('hidden');
          }

      }
      else  if(document.getElementById('role').value =="Te")
      {
         var staffteachers = document.getElementsByClassName('academic');
        // staffteachers = staffteachers + (document.getElementsByClassName('maths'))
          for(let i=0;i<staffteachers.length;i++)
          {
              staffteachers[i].classList.remove('hidden');
          }
          // var staffteachers = document.getElementsByClassName('academic');
          staffteachers = (document.getElementsByClassName('maths'))
          for(let i=0;i<staffteachers.length;i++)
          {
              staffteachers[i].classList.remove('hidden');
          }
      }
       else  if(document.getElementById('role').value =="Ac")
      {
         var staffaccountant = document.getElementsByClassName('finance');
          for(let i=0;i<staffaccountant.length;i++)
          {
              staffaccountant[i].classList.remove('hidden');
          }
        }
         else  if(document.getElementById('role').value =="Li")
        {
         var staffaccountant = document.getElementsByClassName('librarian');
          for(let i=0;i<staffaccountant.length;i++)
          {
              staffaccountant[i].classList.remove('hidden');
          }
        }

         else  if(document.getElementById('role').value =="Re")
        {
         var staffaccountant = document.getElementsByClassName('receptionist');
          for(let i=0;i<staffaccountant.length;i++)
          {
              staffaccountant[i].classList.remove('hidden');
          }
        }
         else  if(document.getElementById('role').value =="Sa")
        {
         var staffaccountant = document.getElementsByClassName('superadmin');
          for(let i=0;i<staffaccountant.length;i++)
          {
              staffaccountant[i].classList.remove('hidden');
          }
        }
        else
        {
             var staff = document.getElementsByClassName('staff')
             for(let i=0;i<staff.length;i++)
          {
              staff[i].classList.remove('hidden');
          }
      
        }
         
	 };

  return (

<div className="bg-white mt-1 ml-1 w-full">
  <div className="flex flex-row">
     <p className="mt-4 ml-4 text-lg">Select Criteria</p>
     <button className="flex h-8 items-center ml-auto space-x-2 bg-gray-800 hover:bg-black text-white mt-4 py-2 px-4 mr-2 rounded">
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
        <span>Add Staff</span>
    </button>
  </div>
  <div className = "px-4 py-6 flex flex-row flex-wrap">
  <div className=" w-1/2">
  <label for="role" class="block mb-2 text-sm text-gray-900 text-bold dark:text-white font-bold">Role *</label>
  <select id="role" class="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-none focus:ring-blue-500 focus:border-blue-500 block p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
    <option selected>Select</option>
    <option value="Ad">Admin</option>
    <option value="Te">Teacher</option>
    <option value="Ac">Accountant</option>
    <option value="Li">Librarian</option>
    <option value="Re">Receptionist</option>
    <option value="Sa">Super Admin</option>
  </select>
  </div>
  <div className="px-2 w-1/2">
  <label for="role" class="block mb-2 text-sm text-gray-900 text-bold dark:text-white font-medium">Search By Keyword</label>
  <input id="role" placeholder="Search by Staff ID, Name,Role etc " className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-none focus:ring-blue-500 focus:border-blue-500 block p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
  </input>
  </div>
  <div onClick={handleRoleSelect} className="py-2 w-1/2 mr-0 flex justify-end">
    <button className="flex h-8 items-center space-x-2 bg-gray-500 hover:bg-black text-white py-2 px-4 rounded">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>
        <span>Search</span>
    </button>
  </div>
  <div className="py-2 w-1/2 flex justify-end">
    <button className="flex h-8 items-center space-x-2 bg-gray-500 hover:bg-black text-white py-2 px-4 rounded">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>
        <span>Search</span>
    </button>
  </div>
  <div className = "staff admin superadmin py-2 w-72 h-36 flex flex-row rounded-none border border-gray-300 border-2 flex-wrap">
     <img src={person2} className="px-2 h-28 w-32 object-fill" alt="Logo"/>
     <div className="flex flex-col">
       <p className="font-bold text-black text-sm">Joe Black</p>
       <p className="text-gray-500 text-sm">9000</p>
       <p className="text-gray-500 text-sm">6453524251</p>
       <p className="text-gray-500 text-sm">Ground Floor,Admin</p>
       <div className="flex flex-row py-2">
       <button className="w-1/2 h-5 bg-gray-300 text-[10px] text-black rounded">Super Admin</button>
       <button className="ml-2 w-1/2 h-5 bg-gray-300 text-[10px] text-black rounded">Tech Lead</button>
       </div>
     </div>
  </div>
  <div className = "staff academic ml-2 py-2 w-72 h-36 flex flex-row rounded-none border border-gray-300 border-2">
     <img src={person3} className="px-2 h-32 w-32 object-fill" alt="Logo"/>
     <div className="flex flex-col">
       <p className="font-bold text-black text-sm">Shivam Verma</p>
       <p className="text-gray-500 text-sm">9002</p>
       <p className="text-gray-500 text-sm">6453524251</p>
       <p className="text-gray-500 text-sm">1st Floor,Academic</p>
       <div className="flex flex-row py-2">
       <button className="w-1/2 h-5 bg-gray-300 text-[10px] text-black rounded">Teacher</button>
       <button className="ml-2 w-1/2 h-5 bg-gray-300 text-[10px] text-black rounded">Faculty</button>
       </div>
     </div>
  </div>
  <div className = "staff librarian ml-2 py-2 w-72 h-36 flex flex-row rounded-none border border-gray-300 border-2">
     <img src={person11} className="px-2 h-32 w-32 object-fill" alt="Logo"/>
     <div className="flex flex-col">
       <p className="font-bold text-black text-sm">Brandon Heart</p>
       <p className="text-gray-500 text-sm">9006</p>
       <p className="text-gray-500 text-sm">6453524251</p>
       <p className="text-gray-500 text-sm">2nd Floor,Admin</p>
       <div className="flex flex-row py-2">
       <button className="w-1/2 h-5 bg-gray-300 text-[10px] text-black rounded">Librarian</button>
       <button className="ml-2 w-1/2 h-5 bg-gray-300 text-[10px] text-black rounded">Librarian</button>
       </div>
     </div>
  </div>
  <div className = "staff admin ml-2 py-2 w-72 h-36 flex flex-row rounded-none border border-gray-300 border-2">
     <img src={person7} className=" px-2 h-32 w-32 object-fill" alt="Logo"/>
     <div className="flex flex-col">
       <p className="font-bold text-black text-sm">William Abott</p>
       <p className="text-gray-500 text-sm">9003</p>
       <p className="text-gray-500 text-sm">6453524251</p>
       <p className="text-gray-500 text-sm">Ground Floor,Admin</p>
       <div className="flex flex-row py-2">
       <button className="w-1/2 h-5 bg-gray-300 text-[10px] text-black rounded">Admin</button>
       <button className="ml-2 w-1/2 h-5 bg-gray-300 text-[10px] text-black rounded">Principal</button>
       </div>
     </div>
  </div>

   <div className = "staff academic  mt-4 py-2 w-72 h-36 flex flex-row rounded-none border border-gray-300 border-2">
     <img src={person8} className="px-2 h-32 w-32 object-fill" alt="Logo"/>
     <div className="flex flex-col">
       <p className="font-bold text-black text-sm">Jason Sherlton</p>
       <p className="text-gray-500 text-sm">9010</p>
       <p className="text-gray-500 text-sm">6453524251</p>
       <p className="text-gray-500 text-sm">Ground Floor,Academic</p>
       <div className="flex flex-row py-2">
       <button className="w-1/2 h-5 bg-gray-300 text-[10px] text-black rounded">Teacher</button>
       <button className="ml-2 w-1/2 h-5 bg-gray-300 text-[10px] text-black rounded">Faculty</button>
       </div>
     </div>
  </div>
  <div className = "staff finance  mt-4 ml-2 py-2 w-72 h-36 flex flex-row rounded-none border border-gray-300 border-2">
     <img src={person9} className="px-2 h-32 w-32 object-fill" alt="Logo"/>
     <div className="flex flex-col">
       <p className="font-bold text-black text-sm">James Decker</p>
       <p className="text-gray-500 text-sm">9004</p>
       <p className="text-gray-500 text-sm">6453524251</p>
       <p className="text-gray-500 text-sm">Ground Floor,Finance</p>
       <div className="flex flex-row py-2">
       <button className="w-1/2 h-5 bg-gray-300 text-[10px] text-black rounded">Accountant</button>
       <button className="ml-2 w-1/2 h-5 bg-gray-300 text-[10px] text-black rounded">Accountant</button>
       </div>
     </div>
  </div>
  <div className = "staff receptionist  mt-4 ml-2 py-2 w-72 h-36 flex flex-row rounded-none border border-gray-300 border-2">
     <img src={person10} className="px-2 h-32 w-32 object-fill" alt="Logo"/>
     <div className="flex flex-col">
       <p className="font-bold text-black text-sm">Mariana Ford</p>
       <p className="text-gray-500 text-sm">9005</p>
       <p className="text-gray-500 text-sm">6453524251</p>
       <p className="text-gray-500 text-sm">Ground Floor,Academic</p>
       <div className="flex flex-row py-2">
       <button className="w-1/2 h-5 bg-gray-300 text-[10px] text-black rounded">Receptionist</button>
       <button className="ml-2 w-1/2 h-5 bg-gray-300 text-[10px] text-black rounded">Receptionist</button>
       </div>
     </div>
  </div>
  <div className = "staff maths mt-4 ml-2 py-2 w-72 h-36 flex flex-row rounded-none border border-gray-300 border-2">
     <img src={person1} className="px-2 h-32 w-32 object-fill" alt="Logo"/>
     <div className="flex flex-col">
       <p className="font-bold text-black text-sm">Albert Thomas</p>
       <p className="text-gray-500 text-sm">5454525</p>
       <p className="text-gray-500 text-sm">6453524251</p>
       <p className="text-gray-500 text-sm">Mumbai,Maths</p>
       <div className="flex flex-row py-2">
       <button className="w-1/2 h-5 bg-gray-300 text-[10px] text-black rounded">Teacher</button>
       <button className="ml-2 w-1/2 h-5 bg-gray-300 text-[10px] text-black rounded">Faculty</button>
       </div>
     </div>
  </div>
  
  </div>
</div>


  )
};

export default HRSearch;
