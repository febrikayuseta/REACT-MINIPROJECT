import Link from "next/link";
import { User } from "../types";
// import ButtonAction from "./_components/button-action";

async function getUsers(){
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
}



export default async function Contact() {
  const users = await getUsers();
  return <div className="flex flex-col items-center justify-center">
    Contact page
    {/* <ButtonAction /> */}
    <Link href="/contact/1">Contact 1</Link>
    <ul>
      {users.map((user: User) => (
        <li key={user.id}>Username: {user.username} - Name: {user.name}</li>
      ))}
    </ul>
  </div>;
}

// server component