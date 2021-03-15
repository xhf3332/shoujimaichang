import React, { Component } from 'react';
// import axios from 'axios'
// import Luyou from '../erji/luyou'
import {Link} from 'react-router-dom'
import './Home.css'
import { loadProducts } from "../services/cart/products";
import { SearchBar, Carousel, WingBlank, Grid} from 'antd-mobile';

// 九宫格
const data = Array.from(new Array(8)).map((_val, i) => ({
  icon: 'http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cb65daec7ef7b52cc785f88f78efba37.png?w=216&h=228&bg=FDF1E6',
  text: `name${i}`,
}));

class Home extends React.Component {
  state = {
    value: '搜索手机',
    data: ['1', '2', '3'],
    imgHeight: 176,
    shuju: [],
    data1:''
  };
      
  //搜索框
  onChange= (value) => {
    this.setState({ value });
  };
  clear = () => {
    this.setState({ value: '' });
  };
 
  // 轮播
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
      });
    }, 100);
     loadProducts().then(res=>{
       console.log(res);
    //    this.state.shuju = res.products
    //  console.log(this.state.shuju);
       this.setState({
         shuju:[...res.products]
       })
     })
  }
  
  render() {
    return (<div>
      {/* 搜索 */}
      <SearchBar
        value={this.state.value}
        placeholder="Search"
        onSubmit={value => console.log(value, 'onSubmit')}
        onClear={value => console.log(value, 'onClear')}
        onFocus={() => console.log('onFocus')}
        onBlur={() => console.log('onBlur')}
        onCancel={() => console.log('onCancel')}
        showCancelButton
        onChange={this.onChange}
      />
       {/* 轮播 */}
       <WingBlank>
        <Carousel
          autoplay={true}
          infinite={true}
          slideWidth={1}
          // beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          // afterChange={index => console.log('slide to', index)}
        >
          {this.state.data.map(val => (
            <a
              key={val}
              href="http://www.alipay.com"
              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
            >
              <img
                src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            </a>
          ))}
        </Carousel>
      </WingBlank>


        {/* 九宫格 */}
          <div>
            <div className="sub-title">Always square grid item </div>
            <Grid data={data} activeStyle={false} />
          <div className="sub-title">Grid item adjust accroiding to img size </div>
         
        <Grid data={this.state.shuju}
          columnNum={2}
          renderItem={dataItem => (
            <Link to={{ pathname: '/xiangqing', state: dataItem }}>
            <div style={{ padding: '12.5px' }} >
              <img src={dataItem.coverImg} style={{ width: '75px', height: '75px' }} alt="" />
              <div style={{ color: '#888', fontSize: '14px', marginTop: '12px' }}>
                  <span>{dataItem.name}{dataItem.price }</span>
               
              </div>
              </div>
              </Link>
        )}
        
          />

      </div>

    </div>
    );
  }
}
export default Home
