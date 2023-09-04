"use client";
import React, { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Form from "../../components/form"; // Assuming you have a Form component
import { async } from "@firebase/util";

const CreatePrompt = () => {
  const [submitting, setSubmitting] = useState(false);
  const [post, setPost] = useState({ prompt: "", tag: "" });

  const createprompt = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      // Your prompt creation logic here
      // For example, you can send data to a server or perform Firestore operations
      // After a successful creation, you can navigate to the home page
    } catch (error) {
      console.error(error);
    } finally {
      setSubmitting(false); // Set submitting back to false after the operation is completed
    }
  };

  return (
    <>
      <Form
        type="create"
        post={post}
        setPost={setPost}
        submitting={submitting}
        handleSubmit={createprompt}
      />
    </>
  );
};

export default CreatePrompt;

//shareprompts1234#
