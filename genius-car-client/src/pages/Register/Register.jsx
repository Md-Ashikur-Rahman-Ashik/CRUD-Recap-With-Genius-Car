import { Link } from "react-router-dom";
import register from "../../assets/images/login/login.svg";

const Register = () => {
  const handleRegister = (event) => {
    event.preventDefault();
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content gap-12 flex-col lg:flex-row">
        <div className="w-1/2">
          <img src={register} alt="" />
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={handleRegister}>
            <h1 className="text-3xl text-center font-bold">Register</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <input
                type="submit"
                value={"Register"}
                className="btn btn-primary"
              />
            </div>
            <p className="my-4 text-center">
              Already have an account? Please 
                <Link className="text-orange-600 font-bold" to="/login">
                  Login
                </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
