import "./filter.scss";
import { useNavigate } from "react-router-dom";

import search from "../../assets/icons/search.png";
import { useState } from "react";

interface FilterProps {
    size: string;
}

function Filter ( {size}: FilterProps ) {
    const navigate = useNavigate();
    const [findWord, setFindWord] = useState("");

    const searchData = (e : any) => {
        console.log(e);
        if(e.key === "Enter"){
            navigate("/restaurants", {state: {findWord}});
        }
    }
    return(
        <div className="filterWrapper">
            <div className={`filterInput ${size}`}>
                <img src={search} width="50px" height="50px" style={{marginTop: "23px"}}/>
                {size === "large" ? (
                    <input 
                    type="text" 
                    placeholder="맛집 검색"
                    onClick={() => navigate("/search")}
                    />
                    ) : (
                        size === "medium" ? (
                        <input 
                            type="text" 
                            placeholder="맛집 검색"
                            onKeyDown={searchData}
                            value={findWord}
                            onChange={(e) => setFindWord(e.target.value)}
                        />
                    ) : (
                        <input 
                            type="text" 
                            placeholder="맛집 검색"
                            onClick={() => navigate("/search")}
                        />
                    )
                )}
            </div>
        </div>
    );
}

export default Filter;
