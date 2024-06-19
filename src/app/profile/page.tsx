import { changePremium, changeUsername, getSession } from "@/actions";
import { redirect } from "next/navigation";
import React from "react";

const ProfilePage = async () => {
  const session = await getSession();

  if (!session.isLoggedIn) {
    redirect("/");
  }

  return (
    <div className="profile">
      <h1>Welcome to the ProfilePage</h1>
      <p>
        Welcome, <b> {session.userName}.</b>
      </p>
      <span>
        You are a <b>{session.isPro ? "premium" : "Free"}</b> user
      </span>
      <form action={changePremium}>
        <button>{session.isPro ? "Cancel" : "Buy"} Premium</button>
      </form>

      <form action={changeUsername}>
        <input
          type="text"
          name="username"
          required
          placeholder={session.userName}
        />
        <button>Update</button>
      </form>
    </div>
  );
};

export default ProfilePage;
