import { IStackCard } from "@/types/component";
import React from "react";

const StackCard = ({ imgURL, title }: IStackCard) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 bg-white text-black rounded-lg h-80">
      <img className="w-32 h-32 object-cover" src={imgURL} alt={title} />
      <h4 className="text-lg font-medium">{title}</h4>
    </div>
  );
};

export default StackCard;
