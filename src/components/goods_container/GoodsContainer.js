import React from 'react';

import ToolBar from './tool_bar/ToolBar';
import Goods from './goods/Goods';


require('./GoodsContainer.css');


class GoodsContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            allGoods: [
                {
                    'id': '01',
                    'label': {
                        'state': true,
                        'title': '新上架',
                        'url': ''
                    },
                    'ppt': ['', '', '',''],
                    'source': 'tm',// 天猫（tb,tm,jd,pdd）
                    'brand': '安踏',
                    'title': '安踏篮球鞋男鞋2020冬季',
                    'originalPrice': 299,
                    'presentPrice': 199,
                    'couponsPrice': 100,
                    'shopName': '安踏官方旗舰店',
                    'monthlySale': 1879,
                    'address': '福建 泉州',
                    'details': {}
                },
                {
                    'id': '02',
                    'label': {
                        'state': true,
                        'title': '新上架',
                        'url': ''
                    },
                    'ppt': ['', '', '',''],
                    'source': 'tm',// 天猫（tb,tm,jd,pdd）
                    'brand': '安踏',
                    'title': '安踏篮球鞋男鞋2020冬季',
                    'originalPrice': 299,
                    'presentPrice': 199,
                    'couponsPrice': 100,
                    'shopName': '安踏官方旗舰店',
                    'monthlySale': 1879,
                    'address': '福建 泉州',
                    'details': {}
                },
                {
                    'id': '03',
                    'label': {
                        'state': true,
                        'title': '新上架',
                        'url': ''
                    },
                    'ppt': ['', '', '',''],
                    'source': 'tm',// 天猫（tb,tm,jd,pdd）
                    'brand': '安踏',
                    'title': '安踏篮球鞋男鞋2020冬季',
                    'originalPrice': 299,
                    'presentPrice': 199,
                    'couponsPrice': 100,
                    'shopName': '安踏官方旗舰店',
                    'monthlySale': 1879,
                    'address': '福建 泉州',
                    'details': {}
                },
                {
                    'id': '04',
                    'label': {
                        'state': true,
                        'title': '新上架',
                        'url': ''
                    },
                    'ppt': ['', '', '',''],
                    'source': 'tm',// 天猫（tb,tm,jd,pdd）
                    'brand': '安踏',
                    'title': '安踏篮球鞋男鞋2020冬季',
                    'originalPrice': 299,
                    'presentPrice': 199,
                    'couponsPrice': 100,
                    'shopName': '安踏官方旗舰店',
                    'monthlySale': 1879,
                    'address': '福建 泉州',
                    'details': {}
                },
                {
                    'id': '05',
                    'label': {
                        'state': true,
                        'title': '新上架',
                        'url': ''
                    },
                    'ppt': ['', '', '',''],
                    'source': 'tm',// 天猫（tb,tm,jd,pdd）
                    'brand': '安踏',
                    'title': '安踏篮球鞋男鞋2020冬季',
                    'originalPrice': 299,
                    'presentPrice': 199,
                    'couponsPrice': 100,
                    'shopName': '安踏官方旗舰店',
                    'monthlySale': 1879,
                    'address': '福建 泉州',
                    'details': {}
                },
                {
                    'id': '06',
                    'label': {
                        'state': true,
                        'title': '新上架',
                        'url': ''
                    },
                    'ppt': ['', '', '',''],
                    'source': 'tm',// 天猫（tb,tm,jd,pdd）
                    'brand': '安踏',
                    'title': '安踏篮球鞋男鞋2020冬季',
                    'originalPrice': 299,
                    'presentPrice': 199,
                    'couponsPrice': 100,
                    'shopName': '安踏官方旗舰店',
                    'monthlySale': 1879,
                    'address': '福建 泉州',
                    'details': {}
                },
                {
                    'id': '07',
                    'label': {
                        'state': true,
                        'title': '新上架',
                        'url': ''
                    },
                    'ppt': ['', '', '',''],
                    'source': 'tm',// 天猫（tb,tm,jd,pdd）
                    'brand': '安踏',
                    'title': '安踏篮球鞋男鞋2020冬季',
                    'originalPrice': 299,
                    'presentPrice': 199,
                    'couponsPrice': 100,
                    'shopName': '安踏官方旗舰店',
                    'monthlySale': 1879,
                    'address': '福建 泉州',
                    'details': {}
                },
            ],
        }
    }

    render() {
        const allGoods = [];
        this.state.allGoods.forEach((v, i) => {
            allGoods.push(
                <Goods goodsMsg={v} />
            );
        });
        return (
            <div className="wrapper">
                <div className="container">
                    <ToolBar/>
                    <div className="goods-container">
                        {allGoods}
                    </div>
                </div>
            </div>
        )
    }
}

export default GoodsContainer;