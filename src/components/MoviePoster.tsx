import {useNavigation} from '@react-navigation/core';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Movie} from '../interfaces/movieInterface';
import {RootStackParamList} from '../navigation/Navigation';

interface Props {
  movie: Movie;
  height?: number;
  width?: number;
}

export default function MoviePoster({movie, width = 300, height = 420}: Props) {
  const uri = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
  const navigation =
    useNavigation<StackNavigationProp<RootStackParamList, 'DetailScreen'>>();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('DetailScreen', movie)}
      activeOpacity={0.8}
      style={{
        width: width,
        height: height,
        marginHorizontal: 8,
        paddingBottom: 20,
      }}>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri,
          }}
          style={styles.image}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    borderRadius: 18,
  },
  imageContainer: {
    flex: 1,
    borderRadius: 18,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.9,
    shadowRadius: 3.84,

    elevation: 8,
  },
});
