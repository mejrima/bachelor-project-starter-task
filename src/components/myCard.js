import { Card, CardContent } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        background: "red"
    }
});

function MyCard(props) {
    const classes = useStyles();
    return (
        <Card 
            onClick={() => {props.handleClick(props.index)}}
            className={props.highlight ? classes.root : undefined}
            variant="outlined"
        > 
            <CardContent>
            {props.value}
            </CardContent>
        </Card>
    );
}

export default MyCard;