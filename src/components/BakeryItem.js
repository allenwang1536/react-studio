// TODO: create a component that displays a single bakery item

import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function BakeryItem({ name, description, price, image, setTotal, cart, setCart }) {

  const onClick = () => {
    setTotal(prevTotal => parseFloat((prevTotal + price).toFixed(2)))
    if (cart[name]) {
      setCart({
        ...cart,
        [name]: cart[name] + 1,
      })
    } else {
      setCart({
        ...cart,
        [name]: 1
      })
    }
  }

  return (
    <Card sx={{ maxWidth: 345, flexGrow: 1, margin: '0 2rem 0'}}>
      <CardMedia
        component="img"
        alt={name}
        height="140"
        image={image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="body2" color="text.secondary">
            ${price}
        </Typography>
        <Button size="small" onClick={onClick}>Add to Cart</Button>
      </CardActions>
    </Card>
  )
}
