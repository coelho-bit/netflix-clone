import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Lottie from "react-lottie";

import {
  Container,
  Featured,
  Title,
  Description,
  Buttons,
  Watch,
  Informations,
  FeaturedContent,
  Loading,
} from "./styles";
import MoviesSection from "../../components/MoviesSection/index";
import { IMovie, MoviesList } from "../../api/entity";
import Api from "../../api/api";
import loading from "./loading.json";

const Movies: React.FC = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loading,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const [movieList, setMovieList] = useState<MoviesList[]>();
  const [featured, setFeatured] = useState<IMovie>();

  useEffect(() => {
    const loadAll = async () => {
      let list = await Api.getHomeList();
      setMovieList(list);

      // getting featured movie
      setFeatured(list[0].items.results[Math.floor(Math.random() * 19)]);
    };

    loadAll();
  }, []);

  return (
    <>
      {!movieList ? (
        <Loading>
          <div>
            <Lottie
              options={defaultOptions}
              isStopped={false}
              isPaused={false}
            />
          </div>
        </Loading>
      ) : (
        <Container>
          {/* main movie here */}

          <Featured
            url={`https://image.tmdb.org/t/p/original${featured?.backdrop_path}`}
          >
            <Header enterButton={false} />
            <FeaturedContent>
              <Title>{featured?.name}</Title>
              <Description>{featured?.overview}</Description>
              <Buttons>
                <Watch>Assistir</Watch>
                <Informations>Mais informações</Informations>
              </Buttons>
            </FeaturedContent>
          </Featured>
          {movieList &&
            movieList.map((list) => {
              return (
                <MoviesSection
                  key={list.slug}
                  title={list.title}
                  movies={list.items.results}
                />
              );
            })}
        </Container>
      )}
      ) ;
    </>
  );
};

export default Movies;
