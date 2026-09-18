import { Suspense, use, useEffect, useState } from "react";
import NewUserPosts from "./NewUserPost";
import { ErrorBoundary } from "react-error-boundary";

const NewUserProfile = ({ userProfilePromise, userPostPromise }) => {
  const user = use(userProfilePromise);

  return (
    <div>
      <div>
        <h2>Name - {user.name}</h2>
        <h3>Email - {user.email}</h3>
        <h3>Phone - {user.phone}</h3>
      </div>
      <div>
        <h3>Posts:</h3>
        <ErrorBoundary fallback={<p>Error: Something goes wrong!</p>}>
          <Suspense fallback={<p>Loading....</p>}>
            <NewUserPosts userPostPromise={userPostPromise} />
          </Suspense>
        </ErrorBoundary>
      </div>
    </div>
  );
};

export default NewUserProfile;
