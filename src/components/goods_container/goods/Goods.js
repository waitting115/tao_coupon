import React from 'react';
import Swiper from 'swiper';
require("../../public/swiper-master/package/swiper-bundle.css");

require("./Goods.css");

class Goods extends React.Component {
    constructor() {
        super();
    }

    componentDidMount() {
        var mySwiper = new Swiper('.swiper-container',{
            tool: true,
            autoplay:true,
        })
    }

    render () {
        const goodsMsg = this.props.goodsMsg;
        const allppt = [];
        goodsMsg.ppt.forEach((v, i) => {
            allppt.push(
                <div className="swiper-slide">
                    <img className="goods-ppt-img" src={v} alt=""></img>
                </div>
            )
        })
        
        return (
            <div className="goods-container">
                <div className="goods-ppt-container">
                    <img className="goods-label" src="" alt=""></img>
                    <div className="swiper-container">
                        <div className="swiper-wrapper">
                            {allppt}//ppt
                        </div>
                    </div>
                </div>
                <div className="goods-content">
                    <div className="goods-content-bar1">
                        <div className=""></div>//ing~
                    </div>
                </div>
            </div>
        )
    }
}

export default Goods;