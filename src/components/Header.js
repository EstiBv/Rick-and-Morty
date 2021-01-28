import PropTypes from "prop-types";
import "../stylesheets/App.scss";
import title from "../images/Rick_and_Morty.svg";
import Loader from "./Loader";

const header = (props) => {
  return (
    <div className="container__title ">
      <img src={title} alt="Rick and Morty" className="container__title--img" />
      <div>{props.isLoading === true ? <Loader /> : null}</div>
    </div>
  );
};

header.propTypes = {
  title: PropTypes.string,
};
export default header;
