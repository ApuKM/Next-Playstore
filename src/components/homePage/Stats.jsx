import React from "react";
import { WithForm } from "../ui/Form";
import { createUser } from "@/app/lib/actions";

const Stats = () => {
  return (
    <div className="bg-purple-500 h-[40vh] font-bold text-5xl text-center flex items-center justify-center">
      <h1>Stats section</h1>
      <WithForm createUser={createUser}/>
    </div>
  );
};

export default Stats;