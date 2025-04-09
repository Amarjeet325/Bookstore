// import React from "react";

// function Cards({ item }) {
//   return (
//     <>
//       <div className="mt-4 my-3 p-3">
//         <div className="card w-92 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
//           <figure>
//             <img src={item.image} alt=" " />
//           </figure>
//           <div className="card-body">
//             <h2 className="card-title">
//               {item.name}
//               <div className="badge badge-secondary">{item.category}</div>
//             </h2>
//             <p>{item.title}</p>
//             <div className="card-actions justify-between">
//               <div className="badge badge-outline">${item.price}</div>
//               <div className=" cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200">
//                 Buy Now
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Cards;

// Cards.js

import React from "react";

function Cards({ item }) {
  return (
    <div className="border rounded-md p-4 shadow-md">
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-48 object-cover rounded-md"
      />
      <h2 className="mt-2 text-lg font-semibold">{item.title}</h2>
      <p className="text-sm text-gray-600">By: {item.authors}</p>

      {item.buyLink && (
        <a
          href={item.buyLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="mt-4 bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded-md">
            Buy on Google Books
          </button>
        </a>
      )}
    </div>
  );
}

export default Cards;
