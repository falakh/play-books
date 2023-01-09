import type { NextPage } from "next";
import { useRouter } from "next/router";
import { MdStarRate } from "react-icons/md";
import { useSearchBookstore } from "../store/search-book.store";
import { useEffect } from "react";

const Home: NextPage = () => {
  const router = useRouter();
  const { requestBook, books, isLoading } = useSearchBookstore();

  useEffect(() => {
    if (router.query.keyword) requestBook(router.query.keyword as string);
  }, [router.query.keyword]);

  return (
    <>
      <p className="pr-3 font-bold text-lg">Hasil Pencarian untuk : {router.query.keyword} </p>
      {!isLoading ? (
        <div className="p-3 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-3">
          {books?.map((value) => (
            <div key={value.id} className=" max-w-[300px] h-[750px] p-6 shadow-md rounded overflow-hidden">
              <img height={600} src={value.imageURl} width={300} />
              <div className="space-x-1 flex">
                {value.rating ? (
                  Array(value.rating)
                    .fill(1)
                    .map((_value, index) => {
                      return <MdStarRate key={index} />;
                    })
                ) : (
                  <p>No Rating Found</p>
                )}
              </div>

              <h5 className="text-2xl font-bold tracking-tight text-ellipsis h-16 overflow-hidden  text-gray-900 dark:text-white">
                {value.title}
              </h5>
              <p className="font-normal text-ellipsis text-gray-700 h-28 overflow-auto dark:text-gray-400">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Home;
