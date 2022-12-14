import React from 'react';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import {Splide, SplideSlide} from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import {Link} from 'react-router-dom';


function Popular() {
    const [popular, setPopular] = useState([]);

    useEffect(()=>{
        getPopular();
    },[]);

    const getPopular = async ()=>{
            
          const check = localStorage.getItem("popular")

          //let's check with if and else and convert the value into string and backward to array
          if(check){
            //convert the string back to array
            setPopular(JSON.parse(check));
          }else{
            //that's mean the data not available yet so we request data by fetch
            const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`);
            const data = await api.json()
            localStorage.setItem("popular", JSON.stringify(data.recipes));
            setPopular(data.recipes);
            console.log(data.recipes);
            }
        }

  return (
    <div>
        <Wrapper>
            <h3>Popular recipe</h3>
                <Splide options={{
                    perPage: 4,
                    gap: "5rem",
                    arrows: false,
                    pargination: false,
                    drag: "free",
                }}
                >
                {popular.map((recipe)=>{
                    return(
                        <SplideSlide key={recipe.id}>
                        <Card>
                            <Link to={'/recipes'+ recipe.id}>
                            <p>{recipe.title}</p>
                            <img src={recipe.image} alt={recipe.title}/>
                            </Link>
                        </Card>
                        <Gradient/>
                        </SplideSlide>
                    ) 
                })}
                </Splide>
            </Wrapper>
    </div>
  )
}

const Wrapper = styled.div`
    margin: 4rem 0rem ;
`
const Card = styled.div`
    min-height: 25rem;
    border-radius: 2rem;
    overflow: hidden;
    position: relative;

    img{
        border-radius: 2rem;
        position: absolute;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    p{
        position: absolute;
        z-index: 10; 
        left: 50%;
        bottom: 0%;
        transform: translate(-50%, 0%);
        color:white;
        width: 100%; 
        text-align: center; 
        font-weight: 600; 
        font-size: 1rem; 
        height: 40%;
        display: flex; 
        justify-content: center;
        align-items: center;
    }
`;

const Gradient = styled.div`
    z-index: 3;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5));
`;

export default Popular