import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import { useHistory } from 'react-router-dom';
import CardActionArea from '@material-ui/core/CardActionArea';

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
      textAlign: 'center',
      margin:'1em',
      boxSizing: 'border-box'
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
  }));


  export default function FoodItems({foodItem}) {
    const classes = useStyles();
    const history = useHistory()
    const handleBook = (title) => {
        history.push(`/checkout/${title}`);
    }

    return (
        <div>
              <Card className={classes.root}>

              <CardActionArea>

      <CardMedia
        className={classes.media}
        alt="Contemplative Reptile"
        image={foodItem.imageURL}
        title="Paella dish"
        height="140"
      />
     
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {foodItem.title}
        </Typography>
      </CardContent>
      </CardActionArea>
      <CardActions disableSpacing>
        <IconButton aria-label="price">
          <AttachMoneyIcon />: {foodItem.price} 
        </IconButton>
        <Button onClick={() => handleBook(foodItem.title)}  variant="contained" color="primary">
            Order now
        </Button>
      </CardActions>
    </Card>
        </div>
    );
};
