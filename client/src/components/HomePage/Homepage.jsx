import React, { useState } from "react";
import "./Homepage.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchItem, filterItem } from "../Redux/Actions/AllResourceAction";
import { resourceDetails } from "../Redux/Actions/ResourcePageAction";
import SearchIcon from "@mui/icons-material/Search";
const Homepage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [tags, setTags] = useState("");
  const [search, setSearch] = useState("");
  const [mainData, setMainData] = useState([]);
  const allResources = useSelector((store) => store.allResources.resources);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://media-content.ccbp.in/website/react-assignment/resources.json"
    );
    const res = await data.json();
    setMainData([...res]);
    dispatch(fetchItem(res));
  };
  const gotoDetailsPage = async (id) => {
    const data = await fetch(
      `https://media-content.ccbp.in/website/react-assignment/resource/${id}.json`
    );
    const res = await data.json();
    dispatch(resourceDetails(res));
    navigate("/resource-details");
  };
  const changeTags = (tag) => {
    setTags(tag);
    dispatch(filterItem({ data: [...mainData], tag: tag }));
  };
  console.log(allResources);
  return allResources.length === 0 ? (
    <div>
      <h1>Loading...</h1>
      <p>Please Wait</p>
    </div>
  ) : (
    <div className="Home-page">
      <div className="tabs-container">
        <button
          className="btn"
          id={`${tags == "" ? "blue" : ""}`}
          onClick={() => changeTags("")}
        >
          Resources
        </button>
        <button
          className="btn"
          id={`${tags == "request" ? "blue" : ""}`}
          onClick={() => changeTags("request")}
        >
          Requests
        </button>
        <button
          className="btn"
          id={`${tags == "user" ? "blue" : ""}`}
          onClick={() => changeTags("user")}
        >
          Users
        </button>
      </div>
      <div className="input-container">
        <input
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Search..."
        />
      </div>
      <div className="main-body">
        {allResources
          .filter((el) => el.title.toLowerCase().includes(search.toLowerCase()))
          .map((el) => (
            <div>
              <div
                onClick={() => {
                  gotoDetailsPage(el.id);
                }}
                key={el.id}
              >
                <div>
                  <img src={el.icon_url} alt="Logo" />
                </div>
                <div>
                  <p>{el.title}</p>
                  <p>{el.category}</p>
                </div>
              </div>
              <div>
                <a href={el.link} target="_blank">
                  {el.link}
                </a>
                <p
                  onClick={() => {
                    gotoDetailsPage(el.id);
                  }}
                  key={el.id}
                >
                  {el.description?.length > 40
                    ? el.description.substring(0, 40) + "..."
                    : el.description}
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Homepage;
