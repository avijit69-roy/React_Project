export async function signup(prevState, formData) {
  const fullname = formData.get("fullname");
  const useremail = formData.get("useremail");

  await new Promise((res) => setTimeout(res, 1000));

  console.log(prevState, formData.get("fullname"), formData.get("useremail"));

  if (formData.get("useremail") === "") {
    return {
      success: false,
      error: "Email can't be empty!",
      enteredValues: { fullname, useremail },
    };
  }

  return {
    success: true,
    error: null,
    message: "Registered a new user!",
    enteredValues: { fullname, useremail },
  };
}
