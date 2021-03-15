import React, { Component } from 'react';
import { NavBar, Icon } from 'antd-mobile';


class Dingdan extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    fanhui = () => {
        window.history.back(-1);
    }
    render() { 
        return (
            <>
                <NavBar
                mode="dark"
                leftContent="返回"
                onLeftClick={this.fanhui}
            
                >
                订单管理</NavBar>
        </>);
    }
}
 
export default Dingdan;