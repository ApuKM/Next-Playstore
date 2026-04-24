export async function createUser(formData) {
  "use server";
  // console.log(formData);
  const name = formData.get("name");
  const email = formData.get("email");
  const phone = formData.get("phone");
  const data = {name, email, phone}
  // console.log(name, email);
}
