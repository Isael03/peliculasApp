import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {Movie} from '../interfaces/movieInterface';
import MoviePoster from './MoviePoster';

interface Props {
  title?: string;
  movie: Movie[];
}

export default function HorizontalSlider({title, movie}: Props) {
  return (
    <View style={{height: title ? 260 : 210}}>
      {title && <Text style={{fontSize: 25, fontWeight: 'bold'}}>{title}</Text>}

      <FlatList
        data={movie}
        renderItem={({item}: any) =>
          movie ? <MoviePoster movie={item} width={140} height={200} /> : null
        }
        keyExtractor={item => item.id.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={true}
        /*  scrollEnabled={false}
            initialNumToRender={10}
            initialScrollIndex={8} 
            ref={flatRef}*/
      />
    </View>
  );
}
