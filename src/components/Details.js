import React from "react";
import styled from "styled-components";
import { Navigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import db from "../firebase";
import { useNavigate } from "react-router-dom";

const Details = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState();
  let navigate = useNavigate();

  useEffect(() => {
    db.collection("movies")
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setMovie(doc.data());
        } else {
          //redirect to the homepage
        }
      });
  }, []);

  const routeChange = () => {
    let path = `yt`;
    navigate(path);
  };

  return (
    <Container>
      {movie && (
        <>
          <Background>
            <img src={movie.background} alt="" />
          </Background>
          <ImageTitle>
            <img src={movie.title} alt="" />
          </ImageTitle>

          <Controls>
            <PlayButton>
              <img src="/images/play-icon-black.png" alt="" />
              <span>PLAY</span>
            </PlayButton>
            <TrailerButton onClick={routeChange}>
              <img src="/images/play-icon-white.png" alt="" />
              <span>TRAILER</span>
            </TrailerButton>
            <AddButton>
              <span>+</span>
            </AddButton>
            <GroupButton>
              <img src="/images/group-icon.png" alt="" />
            </GroupButton>
          </Controls>
          <Subtitle>{movie.subtitle}</Subtitle>
          <Description>{movie.desc}</Description>
        </>
      )}
    </Container>
  );
};

export default Details;

const Container = styled.div`
  min-height: calc(100vh-70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
`;

const Background = styled.div`
  position: fixed;
  top: 40px;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;
  opacity: 0.8;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ImageTitle = styled.div`
  height: 30vh;
  min-height: 170px;
  width: 35vw;
  min-width: 200px;
  margin-top: 60px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
`;

const PlayButton = styled.button`
  border-radius: 4px;
  font-size: 15px;
  display: flex;
  padding: 0px 24px;
  align-items: center;
  margin-right: 22px;
  height: 56px;
  background: rgb(249, 249, 249);
  border: none;
  letter-spacing: 1.8px;
  cursor: pointer;

  &:hover {
    background: rgb(198, 198, 198);
  }
`;

const TrailerButton = styled(PlayButton)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: white;
  text-transform: uppercase;
`;
const AddButton = styled.button`
  margin-right: 16px;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 2px solid white;
  background-color: rgba(0, 0, 0, 0.6);
  cursor: pointer;
  span {
    font-size: 30px;
    color: white;
  }
`;
const GroupButton = styled(AddButton)`
  background: rgb(0, 0, 0);
`;

const Subtitle = styled.div`
  color: rgb(249, 249, 249);
  margin-top: 26px;
  font-size: 15px;
  min-height: 20px;
`;
const Description = styled.div`
  line-height: 1.4;
  font-size: 20px;
  color: rgb(249, 249, 249);
  margin-top: 16px;
  max-width: 760px;
`;
