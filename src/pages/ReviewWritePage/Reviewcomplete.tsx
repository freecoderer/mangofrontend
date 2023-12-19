import React from "react";
import {useNavigate} from "react-router-dom";
import './Reviewcomplete.scss';
const Reviewcomplete = () => {
    const navigate = useNavigate();
    return (
        <div className="review-complete">
            <div className="review-complete__title">리뷰가 등록되었습니다!</div>
            <button className="review-complete__button" onClick={() => navigate('/')}>홈으로 가기</button>
        </div>
    );
};

export default Reviewcomplete;