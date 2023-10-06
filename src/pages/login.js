import { FcGoogle } from "react-icons/fc";
import { AiFillFacebook } from "react-icons/ai";

import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../utils/firebase";

export default function Login() {
  //sign in with google
  const googleProvider = new GoogleAuthProvider();
  const GoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log(result.user);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center items-center">
      <div className="bg-cream w-2/3 mt-32 p-10 rounded-lg max-w-[500px] font-mono">
        <h2 className="text-3xl font-medium flex items-center justify-center">
          {" "}
          Join today
        </h2>
        <div className="py-4 ">
          <p className="flex items-center justify-center">
            Still tinkering with this bit...{" "}
          </p>
          <p className="flex items-center justify-center">
            please come back again soon!
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <button
            onClick={GoogleLogin}
            className="text-cream bg-blue p-4 w-full font-medium rounded-lg flex align-middle gap-2"
          >
            <FcGoogle className="text-2xl" /> Sign in with google
          </button>
          <button className="text-cream bg-blue p-4 w-full font-medium rounded-lg flex align-middle gap-2">
            <AiFillFacebook className="text-2xl" />
            Sign in with facebook
          </button>
        </div>
      </div>
    </div>
  );
}
