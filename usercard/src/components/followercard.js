import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'

 const FollowerCard = (props) => {

   console.log('follow props', props);



   return(
    <Card>
      <Image src={props.photo} />
      <Card.Content>
        <Card.Header>{props.name}</Card.Header>
        <Card.Meta>{props.link}</Card.Meta>
      </Card.Content>
    </Card>
    )
  }

 export default FollowerCard
