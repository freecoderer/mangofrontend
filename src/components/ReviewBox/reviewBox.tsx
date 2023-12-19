import "./reviewBox.scss";

import profile from "../../assets/imgs/defaultProfile.png";

import sad from "../../assets/icons/sad.png";
import smile from "../../assets/icons/smile.png";
import soso from "../../assets/icons/soso.png";

interface ReviewProps {
    createdAt: string;
    reviewContents: string;
    reviewPicUrl: string;
    username: string;
    score: number;
};

const ReviewBox = (props: ReviewProps) => {
    return(
        <div className="reviewBoxWrapper">
            <div className="reviewBoxLeftWrapper">
                <div className="reviewBoxInfo">
                    <div className="reviewProfile">
                        <div className="reviewCntImgWrapper">
                            <img src={profile} alt="profile" width="54px" height="54px"/>
                        </div>
                        <div className="reviewProfileInfo">
                            <span className="reviewProfileName">{props.username}</span>
                            <span>{props.createdAt.split("T")[0]}</span>
                        </div>
                    </div>
                    <div className="reviewCntImgWrapper">
                        {
                            props.score === 1 ? (
                                <img src={sad} alt="sad" width="34px" height="34px"/>
                            ) : props.score === 2 && 3 ? (
                                <img src={soso} alt="soso" width="34px" height="34px"/>
                            ) : (
                                <img src={smile} alt="smile" width="34px" height="34px"/>
                            )
                        }
                    </div>
                </div>
                <div className="reviewContentBox">
                    <span>{props.reviewContents}</span>
                </div>
            </div>
            <div className="reviewImgWrapper">
                <img src={props.reviewPicUrl} alt="mango" width="188px" height="188px"/>
            </div>
        </div>
    )
};

export default ReviewBox;