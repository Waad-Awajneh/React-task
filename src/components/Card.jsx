import React from "react";

import { BsHeartFill } from "react-icons/bs";
import { RiMessage3Fill } from "react-icons/ri";
import YourImage from "./e.jpg";

function Card(cards) {
  console.log(cards.cards);

  return (
    <>
      <div className="my-5 bg-white dark:bg-[#18191c] shadow-xl hover:shadow duration-200 rounded-xl">
        <div className="relative w-full h-72 rounded-xl">
          <img
            className="rounded-xl hover:scale-105 duration-300 h-full"
            src={cards.cards.image}
            alt={cards.cards.id}
          />
        </div>
        <div className="p-4">
          <h5 className="text-primary dark:text-white font-medium text-sm">
            {cards.cards.name}
          </h5>
          <small className="text-xs font-light text-primary dark:text-gray-400">
            {cards.cards.info}
          </small>
        </div>
      </div>
    </>
  );
}

export default Card;
