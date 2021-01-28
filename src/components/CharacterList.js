import CharacterCard from "./CharacterCard";
import PropTypes from "prop-types";
import "../stylesheets/App.scss";

const characterList = (props) => {
  const charactersData = props.characters.map((item) => {
    return (
      <li key={item.id} className="card__item">
        <CharacterCard
          id={item.id}
          name={item.name}
          species={item.species}
          img={item.image}
        />
      </li>
    );
  });
  if (charactersData.length !== 0) {
    return <ul className="card__list">{charactersData}</ul>;
  } else {
    return <p className="not-character"> Nobody exists on purpose</p>;
  }
};

characterList.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  species: PropTypes.string,
};

export default characterList;
