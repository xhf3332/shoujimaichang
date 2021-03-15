import React, { Component ,useEffect,useState} from 'react';
// import { Link, Route } from 'react-router-dom'
import './cart.css'
// import Luyou from '../erji/luyou'
import {
  loadCarts,
  addToCart,
  delpro,
  delpros,
  submit,
} from "../utils/carts";
import { List, Checkbox, Flex } from 'antd-mobile';

const CheckboxItem = Checkbox.CheckboxItem;
const AgreeItem = Checkbox.AgreeItem;
function Cart() {
    const [list, setList] = useState([])
    const [yi, setYi] = useState([])
    const [id, setId] = useState([])
    const [zongjia, setZongjia] = useState(0)
    const [quan,setQuan]=useState(true)
    
    
    
    useEffect(() => {
            // reture表示删除
               // return () => {
                // loadCarts().then(res => {
                //     console.log(res);
                // })
               // }
             loadCarts().then(res => {
                //  console.log(res);
                 setList(res)
             })
                
         }, [yi,id,quan])
    //  console.log(list);
    // const zong=(xx,yy)=>{
    //         setZongjia(xx*yy)
    // }
    const updatePro = (id, op) => {
        list.forEach(item => {
            if (item.product._id === id) {
                if (item.quantity <=1) {
                    op=1
                    console.log(op);
                    addToCart(id, op).then(res => {
                        // console.log(res);
                    })
                } else {
                    addToCart(id, op).then(res => {
                    //    console.log(res);
                    })
                }    
            }
         setYi([...yi,item.quantity])
        })   
    }
    const delatePro = (id) => {
        console.log(id);
        list.forEach((v, i) => {
            if (v._id == id) {
                console.log(v._id);
                list.splice(i, 1);
            }
            setId([...id,v._id])
        });
         delpro(id).then(res => {
                    console.log(res);
                })
    }
   const onChange = (val) => {
    console.log(val);
    }
    const quanxuan = (e) => {
        console.log(e);
        // setQuan(!e)
    }
    console.log(quan);
    console.log(list);
    return (
        <div>
            <div className="top">购物车列表</div>
            {/* <Link to="/cart/luyou">子路由</Link>
            <Link to="/">回到首页</Link>
            <Route path="/cart/luyou" component={Luyou} />
            <Route path="/" /> */}
                <ul>
            {
                    list.map(item=> {
                        return <li className="nav" key={item.product._id}>
                            <div className="gouimg">
                                <input type="checkbox" />
                            {/* </div>
                            <div className="gouimg"> */}
                                <img src={item.product.coverImg} /></div>
                            <div>{item.product.name}</div>
                            <div>价格：{item.product.price}</div>
                            <div className="jiajian">
                                    <button onClick={ ()=>updatePro(item.product._id, -1)}>-</button>
                                    <div>{item.quantity}</div>
                                    <button onClick={()=>updatePro(item.product._id, +1)}>+</button>
                            </div>
                            <div>
                                <button onClick={()=>delatePro(item._id)}>删除</button>
                            </div>
                            </li>
                        
                    })   
                }
                </ul>
               
            <div className="dixia">

                    <List>
                    {list.map(item => (
                        <CheckboxItem
                            key={item._id}
                            onChange={(e) => onChange(e.target.checked)}
                            // onClick={checked=!quan}
                            defaultChecked={quan}
                            // disabled={quan}
                            checked={!quan}
                        >
                                        <div className="gouimg">
                                            <img src={item.product.coverImg} /></div>
                                        <div>{item.product.name}</div>
                                        <div>价格：{item.product.price}</div>
                                        <div className="jiajian">
                                                <button onClick={ ()=>updatePro(item.product._id, -1)}>-</button>
                                                <div>{item.quantity}</div>
                                                <button onClick={()=>updatePro(item.product._id, +1)}>+</button>
                                        </div>
                                        <div>
                                            <button onClick={()=>delatePro(item._id)}>删除</button>
                                        </div>
                    </CheckboxItem>
                    ))}
                </List>

                <Flex>
                    <Flex.Item>
                    <AgreeItem data-seed="logId" onChange={e => quanxuan(e.target.checked)}>
                            全选
                    </AgreeItem>
                    </Flex.Item>
                </Flex>
            </div>
        </div>
    )
}
export default Cart