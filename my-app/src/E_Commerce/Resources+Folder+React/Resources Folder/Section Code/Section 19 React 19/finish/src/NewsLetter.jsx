import React, { useActionState } from "react";
import { signup } from "./actions";

const NewsLetter = () => {
  const [state, formAction, isPending] = useActionState(signup, {
    success: false,
    error: null,
  });

  return (
    <form action={formAction}>
      <h2>Join our newsletter</h2>
      <input
        type="text"
        placeholder="Enter your fullname"
        name="fullname"
        defaultValue={state?.enteredValues?.fullname || ""}
      />
      <input
        type="text"
        placeholder="Enter your email"
        name="useremail"
        defaultValue={state?.enteredValues?.useremail || ""}
      />

      {state.success && <p>Registered Successfully!</p>}
      {state.error && <p>{state.error}</p>}
      <button disabled={isPending}>
        {isPending ? "Joining..." : "Join Now"}
      </button>
    </form>
  );
};

export default NewsLetter;
