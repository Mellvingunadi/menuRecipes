import { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";


function Cuisine() {
    const [cuisines, setCuisines] = useState([]);
    const params = useParams();

    const getCuisines = async (name) => {
      const resp = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`
      );
      const data = await resp.json();
  
      return data.results;
    };

   useEffect(() => {
    let isMounted = true;
    getCuisines(params.type).then((data) => {
      if (isMounted) setCuisines(data);
    });
    return () => {
      isMounted = false;
    };
  }, [params.type]);

    return(
      <Grid
        animate={{opacity: 1}}
        initial={{opacity: 0}}
        exit={{opacity: 0}}
        transition={{duration: 0.5}}
      >
         {cuisines.map((item)=>{
          return(
            <Card key={item.id}> 
              <Link to={"/recipe/" + item.id}>
              <img src={item.image} alt="" />
              <h4>{item.title}</h4>
              </Link>
            </Card>
          )
         })}
      </Grid>
    )
}

//make grid with styled

const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
`;

const Card = styled.div`
  img{
    width: 100%;
    border-radius: 2rem;
  }
  a{
    text-decoration: none;
  }
  h4{
    text-align: center;
    padding: 1rem;
  }
`;

export default Cuisine