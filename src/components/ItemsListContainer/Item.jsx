import { HeartIcon } from "@heroicons/react/outline";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Item = ({ id, title, price, img1, img2 }) => {
  const [like, setLike] = useState(true);
  const [mouse, mouseOn] = useState(true);

  const likeItem = () => {
    setLike(!like);
  };

  const myHover = () => {
    mouseOn(!mouse);
  }

  return (
    <div className="flex-col col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3">
      <Link to={`/item/${id}`}>
        <img className="w-full" src={mouse ? img1 : img2} alt={title} onMouseEnter={myHover} onMouseLeave={myHover}/>
      </Link>
      <div className="pt-1 flex flex-row items-center justify-between">
        <div className="flex flex-col">
          <p className="text-sm">{title}</p>
          <p className="text-sm font-bold">{price}</p>
        </div>
        <button onClick={likeItem}>
          <HeartIcon
            className={`h-6 w-5 mr-1 ${
              like ? "text-gray-700" : " text-red-700"
            }`}
          />
        </button>
      </div>
    </div>
  );
};
