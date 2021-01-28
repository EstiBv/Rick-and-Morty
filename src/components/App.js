import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import getDataApi from "../services/api";
import Header from "./Header";
import CharacterList from "./CharacterList";
import Filters from "./Filters";
import CharacterDetails from "./CharacterDetail";
import Footer from "./Footer";
import "../stylesheets/App.scss";

const App = () => {
  // State
  const [characters, setCharacters] = useState([]);
  const [textInput, setTextInput] = useState("");
  const [isLoading, setLoading] = useState(false);

  // Api - component mounted -
  useEffect(() => {
    setLoading(true);
    getDataApi().then((data) => {
      setCharacters(data);
      setLoading(false);
    });
  }, []);

  // Events >>  handleInput
  const handleInputChange = (inputValue) => {
    setTextInput(inputValue);
  };

  // >> filter Characteres
  const filteredCharacter = characters.filter((item) => {
    return item.name.toUpperCase().includes(textInput.toUpperCase());
  });

  //>> render Detail

  const renderDetail = (props) => {
    const foundIdRouteCharacter = parseInt(props.match.params.id);
    const foundCharacter = characters.find((character) => {
      let foundCharacterId = character.id;
      if (foundIdRouteCharacter === foundCharacterId) {
        return true;
      } else return false;
    });

    if (foundCharacter) {
      return (
        <CharacterDetails
          characterDetail={renderDetail}
          name={foundCharacter.name}
          species={foundCharacter.species}
          origin={foundCharacter.origin.name}
          episode={foundCharacter.episode.length}
          image={foundCharacter.image}
          status={foundCharacter.status}
        />
      );
    } else {
      return <p>Character not found</p>;
    }
  };

  return (
    <React.Fragment>
      <main className="main">
        <div className="container">
          <Header isLoading={isLoading} />
        </div>
        <Switch>
          <Route exact path="/">
            <Filters
              handleInputChange={handleInputChange}
              textInput={textInput}
            />
            <CharacterList characters={filteredCharacter} />
          </Route>
          <Route path="/character/:id" component={renderDetail} />
        </Switch>
      </main>
      <footer className="footer">
        <Footer />
      </footer>
    </React.Fragment>
  );
};

export default App;
