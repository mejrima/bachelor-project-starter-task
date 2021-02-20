import React, {Component} from 'react';
import Container from '@material-ui/core/Container';
import MyCard from './myCard';

function CardsContainer(props) {
    const array = props.cardsText
    const n = props.selected
    let h = false
    return (
        <Container maxWidth="sm">
            <h1>Card {props.selected} selected!</h1>
            { array.map((e, i) => {
                if (n === i+1){
                    h = true
                } else {
                    h = false
                }
                return <MyCard value={e} highlight={h}/>
            })}
        </Container>
        );
}

export default CardsContainer;