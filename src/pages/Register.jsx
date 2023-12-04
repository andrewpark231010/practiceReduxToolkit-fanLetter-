// // src/components/Register.js

import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // 회원가입 요청 보내기
    try {
      const token = null;
      const headers = {};
      if (token) {
        headers["Authorization"] = `Bearer ${token}`;
      }

      await axios.post(
        "https://moneyfulpublicpolicy.co.kr/register",
        {
          id,
          name,
          password,
          confirmPassword,
        },
        { headers }
      );
      const userData = { id, name, password, confirmPassword };
      localStorage.setItem("userData", JSON.stringify(userData));

      // 회원가입 성공 시 로그인 모드로 전환
      handleToggleLogin();
    } catch (error) {
      // 회원가입 실패 시 처리
      window.alert("회원가입에 실패했습니다. 자세한 내용은 콘솔을 확인하세요.");
      console.error("회원가입 실패:", error.message);
    }
  };

  const handleToggleLogin = () => {
    // 로그인 페이지로 이동
    navigate("/login");
  };

  return (
    <RegisterContainer>
      <h2>Register</h2>
      <RegisterBox onSubmit={handleSubmit}>
        <label htmlFor="id">id:</label>
        <input
          type="text"
          id="id"
          name="id"
          value={id}
          onChange={(e) => setId(e.target.value)}
          required
        />
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
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
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <button type="submit" onClick={handleSubmit}>
          확인
        </button>

        <button type="button" onClick={handleToggleLogin}>
          로그인
        </button>
      </RegisterBox>
    </RegisterContainer>
  );
};

const RegisterContainer = styled.div`
  width: 300px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const RegisterBox = styled.form`
  display: flex;
  flex-direction: column;
`;

export default Register;
// import React, { useState } from "react";
// import axios from "axios";

// const Register = () => {
//   const [id, setId] = useState("");
//   const [password, setPassword] = useState("");
//   const [nickname, setNickname] = useState("");

//   const handleSignUp = async () => {
//     try {
//       const response = await axios.post(
//         "https://moneyfulpublicpolicy.co.kr/register",
//         {
//           id: id,
//           password: password,
//           nickname: nickname,
//         }
//       );

//       // 회원가입 성공 시 처리할 내용
//       console.log("회원가입 성공:", response.data);
//     } catch (error) {
//       // 회원가입 실패 시 처리할 내용
//       console.error("회원가입 실패:", error);
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
//       <input
//         type="text"
//         placeholder="Nickname"
//         value={nickname}
//         onChange={(e) => setNickname(e.target.value)}
//       />
//       <button onClick={handleSignUp}>회원가입</button>
//     </div>
//   );
// };

// export default Register;
