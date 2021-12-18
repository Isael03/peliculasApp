import React, {useContext, useEffect} from 'react';

import {
  ActivityIndicator,
  useWindowDimensions,
  View,
  ScrollView,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';

import ImageColors from 'react-native-image-colors';
import useMovies from '../hooks/useMovies';
import MoviePoster from '../components/MoviePoster';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import HorizontalSlider from '../components/HorizontalSlider';
import GradientBackground from '../components/GradientBackground';
import {getImageColors} from '../helpers/getColores';
import {GradientContext} from '../context/GradientContext';

export default function HomeScreen() {
  const {width} = useWindowDimensions();
  const {nowPlaying, isLoading, popular, topRated, upcoming} = useMovies();
  const {top} = useSafeAreaInsets();

  const {setMainColors} = useContext(GradientContext);

  const getPosterColors = async (index: number) => {
    const movie = nowPlaying[index];
    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

    const [primary = 'green', secondary = 'orange'] = await getImageColors(uri);
    setMainColors({primary, secondary});
  };

  useEffect(() => {
    if (nowPlaying.length > 0) {
      getPosterColors(0);
    }
  }, [nowPlaying]);

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignContent: 'center'}}>
        <ActivityIndicator color="red" size={100} />
      </View>
    );
  }
  return (
    <GradientBackground>
      <ScrollView>
        <View style={{marginTop: top + 20}}>
          <View style={{width: 440}}>
            {/**Carousel Principal */}
            <Carousel
              data={nowPlaying}
              renderItem={({item}: any) =>
                nowPlaying ? <MoviePoster movie={item} height={410} /> : null
              }
              sliderWidth={width}
              itemWidth={300}
              itemHeight={100}
              inactiveSlideOpacity={0.9}
              onSnapToItem={index => getPosterColors(index)}
            />

            {/**Peliculas populares */}

            <HorizontalSlider title="Popular" movie={popular} />
            <HorizontalSlider
              title="Top Rated"
              movie={topRated ? topRated : []}
            />
            <HorizontalSlider title="Upcoming" movie={upcoming} />
          </View>
        </View>
      </ScrollView>
    </GradientBackground>
  );
}
