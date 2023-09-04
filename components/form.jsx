import React, { useState } from "react";
import Link from "next/link";
import { toast } from "react-toastify";

import { addDoc, collection } from "firebase/firestore";
import { db, auth, storage } from "../app/firebase";

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  const [newprompt, setNewprompt] = useState("");
  const [newtag, setNewtag] = useState("");
  const promptCollectionRef = collection(db, "prompts");

  const addPrompts = async (e) => {
    e.preventDefault();

    try {
      const promptsData = {
        prompt: newprompt,
        tag: newtag,
        userId: auth?.currentUser?.uid,
      };
      await addDoc(promptCollectionRef, promptsData);

      // Show a success toast notification
      toast.success("Prompt created successfully!", {
        position: "top-right",
        autoClose: 3000, // Close the notification after 3 seconds (adjust as needed)
      });

      // Navigate to the homepage on success
      // You can use window.location.href or any other navigation method here
      // For simplicity, I'll use window.location.href
      window.location.href = "/"; // Replace "/" with the actual path to your homepage
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="head_text text-left">
        {" "}
        <span className="blue_gradient">{type}post</span>{" "}
      </h1>
      <p className="desc text-left max-w-md">
        {type} and share amazing prompts with the world, and let your
        imagination run wild with any AI-powered platform.
      </p>
      <form
        onSubmit={handleSubmit}
        className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism"
      >
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            {" "}
            Your Ai prompt
          </span>
          <textarea
            value={newprompt}
            onChange={(e) => setNewprompt(e.target.value)}
            placeholder="Write your prompt here..."
            className="form_textarea"
          />
        </label>
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            {" "}
            Add a Tag{" "}
            <span className="font-normal">
              (#product,#webdevelopment, #idea)
            </span>
          </span>
          <input
            value={newtag}
            onChange={(e) => setNewtag(e.target.value)}
            placeholder="#tag"
            className="form_input"
          />
        </label>
        <div className="flex-end mx-3 mb-5 gap-5">
          <Link href="/" className="text-gray-500 text-sm">
            Cancel
          </Link>
          <button
            className="px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white"
            type="submit"
            disabled={submitting}
            onClick={addPrompts} // Call addPrompts when the button is clicked
          >
            {submitting ? `${type}...` : type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
