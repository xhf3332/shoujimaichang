import React, { Component ,useState,useEffect} from 'react';
import { useLocation } from 'react-router-dom'
import { addToCart } from "../utils/carts";
import { NoticeBar, WhiteSpace, Icon } from 'antd-mobile';
import axios from 'axios'
import './xiangqing.css'
function Xiangqing() {
    const location = useLocation()
    console.log(location);
    const {name,price,coverImg,quantity,_id} = location.state
    console.log(name, price, coverImg, quantity,_id);
   const fanhui = () => {
       console.log('jj');
       window.history.back(-1);
    }
    // useEffect(() => {
    //     return () => {
        
    //     }
    // }, [])
    const jiagou = (id) => {
        console.log(id);
                addToCart(id,1).then(res=>{
                    console.log(res);
                })
            }
    return (
        <div>
            <div className="top">
                <button onClick={fanhui}>返回</button>

            </div>
            <div className="tu">
                <img src={coverImg} />
            </div>
            <h3>{name}</h3>
            <h4>价格： <span className="pri">{price}</span></h4>
            <NoticeBar marqueeProps={{ loop: true, style: { padding: '0 7.5px' } }}>
                特别提示：大减价了！大减价了！快来买啊！快来买啊！快来买啊！
             </NoticeBar>
            <div className="dibu">
                <button
                    onClick={() => jiagou(_id)}
                >加入购物车</button>
            </div>
        </div>

    )
}
export default Xiangqing