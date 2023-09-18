import useInput from "../hooks/useInput";

const FormInput = () => {
  const [username, setUsername] = useInput();
  const [password, setPassword] = useInput();

  const onSubmit = (event) => {
    event.preventDefault();
    return alert(`Hoola ${username}! \nYour password is : ${password}`)
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="form-input flex flex-col py-3 gap-2">
      <label htmlFor="username">Username</label>
      <input
        onChange={setUsername}
        value={username}
        type="text"
        className="w-full border-[1px] border-black rounded-md p-2"
      />
      <label htmlFor="password">
        Password
      </label>
      <input
        onChange={setPassword}
        value={password}
        type="password"
        className="w-full border-[1px] border-black rounded-md p-2"
      />
      </div>
      <button className="w-full border-[1px] border-black rounded-md h-10 mt-5 bg-gray-400 font-bold">Sign In</button>
    </form>
  );
};

export default FormInput;
