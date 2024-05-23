import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import MetaData from "../layouts/MetaData";
import { Link } from "react-router-dom";
import {
  removeItemFromCart,
  removeItemFromWishList,
} from "../../slicers/wishListSlice";
import NewSlider from "../layouts/NewSlider";

export default function WISHlISTS() {
  const { items } = useSelector((state) => state.wishListState);
  const dispatch = useDispatch();
  return (
    <Fragment>
      <MetaData title={"My WishList"} />

      <div className="NewClassifiedFirstHBanne">
        <img src="/images/AboutPageBannerimg.png" alt="" />
      </div>
      <div>
        <NewSlider />
      </div>

      {items.length == 0 ? (
        <div className="wishlistwidthsection">
          <div>
            <div className="wishlistsectiondicwishlistname">
              <h1>No Wishlist</h1>
              <h1></h1>
            </div>

            {/* <!---------------------------------Card Section-----------------------------------------------> */}
          </div>
        </div>
      ) : (
        <div>
          <div className="wishlistsectiondicwishlistname">
            <h1>My Wishlist</h1>
            <h1></h1>
          </div>

          {/* <!----------------------------Bike1---------------------------> */}

          {/* {items.map((item) => (
            <div className="wishlistbikecardssecrion">
              <div className="wishlistbikebackgroundsection">
                <div className="wishlistimageaddlistrelative">
                  <img className="imagesize" src={item.image} alt="" />
                  <div className="wishliaddlistposition">
                    <img
                      onClick={() =>
                        dispatch(removeItemFromWishList(item.product))
                      }
                      src="/images/Vector23.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="wishlistcontentsection">
                  <div className="wishlistbikename">
                    <span>{item.name}</span>
                  </div>
                  <div className="wishlistspecification">
                    <span>
                      {item.bikekm}km | {item.biketype}| {item.bikeyear} |{" "}
                      {item.bikeemmision}
                    </span>
                  </div>
                  <Link to={`/product/${item.product}`}>
                    <button className="wishlistspbikeviewbutton">View</button>
                  </Link>
                </div>
              </div>
            </div>
          ))} */}
          <div
            className="wishlistmaindidbdnn34"
            style={{ paddingBottom: "60px" }}
          >
            <div class="bikeproductdivflexcontenet">
              {items.map((item) => (
                <div class="prodcutwidthmain2343">
                  <div class="Prody84843826234">
                    <img src={item.image} alt="" />
                  </div>
                  <div class="Nameofyhenoghisry43383">{item.name}</div>
                  <div class="detailsofthebiejh347">
                    <div class="Dretsah874235uu">{item.bikekm} |</div>
                    <div class="Dretsah874235uu">{item.biketype} |</div>
                    <div class="Dretsah874235uu">{item.bikeyear} |</div>
                    <div class="Dretsah874235uu">{item.bikeemmision}</div>
                  </div>
                  <Link to={`/product/${item.product}`}>
                    <div class="bdfgs7g47833">
                      <button class="Butjhsdfui3478ugy3w">View</button>
                    </div>
                  </Link>
                  <div className="wishliaddlistposition">
                    <img
                      onClick={() =>
                        dispatch(removeItemFromWishList(item.product))
                      }
                      src="/images/Vector23.png"
                      alt=""
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
}
