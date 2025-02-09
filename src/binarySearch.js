// для бинарного поиска массив должен быть отсортирован
// это связано с особенностями работы алгоритма
// допустим, я загадал число от 1 до 100
// если мы перебираем 1,2,3,4, то на каждой итерации мы отсекаем только одно число
// а вот если мы возьмём сразу за середину 50, то мы отсечём половину

// алгоритм имеет логарифмическую сложность
export default (arr, value) => {
  // объявим функцию, которая будем осуществлять процесс поиска
  const process = (low, high) => {
    // чтобы рекурсия не была вечной нам нужно условие остановки
    if (low > high) {
      return -1;
    }

    const mid = (low + high) / 2; // середина диапазона до округления
    const index = Math.trunc(mid); // округляем(забираем целую часть) середину диапазона
    const quess = arr[index]; // находим элемент с индексом середины диапазона
    // устанавливаем новый диапазон
    const newRange = value >= quess ? [index + 1, high] : [low, index - 1];
    // вызываем рекурсию или возрващаем результат
    return value === quess ? index : process(...newRange);
  };
  // начальные значения диапазона начало и конец массива
  const low = 0;
  const high = arr.length - 1;

  return process(low, high);
};
