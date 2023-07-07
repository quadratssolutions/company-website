import React, { useState, useEffect } from "react";

import DropZone from "../DropZone/DropZone";
import TextInput from "../TextInput/TextInput";

import { addResume } from "../../../../services/firestore.js";
import { uploadResume } from "../../../../services/firebase-storage.js";
import { Link } from "react-router-dom";

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [resume, setResume] = useState(null);
  const [agreed, setAgreed] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadingProgress, setUploadingProgress] = useState(0);
  const [isError, setIsError] = useState(null);
  const [isSucceed, setIsSucceed] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      if (isError) {
        setIsError(null);
      }
    }, 3000);
  }, [isError]);

  useEffect(() => {
    setTimeout(() => {
      if (isSucceed) {
        setIsSucceed(null);
      }
    }, 3000);
  }, [isSucceed]);

  function fileData() {
    if (resume) {
      const fileNameAndSize = `${resume.path} - ${Number(
        (resume.size / 1024 / 1024).toFixed(2)
      )} MB`;
      return fileNameAndSize;
    }
    return "Upload or Drag and drop here";
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (name && email && resume && agreed) {
      setIsUploading(true);
      uploadResume({
        resume: resume,
        username: email.split("@")[0],
        onUploading: (progress) => setUploadingProgress(progress),
        onError: (error) => {
          setIsError(error);
          setIsUploading(false);
        },
        onUploaded: async (url) => {
          const res = await addResume({
            name: name,
            email: email,
            resumeLink: url,
          });
          setIsUploading(false);
          if (res === "SUCCEED") {
            setName("");
            setEmail("");
            setAgreed(false);
            setResume(null);
            setIsSucceed("Your Resume was successfully uploaded");
          } else {
            setIsError("Failed to upload resume!");
          }
        },
      });
    } else {
      setIsError("Some fields are empty!");
    }
  }
  return (
    <form action="" onSubmit={handleSubmit}>
      <h2>Add your Resume</h2>
      <p>
        Ready to take the next step in your career? Upload your resume below to
        apply for exciting opportunities at QUADRATS
      </p>
      <TextInput
        id={"name"}
        type={"text"}
        label={"Your name"}
        name={"name"}
        hint={"Name"}
        value={name}
        onChange={(name) => setName(name)}
      />
      <TextInput
        id={"email"}
        type={"email"}
        label={"Your email"}
        name={"email"}
        hint={"Email"}
        value={email}
        onChange={(email) => setEmail(email)}
      />
      <DropZone onSelected={(file) => setResume(file)} fileData={fileData()} />
      <div>
        <input
          type="checkbox"
          name="policy"
          id="policy"
          checked={agreed}
          onChange={() => setAgreed(!agreed)}
        />
        <label htmlFor="policy">
          By submitting your resume, you agree to our privacy policy and give us
          consent to review and process your application data.
        </label>
      </div>
      <div className="link-with-submit">
        <p className="highlight">
          <Link to="https://calendly.com/kasundularaam/30min">Contact us</Link>
        </p>
        {isUploading ? (
          <div className="btn">
            Uploading... {Number(uploadingProgress).toFixed(0) + "%"}
          </div>
        ) : (
          <input type="submit" value="Submit your Resume" className="btn" />
        )}
      </div>
      {isError ? <div className="message error">{isError}</div> : <></>}
      {isSucceed ? <div className="message succeed">{isSucceed}</div> : <></>}
    </form>
  );
}
