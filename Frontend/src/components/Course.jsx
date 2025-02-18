// import React, { useEffect, useState } from "react";
// import Cards from "./Cards";
// import axios from "axios";
// import { Link } from "react-router-dom";
// function Course() {
//   const [book, setBook] = useState([]);

 
//   useEffect(() => {
//     const getBook = async () => {
//       try {
//         const res = await axios.get("http://localhost:4001/book");
//         console.log(res.data);
//         setBook(res.data);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     getBook();
//   }, []);
//   return (
//     <>
//       <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4">
//         <div className="mt-28 items-center justify-center text-center">
//           <h1 className="text-2xl  md:text-4xl">
//             We're delighted to have you{" "}
//             <span className="text-pink-500"> Here! :)</span>
//           </h1>
//           <p className="mt-12">
//             Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro,
//             assumenda? Repellendus, iste corrupti? Tempore laudantium
//             repellendus accusamus accusantium sed architecto odio, nisi expedita
//             quas quidem nesciunt debitis dolore non aspernatur praesentium
//             assumenda sint quibusdam, perspiciatis, explicabo sequi fugiat amet
//             animi eos aut. Nobis quisquam reiciendis sunt quis sed magnam
//             consequatur!
//           </p>
//           <Link to="/">
//             <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
//               Back
//             </button>
//           </Link>
//         </div>
        
//         <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
//           {book.map((item) => (
//             <Cards key={item.id} item={item} />
//           ))}
//         </div>
//       </div>
//     </>
//   );
// }

// export default Course;



import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import axios from "axios";
import { Link } from "react-router-dom";

function Course() {
  const [book, setBook] = useState([]);
  const [search, setSearch] = useState("");
  const [googleBooks, setGoogleBooks] = useState([]);

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);

  const handleSearch = async () => {
    if (!search) return;
    try {
      const res = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${search}`
      );
      setGoogleBooks(res.data.items || []);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl md:text-4xl">
            We're delighted to have you <span className="text-pink-500">Here! :)</span>
          </h1>
          <p className="mt-12">
            Find amazing books from our collection or search for free books from Google!
          </p>
          <Link to="/">
            <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>
        </div>
        
        <div className="mt-12 text-center">
          <input
            type="text"
            placeholder="Search for books..."
            className="px-4 py-2 border rounded-md"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            onClick={handleSearch}
            className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 duration-300"
          >
            Search
          </button>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-4">
          {book.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
          {googleBooks.map((item) => (
            <Cards
              key={item.id}
              item={{
                id: item.id,
                title: item.volumeInfo.title,
                authors: item.volumeInfo.authors?.join(", ") || "Unknown Author",
                image: item.volumeInfo.imageLinks?.thumbnail || "https://via.placeholder.com/150",
              }}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;

