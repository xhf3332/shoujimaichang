import React,{useEffect,useState} from 'react'
import { useHistory, Link } from "react-router-dom"
import { setToken } from '../utils/auth'
import { loginApi } from "../services/user/auth";

export default function Login() {
    const [ username, setUsername ] = useState('')
    const [password, setPassword ] = useState('')
     const history = useHistory()
    console.log(history);
    const {push} =useHistory()
  
    const denglu = (username, password) => {
        loginApi({
        userName: username,
          password: password,
        }).then(res => {
            console.log(res);
            if (res.code === "success") {
        setToken(res.token);
            push({
            pathname: '/user'
           })
               
      } else {
        alert(
         '出错了'
        );
      }
        })
       
    }
   
       
    const getinputvalue1 = (value) => {
        setUsername(value)    
    }
     const getinputvalue = (value) => {
         setPassword(value)
  }
 
  
    return (
      <div>
           
                        <h3>我是登录界面</h3>
                        <input type="text" value={username} onChange={(e) => getinputvalue1(e.target.value)}/>
                        <br/>
                        <input type="text" value={password} onChange={(e) => getinputvalue(e.target.value)}/>
                        <br/>
                         <button onClick={() => denglu(username, password)}>登录</button>
                        <Link to='/reg'>
                                前往注册
                                </Link>
        </div>
    )
}
