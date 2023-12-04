//Login.js;

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginSuccess } from "redux/modules/authSlice";
import axios from "axios";
import styled from "styled-components";

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (!id || !password) {
        throw new Error("아이디와 비밀번호를 입력해주세요.");
      }
      const response = await axios.post(
        "https://moneyfulpublicpolicy.co.kr/login",
        {
          id,
          password,
        }
      );

      const { accessToken } = response.data;

      // 로컬스토리지에 토큰 저장
      localStorage.setItem("accessToken", accessToken);

      // 로그인 성공 액션 디스패치
      dispatch(loginSuccess());

      // 홈페이지로 이동
      navigate("/home");
    } catch (error) {
      // 로그인 실패 시 에러 메시지 표시
      setError("로그인에 실패했습니다. 다시 시도해주세요.");
    }
  };

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;

    if (name === "id") {
      setId(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const handleToggleRegister = () => {
    navigate("/register");
  };

  return (
    <LoginContainer>
      <h2>Login</h2>
      <LoginBox onSubmit={handleSubmit}>
        <label htmlFor="id">id:</label>
        <input
          type="text"
          id="id"
          name="id"
          value={id}
          onChange={inputChangeHandler}
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit" disabled={!id || !password}>
          로그인
        </button>
        <button type="button" onClick={handleToggleRegister}>
          회원가입
        </button>
        {error && <ErrorText>{error}</ErrorText>}
      </LoginBox>
    </LoginContainer>
  );
}

const LoginContainer = styled.div`
  width: 300px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const LoginBox = styled.form`
  display: flex;
  flex-direction: column;
`;

const ErrorText = styled.p`
  color: red;
  margin-top: 10px;
`;
// import React, { useState } from "react";
// import axios from "axios";

// const Login = () => {
//   const [id, setId] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = async () => {
//     try {
//       const response = await axios.post(
//         "https://moneyfulpublicpolicy.co.kr/login",
//         {
//           id: id,
//           password: password,
//         }
//       );

//       // 로그인 성공 시 처리할 내용
//       console.log("로그인 성공:", response.data);
//     } catch (error) {
//       // 로그인 실패 시 처리할 내용
//       console.error("로그인 실패:", error);
//     }
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="ID"
//         value={id}
//         onChange={(e) => setId(e.target.value)}
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <button onClick={handleLogin}>로그인</button>
//     </div>
//   );
// };

// export default Login;
