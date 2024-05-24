/* eslint-disable react/jsx-key */
import { useState, useEffect } from "react";

function GetProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getTodo() {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      console.log(data);
      setProducts(data);
    }
    getTodo();
  }, []);

  return (
    <>
      <Home />
      <div className="content-center bg-[orange]">
        <section className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-6 p-4 ">
          {products.map((product) => (
            <div className="bg-[#cfcc10] flex flex-col  justify-evenly gap-2 rounded-lg  p-3">
              <h5 className="mb-2 text-1xl font-bold tracking-tight line-clamp-2 text-black flex-grow flex-[basic-30ch] ">
                {product.title}
              </h5>{" "}
              <a href="#">
                <img
                  className="rounded-lg max-h-[150px] min-h-[150px] min-w-full "
                  src={product.image}
                  alt="product image"
                />
              </a>
              <p className="text-balck text-sm line-clamp-4">
                {product.description.substring(0, 100)}...
              </p>
              <a
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Read more
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          ))}
        </section>
        {/* <section className=" flex flex-row flex-wrap bg-white justify-evenly gap-x-5 gap-y-10 pt-10 pb-10 after:content-[]">
          {products.map((product) => (
            <div className="max-w-72 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-700 dark:border-gray-700 flex-grow ">
              <a href="#">
                <img
                  className="rounded-t-lg max-h-80 min-h-80 min-w-full "
                  src={product.image}
                  alt=""
                />
              </a>
              <div className="p-5 grid flex-grow">
                <a href="#">
                  <h5 className="mb-2 text-2xl  font-bold tracking-tight line-clamp-2 text-gray-700 dark:text-white">
                    {product.title}
                  </h5>
                </a>
                <p className="mb-3 font-normal text-jus text-gray-700 dark:text-gray-400">
                  {product.description.substring(0, 100)}...
                </p>
                <a
                  href="#"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Read more
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </section> */}
      </div>
    </>
  );
}

function Home() {
  return (
    <>
      <div className="bg-[orange]">
        <div className=" max-w-[800px] w-full h-screen mx-auto text-center flex flex-col justify-center">
          <p className="text-[#a30000be] font- font-bold ">Buy with Us</p>
          <p className="md:text-7xl sm:text-6xl text-4xl font-bold ">
            Everything you needs
          </p>
          <div>
            <p className="md:text-5xl sm:text-4xl text-xl font-bold pt-4">
              Free
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default GetProducts;
