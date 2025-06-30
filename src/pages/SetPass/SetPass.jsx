import { useState } from "react";
import { Form, Input, Checkbox, Divider, Typography } from "antd";
import { FaApple, FaGoogle, FaRegEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { IoEyeOutline } from "react-icons/io5";

import logo from "../../assets/Logo.png";
import confirmPass from "../../assets/forgotPass.png";
import { Link, useNavigate } from "react-router-dom";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { useAppSelector } from "../../redux/hooks";
import { selectCurrentUser } from "../../redux/features/auth/authSlice";
import { useResetPassMutation } from "../../redux/features/auth/authApi";

const { Title, Text } = Typography;

const SetPass = () => {
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
const user = useAppSelector(selectCurrentUser)
const [resetPass]=useResetPassMutation()
  const onFinish = async(values) => {
        const info = {email:user?.email,newPassword:values.newPass}
    console.log("Form submitted:", values); // Display form values in the console
    setLoading(true);
 try{
      const res = await resetPass(info).unwrap();
      console.log("res===>",res);
      setLoading(true)
      setLoading(false)
      toast.success(res?.message);
   navigate("/setPass");

 // eslint-disable-next-line @typescript-eslint/no-explicit-any ---
 }catch(err){
    toast.error(err?.data?.message) 
 }
}
  return (
    <div className="max-w-7xl mx-auto w-full flex md:flex-row flex-col justify-center items-center gap-8 md:ml-16 lg:ml-96">
      <div className="flex w-1/2 bg-white rounded-lg overflow-hidden font-title">
        {/* Left Section - Form */}
        <div className="flex-1 p-10 flex flex-col">
          {/* Logo */}
          <div className="mb-10">
            <img
              src={logo}
              alt="U TEE HUB Logo"
              width={142}
              height={50}
              className="logo"
            />
          </div>

          {/* Form Container */}
          <div className="max-w-md">
     
            <Title level={2} className="text-gray-800 mb-2">
              Set a password
            </Title>
            <Text className="text-gray-600 mb-8">
              Your previous password has been reseted. Please set a new password
              for your account.
            </Text>

            <Form
              name="verify"
              onFinish={onFinish}
              className="space-y-6"
              initialValues={{ remember: true }}
            >
              {/*Create Password Field */}
              {/* <div className="relative pt-2">
                <Form.Item
                  name="oldPass" // This binds the input to form state
                  rules={[
                    { required: true, message: "Please input your code!" },
                  ]}
                >
                  <div className="">
                    <label className="absolute z-30 -top-3 left-3 px-1 text-lg bg-white">
                      Old Password
                    </label>
                    <Input
                      type={showPass ? "text" : "password"}
                      placeholder="••••••••••••••••••"
                      className="w-full px-3 py-5 border border-[#35BEBD] rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPass(!showPass)}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    >
                      {showPass ? (
                        <FaRegEyeSlash className="h-5 w-5 text-gray-400" />
                      ) : (
                        <IoEyeOutline className="h-5 w-5 text-gray-400" />
                      )}
                    </button>
                  </div>
                </Form.Item>
              </div> */}

              {/*re enter Password Field */}
              <div className="relative pt-2">
                <Form.Item
                  name="newPass" // This binds the input to form state
                  rules={[
                    { required: true, message: "Please input your code!" },
                  ]}
                >
                  <div className="">
                    <label className="absolute z-30 -top-3 left-3 px-1 text-lg bg-white">
                      New Password
                    </label>
                    <Input
                      type={showPass ? "text" : "password"}
                      placeholder="••••••••••••••••••"
                      className="w-full px-3 py-5 border border-[#35BEBD] rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPass(!showPass)}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    >
                      {showPass ? (
                        <FaRegEyeSlash className="h-5 w-5 text-gray-400" />
                      ) : (
                        <IoEyeOutline className="h-5 w-5 text-gray-400" />
                      )}
                    </button>
                  </div>
                </Form.Item>
              </div>

              {/* Verify Button */}
              <Form.Item>
                <button
                  type="submit"
                  className="w-full flex text-xl items-center justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-white bg-[#35BEBD] hover:bg-[#25a0a0] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-colors"
                >
                  {loading ? (
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                  ) : null}
                  Set Password
                </button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>

      <div className="w-1/2">
        <img src={confirmPass} alt="Login Image" className="w-[70%] mt-20" />
      </div>
    </div>
  );
};

export default SetPass;
