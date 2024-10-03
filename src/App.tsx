import { useState } from 'react';
import Paragraph from './assets/components/Paragraph'
import Icon from './assets/components/Icon'
import Button from './assets/components/Button'
import "./assets/components/App.css"
import ImageSlider from './assets/components/ImageSlider';

function App(){
    return(
    <div className='Container'>
        <div className='contents'>
    <div className='ImgSlider'>
        <ImageSlider/>
    </div>
    <h2>Gramercy Tavern</h2>
<div className='icon'>
    <Paragraph texto='20th New York'/>
    <Icon className='heart'  imageUrl='./corazon.jpeg'></Icon>
</div>
<div className='review'>
    <Icon className='stars' imageUrl='./estrella.jpeg'></Icon>
    <Paragraph texto='(231) reviews'/>
</div>
    <Paragraph className='bottom-text' texto="A quintessential New York City Gem among the city's iconic establishments,Gramercy Tavern serves as an extraordinary
    destination for special occasions and an elevated version of an everyday retreat.It's the unique kind of place you 
    choose for a celebration after a joyfull engagment,or casually wander into to seek refuge from an unexpected downpour"></Paragraph>
</div>
<div>
<Button texto='Make a reservation'/>
</div>   
</div>
    );
} 
export default App
