import React,{useEffect,useState} from 'react'
import {  useHistory,Link } from "react-router-dom"
import './Reg.css'
import { setToken } from '../utils/auth'
import { regApi } from "../services/user/auth";
export default function Reg() {
   const [ imgState, setimgState ] = useState(true);
    const [ imgData,setimgData ] = useState('');
    const [ username, setUsername ] = useState('')
  const [password, setPassword] = useState('')
    const [yonghu, setYonghu ] = useState('')
  
     const history = useHistory()
    // console.log(history);
    const {push} =useHistory()
     const zhuce = (username,password,imgData,yonghu) => {
        regApi({
        userName: username,
          password: password,
        nickName: yonghu,
          avatar: imgData,
        }).then(res => {
            console.log(res);
            if (res.code === "success") {
          // localStorage.setItem("token", result.token);
          setToken(res.token);
          alert({
            message: "注册成功",
          });
            push({
                pathname: '/login'
            })
        } else {
          alert({
            message: "账号已存在",
          });
        }
        })
       
    }
    const getinputvalue1 = (value) => {
        setUsername(value)    
    }
     const getinputvalue = (value) => {
         setPassword(value)
  }
  const getinputvalue2 = (value) => {
         setYonghu(value)
            }
const upChange = (event) => {
        let imgfile = event.currentTarget.files[0];///获得input的第一个图片
        // console.log('我是图片源文件',imgfile)
        if (imgfile.size > 1024000) {
            alert('大于了1m，请重新上传', 3)
            let upimgs = document.getElementById("upimg")
            upimgs.value=''
        }
        else {
            //使用readAsDataURL来进行回显图片
            let reader = new FileReader();//filereader.readasdataurl读取图像文件转换为流
            reader.readAsDataURL(imgfile);

            reader.onload = function (event) {//读取数据时会触发一个load事件
                let imgs = this.result
                // console.log('我是回显的Base64图片文件',imgs)
                setimgState(false)
                setimgData(imgs)
            };
        }
  }
   const _upImg = () => {
        let upimgs = document.getElementById("upimg")
        upimgs.click();
    }
    return (
        <div>
           <div className='page-body' onClick={_upImg} >
                {/* <button onClick={_upImg}>
                    {
                        imgState?'上传':'重新上传'
                    }
                </button> */}
                
                <img className="regimg" src={imgData} style={{ width: '200px', height: '200px' }} />
            
                <input id='upimg' type='file' style={{ display: 'none' }} accept='image/png' onChange={upChange} />
                
                
            </div>
             <h3>我是注册界面</h3>
           账号： <input type="text" value={username} onChange={(e) => getinputvalue1(e.target.value)}/>
            <br/>
       密码： <input type="text" value={password} onChange={(e) => getinputvalue(e.target.value)} />
        <br/>
         用户名： <input type="text" value={yonghu} onChange={(e) => getinputvalue2(e.target.value)}/>
        
            <br/>
                <button onClick={() => zhuce(username, password,imgData,yonghu)}>注册</button>
                <a><Link to='/login'>去登陆界面</Link></a>

               

        </div>
    )
}