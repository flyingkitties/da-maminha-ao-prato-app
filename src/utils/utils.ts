import * as patterns from 'react-svg-blob';

const allPatterns = Object.values(patterns);

export function getRandomColor() {
  return '#' + Math.random().toString(16).substr(-6);
}

export function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getRandomPattern() {
  return allPatterns[Math.floor(Math.random() * allPatterns.length)];
}
