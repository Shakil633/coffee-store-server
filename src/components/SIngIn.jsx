import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const SIngIn = () => {
  const { userSingIn } = useContext(AuthContext);
  const handleSingIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    userSingIn(email, password)
      .then((result) => {
        const users = result.user;
        console.log(users);

        const user = {
          email,
          lastLoggedAt: result.user.metadata.lastSignInTime,
        };
        //update last logged at in the database

        fetch("https://coffe-store-server-ezgez9yzi-shakil-ahmeds-projects.vercel.app/user", {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(user),
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold mb-5">Sing In</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSingIn} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Sing In</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SIngIn;
