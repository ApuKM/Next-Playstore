import React from "react";
import { auth } from "../lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

const ProtectedPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(), // you need to pass the headers object.
  });
  const user = session?.user;
  if (!user) {
    redirect("/auth/signin");
  }
  return (
    <div>
      <h1 className="text-4xl text-red-400 text-center">
        This page is protected!
      </h1>
    </div>
  );
};

export default ProtectedPage;
