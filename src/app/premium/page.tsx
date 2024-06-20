import { getSession } from "@/actions";
import React from "react";

const PremiumPage = async () => {

  const session = await getSession()
  return (
    <div className="premium">
      <h1>Welcome to the PremiumPage</h1>
    </div>
  );
};

export default PremiumPage;
