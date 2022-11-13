import {FaPizzaSlice, FaHamburger} from "react-icons/fa";
import{GiNoodles, GiChopsticks} from "react-icons/gi";
import styled from "styled-components";
import {NavLink} from 'react-router-dom';


function Category() {
  return (
   <List>
        <Slink to={'/cuisine/Italian'}>
            <FaPizzaSlice/>
            <h4>Italia</h4>
        </Slink>
        <Slink to={'/cuisine/American'}>
            <FaHamburger/>
            <h4>America</h4>
        </Slink>
        <Slink to={'/cuisine/Thai'}>
            <GiNoodles/>
            <h4>Thai</h4>
        </Slink>
        <Slink to={'/cuisine/Japanese'}>
            <GiChopsticks/>
            <h4>Japanese</h4>
        </Slink>
   </List>
  )
}
const List = styled.div`
    display: flex;
    margin: 2rem 0rem;
    justify-content: center;
`;

const Slink = styled(NavLink)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    width: 6rem;
    height: 6rem;
    text-decoration: none;
    margin-right: 2rem;
    background: linear-gradient(31deg, #494949, #313131);
    cursor: pointer;
    transform: scale(0.8);

    h4{
        color: white;
        font-size:0.8rem;
    }
    svg{
        color: white;
        font-size: 1.5rem;
    }
    &.active{
        background: linear-gradient(to right, #f27121,#e94067);

        svg{
            color: white;
        }
        h4{
            color: white;
        }
    }
`   


export default Category