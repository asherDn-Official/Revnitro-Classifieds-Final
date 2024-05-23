import React, { useState } from "react";
import { Fragment, useEffect } from "react";
import MetaData from "./MetaData";
import { getProducts } from "../../actions/productActions";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./Loader";
import Product from "./product/Product";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import "./css/home.css";
import Pagination from "react-js-pagination";
import Search from "./Search";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import Tooltip from "rc-tooltip";
import "rc-tooltip/assets/bootstrap_white.css";
import { useParams } from "react-router-dom";
import NewHomeCss from "./NewHomeCss.css";
import NewSlider from "./NewSlider";

export default function Home() {
  const { products, loading, error, productsCount, resPerPage } = useSelector(
    (state) => state.productsState
  );

  const dispatch = useDispatch();
  const [isActive, setIsActive] = useState(false);

  const toggleNav = () => {
    setIsActive(!isActive);
  };

  const [currentPage, setCurrentPage] = useState(1);

  // console.log(currentPage);
  const setCurrentPageNo = (pageNo) => {
    setCurrentPage(pageNo);
  };

  const [price, setprice] = useState([1, 1000000]);
  const [priceChanged, setpriceChanged] = useState(price);

  const [bikekm, setBikekm] = useState([1, 100000]);
  const [bikekmChanged, setBikekmChanged] = useState(bikekm);

  const [category, setCategory] = useState(null);
  const categories = [
    "Bajaj",
    "Hero",
    "KTM",
    "TVS",
    "Royal Enfield",
    "Yamaha",
    // "Susuzki",
    "Honda",
    "Mahindra",
  ];

  const [biketype, setBiketype] = useState(null);
  const biketypecategories = ["Petrol", "Electric", "Diesel"];

  // const [bikecccategories, setBikecccategories] = useState(null);

  const [bikeCCtypecategories, setBikeCCtypecategories] = useState(null);
  const bikeCCtypecategories1 = ["100cc-160cc", "160cc-200cc", "200cc-400cc"];
  const { keyword } = useParams();

  useEffect(() => {
    if (error) {
      return toast.error(error, {
        position: toast.POSITION.BOTTOM_CENTER,
      });
    }
    dispatch(
      getProducts(
        null,
        price,
        bikekm,
        category,
        biketype,
        bikeCCtypecategories,
        currentPage,
        keyword
      )
    );
  }, [
    error,
    dispatch,
    null,
    priceChanged,
    bikekmChanged,
    category,
    biketype,
    bikeCCtypecategories,
    currentPage,
  ]);

  const [normalColor, setNormalColor] = useState("red");

  // State to keep track of the currently checked item
  const [checkedItem, setCheckedItem] = useState("");

  // Function to handle checkbox clicks
  const handleCheckboxChange = (itemName) => {
    setCheckedItem(itemName);
  };

  // State to keep track of the currently checked item
  const [checkedItem1, setCheckedItem1] = useState("");

  // Function to handle checkbox clicks
  const handleCheckboxChange1 = (itemName) => {
    setCheckedItem1(itemName);
  };

  // State to keep track of the currently checked item
  const [checkedItem12, setCheckedItem2] = useState("");

  // Function to handle checkbox clicks
  const handleCheckboxChange2 = (itemName) => {
    setCheckedItem2(itemName);
  };

  return (
    <Fragment>
      <Fragment>
        <MetaData title={"Buy Page"} />
        <div style={{ background: "#fff", paddingBottom: "60px" }}>
          <div>
            <div className="NewClassifiedFirstHBanne">
              <img src="/images/AboutPageBannerimg.png" alt="" />
            </div>
            <div>
              <NewSlider />
            </div>

            <div className="classformobileshowinputbox">{/* <Search /> */}</div>

            {/* <!------------------------------------Cards Section-----------------------------------------> */}

            {/* <div className="buyPageCardsandFilter">
                      <div className="buyPagecardssection">
                        {products &&
                          products.map((product) => (
                            <Product key={product._id} product={product} />
                          ))}
                      </div>

                      <div
                        className="filtersection"
                        id="mobilesfiltersecrionssfordiv"
                      >
                        <div className="filtersectionhomegdhdivfle">
                          <div className="filterheadings">Filter</div>
                          <div>
                            <form className="ResrFilterBUttondiv">
                              <button className="resrtFiltrerButtonsduv">
                                Reset Filter
                              </button>
                            </form>
                          </div>
                        </div>

                        <div className="brandsection">
                          <div>
                            <div className="brandheading">
                              <span className="brandnameflex">Budget</span>
                            </div>
                          </div>
                          <div className="hrlineforbrand">
                            <hr className="hrlineforbrand" />
                          </div>

                          <div
                            className="slidersdiv"
                            style={{
                              marginTop: "20px",
                              paddingLeft: "20px",
                              paddingRight: "20px",
                              paddingBottom: "20px",
                            }}
                            onMouseUp={() => setpriceChanged(price)}
                          >
                            <Slider
                              range={true}
                              marks={{
                                1: "1",
                                1000000: "1000000",
                              }}
                              min={1}
                              max={1000000}
                              defaultValue={price}
                              onChange={(price) => {
                                setprice(price);
                              }}
                              handleRender={(renderProps) => {
                                return (
                                  <Tooltip
                                    overlay={`Rs. ${renderProps.props["aria-valuenow"]}`}
                                  >
                                    <div {...renderProps.props}></div>
                                  </Tooltip>
                                );
                              }}
                            />
                          </div>
                        </div>

                        <div className="brandsection">
                          <div>
                            <div className="brandheading">
                              <span className="brandnameflex">Brand</span>
                            </div>
                          </div>
                          <div className="hrlineforbrand">
                            <hr className="hrlineforbrand" />
                          </div>
                          <div>
                            <ul>
                              {categories.map((category, index) => (
                                <li key={category}>
                                  <div
                                    className="companynames"
                                    style={{ cursor: "pointer" }}
                                  >
                                    <input
                                      value="Bike"
                                      type="checkbox"
                                      name={category}
                                      checked={checkedItem === category}
                                      onChange={() =>
                                        handleCheckboxChange(category)
                                      }
                                      onClick={() => {
                                        setCategory(category);
                                      }}
                                      style={{
                                        cursor: "pointer",
                                      }}
                                    />
                                    <label htmlFor="vehicle1">{category}</label>
                                    <br />
                                  </div>
                                </li>
                              ))}
                            </ul>

                            <hr />
                          </div>
                        </div>

                        <div className="brandsection">
                          <div>
                            <div className="brandheading">
                              <span className="brandnameflex">Kilometer</span>
                            </div>
                          </div>
                          <div className="hrlineforbrand">
                            <hr className="hrlineforbrand" />
                          </div>

                          <div
                            className="slidersdiv"
                            style={{
                              marginTop: "20px",
                              paddingLeft: "20px",
                              paddingRight: "20px",
                              paddingBottom: "20px",
                            }}
                            onMouseUp={() => setBikekmChanged(bikekm)}
                          >
                            <Slider
                              range={true}
                              marks={{
                                1: "1",
                                100000: "100000",
                              }}
                              min={1}
                              max={100000}
                              defaultValue={bikekm}
                              onChange={(bikekm) => {
                                setBikekm(bikekm);
                              }}
                              handleRender={(renderProps) => {
                                return (
                                  <Tooltip
                                    overlay={`${renderProps.props["aria-valuenow"]} Km `}
                                  >
                                    <div {...renderProps.props}></div>
                                  </Tooltip>
                                );
                              }}
                            />
                          </div>
                        </div>

                        <div className="brandsection">
                          <div>
                            <div className="brandheading">
                              <span className="brandnameflex">Type</span>
                            </div>
                          </div>
                          <div className="hrlineforbrand">
                            <hr className="hrlineforbrand" />
                          </div>
                          <div>
                            <ul>
                              {biketypecategories.map((biketype, index) => (
                                <li key={biketype}>
                                  <div
                                    className="companynames"
                                    style={{ cursor: "pointer" }}
                                  >
                                    <input
                                      value="Bike"
                                      type="checkbox"
                                      name={biketype}
                                      checked={checkedItem1 === biketype}
                                      onChange={() =>
                                        handleCheckboxChange1(biketype)
                                      }
                                      onClick={() => {
                                        setBiketype(biketype);
                                      }}
                                      style={{
                                        cursor: "pointer",
                                      }}
                                    />
                                    <label htmlFor="vehicle1">{biketype}</label>
                                    <br />
                                  </div>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <div className="brandsection">
                          <div>
                            <div className="brandheading">
                              <span className="brandnameflex">
                                Engine Capacity 1
                              </span>
                            </div>
                          </div>
                          <div className="hrlineforbrand">
                            <hr className="hrlineforbrand" />
                          </div>

                          <div>
                            <ul>
                              {bikeCCtypecategories1.map(
                                (bikeCCtypecategories, index) => (
                                  <li key={bikeCCtypecategories}>
                                    <div
                                      className="companynames"
                                      style={{ cursor: "pointer" }}
                                    >
                                      <input
                                        value="Bike"
                                        type="checkbox"
                                        name={bikeCCtypecategories}
                                        checked={
                                          checkedItem1 === bikeCCtypecategories
                                        }
                                        onChange={() =>
                                          handleCheckboxChange1(
                                            bikeCCtypecategories
                                          )
                                        }
                                        onClick={() => {
                                          setBikeCCtypecategories(
                                            bikeCCtypecategories
                                          );
                                        }}
                                        style={{
                                          cursor: "pointer",
                                        }}
                                      />
                                      <label htmlFor="vehicle1">
                                        {bikeCCtypecategories}
                                      </label>
                                      <br />
                                    </div>
                                  </li>
                                )
                              )}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div> */}
            <div>
              <div>
                <div class="Maindyu23784yu3478y63hgs">
                  <div class="Maindivoftheconetenetwidtgh23478278">
                    <div>
                      <div class="Filyeruhyg6734gyws76">
                        <Search />
                        <div>
                          <div class="SortOptionnewCalssfiedflex">
                            <div class="Sortbysg2333">Sort by :</div>
                            <div class="q423Soryt6563234">
                              Price : Low to High
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <!---------------------------------------Products List---------------------------------> */}
                    <div class="rsu3274243y82348778234">
                      <div class="bikeproductdivflexcontenet">
                        {products &&
                          products.map((product) => (
                            <Product key={product._id} product={product} />
                          ))}
                      </div>
                    </div>

                    <div class="seemoreiondiodbhnd">
                      <div class="seemoremaindivc23">
                        <div class="SeemorenewClassifiedsse">See More</div>
                      </div>
                    </div>

                    {/* <!---------------------------------------Products List---------------------------------> */}
                  </div>
                  <div class="filteroptionmaindfu237487">
                    <div
                      className="filtersection"
                      id="mobilesfiltersecrionssfordiv"
                    >
                      <div className="filtersectionhomegdhdivfle">
                        <div className="filterheadings">Filter</div>
                        <div>
                          <div className="ResrFilterBUttondiv">
                            <button className="resrtFiltrerButtonsduv">
                              Clear
                            </button>
                          </div>
                        </div>
                      </div>

                      <div className="brandsection">
                        <div>
                          <div className="brandheading">
                            <span className="brandnameflex">Budget</span>
                          </div>
                        </div>
                        <div className="hrlineforbrand">
                          <hr className="hrlineforbrand" />
                        </div>

                        <div
                          className="slidersdiv"
                          style={{
                            marginTop: "20px",
                            paddingLeft: "10px",
                            paddingRight: "15px",
                            paddingBottom: "20px",
                          }}
                          onMouseUp={() => setpriceChanged(price)}
                        >
                          <Slider
                            range={true}
                            marks={{
                              1: "1",
                              1000000: "1000000",
                            }}
                            min={1}
                            max={1000000}
                            defaultValue={price}
                            onChange={(price) => {
                              setprice(price);
                            }}
                            handleRender={(renderProps) => {
                              return (
                                <Tooltip
                                  overlay={`Rs. ${renderProps.props["aria-valuenow"]}`}
                                >
                                  <div {...renderProps.props}></div>
                                </Tooltip>
                              );
                            }}
                          />
                        </div>
                      </div>

                      <div className="brandsection">
                        <div>
                          <div className="brandheading">
                            <span className="brandnameflex">Brand</span>
                          </div>
                        </div>
                        <div className="hrlineforbrand">
                          <hr className="hrlineforbrand" />
                        </div>
                        <div>
                          <ul>
                            {categories.map((category, index) => (
                              <li key={category}>
                                <div className="companynames">
                                  <input
                                    className="Checkboxfilterinput555"
                                    value="Bike"
                                    type="checkbox"
                                    name={category}
                                    checked={checkedItem === category}
                                    onChange={() =>
                                      handleCheckboxChange(category)
                                    }
                                    onClick={() => {
                                      setCategory(category);
                                    }}
                                  />
                                  <label htmlFor="vehicle1">{category}</label>
                                  <br />
                                </div>
                              </li>
                            ))}
                          </ul>

                          <hr />
                        </div>
                      </div>

                      <div className="brandsection">
                        <div>
                          <div className="brandheading">
                            <span className="brandnameflex">Kilometer</span>
                          </div>
                        </div>
                        <div className="hrlineforbrand">
                          <hr className="hrlineforbrand" />
                        </div>

                        <div
                          className="slidersdiv"
                          style={{
                            marginTop: "20px",
                            paddingLeft: "10px",
                            paddingRight: "15px",
                            paddingBottom: "20px",
                          }}
                          onMouseUp={() => setBikekmChanged(bikekm)}
                        >
                          <Slider
                            range={true}
                            marks={{
                              1: "1",
                              100000: "100000",
                            }}
                            min={1}
                            max={100000}
                            defaultValue={bikekm}
                            onChange={(bikekm) => {
                              setBikekm(bikekm);
                            }}
                            handleRender={(renderProps) => {
                              return (
                                <Tooltip
                                  overlay={`${renderProps.props["aria-valuenow"]} Km `}
                                >
                                  <div {...renderProps.props}></div>
                                </Tooltip>
                              );
                            }}
                          />
                        </div>
                      </div>

                      <div className="brandsection">
                        <div>
                          <div className="brandheading">
                            <span className="brandnameflex">Type</span>
                          </div>
                        </div>
                        <div className="hrlineforbrand">
                          <hr className="hrlineforbrand" />
                        </div>
                        <div>
                          <ul>
                            {biketypecategories.map((biketype, index) => (
                              <li key={biketype}>
                                <div className="companynames">
                                  <input
                                    value="Bike"
                                    type="checkbox"
                                    name={biketype}
                                    checked={checkedItem1 === biketype}
                                    onChange={() =>
                                      handleCheckboxChange1(biketype)
                                    }
                                    onClick={() => {
                                      setBiketype(biketype);
                                    }}
                                  />
                                  <label htmlFor="vehicle1">{biketype}</label>
                                  <br />
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="brandsection">
                        <div>
                          <div className="brandheading">
                            <span className="brandnameflex">
                              Engine Capacity
                            </span>
                          </div>
                        </div>
                        <div className="hrlineforbrand">
                          <hr className="hrlineforbrand" />
                        </div>

                        <div>
                          <ul>
                            {bikeCCtypecategories1.map(
                              (bikeCCtypecategories, index) => (
                                <li key={bikeCCtypecategories}>
                                  <div className="companynames">
                                    <input
                                      value="Bike"
                                      type="checkbox"
                                      name={bikeCCtypecategories}
                                      checked={
                                        checkedItem1 === bikeCCtypecategories
                                      }
                                      onChange={() =>
                                        handleCheckboxChange1(
                                          bikeCCtypecategories
                                        )
                                      }
                                      onClick={() => {
                                        setBikeCCtypecategories(
                                          bikeCCtypecategories
                                        );
                                      }}
                                    />
                                    <label htmlFor="vehicle1">
                                      {bikeCCtypecategories}
                                    </label>
                                    <br />
                                  </div>
                                </li>
                              )
                            )}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <div>
                      {productsCount > 0 ? (
                        <div className="d-flex justify-content-center mt-5">
                          <Pagination
                            activePage={currentPage}
                            onChange={setCurrentPageNo}
                            totalItemsCount={productsCount}
                            itemsCountPerPage={resPerPage}
                            nextPageText={"Next"}
                            firstPageText={"First"}
                            lastPageText={"Last"}
                            itemClass={"page-item"}
                            linkClass={"page-link"}
                          />
                        </div>
                      ) : null}
                    </div> */}
          </div>
        </div>
      </Fragment>
    </Fragment>
  );
  function likebuttonclick() {
    document.getElementById("heartcoulour").style.color = "#F00";
  }
}
