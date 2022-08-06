import React, { useState } from "react";
import "./Resourcepage.css";
import { useDispatch, useSelector } from "react-redux";
import { Button, Pagination } from "@mui/material";
import BasicMenu from "../SortingMenu";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { resourceItem } from "../Redux/Actions/ResourcePageAction";
const Resourcepage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [removedData, setRemovedData] = useState([]);
  const [itemIds, setItemIds] = useState([]);
  const [objId, setObjId] = useState({});
  const [page, setPage] = useState(1);
  const [total_page, setTotalPage] = useState(1);
  const [searchedItem, setSearchedItem] = useState("");
  const Resource = useSelector((store) => store.details.resource_details);
  let Resource_item = useSelector((store) => store.details.resource_item);
  const [res_item, setRes_item] = useState([]);
  let obj = {};
  const handlePageChange = (event, value) => {
    setPage(value);
  };
  useEffect(() => {
    let available_data;
    Resource_item = Resource_item.filter((el) =>
      el.title.toLowerCase().includes(searchedItem.toLowerCase())
    );
    if (Resource_item.length >= 6) {
      setTotalPage(Math.ceil(Resource_item.length / 6));
    } else {
      if (Resource_item.length === 0) {
        available_data = 0;
      } else {
        setTotalPage(1);
      }
    }
    console.log(Resource_item);
    if (available_data === 0) {
      setRes_item([]);
      setTotalPage(0);
    } else {
      let data = [];
      let max = page * 6;
      let start = max - 6;
      for (let i = start; i < max; i++) {
        if (Resource_item[i] === undefined) {
          break;
        }
        data.push(Resource_item[i]);
      }
      if (data.length === 0) {
        setPage(page - 1);
      } else {
        setRes_item(data);
      }
    }
  }, [page, Resource_item, searchedItem]);
  console.log(page);
  const deletItem = () => {
    for (let i = 0; i < itemIds.length; i++) {
      obj[itemIds[i]] = 1;
    }
    let deletedItem = [];
    for (var i = 0; i < Resource_item.length; i++) {
      if (obj[Resource_item[i].id] === undefined) {
        deletedItem.push(Resource_item[i]);
      }
    }
    setItemIds([]);
    dispatch(resourceItem(deletedItem));
  };
  useEffect(() => {
    console.log("in");
    let Ids = {};
    for (var i = 0; i < itemIds.length; i++) {
      Ids[itemIds[i]] = 1;
    }
    setObjId(Ids);
  }, [itemIds]);
  console.log(objId);
  console.log(itemIds);
  return Resource.title === undefined ? (
    <h2>Wait a while...</h2>
  ) : (
    <div>
      <div className="header">
        <div className="header-title">
          <div className="image-div">
            <img src={Resource.icon_url} alt="Logo" />
          </div>
          <div className="title-div">
            <p>{Resource.title}</p>
            <div style={{ textAlign: "left" }}>
              <a href={Resource.link} target="_blank">
                {Resource.link}
              </a>
            </div>
          </div>
        </div>
        <div style={{ textAlign: "left", color: "gray" }}>
          {Resource.description}
        </div>
        <div className="update-btn-div">
          <Button className="update-btn" variant="contained">
            Update
          </Button>
        </div>
      </div>
      <div className="input-sort">
        <div>Items</div>
        <div>
          <input
            onChange={(e) => setSearchedItem(e.target.value)}
            placeholder="Search..."
            type="text"
            name=""
            id=""
          />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {<BasicMenu />}
          </div>
        </div>
      </div>
      <div className="body">
        <div>
          <table style={{ color: "gray", fontSize: "14px" }}>
            <thead>
              <tr>
                <th></th>
                <th>TITLE</th>
                <th>DESCRIPTION</th>
                <th>LINK</th>
              </tr>
            </thead>
            <tbody>
              {res_item.map((el, idx) => (
                <tr
                  onClick={() => {
                    let present = false;
                    for (var i = 0; i < itemIds.length; i++) {
                      if (el.id == itemIds[i]) {
                        present = true;
                        setItemIds(
                          itemIds.filter((element) => element !== el.id)
                        );
                      }
                    }
                    if (present == false) {
                      setItemIds([...itemIds, el.id]);
                    }
                  }}
                >
                  <td>
                    <input
                      checked={objId[el.id] == undefined ? false : true}
                      type="checkbox"
                      name=""
                      id=""
                    />
                  </td>
                  <td>{el.title}</td>
                  <td>
                    {el.description?.length > 40
                      ? el.description.substring(0, 40) + "..."
                      : el.description}
                  </td>
                  <td>
                    <a href={el.link} target="_blank">
                      {el.link}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "40px",
          }}
          className="footer"
        >
          <div className="btns-div">
            <Button
              className="success"
              onClick={() => {
                navigate("/add-item");
              }}
              variant="contained"
              color="success"
              disabled={itemIds.length === 0 ? false : true}
            >
              Add Item
            </Button>
            <Button
              onClick={() => deletItem()}
              variant="contained"
              color="error"
              disabled={itemIds.length > 0 ? false : true}
            >
              Delete
            </Button>
          </div>
          <div>
            <Pagination
              count={total_page}
              page={page}
              variant="outlined"
              shape="rounded"
              onChange={handlePageChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resourcepage;
