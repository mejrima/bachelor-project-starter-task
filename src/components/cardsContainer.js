import React, {Component, useState } from 'react';
import PropTypes from 'prop-types';

import Container from '@material-ui/core/Container';
import MyCard from './myCard';


function CardsContainer({ selected, cardsText }) {
    const [currentCardsText, setCurrentCardsText] = useState(cardsText)
    const [currentlySelected, setCurrentlySelected] = useState(selected)
    let h = false
    return (
        <Container maxWidth="sm">
            <h1>Card {currentlySelected} selected!</h1>
            { currentCardsText.map((e, i) => {
                if (currentlySelected === i){
                    h = true
                } else {
                    h = false
                }
                return <MyCard 
                    key={e}
                    value={e} 
                    highlight={h}
                    handleClick={setCurrentlySelected}
                    index={i}
                />
            })}
        </Container>
        );
}

CardsContainer.propTypes = {
    selected: PropTypes.number,
    cardsText: PropTypes.arrayOf(PropTypes.string),
};

CardsContainer.defaultProps = {
    selected: false,
    cardsText: [],
};

export default CardsContainer;