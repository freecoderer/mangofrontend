import { Link } from "react-router-dom"
import "./nav.scss";

import logo from "../../assets/icons/logo.png";

export default function Nav () {
    return (
        <div className="NavContainer">
            <Link to="/"><img src={logo} width="130px" height="50px"/></Link>
            <ul>
                <li><Link to="/login" className="linkLogin">로그인</Link></li>
                <div className="navLine"></div>
                <li>회원가입</li>
                <li className="reviewBtn">리뷰 작성하기</li>
            </ul>
        </div>
    );
}