import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RegisterPage = () => {
  const [registerData, setRegisterData] = useState<any>({
    email: "",
    password: "",
  });

  const [registerStatus, setRegisterStatus] = useState<any>('')

  const submitRegister = async () => {
    const payload = {
      email: registerData.email,
      password: registerData.password,
    };
    const response = await fetch("https://reqres.in/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // register content type
        "x-api-key": "pro_f8e12047372c3bdf414fe83a2eda7c7ecf0f924a9d3cc156",
      },
      body: JSON.stringify(payload),
    });
    const data = await response.json();
    if (data.token) {
      setRegisterStatus("Berhasil register");
      toast("Berhasil Register")
    } else {
      setRegisterStatus("Gagal register")
      toast("Gagal Register")
    }
    console.log("register", data);
  };

  return (
    <div className="container mx-auto">
      <ToastContainer />
      <div className="flex gap-4">
        <div>
          <label
            htmlFor="email"
            className="block mb-2.5 text-sm font-medium text-heading"
          >
            Email
          </label>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
