import { StyleSheet, Image, Animated, Easing } from 'react-native';
import { useEffect, useRef } from 'react';

export default function Animacao() {

  const valor = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(valor, {
        toValue: 1,
        duration: 3000,
        easing: Easing.linear,
        useNativeDriver: false,
      })
    ).start();
  }, []);

  const mover = valor.interpolate({
    inputRange: [0, 1],
    outputRange: [-45, 0],
  });

  const tijolos = Array(1500).fill(0);

  return (
    <Animated.View style={[styles.fundo, { transform: [{ translateX: mover }, { translateY: mover }] }]}>
      {tijolos.map((item, index) => (
        <Image key={index} source={require('../../../assets/Tijolo.png')} style={styles.tijolo} />
      ))}
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  fundo: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 2250,
    flexDirection: 'row',
    flexWrap: 'wrap',
    opacity: 0.1,
  },
  tijolo: {
    width: 30,
    height: 30,
    margin: 7.5,
    resizeMode: 'contain',
  },
});