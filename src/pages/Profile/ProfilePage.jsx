import { Button, Input, Form, message } from "antd";
import { TbPhotoScan } from "react-icons/tb";
import { Link } from "react-router-dom";
import gallery from "../../assets/gallery.png";
import profile from "../../assets/profile.png";
const ProfilePage = () => {
  const onFinish = (values) => {
    console.log("Form values:", values);
    message.success("Profile updated successfully!");
  };

  // const handleUpload = (info) => {
  //   if (info.file.status === "done") {
  //     message.success("Upload successful");
  //   } else if (info.file.status === "error") {
  //     message.error("Upload failed");
  //   }
  // };
  // file input change handler
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // read file as data URL to preview
      const reader = new FileReader();
      reader.onload = () => {
        setProfileImg(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <div>
      <h1 className="text-start text-3xl font-bold my-5 text-[#35BEBD] font-title">
        Profile
      </h1>

      <div style={{ maxWidth: 400, margin: "auto" }}>
        {/* Profile Picture Section */}
        <div className="">
          <div className="relative text-center items-center justify-center flex">
            <div>
              <img src={profile} alt="Profile" className="w-36" />
            </div>
            <div className="absolute top-20 left-[224px]">
              <div className="bg-[#35BEBD] w-12 h-12 rounded-full relative">
                      {/* label for hidden input */}
              <label htmlFor="fileInput" className="bg-[#35BEBD] w-12 h-12 rounded-full relative cursor-pointer flex items-center justify-center">
                {/* <TbPhotoScan className="text-white text-3xl ml-1 top-1 absolute" /> */}
                <img
                  src={gallery}
                  alt=""
                  className="text-white text-3xl left-2.5 top-2.5 absolute w-7"
                />
                </label>
                       {/* hidden file input */}
              <input
                id="fileInput"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />
              </div>
            </div>
          </div>
          <p className="text-[#35BEBD] text-center font-title my-3">
            Edit Photo
          </p>
          <Link to={"/changePass"}>
            {" "}
            <p className="text-[#313131] text-center font-title my-3 underline text-lg">
              {" "}
              Change Password
            </p>
          </Link>
        </div>

        {/* Form */}
        <Form
          name="profile-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          layout="vertical"
        >
          {/* Name Input */}
          <div className=" mt-3">
            <Form.Item
              name="name"
              rules={[
                { required: true, message: "Please input your Name!" },
                { type: "name", message: "Please enter a  Name!" },
              ]}
            >
              <div>
                <label className={` px-1 text-lg  transition-all`}>Name</label>
                <Input
                  placeholder="Name..."
                  type="text"
                  className="w-full px-3 py-3 rounded-xl border border-[#35BEBD]  focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>
            </Form.Item>
          </div>
          {/* Email Input */}
          <div className="mt-3">
            <Form.Item
              name="email"
              rules={[
                { required: true, message: "Please input your email!" },
                { type: "email", message: "Please enter a valid email!" },
              ]}
            >
              <div>
                <label className={` px-1 text-lg  transition-all`}>Email</label>
                <Input
                  placeholder="john.doe@gmail.com"
                  type="email"
                  className="w-full px-3 py-5 border border-[#35BEBD] rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>
            </Form.Item>
          </div>

          {/* Save Button */}
          <Form.Item>
            <button
              type="submit"
              className="w-full flex text-xl items-center justify-center py-3 px-4 border border-transparent rounded-xl shadow-sm text-white bg-[#30c1c1] hover:bg-[#25a0a0] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-colors"
            >
              Save
            </button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default ProfilePage;
