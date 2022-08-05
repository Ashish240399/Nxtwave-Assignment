import React, { useState } from "react";
import "./Resourcepage.css";
import { useDispatch, useSelector } from "react-redux";
import { Button, Pagination } from "@mui/material";
import SortRounded from "@mui/icons-material/SortRounded";
import BasicMenu from "../SortingMenu";
import { useNavigate } from "react-router-dom";
import { deleteItem } from "../Redux/Actions/ResourcePageAction";
import { useEffect } from "react";
const Resourcepage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [total_page, setTotalPage] = useState(1);
  const Resource = useSelector((store) => store.details.resource_details);
  let Resource_item = useSelector((store) => store.details.resource_item);
  const [res_item, setRes_item] = useState([]);
  let obj = {};
  const deletItems = () => {
    if (Object.keys(obj).length === 0) {
      console.log("empty");
    } else {
      dispatch(deleteItem(obj));
      obj = {};
    }
  };
  const handlePageChange = (event, value) => {
    setPage(value);
  };
  useEffect(() => {
    setTotalPage(Math.ceil(Resource_item.length / 6));
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
  }, [page, Resource_item]);
  console.log(res_item);
  console.log(page);

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
            <a href={Resource.link} target="_blank">
              {Resource.link}
            </a>
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
          <input placeholder="Search..." type="text" name="" id="" />
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
          <table>
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
                <tr>
                  <td>
                    <input
                      onChange={() => {
                        console.log(idx);
                        if (obj[el.id] === undefined) {
                          obj[el.id] = 1;
                        } else {
                          delete obj[el.id];
                        }
                      }}
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
          <div>
            <Button
              onClick={() => {
                navigate("/add-item");
              }}
              variant="contained"
              color="success"
              style={{ marginRight: "20px" }}
            >
              Add Item
            </Button>
            <Button
              onClick={() => {
                deletItems();
              }}
              style={{ backgroundColor: "red" }}
              variant="contained"
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
