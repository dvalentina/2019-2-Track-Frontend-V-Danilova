/*
 * В этом задании надо разработать функцию
 * `convertBytesToHuman`. Эта функция  должна принимать
 * аргумент `bytes` только числового типа.
 * На выходе функция должна отдать
 * человекопонятную строку, которая будет
 * отражать размер файла. Примеры использования:
 * `convertBytesToHuman(1024) === '1 KB';`
 * `convertBytesToHuman(123123123) === '117.42 MB';`
 * Необходимо предусмотреть защиту от
 * передачи аргументов неправильного типа
 * и класса (например, отрицательные числа)
 */ 
'use strict'

function isInteger(num) {
  return num % 1 === 0;
}

export default function convertBytesToHuman(bytes) {
  if (
    typeof(bytes) != 'number' || 
    isFinite(bytes) == false || 
    bytes < 0 ||
    isInteger(bytes) == false
) {
    return false;
  }

  let order = 0;
  let result = bytes;

  while (result >= 1024) {
    result /= 1024;
    ++order;
  }

  let unit;

  switch (order) {
    case 0:
      unit = 'B';
      break;
    case 1:
      unit = 'KB';
      break;
    case 2:
      unit = 'MB';
      break;
    case 3:
      unit = 'GB';
      break;
    case 4:
      unit = 'TB';
      break;
    case 5:
      unit = 'PB';
      break;
  /* 
  других case быть не может, т.к. макс. целое число в js
  при последовательном делении на 1024 даст "порядок" 5.
  */
  }

  if ( isInteger(result) == true) {
    return (result + ` ${unit}`);
  } else {
    return( result.toFixed(2) + ` ${unit}`);
  }
}
