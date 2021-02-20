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
    if (props.highlight) {
        return (
        <Card className={classes.root} variant="outlined"> 
            <CardContent>
            {props.value}
            </CardContent>
        </Card>
        );
    } else {
        return (
        <Card variant="outlined"> 
            <CardContent>
            {props.value}
            </CardContent>
        </Card>
        );
    }
}

export default MyCard;