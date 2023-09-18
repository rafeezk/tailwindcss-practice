import FormInput from "./FormInput"

const LoginPage = () => {
    return (
        <div className="w-[800px] bg-white flex flex-col p-10 rounded-[20px]">
            <div className="text-center">
            <h1 className="font-bold text-2xl text-black">Login Page</h1>
            <h2 className="text-black">please input your account</h2>
            </div>
            <FormInput />
        </div>
    )
}

export default LoginPage;