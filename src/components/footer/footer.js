import React,{useState,useEffect,setState} from 'react'
import {
    NavLink as Link, Route, withRouter
    , useLocation,
} from 'react-router-dom'
import './footer.css'

function Footer(props) {
    const [flag, setFlag] = useState(true)
    
    // console.log(props);
    const { pathname } = useLocation()
    console.log(pathname);
  useEffect(() => {
    if (pathname === '/cart/luyou' || pathname==='/xiangqing'|| pathname==='/login') {
           setFlag(false)
        } else {
            setFlag(true)
       }
    }, [pathname])
    // const flag=pathname==='/cart/luyou'?false:true

    return (
        <div>{flag ? (
             <div className="di">
            <Link className="box" to="/" exact>首页</Link>
            <Link className="box" to="/priduct">分类</Link>
            <Link className="box" to="/cart">购物车</Link>
            <Link className="box" to="/user">我的</Link>
            {/* <Link to="/login">[登录]</Link> */}   
            </div>
        ):null}
           
        </div>
    )
}
export default  withRouter(Footer)
