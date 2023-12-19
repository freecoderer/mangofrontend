import './Home.scss';

import Filter from "../../components/Filter/filter";
import Footer from "../../components/Footer/footer";
import Nav from "../../components/Nav/nav";

import location from "../../assets/icons/location.png";
import adverImg from "../../assets/imgs/adverImg.png";
import chatImg from "../../assets/imgs/chatImg.png";
import heart from "../../assets/imgs/heart.png";
import rec from "../../assets/imgs/rec1.png";

const Home = () => {
    return (
        <section className="mainWrapper">
          <Nav />
          <div className="filterWrapper">
            <Filter size="large"/>
            <div className="adWrapper">
              <div className="adTitleWrapper">
                <p>빠르게 <span style={{ color: "#3AB062" }}>검색</span>하고</p>
                <p className="rightTitle">믿고 보는 <span style={{ color: "#3AB062" }}>후기</span></p>
              </div>
              <div className="adImgWrapper">
                <img src={chatImg} alt={chatImg}/>
              </div>
            </div>
            <div className="recWrapper">
              <div className="recTitle"><img src={location} alt={location}/><span style={{ color: "#3AB062" }}>부천시</span> 맛집 추천</div>
              <div className="recContainer">
                {/* 컴포넌트화 필요 */}
                <div className="recBox">
                  <img src={rec} width="400px" height="400px" style={{borderRadius: "15px"}} alt={rec}/>
                  <div className="recContentBox">
                    <div className="recContent">
                      <div>경기 부천시</div>
                      <div className="item">하이타치 본점</div>
                      <div>경쾌한 레트로한 스낵바입니다!</div>
                    </div>
                    <div className="recScore">5.0</div>
                  </div>
                </div>
      
                <div className="recBox">
                  <img src={rec} width="400px" height="400px" style={{borderRadius: "15px"}} alt={rec}/>
                  <div className="recContentBox">
                    <div className="recContent">
                      <div>경기 부천시</div>
                      <div className="item">하이타치 본점</div>
                      <div>경쾌한 레트로한 스낵바입니다!</div>
                    </div>
                    <div className="recScore">5.0</div>
                  </div>
                </div>
      
                <div className="recBox">
                  <img src={rec} width="400px" height="400px" style={{borderRadius: "15px"}} alt={rec}/>
                  <div className="recContentBox">
                    <div className="recContent">
                      <div>경기 부천시</div>
                      <div className="item">하이타치 본점</div>
                      <div>경쾌한 레트로한 스낵바입니다!</div>
                    </div>
                    <div className="recScore">5.0</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bannerBox">
              <img src={heart} width="229px" height="237px" alt={heart}/>
              <p>솔직한 리뷰로 맛집 선택</p>
              <div>다양한 방문자들의 리뷰를 보고 맛집을 선택해보세요!</div>
            </div>
            <div className="adBox">
              <div className="adTitleBox">
                <div className="title">TV에 나온 맛집</div>
                <div><img src={adverImg} alt='adverImg'/></div>
              </div>
            </div>
          </div>
          <Footer />
        </section>
        );
}
export default Home