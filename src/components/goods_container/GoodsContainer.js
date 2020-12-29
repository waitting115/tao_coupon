import React from 'react';

import ToolBar from './tool_bar/ToolBar';
import Goods from './goods/Goods';


require('./GoodsContainer.css');


class GoodsContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            allCommodity: [],
        }
    }

    componentDidMount () {
        // console.log(this.props)
        this.setState({
            allCommodity : this.props.allCommodity
        })
    }

    render() {
        const allCommoditys = [];
        this.state.allCommodity.forEach((v, i) => {
            allCommoditys.push(
                <Goods goodsMsg={v} key={v.id}/>
            );
        });
        return (
            <div className="wrapper">
                <div className="container">
                    <ToolBar title={this.props.title}/>
                    <div className="goods-warpper">
                        {allCommoditys}
                    </div>
                </div>
            </div>
        )
    }
}

export default GoodsContainer;