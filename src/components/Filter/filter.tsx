import "./filter.scss";

import search from "../../assets/icons/search.png";

import {useEffect, useState} from "react";
import axios from "axios";


const Filter : React.FC = () => {

    const [namelist, setNamelist] = useState<string[]>([]);
    const [search, setSearch] = useState<string>("");

    useEffect(
        () => {
            axios.get("http://localhost:8000/api/restaurant/name")
            .then((res) => {
                setNamelist(res.data.results);
            })
            .catch((err) => {
                console.log(err);
            })
        }, []
    )
    return(
        <div className="filterWrapper">
            <div className="filterInputWrapper">
                <img src={search} width="50px" height="50px" style={{marginTop: "23px"}}/>
                <input type="text" placeholder="맛집 검색" onChange={(e)=>setSearch(e.target.value)}/>
                {/* eslint-disable-next-line array-callback-return */}
                {namelist.filter((val) => {
                    if (search === "") {
                        return val
                    } else if (val.toLowerCase().includes(search.toLowerCase())) {
                        return val
                    }
                }).map((val, key) => {
                    return <div className="filterResult" key={key}>{val}</div>
                })}
            </div>
        </div>
    );
}

export default Filter;
