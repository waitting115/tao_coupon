import React from 'react';
import tools from '../../public/methods'
import _ from 'lodash';

require('./ToolBar.css');

const LiItem = (msg) => {
    const message = msg;
    const liMsg = message.msg.msg.rising.state ? message.msg.msg.rising : message.msg.msg.falling;
    return (
        <li value={liMsg.value} data-id={message.msg.id} className="tool-li">
            <span className="tool-li-span">{liMsg.name}</span>
            <img className="tool-li-img" src={liMsg.src} alt={liMsg.value}></img>
        </li>
    )
}

class ToolBar extends React.Component {
    constructor() {
        super();
        this.arrowIcon = {
            arrowUpSrc: "./static/icons/arrow_up.png",
            arrowDownSrc: "../static/icons/arrow_down.png"
        };
        this.state = {
            toolList : [
                {id:"sales", msg: {
                        rising: {name: "销量升序", state: false, value: "sales-rising", src: this.arrowIcon.arrowUpSrc},
                        falling: {name: "销量降序", state: true, value: "sales-falling", src: this.arrowIcon.arrowDownSrc}
                    }
                },
                {id:"price", msg: {
                        rising: {name: "价格升序", state: true, value: "price-rising", src: this.arrowIcon.arrowUpSrc},
                        falling: {name: "价格降序", state: false, value: "price-falling", src: this.arrowIcon.arrowDownSrc}
                    }
                },
                {id:"coupon", msg: {
                        rising: {name: "券额升序", state: true, value: "coupon-rising", src: this.arrowIcon.arrowUpSrc},
                        falling: {name: "券额降序", state: false, value: "coupon-faling", src: this.arrowIcon.arrowDownSrc}
                    }
                },
                {id:"new-time", msg: {
                        rising: {name: "上新时间升序", state: true, value: "new-time-rising", src: this.arrowIcon.arrowUpSrc},
                        falling: {name: "上新时间降序", state: false, value: "new-time-falling", src: this.arrowIcon.arrowDownSrc}
                    }
                },
            ],
            onlySeeHaveCoupon: {
                title: "只看有券",
                state: false
            }
        };
        this.title = "优选商品";
    }

    componentDidMount() {
        var toolLi = document.querySelectorAll('.tool-li');
        var toolRightBtn = document.querySelector('.tool-right-btn');
        var toolRightBtnBall = document.querySelector('.tool-right-btn-ball');
        var toolRightBtnBg = document.querySelector('.tool-right-btn-bg');
        
        // 几个排序的点击函数
        function toolsClick(v) {
            const targetId = v.getAttribute('data-id');
            let toolList = this.state.toolList;
            toolList = toolList.map((v2, i) => {
                if(v2.id === targetId) {
                    v2.msg.rising.state = !v2.msg.rising.state;
                    v2.msg.falling.state = !v2.msg.falling.state;
                }
                return v2;
            })
            this.setState({
                toolList : toolList
            })
            // ajax
            // something...
        }

        function onlySeeHaveCouponFn() {
            // 效果
            toolRightBtnBall.classList.toggle('absolute-right');
            toolRightBtnBg.classList.toggle('tool-right-btn-bg-long');

            // 功能
            this.setState({
                onlySeeHaveCoupon: {
                    ...this.state.onlySeeHaveCoupon,
                    state : !this.state.onlySeeHaveCoupon.state
                }
            })
        }

        // 几个排序的点击时间绑定
        Array.from(toolLi).forEach((v, i) => {
            tools.handleEvent.addEvent(v, 'click', _.debounce(toolsClick.bind(this, v), 1000, {
                'leading': true,
                'trailing': false
            }));
        })

        // 右侧“只看有券”点击效果
        tools.handleEvent.addEvent(toolRightBtn, 'click', _.debounce(onlySeeHaveCouponFn.bind(this), 1000, {
            'leading': true,//true先调用后等待,false先等待后调用
            'trailing': false//延迟结束后是否调用（false即不调用）
        }))
    }

    componentWillUnmount() {
        var toolLi = document.querySelectorAll('.tool-li');
        var toolRightBtn = document.querySelector('.tool-right-btn');
        // 解绑事件，释放内存
        Array.from(toolLi).forEach((v, i) => {
            tools.handleEvent.remove(v, 'click');
        })
        tools.handleEvent.remove(toolRightBtn, 'click');
    }

    render() {
        const toolList = [];
        this.state.toolList.forEach((v, i) => {
            toolList.push(
                <LiItem msg={v} key={v.id}/>
            )
        })
        return (
            <div className="wrapper">
                <div className="container tool-bar">
                    <div className="tool-left">
                        <span className="tool-title">{this.title}</span>
                        <ul className="tool-ul">
                            <li value="default" data-id="default" className="tool-li-default">
                                <span className="tool-li-span">默认排序</span>
                            </li>
                            {toolList}
                        </ul>
                    </div>
                    <div className="tool-right">
                        <span className="tool-right-text">{this.state.onlySeeHaveCoupon.title}</span>
                        <div className="tool-right-btn">
                            <div className="tool-right-btn-ball"></div>
                            <div className="tool-right-btn-bg"></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ToolBar;