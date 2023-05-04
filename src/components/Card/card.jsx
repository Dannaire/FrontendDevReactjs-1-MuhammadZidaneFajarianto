import React, { useState, useEffect } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Card = ({ data }) => {
  const navigate = useNavigate();
  const [cardData, setCardData] = useState([]);
  const [visibleData, setVisibleData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://api.jsonbin.io/v3/b/6453b40f9d312622a357654a"
        );
        const json = await response.json();
        setCardData(json.record);
        setVisibleData(json.record.slice(0, 8));
      } catch (error) {
        console.error("Error fetching card data:", error);
      }
    }
    fetchData();
  }, []);

  const loadMore = () => {
    const newData = cardData.slice(0, visibleData.length + 8);
    setVisibleData(newData);
  };

  if (visibleData.length === 0) {
    return <div className="ml-3 text-2xl">Loading...</div>;
  }

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {visibleData.map((data) => (
          <div key={data.id} className="card w-full p-3">
            <div className="w-full h-60 overflow-hidden">
              <img src={data.image} alt={data.name} className="h-full w-full" />
            </div>
            <h2 className="font-semibold text-lg mt-3">{data.name}</h2>
            <div className="flex mt-2 mr-2">
              {Array.from({ length: data.rating }, (_, index) => (
                <AiFillStar key={index} />
              ))}
              {Array.from({ length: 5 - data.rating }, (_, index) => (
                <AiOutlineStar key={data.rating + index} />
              ))}
            </div>
            <div className="flex items-center justify-between mt-2">
              <p className="text-sm font-light text-slate-500 uppercase">
                {data.category} - ${data.price}
              </p>
              <div className="inline-flex space-x-1 items-center">
                <span
                  className={`${
                    data.isOpen ? "bg-green-400" : "bg-orange-400"
                  } w-3 h-3 rounded-full`}
                ></span>
                <p className="text-xs text-slate-600 uppercase">
                  {data.isOpen ? "open now" : "closed"}
                </p>
              </div>
            </div>
            <button onClick={() => navigate(`detail/${data.id}`, { state: data })} className="w-full py-3 bg-blue-900 hover:bg-blue-800 duration-200 text-white mt-2 uppercase">
  Learn More
</button>
          </div>
        ))}
      </div>
      {visibleData.length < cardData.length && (
        <div className="flex justify-center mt-8">
          <button
            onClick={loadMore}
            className="px-48 py-3 border border-blue text-blue hover:bg-blue-800 hover:text-white uppercase duration-200"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default Card;
