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
                <div className="swiper-slide" key={i}>
                    <img className="goods-ppt-img" src={v} alt=""></img>
                </div>
            )
        })
        
        return (
            <div className="goods-container col-yd-6 col-pb-4 col-pc-3 col-bpc-2">
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
                        <div className="goods-content-source">
                            <img src=""></img>
                        </div>
                        <div className="goods-content-brand"></div>
                        <div className="goods-content-title"></div>
                    </div>
                    <div className="goods-content-bar2">
                        <div className="goods-content-Price">
                            <div className="goods-content-presentPrice"></div>
                            <div className="goods-content-originalPrice"></div>
                        </div>
                        <div className="goods-content-couponsPrice"></div>
                    </div>
                    <div className="goods-content-bar3">
                        <div className="goods-content-shopName"></div>
                        <div className="goods-content-monthlySale">
                            <span>月销：</span>
                        </div>
                    </div>
                    <div className="goods-content-bar4">
                        <div className="goods-content-address"></div>
                        <button className="goods-content-btn">搜相似</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Goods;