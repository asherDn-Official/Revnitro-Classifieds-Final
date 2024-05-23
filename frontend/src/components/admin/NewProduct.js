import { Fragment, useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createNewProduct } from "../../actions/productActions";
import { toast } from "react-toastify";
import { clearError, clearProductCreated } from "../../slicers/productslice";
import MetaData from "../layouts/MetaData";
export default function NewProduct() {
  const [name, setName] = useState("");
  const [bikename, setBikename] = useState("");
  const [bikekm, setBikekm] = useState("");
  const [bikeyear, setbikeyear] = useState("");
  const [bikeemmision, setbikeemmision] = useState("");
  const [bikedescription, setbikedescription] = useState("");
  const [bikebrand, setbikebrand] = useState("");
  const [bikemodel, setbikemodel] = useState("");
  const [bikeinsurance, setbikeinsurance] = useState("");
  const [bikeownership, setbikeownership] = useState("");
  const [bikelocation, setbikelocation] = useState("");
  const [enginehealth, setenginehealth] = useState("");
  const [enginehealthDescription, setenginehealthDescription] = useState("");
  const [electricalhealth, setelectricalhealth] = useState("");
  const [electricalhealthDescription, setelectricalhealthDescription] =
    useState("");
  const [mechanicalchasishealth, setmechanicalchasishealth] = useState("");
  const [
    mechanicalchasishealthDescription,
    setmechanicalchasishealthDescription,
  ] = useState("");
  const [paintfaringhealth, setpaintfaringhealth] = useState("");
  const [paintfaringhealthDescription, setpaintfaringhealthDescription] =
    useState("");
  const [tyre, settyre] = useState("");
  const [tyreDescription, settyreDescription] = useState("");
  const [power, setpower] = useState("");
  const [torque, settorque] = useState("");
  const [mileage, setmileage] = useState("");
  const [bikebookingdetails, setbikebookingdetails] = useState("");
  const [bikesellrequest, setbikesellrequest] = useState("");
  // const [name, setname] = useState("");
  const [price, setprice] = useState("");
  const [description, setdescription] = useState("");
  const [ratings, setratings] = useState("");
  const [category, setcategory] = useState("");
  const [biketype, setcbiketype] = useState("");
  // const [bikecccategories, setBikeCCtypecategories] = useState("");
  const [bikeCCtypecategories, setBikeCCtypecategories] = useState("");
  const [seller, setsellere] = useState("");
  const [stock, setstock] = useState(0);
  const [numOfReviews, setnumOfReviews] = useState(0);
  const [images, setImages] = useState([]);
  const [imagesPreview, setImagesPreview] = useState([]);

  const { loading, isProductCreated, error } = useSelector(
    (state) => state.productState
  );

  const categories = [
    "Bajaj",
    "Hero",
    "KTM",
    "TVS",
    "Royal Enfield",
    "Yamaha",
    "Susuzki",
    "Honda",
    "Mahindra",
  ];

  const bikeCCtypecategories1 = ["100cc-160cc", "160cc-200cc", "200cc-400cc"];

  const biketypes = ["Petrol", "Electric", "Diesel"];

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onImagesChange = (e) => {
    const files = Array.from(e.target.files);
    files.forEach((file) => {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState == 2) {
          setImagesPreview((oldArray) => [...oldArray, reader.result]);
          setImages((oldArray) => [...oldArray, file]);
        }
      };

      reader.readAsDataURL(file);
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("bikename", bikename);
    formData.append("bikekm", bikekm);
    formData.append("bikeyear", bikeyear);
    formData.append("bikeemmision", bikeemmision);
    formData.append("bikedescription", bikedescription);
    formData.append("bikebrand", bikebrand);
    formData.append("bikemodel", bikemodel);
    formData.append("bikeinsurance", bikeinsurance);
    formData.append("bikeownership", bikeownership);
    formData.append("bikelocation", bikelocation);
    formData.append("enginehealth", enginehealth);
    formData.append("enginehealthDescription", enginehealthDescription);
    formData.append("electricalhealth", electricalhealth);
    formData.append("electricalhealthDescription", electricalhealthDescription);
    formData.append("mechanicalchasishealth", mechanicalchasishealth);
    formData.append(
      "mechanicalchasishealthDescription",
      mechanicalchasishealthDescription
    );
    formData.append("paintfaringhealth", paintfaringhealth);
    formData.append(
      "paintfaringhealthDescription",
      paintfaringhealthDescription
    );
    formData.append("tyre", tyre);
    formData.append("tyreDescription", tyreDescription);
    formData.append("power", power);
    formData.append("torque", torque);
    formData.append("mileage", mileage);
    formData.append("bikebookingdetails", bikebookingdetails);
    formData.append("bikesellrequest", bikesellrequest);
    formData.append("name", name);
    formData.append("price", price);
    formData.append("description", description);
    formData.append("ratings", ratings);
    formData.append("category", category);
    formData.append("biketype", biketype);
    formData.append("bikeCCtypecategories", bikeCCtypecategories);
    formData.append("seller", seller);
    formData.append("stock", stock);
    formData.append("numOfReviews", numOfReviews);
    images.forEach((image) => {
      formData.append("images", image);
    });
    dispatch(createNewProduct(formData));
  };

  useEffect(() => {
    if (isProductCreated) {
      toast("Product Created Successfully", {
        type: "success",
        position: toast.POSITION.BOTTOM_CENTER,
        onOpen: () => dispatch(clearProductCreated()),
      });
      navigate("/admin/products");
      return;
    }

    if (error) {
      toast(error, {
        position: toast.POSITION.BOTTOM_CENTER,
        type: "error",
        onOpen: () => {
          dispatch(clearError());
        },
      });
      return;
    }
  }, [isProductCreated, error, dispatch]);

  // console.log("settyreDescription", tyreDescription);

  return (
    <div className="row">
      <MetaData title={"New Product"} />
      <div className="col-12 col-md-2">
        <Sidebar />
      </div>
      <div className="col-12 col-md-10">
        <Fragment>
          <div className="wrapper my-5">
            <form
              onSubmit={submitHandler}
              className="shadow-lg"
              encType="multipart/form-data"
            >
              <h1 className="mb-4">New Product</h1>

              <div className="form-group">
                <label htmlFor="name_field">Bike Name</label>
                <input
                  type="text"
                  id="name_field"
                  className="form-control"
                  onChange={(e) => setBikename(e.target.value)}
                  value={bikename}
                />
              </div>

              <div className="form-group">
                <label htmlFor="name_field">Bike Kilometer</label>
                <input
                  type="text"
                  id="name_field"
                  className="form-control"
                  onChange={(e) => setBikekm(e.target.value)}
                  value={bikekm}
                />
              </div>

              <div className="form-group">
                <label htmlFor="name_field">Bike year</label>
                <input
                  type="text"
                  id="name_field"
                  className="form-control"
                  onChange={(e) => setbikeyear(e.target.value)}
                  value={bikeyear}
                />
              </div>

              <div className="form-group">
                <label htmlFor="name_field">Bike Emmision</label>
                <input
                  type="text"
                  id="name_field"
                  className="form-control"
                  onChange={(e) => setbikeemmision(e.target.value)}
                  value={bikeemmision}
                />
              </div>

              <div className="form-group">
                <label htmlFor="name_field">Bike Description</label>
                <input
                  type="text"
                  id="name_field"
                  className="form-control"
                  onChange={(e) => setbikedescription(e.target.value)}
                  value={bikedescription}
                />
              </div>

              <div className="form-group">
                <label htmlFor="name_field">Bike Brand</label>
                <input
                  type="text"
                  id="name_field"
                  className="form-control"
                  onChange={(e) => setbikebrand(e.target.value)}
                  value={bikebrand}
                />
              </div>

              <div className="form-group">
                <label htmlFor="name_field">Bike Model</label>
                <input
                  type="text"
                  id="name_field"
                  className="form-control"
                  onChange={(e) => setbikemodel(e.target.value)}
                  value={bikemodel}
                />
              </div>

              <div className="form-group">
                <label htmlFor="name_field">Bike Insurance</label>
                <input
                  type="text"
                  id="name_field"
                  className="form-control"
                  onChange={(e) => setbikeinsurance(e.target.value)}
                  value={bikeinsurance}
                />
              </div>

              <div className="form-group">
                <label htmlFor="name_field">Bike Ownership</label>
                <input
                  type="text"
                  id="name_field"
                  className="form-control"
                  onChange={(e) => setbikeownership(e.target.value)}
                  value={bikeownership}
                />
              </div>

              <div className="form-group">
                <label htmlFor="name_field">Bike Location</label>
                <input
                  type="text"
                  id="name_field"
                  className="form-control"
                  onChange={(e) => setbikelocation(e.target.value)}
                  value={bikelocation}
                />
              </div>

              <div className="form-group">
                <label htmlFor="name_field">Bike Engine Health Rating</label>
                <input
                  type="text"
                  id="name_field"
                  className="form-control"
                  onChange={(e) => setenginehealth(e.target.value)}
                  value={enginehealth}
                />
              </div>

              <div className="form-group">
                <label htmlFor="name_field">Bike Engine Description</label>
                <input
                  type="text"
                  id="name_field"
                  className="form-control"
                  onChange={(e) => setenginehealthDescription(e.target.value)}
                  value={enginehealthDescription}
                />
              </div>

              <div className="form-group">
                <label htmlFor="name_field">
                  Bike Electrical Health Rating
                </label>
                <input
                  type="text"
                  id="name_field"
                  className="form-control"
                  onChange={(e) => setelectricalhealth(e.target.value)}
                  value={electricalhealth}
                />
              </div>
              <div className="form-group">
                <label htmlFor="name_field">
                  Bike Electrical Health Description
                </label>
                <input
                  type="text"
                  id="name_field"
                  className="form-control"
                  onChange={(e) =>
                    setelectricalhealthDescription(e.target.value)
                  }
                  value={electricalhealthDescription}
                />
              </div>

              <div className="form-group">
                <label htmlFor="name_field">
                  Bike Mechanical and Chassis Health Rating
                </label>
                <input
                  type="text"
                  id="name_field"
                  className="form-control"
                  onChange={(e) => setmechanicalchasishealth(e.target.value)}
                  value={mechanicalchasishealth}
                />
              </div>

              <div className="form-group">
                <label htmlFor="name_field">
                  Bike Mechanical and Chassis Health Description
                </label>
                <input
                  type="text"
                  id="name_field"
                  className="form-control"
                  onChange={(e) =>
                    setmechanicalchasishealthDescription(e.target.value)
                  }
                  value={mechanicalchasishealthDescription}
                />
              </div>

              <div className="form-group">
                <label htmlFor="name_field">
                  Bike Paint Faring Health Rating
                </label>
                <input
                  type="text"
                  id="name_field"
                  className="form-control"
                  onChange={(e) => setpaintfaringhealth(e.target.value)}
                  value={paintfaringhealth}
                />
              </div>

              <div className="form-group">
                <label htmlFor="name_field">
                  Bike Paint Faring Health Description
                </label>
                <input
                  type="text"
                  id="name_field"
                  className="form-control"
                  onChange={(e) =>
                    setpaintfaringhealthDescription(e.target.value)
                  }
                  value={paintfaringhealthDescription}
                />
              </div>

              <div className="form-group">
                <label htmlFor="name_field">Bike Tyre Rating</label>
                <input
                  type="text"
                  id="name_field"
                  className="form-control"
                  onChange={(e) => settyre(e.target.value)}
                  value={tyre}
                />
              </div>

              <div className="form-group">
                <label htmlFor="name_field">Bike Tyre Description</label>
                <input
                  type="text"
                  id="name_field"
                  className="form-control"
                  onChange={(e) => settyreDescription(e.target.value)}
                  value={tyreDescription}
                />
              </div>

              <div className="form-group">
                <label htmlFor="name_field">Bike Power Description</label>
                <input
                  type="text"
                  id="name_field"
                  className="form-control"
                  onChange={(e) => setpower(e.target.value)}
                  value={power}
                />
              </div>

              <div className="form-group">
                <label htmlFor="name_field">Bike Torque Description</label>
                <input
                  type="text"
                  id="name_field"
                  className="form-control"
                  onChange={(e) => settorque(e.target.value)}
                  value={torque}
                />
              </div>

              <div className="form-group">
                <label htmlFor="name_field">Bike Mileage Description</label>
                <input
                  type="text"
                  id="name_field"
                  className="form-control"
                  onChange={(e) => setmileage(e.target.value)}
                  value={mileage}
                />
              </div>

              <div className="form-group">
                <label htmlFor="price_field">Price</label>
                <input
                  type="text"
                  id="price_field"
                  className="form-control"
                  onChange={(e) => setprice(e.target.value)}
                  value={price}
                />
              </div>

              <div className="form-group">
                <label htmlFor="category_field">Category</label>

                <select
                  onChange={(e) => setcategory(e.target.value)}
                  className="form-control"
                  id="category_field"
                >
                  <option value="">Select</option>
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="category_field">Bike Type</label>
                <select
                  onChange={(e) => setcbiketype(e.target.value)}
                  className="form-control"
                  id="category_field"
                >
                  <option value="">Select</option>
                  {biketypes.map((biketype) => (
                    <option key={biketype} value={biketype}>
                      {biketype}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="category_field">Bike CC</label>
                <select
                  onChange={(e) => setBikeCCtypecategories(e.target.value)}
                  className="form-control"
                  id="category_field"
                >
                  <option value="">Select</option>
                  {bikeCCtypecategories1.map((bikeCCtypecategories) => (
                    <option
                      key={bikeCCtypecategories}
                      value={bikeCCtypecategories}
                    >
                      {bikeCCtypecategories}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="stock_field">Stock</label>
                <input
                  type="number"
                  id="stock_field"
                  className="form-control"
                  onChange={(e) => setstock(e.target.value)}
                  value={stock}
                />
              </div>

              <div className="form-group">
                <label htmlFor="seller_field">Video Link</label>
                <input
                  type="text"
                  id="seller_field"
                  className="form-control"
                  onChange={(e) => setsellere(e.target.value)}
                  value={seller}
                />
              </div>

              <div className="form-group">
                <label>Images</label>

                <div className="custom-file">
                  <input
                    type="file"
                    name="product_images"
                    className="custom-file-input"
                    id="customFile"
                    multiple
                    onChange={onImagesChange}
                  />
                  <label className="custom-file-label" htmlFor="customFile">
                    Choose Images
                  </label>
                </div>

                <div>
                  {imagesPreview.map((image) => (
                    <img
                      className="mt-3 mr-2"
                      key={image}
                      src={image}
                      alt={"Image Preview"}
                      width="55"
                      height="53"
                    />
                  ))}
                </div>
              </div>

              <button
                type="submit2"
                disabled={loading}
                className="btn update-btn btn-block mt-4 mb-3"
              >
                Create
              </button>
            </form>
          </div>
        </Fragment>
      </div>
    </div>
  );
}
