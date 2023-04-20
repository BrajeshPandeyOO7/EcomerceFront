import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { ILogin } from "../type_config/login_type";
import "../sass/_login.scss";
import PersonOutlineRoundedIcon from "@mui/icons-material/PersonOutlineRounded";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { image_url } from "../constant/image-config";
import Checkbox from '@mui/material/Checkbox';
import { loginService } from "../services/login-service";
import {
  useNavigate 
} from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ILogin>();
  const [remember, setRemember] = useState(false);
  const onSubmit: SubmitHandler<ILogin> = (data) => {
    loginService(data).then(response => {
      console.log('response: ',response)
      const {ok, result}:any = response;
      if(ok){
        navigate("/home")
      }
    })
  };

  return (
    <div className="login-container">
      <div className="_login-box">
        <div className="user-logo">
          <img src={image_url.user} alt="user-icon" />
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="login-form">
            <div className="field-group">
              <div className="login-field">
                <PersonOutlineRoundedIcon className="_icon" />
                <input
                  className="_input"
                  {...register("email", { required: true, maxLength: 20 })}
                />
              </div>
              <div className="login-field">
                <LockOutlinedIcon className="_icon" />
                <input
                  className="_input"
                  {...register("password")}
                />
              </div>
              <div className="forgot-remember">
                <div onClick={(e) => {
                  e.stopPropagation();
                  setRemember(prev => !prev)
                }}>
                  <Checkbox className="check-box"  checked={remember} /><span>Remember me</span>
                </div>
                <div>
                  Forgot Password?
                </div>
              </div>
            </div>
          </div>
          <button className="_login-btn" type="submit">
            LOGIN
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
