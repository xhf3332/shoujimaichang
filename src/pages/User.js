import React, { Component ,useEffect,useState} from 'react';
// import { isLogin } from '../util/auth'
import './User.css'
import { Redirect, useHistory, Link } from 'react-router-dom'
import { Grid ,List} from 'antd-mobile';
import { removeToken } from '../utils/auth'
import { loadUserInfo } from "../utils/userInfo";
const Item = List.Item;
const Brief = Item.Brief;
const data = Array.from(new Array(4)).map((_val, i) => ({
  icon: 'http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cb65daec7ef7b52cc785f88f78efba37.png?w=216&h=228&bg=FDF1E6',
  text: `name${i}`,
}));

function User() {
    const [imga, setImga] = useState()
    const [yonghu, setYonghu] = useState()
    
    
    const { push } = useHistory()
    console.log(useHistory());
    console.log(push);
    // if (!isLogin()) {
    //     return <Redirect to="login" />
    // }
    useEffect(() => {
        loadUserInfo().then(res => {
            console.log(res);
            setImga(res.avatar)
            setYonghu(res.nickName)
        })
    }, [])


     const tuichu = () => {
         removeToken()
         push({
              pathname:'/login'
         })
    }
    return (
        <div>
            <div className="user-top">
                <img className="yongtu" src={imga} /> {yonghu}
                 <button  className="tuichu" onClick={tuichu}>退出登录</button>
            </div>
            <div className="user-ding">
                <Link  to="/dingdan">
                <p>我的订单 <span>》</span></p>
                </Link>
            </div>
            <Grid data={data} square={false} className="not-square-grid" columnNum={4}/>
             
              <List  className="my-list">
                <Item arrow="horizontal" onClick={() => { }}>修改个人信息</Item>
                    <Item arrow="horizontal" onClick={() => {}}>修改密码</Item>
                   <Item extra="xxx.x m" arrow="horizontal" onClick={() => { }}>清除缓存</Item>
                   <Item arrow="horizontal" onClick={() => {}}>优惠券</Item>
                <Item arrow="horizontal" onClick={() => { }}>我的收藏</Item>
                  <Item arrow="horizontal" onClick={() => { }}>地址管理</Item>
                    <Item arrow="horizontal" onClick={() => {}}>关于我们</Item>
                
                </List>
        </div>
    )
}
export default User
