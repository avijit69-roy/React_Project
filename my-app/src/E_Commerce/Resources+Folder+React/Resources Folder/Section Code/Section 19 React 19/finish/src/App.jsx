import { Activity, Suspense, useState } from "react";
import "./App.css";
import NewUserProfile from "./NewWay/NewUserProfile";
import OldUserProfile from "./oldway/OldUserProfile";
import { ErrorBoundary } from "react-error-boundary";
import EffectEventDemo from "./EffectEventDemo";
import NewsLetter from "./NewsLetter";
import LikeButton from "./LikeButton";

// const fetchUserProfile = async (userid) => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/users/${userid}`,
//   );

//   if (!res.ok) {
//     throw new Error("API call failed!");
//   }

//   return await res.json();
// };

// const fetchUserPosts = async (userid) => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts?userId=${userid}`,
//   );

//   if (!res.ok) {
//     throw new Error("API call failed!");
//   }

//   return await res.json();
// };

// const userProfilePromise = fetchUserProfile(2);
// const userPostPromise = fetchUserPosts(2);

const App = () => {
  const [activeTab, setActiveTab] = useState("newsletter");
  return (
    <>
      <h1>App Component</h1>
      <button onClick={() => setActiveTab("newsletter")}>News Letter</button>
      <button onClick={() => setActiveTab("likebutton")}>Like Button</button>
      <div className="app_div">
        {/* {activeTab === "newsletter" && <NewsLetter />}
        {activeTab === "likebutton" && <LikeButton />} */}

        <Activity mode={activeTab === "newsletter" ? "visible" : "hidden"}>
          <NewsLetter />
        </Activity>

        <Activity mode={activeTab === "likebutton" ? "visible" : "hidden"}>
          <LikeButton />
        </Activity>

        {/* <NewsLetter /> */}
        {/* <EffectEventDemo /> */}
        {/* <div>
          <ErrorBoundary fallback={<p>Error: Something goes wrong!</p>}>
            <Suspense fallback={<p>Loading....</p>}>
              <NewUserProfile
                userProfilePromise={userProfilePromise}
                userPostPromise={userPostPromise}
              />
            </Suspense>
          </ErrorBoundary>
        </div>

        <div>
          <OldUserProfile userid={2} />
        </div> */}
      </div>
    </>
  );
};

export default App;
