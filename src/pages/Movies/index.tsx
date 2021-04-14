import React, { useEffect, useState } from "react";
import Header from "../../components/Header";

import {
  Container,
  Featured,
  Title,
  Description,
  Buttons,
  Watch,
  Informations,
  FeaturedContent
} from "./styles";
import MoviesSection from "../../components/MoviesSection/index";
import Api, { IMovie, MoviesList } from "../../api/api";

const Movies: React.FC = () => {
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
      ;
    </>
  );
};

export default Movies;
