import PropTypes from "prop-types";
import "../stylesheets/CharacterDetail.scss";
import { Link } from "react-router-dom";
import "../stylesheets/App.scss";

const characterDetails = (props) => {
  return (
    <article key={props.id} className="card-detail">
      <Link to="/" className="link-return">
        Return
      </Link>
      <h2 className="card-detail__title">{props.name}</h2>
      <div className="card-detail__container">
        <img
          src={props.image}
          alt={"Picture " + props.name}
          className="card-detail__container--img img"
        />
        <ul className="card-detail__container--list">
          <li className>Species: {props.species}</li>
          <li>
            Planet:{" "}
            {props.origin === "unknown" ? <span>🤷‍♀️</span> : props.origin}
          </li>
          <li>Episodes: {props.episode}</li>
          <li>
            Status: {props.status === "Dead" ? <span>🎚</span> : props.status}{" "}
          </li>
        </ul>
      </div>
    </article>
  );
};

characterDetails.propTypes = {
  id: PropTypes.number,
  image: PropTypes.string,
  name: PropTypes.string,
  species: PropTypes.string,
  origin: PropTypes.string,
  episode: PropTypes.number,
  status: PropTypes.string,
};

characterDetails.defaultProps = {
  name: "Rick and Morty character",
  species: "Undefined species",
  origin: "Unknown origin",
  episodes: "Suspicious infiltrator",
  status: "Wanted, dead or alive",
  img: "Image not found",
};

export default characterDetails;
