import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../layouts/css/loginpage.css";

export default function Search() {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState("");

  const handleChange = (e) => {
    setKeyword(e.target.value);
    if (keyword.trim() !== "") {
      // Check if keyword is not empty
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (keyword.trim() !== "") {
      // Check if keyword is not empty
      navigate(`/search/${keyword}`);
    }
  };

  return (
    <div>
      {/* <div className="classformobileshowinputbox">
        <form onSubmit={handleSubmit}>
          <div className="formnamedivforbuypagesdivs">
            <div>
              <input
                className="buyPagesearchareaforbikessdsdsd"
                type="searchdiv"
                placeholder="Search here"
                value={keyword}
                onChange={handleChange}
              />
            </div>

            <div>
              <button type="submit">Search here</button>
            </div>
          </div>
        </form>
      </div> */}
      {/* <div>
        <div className="buyPagssearchinputboxes">
          <div className="buyPagecontainer">
            <form onSubmit={handleSubmit}>
              <div className="formnamedivforbuypagesdivs">
                <div>
                  <input
                    className="buyPagesearchareaforbikessdsdsd"
                    type="searchdiv"
                    placeholder="Search here"
                    value={keyword}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <button type="submit">Search here</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div> */}
      <form onSubmit={handleSubmit}>
        <div class="Searchuiew82348259">
          <div class="Calsadhjfdhij435675huy">
            <input
              type="text"
              placeholder="Search your Bike"
              value={keyword}
              onChange={handleChange}
            />
          </div>

          <div class="gfuyweguywer38747243h">
            <button class="Buttomnofthsearch3244">
              <img src="/images/mynaui_search.png" alt="" />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
