import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Cast} from '../interfaces/creditsInterfaces';

interface Props {
  actor: Cast;
}

export default function CastItem({actor}: Props) {
  const uri = `https://image.tmdb.org/t/p/w500/${actor.profile_path}`;
  return (
    <View style={styles.container}>
      {actor.profile_path && (
        <Image
          source={{uri}}
          style={{width: 50, height: 50, borderRadius: 10}}
        />
      )}

      <View style={styles.actorInfo}>
        <Text style={{fontSize: 18, fontWeight: 'bold'}}>{actor.name!}</Text>
        <Text style={{fontSize: 16, opacity: 0.7}}>{actor.character}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    backgroundColor: 'white',
    borderRadius: 10,
    marginLeft: 20,
    paddingRight: 15,
    height: 50,
    marginHorizontal: 20,
  },
  actorInfo: {
    marginLeft: 10,
    marginTop: 4,
  },
});
