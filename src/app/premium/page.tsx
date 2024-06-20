import { getSession } from "@/actions";
import { redirect } from "next/navigation";
import React from "react";

const PremiumPage = async () => {
  const session = await getSession();

  if (!session.isLoggedIn) {
    redirect("/");
  }
  return (
    <div className="premium">
      <h1>Welcome to the PremiumPage</h1>
    </div>
  );
};

export default PremiumPage;
