import "../layouts/css/loginpage.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register, clearAuthError } from "../../actions/userActions";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap";
import MetaData from "../layouts/MetaData";
import axios from "axios";
import { logout } from "../../actions/userActions";

export default function Register() {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    dispatch(logout);
  };
  const handleShow = () => setShow(true);

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  // const [avatar, setAvatar] = useState("");

  // const [avatartPreview, stAvatarPreview] = useState("/images/profile.jpg");

  const [otp, setOtp] = useState();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error, isAuthenticated } = useSelector(
    (state) => state.authState
  );

  const onChange = (e) => {
    if (e.target.name === "avatar") {
      const reader = new FileReader();

      // reader.onload = () => {
      //   if (reader.readyState === 2) {
      //     stAvatarPreview(reader.result);
      //     setAvatar(e.target.files[0]);
      //   }
      // };

      reader.readAsDataURL(e.target.files[0]);
    } else {
      setUserData({ ...userData, [e.target.name]: e.target.value });
    }
  };

  function checkCookie(name) {
    // Split all cookies by semicolon and space to get individual cookie pairs
    const cookies = document.cookie
      .split("; ")
      .map((cookie) => cookie.split("="));
    // Iterate through cookie pairs
    for (const [cookieName, cookieValue] of cookies) {
      // If the current cookie's name matches the one we're looking for
      if (cookieName === name) {
        return cookieValue; // Return the value of the cookie
      }
    }
    return null; // Return null if the cookie doesn't exist
  }

  const submitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", userData.name);
    formData.append("email", userData.email);
    formData.append("password", userData.password);
    // formData.append("avatar", avatar);

    const DISPATCHVALUE = dispatch(register(formData));
    console.log("DISPATCHVALUE", DISPATCHVALUE);

    // DISPATCHVALUE.then((result) => {
    //   console.log("result", result);
    //   handleShow();
    // });

    // if (isAuthenticated) {
    //   handleShow();
    // }
    const token = checkCookie("token");
    // If 'token' cookie exists, run the code inside the if block

    console.log("errorss", error);
    if (document.cookie) {
      handleShow();
    }
  };

  const signUpButton = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/v1/verify", { otp: otp });
      if (response.data.success === true) {
        // alert("Account Created Sucessfully click ok to Homepage");
        toast("Account Created Successfully", {
          type: "success",
          position: toast.POSITION.BOTTOM_CENTER,
        });
        navigate("/");
      } else {
        // alert("OTP Incorrect. Check and Try Again.");
        toast("OTP Incorrect Check and Try Again", {
          type: "error",
          position: toast.POSITION.BOTTOM_CENTER,
        });
      }
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      handleShow();
      // return;
    }

    if (error) {
      toast(error, {
        position: toast.POSITION.BOTTOM_CENTER,
        type: "error",
        onOpen: () => {
          dispatch(clearAuthError);
        },
      });
      return;
    }
  }, [error, isAuthenticated, dispatch, navigate]);

  const [isCheckedregisterbutton, setIsCheckedButtonregsiter] = useState(false);

  const handleCheckboxChangeForResgidter = () => {
    setIsCheckedButtonregsiter(!isCheckedregisterbutton);
  };

  return (
    <div>
      <MetaData title={"Register"} />
      <div className="signupppageflexmainconcept">
        <div className="signupspagemaindiv">
          <div className="signupbodylast">
            <div className="backgroungimage">
              <img
                className="mobileversionhide"
                src="./images/Vector41.png"
                alt=""
              />
              <img
                className="desktopversionhide"
                src="./images/Vector42.png"
                alt=""
              />
            </div>
            <div className="signupform1">
              <div className="signupformwelcome1">Welcome</div>
              <div className="loginloremtext124">
                Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
              </div>
              <div className="signupformdetails1">SignUp</div>
              <form onSubmit={(e) => submitHandler(e)} action="">
                <div className="formdivflexsigninform">
                  <div className="signupforminputformbox12">
                    <input
                      type="text"
                      name="name"
                      onChange={onChange}
                      placeholder="User Name"
                      required
                    />
                  </div>
                  <div className="signupforminputformbox12">
                    <input
                      type="email"
                      name="email"
                      onChange={onChange}
                      placeholder="Email Id"
                      required
                    />
                  </div>
                  <div className="signupforminputformbox12">
                    <input
                      type="password"
                      name="password"
                      onChange={onChange}
                      placeholder="Password"
                      required
                    />
                  </div>
                  {/* 
                <div class="form-group">
                  <label for="avatar_upload">Avatar</label>
                  <div class="d-flex align-items-center">
                    <div>
                      <figure class="avatar mr-3 item-rtl">
                        <img
                          src={avatartPreview}
                          class="rounded-circle"
                          alt="image"
                        />
                      </figure>
                    </div>
                    <div class="custom-file">
                      <input
                        type="file"
                        name="avatar"
                        class="custom-file-input"
                        id="customFile"
                        onChange={onChange}
                      />
                      <label class="custom-file-label" for="customFile">
                        Choose Avatar
                      </label>
                    </div>
                  </div>
                </div> */}

                  <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                      <Modal.Title>Please Enter OTP</Modal.Title>
                    </Modal.Header>
                    <Modal.Body
                    //  style={{ paddingLeft: "30px" }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          paddingBottom: "20px",
                        }}
                      >
                        <div className="signupforminputformbox12">
                          <input
                            type="text"
                            name="emailPassword"
                            // onChange={onChange}
                            onChange={(e) => setOtp(e.target.value)}
                            placeholder="Enter OTP"
                          />
                        </div>
                      </div>
                      <div className="resgiterPagedivflex">
                        {/* Code here */}
                        <div>
                          <label>
                            <div className="Disapaldsyferlcgfretheregsiter">
                              <div>
                                <input
                                  id="Checkboxclickbuttonforresgiter"
                                  type="checkbox"
                                  checked={isCheckedregisterbutton}
                                  onChange={handleCheckboxChangeForResgidter}
                                />
                              </div>
                              <div className="pLEASEcHECKTHEDIV">
                                Please tick the Checkbox Before Register
                              </div>
                            </div>

                            <div className="resgiterpagecheckstyle">
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the
                              industry's standard dummy text ever since the
                              1500s, when an unknown printer took a galley of
                              type and scrambled it to make a type specimen
                              book. It has survived not only five centuries, but
                              also the leap into electronic typesetting,
                              remaining essentially unchanged. It was
                              popularised in the 1960s with the release of
                              Letraset sheets containing Lorem Ipsum passages,
                              and more recently with desktop publishing software
                              like Aldus PageMaker including versions of Lorem
                              Ipsum. Lorem Ipsum is simply dummy text of the
                              printing and typesetting industry. Lorem Ipsum has
                              been the industry's standard dummy text ever since
                              the 1500s, when an unknown printer took a galley
                              of type and scrambled it to make a type specimen
                              book. It has survived not only five centuries, but
                              also the leap into electronic typesetting,
                              remaining essentially unchanged. It was
                              popularised in the 1960s with the release of
                              Letraset sheets containing Lorem Ipsum passages,
                              and more recently with desktop publishing software
                              like Aldus PageMaker including versions of Lorem
                              Ipsum. Lorem Ipsum is simply dummy text of the
                              printing and typesetting industry. Lorem Ipsum has
                              been the industry's standard dummy text ever since
                              the 1500s, when an unknown printer took a galley
                              of type and scrambled it to make a type specimen
                              book. It has survived not only five centuries, but
                              also the leap into electronic typesetting,
                              remaining essentially unchanged. It was
                              popularised in the 1960s with the release of
                              Letraset sheets containing Lorem Ipsum passages,
                              and more recently with desktop publishing software
                              like Aldus PageMaker including versions of Lorem
                              Ipsum.
                            </div>
                          </label>
                          {isCheckedregisterbutton && (
                            <div className="butttforthamindeivnflwex">
                              <button
                                className="Modealbpopifnbutton"
                                onClick={(e) => signUpButton(e)}

                                //  disabled={loading}
                              >
                                Sign up
                              </button>
                              {/* {console.log("Cookie", document.cookie)} */}
                            </div>
                          )}
                        </div>

                        {/* Code here */}
                      </div>
                    </Modal.Body>
                  </Modal>

                  <button disabled={loading}>Sign up</button>
                  <div className="signupformdonthaveaccount12">
                    Already have an account ?
                    <Link
                      to="/login"
                      style={{ backgroundColor: "transparent" }}
                    >
                      <a
                        style={{ backgroundColor: "none", color: "red" }}
                        href=""
                      >
                        &nbsp;Log in
                      </a>
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
