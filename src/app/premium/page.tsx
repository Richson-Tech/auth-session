import { getSession } from "@/actions";
import { redirect } from "next/navigation";
import React from "react";

const PremiumPage = async () => {
  const session = await getSession();

  if (!session.isLoggedIn) {
    redirect("/");
  }

  if (!session.isPro) {
    return (
      <div className="notPremium">
        <h1>Only premium users can see the content!</h1>
      </div>
    );
  }
  return (
    <div className="premium">
      <h1>Welcome to the PremiumPage</h1>
    </div>
  );
};

export default PremiumPage;
