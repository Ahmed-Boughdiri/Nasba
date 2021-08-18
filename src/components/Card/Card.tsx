import styled from "styled-components";
import { Container } from "react-bootstrap";
import { Title } from "components";

import product1 from "assets/product1.png";

const CardContainer = styled.div`
    width: 100%;
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 5px;
`;

const CardThumbnail = styled.div`
    width: 100%;
    height: 220px;
    display: flex;
    align-items: center;
    justify-content: center;
    &>img {
        height: 90%;
    }
`;

const CardWrapper = styled(Container)`
    margin-top: 10px;
    box-sizing: border-box;
    padding: 0 25px;
`;

const Card = () =>(
    <CardContainer>
        <CardThumbnail>
            <img 
                src={product1}
                alt="" 
            />
        </CardThumbnail>
        <CardWrapper>
            <Title
                textAlign="left"
                fontSize="23px"
            >
                Product Name
            </Title>
        </CardWrapper>
    </CardContainer>
);

export default Card;
