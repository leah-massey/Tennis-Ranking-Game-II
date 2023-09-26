import { FcGoogle } from "react-icons/fc";
import { AiFillFacebook } from "react-icons/ai";

export default function Login() {
  return (
    <div>
      <h2> join today</h2>
      <div>
        <h3>Sign in with one of the provideres </h3>
      </div>
      <div>
        <button>
          <FcGoogle /> sgn in with google
        </button>
        <button>
          <AiFillFacebook />
          sgn in with facebook
        </button>
      </div>
    </div>
  );
}
