import React, { useEffect, useEffectEvent, useState } from "react";

const EffectEventDemo = () => {
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");

  const saveDraft = useEffectEvent(() => {
    // Logic for saving the draft
    console.log("Draft Saved: ", subject, body);
  });

  useEffect(() => {
    const timer = setInterval(() => {
      // Code for Saving Draft
      saveDraft();
    }, 10000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <form>
        <p>Subject: </p>{" "}
        <input type="text" onChange={(e) => setSubject(e.target.value)} />
        <p>Body: </p>{" "}
        <textarea
          name=""
          id=""
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
      </form>
    </div>
  );
};

export default EffectEventDemo;
