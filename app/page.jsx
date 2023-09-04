import React from "react";
import Feed from "@/components/Feed";
("../components/Feed");
const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h2 className="head_text text-center">
        Discover & share
        <br />
        <br className="max-md: hidden" />
        <span className="orange_gradient text-center">AI- powered prompts</span>
      </h2>
      <p className="desc text-center">
        PromptPulse is an open-source Ai prompting tool for modern world to
        discover, create and share creative prompts
      </p>
      <Feed />
    </section>
  );
};

export default Home;
