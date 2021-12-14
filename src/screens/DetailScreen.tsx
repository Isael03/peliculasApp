import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {
  ActivityIndicator,
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import {Movie} from '../interfaces/movieInterface';
import {RootStackParamList} from '../navigation/Navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import {useMovieDetails} from '../hooks/useMovieDetails';
import MovieDetails from '../components/MovieDetails';

interface Props extends StackScreenProps<RootStackParamList, 'DetailScreen'> {}
const screenHeight = Dimensions.get('screen').height;

export default function DetailScreen({route, navigation}: Props) {
  //const {height} = useWindowDimensions();
  const movie = route.params;

  const uri = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;

  const {isLoading, cast, movieFull} = useMovieDetails(movie.id);

  return (
    <ScrollView>
      <View style={styles.imageContainer}>
        <View style={styles.imageBorder}>
          <Image source={{uri}} style={styles.posterImage} />
        </View>
      </View>

      <View style={styles.marginContainer}>
        <Text style={styles.subtitle}>{movie.original_title}</Text>
        <Text style={styles.title}>{movie.title}</Text>
      </View>

      <View style={{marginTop: 0}}>
        {isLoading ? (
          <ActivityIndicator size={30} color="grey" style={{marginTop: 20}} />
        ) : (
          <MovieDetails movieFull={movieFull!} cast={cast} />
        )}
      </View>

      {/**Boton regresar */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.pop()}>
        <Icon name="arrow-back-outline" size={60} color="white" />
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  posterImage: {
    flex: 1,
    paddingBottom: 20,
    //marginBottom: 20,
  },
  imageBorder: {
    flex: 1,
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 9,
  },
  imageContainer: {
    width: '100%',
    height: screenHeight * 0.7,
  },
  marginContainer: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  subtitle: {
    fontSize: 18,
    opacity: 0.8,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  backButton: {
    position: 'absolute',
    zIndex: 999,
    elevation: 9,
    top: 10,
    left: 5,
  },
});
