import React, {Component} from 'react';

require('./header.css');

class Header extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return (
            <>
                <div className="wrapper">
                    <div className="container header">
                        <div className="header-left">欢迎来到***</div>
                        <div className="header-right">
                            <a className="header-right-login" href="/">登录</a>
                            <a className="header-right-personal-center" href="/">个人中心</a>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Header;