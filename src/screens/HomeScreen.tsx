import React, {useEffect, useRef, useState} from 'react';
import {useNavigation} from '@react-navigation/core';
import {
  ActivityIndicator,
  StyleSheet,
  useWindowDimensions,
  View,
  ScrollView,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import useMovies from '../hooks/useMovies';
import MoviePoster from '../components/MoviePoster';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import HorizontalSlider from '../components/HorizontalSlider';

export default function HomeScreen() {
  const navigation = useNavigation();
  const {width} = useWindowDimensions();
  const {nowPlaying, isLoading, popular, topRated, upcoming} = useMovies();
  const {top} = useSafeAreaInsets();

  //const [pelis, setPelis] = useState<CarouselProps<Movie>>(peliculasEnCine);

  //const flatRef = useRef<FlatList>(null);

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignContent: 'center'}}>
        <ActivityIndicator color="red" size={100} />
      </View>
    );
  }

  return (
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
  );
}

const styles = StyleSheet.create({});
