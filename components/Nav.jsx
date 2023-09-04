"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { auth, googleauthprovider } from "../app/firebase";
import { signInWithPopup } from "firebase/auth";
import { signOut } from "firebase/auth";

const Nav = () => {
  if (auth.currentUser) {
    // User is authenticated, check the photoURL
    console.log(auth.currentUser.photoURL);
  } else {
    // User is not authenticated
    console.log("User not authenticated");
  }

  console.log(auth?.currentUser?.email);
  console.log(auth?.currentUser?.photoURL);
  const logout = async () => {
    try {
      await signOut(auth);
      console.log("User created successfully!");
    } catch (error) {
      console.error("Error creating user:", error.message);
    }
  };
  const userLogin = true;
  const [providers, setProviders] = useState(null);
  const [toggleDropdown, setToggleDropdown] = useState(false);

  const signInwithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleauthprovider);
      console.log("User created successfully!");
    } catch (error) {
      console.error("Error creating user:", error.message);
    }
  };
  return (
    <nav className="flex-between w-full  mb-16 pt-3">
      <Link href="/" className="flex items-center gap-2">
        <Image
          src="/assets/images/logo.svg" // Use an absolute path to the image
          alt="PromptPulse"
          width={30}
          height={30}
          className="object-contain"
        />
        <p className="logo_text">PromptPulse</p>
      </Link>
      {/* Destop navigation */}
      <div className="sm:flex hidden">
        {userLogin ? (
          <div className="flex gap-3 md:gap-5">
            <Link href="/create-prompt" className="black_btn">
              Create post
            </Link>
            <button
              type="button"
              onClick={signInwithGoogle}
              className="outline_btn"
            >
              {" "}
              Sign In{" "}
            </button>
            <Link href="/profile">
              <Image
                src={auth?.currentUser?.photoURL || "/assets/images/logo.svg"}
                width={37}
                height={37}
                className="rounded-full"
                alt="profile"
              />
            </Link>
          </div>
        ) : (
          <>
            {providers && (
              <button type="button" onClick={logout} className="black_btn">
                Sign Out
              </button>
            )}
          </>
        )}
      </div>

      {/* mobile navigation  */}
      <div className="sm:hidden flex relative">
        {userLogin ? (
          <div className="flex">
            <Image
              src="/assets/images/logo.svg"
              width={37}
              height={37}
              className="rounded-full"
              alt="profile"
              onClick={() => setToggleDropdown((prev) => !prev)} // Use an arrow function
            />

            {toggleDropdown && (
              <div className="dropdown">
                <Link
                  href="/profile"
                  className="dropdown_link"
                  onClick={() => setToggleDropdown(false)}
                >
                  My profile
                </Link>
                <Link
                  href="/create-prompt"
                  className="dropdown_link"
                  onClick={() => setToggleDropdown(false)}
                >
                  Create prompt
                </Link>
                <button
                  type="button"
                  onClick={() => {
                    setToggleDropdown(false);
                    logout();
                  }}
                  className="mt-5 w-full black_btn"
                >
                  Sign out
                </button>
              </div>
            )}
          </div>
        ) : (
          /* Display sign-in buttons for available providers when not logged in */
          <>
            {providers && (
              <button type="button" className="black_btn">
                Sign in
              </button>
            )}
          </>
        )}
      </div>
    </nav>
  );
};

export default Nav;
