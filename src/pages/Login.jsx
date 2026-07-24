const Login = () => {
  return (
    <div className="min-h-screen bg-[#07182d] flex items-center justify-center">

      <div className="bg-[#102542] p-10 rounded-2xl w-[420px]">

        <h1 className="text-4xl text-white font-bold mb-8">
          Login
        </h1>

        <input
          className="w-full p-4 rounded-xl mb-4"
          placeholder="Email"
        />

        <input
          className="w-full p-4 rounded-xl mb-6"
          placeholder="Password"
          type="password"
        />

        <button className="w-full bg-cyan-500 p-4 rounded-xl text-white">
          Login
        </button>

      </div>

    </div>
  );
};

export default Login;