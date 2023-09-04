"use client";
import React, { useState, useEffect } from "react";
import PromptCard from "./PromptCard";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../app/firebase";

const Feed = () => {
  const [prompt, setPrompt] = useState([]);
  const promptCollectionRef = collection(db, "prompts");

  const getPromptfeed = async () => {
    try {
      const querySnapshot = await getDocs(promptCollectionRef);
      const promptsData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setPrompt(promptsData);
    } catch (error) {
      console.error("Error fetching prompts:", error);
    }
  };

  useEffect(() => {
    getPromptfeed();
  }, []);

  const [searchText, setSearchText] = useState("");
  const PromptCardList = ({ data, handleTagClick }) => {
    return (
      <div className="mt-16 prompt_layout">
        {data.map((post) => (
          <PromptCard
            key={post.id}
            prompt={post}
            handleTagClick={handleTagClick}
          />
        ))}
      </div>
    );
  };

  const handleSearchChange = (e) => {
    const searchValue = e.target.value.toLowerCase();
    setSearchText(searchValue); // Update the searchText state correctly

    const filteredPrompts = prompt.filter(
      (item) => item.text && item.text.toLowerCase().includes(searchValue)
    );
    setPrompt(filteredPrompts);
  };

  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          type="text"
          placeholder="Search for prompts.."
          value={searchText}
          onChange={handleSearchChange}
          required
          className="search_input peer"
        />
      </form>
      <PromptCardList data={prompt} handleTagClick={() => {}} />
    </section>
  );
};

export default Feed;
