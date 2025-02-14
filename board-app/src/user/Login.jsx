import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState('qkrwoghd04');
  const [password, setPassword] = useState('password');

  const changeUsername = e => setUsername(e.target.value);
  const changePassword = e => setPassword(e.target.value);

  const navigate = useNavigate();

  const rest_api_host = import.meta.env.VITE_REST_API_HOST;
	const rest_api_port = import.meta.env.VITE_REST_API_PORT;
	console.log({rest_api_host, rest_api_port});

	const handleSubmit = e => {
    	e.preventDefault();
   	 
    	axios({
        	method: "post",
        	url: `http://${rest_api_host}:${rest_api_port}/loginProc`,
        	data: { username, password },
        	headers: { "Content-Type": "application/json" }
    	}).then(res => {
        console.log(res.data);
        // JWT 토큰을 세션 스토리지에 저장
        sessionStorage.setItem("token", res.data);
        navigate("/list");
      })
      .catch(err => console.log(err));
  };

  return (
    <>
      <h1>로그인 페이지</h1>

      <form onSubmit={handleSubmit}>
        Username: <input type="text" value={username} onChange={changeUsername} />
        <br />
        Password: <input type="text" value={password} onChange={changePassword} />
        <br />
        <button type="submit">로그인</button>
      </form>
    </>
  );
}
