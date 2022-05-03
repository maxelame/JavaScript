
// 1. Написать скриптик, который сосчитает и выведет результат от возведения 2 в степень 10, начиная со степени 1
let num = 2
let degree = 1
while (degree <= 10) {
  console.log(num ** degree)
  degree++
}



// 1*. Преобразовать 1 задачу в функцию, принимающую на вход степень, в которую будет возводиться число 2

function numDegree(degree){
    let deg = 1
  while (deg <= degree) {
    console.log(2 ** deg)
    deg++
  }
}
numDegree(0)
numDegree(2)
numDegree(10)
numDegree(30)


// 2. Написать скрипт, который выведет 5 строк в консоль таким образом, чтобы в первой строчке выводилось :), во второй :):) и так далее
// Пример в консоли:
// :)
// :):)
// :):):)
// :):):):)
// :):):):):)

let line = ''
let number_of_lines = 5
let numb = 1
while (numb <= number_of_lines) {
  line +=':)'
  console.log(line)
  numb++
}

// 2*. Преобразовать 2 задачу в функцию, принимающую на вход строку, которая и будет выводиться в консоль (как в условии смайлик), а также количество строк для вывода 
// e.g. function printSmile(stroka, numberOfRows)

function printSmile(stroka, numberOfRows) {
  let numb = 1
  let line = ""
  while (numb <= numberOfRows) {
    line +=stroka
    console.log(line)
    numb++
  }
}

printSmile(":)", 5)
printSmile("Yolochka", 5)
printSmile("+-", 10)



// 3**.  Написать функцию, которая принимает на вход слово. Задача функции посчитать и вывести в консоль, сколько в слове гласных, и сколько согласных букв.
// e.g. function getWordStructure(word)
// В консоли: 
// Слово (word) состоит из  (число) гласных и (число) согласных букв
// Проверки: 'case', 'Case', 'Check-list'

function getWordStructure(word){
    let vowels = 0
    let consonants = 0
    const vowels_chars = ['e','a','i','o','u'] 
    const consonants_chars = ['q','w','r','t','p','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m']
    for (let char of word.toLowerCase()){
        if (vowels_chars.includes(char)) {
      vowels++
    }
    else if (consonants_chars.includes(char)) {
      consonants++
    }
    
  }
  
console.log('Слово ('+ word + ') состоит из  ('+ vowels +') гласных и ('+ consonants +') согласных букв')  
}

getWordStructure('case')
getWordStructure('Case')
getWordStructure('Check-list')



// 4**. Написать функцию, которая проверяет, является ли слово палиндромом
// e.g. function isPalindrom(word)

// Проверки: 'abba', 'Abba'
// function isPalindrome(str){\


const isPalindrome = (str) => {
    str = str.toLowerCase()
        if(str !== str.split('').reverse().join('')){
        return 'This string is not a palindrome!'
    } 
    if(str == str.split('').reverse().join('')){
        return 'This string is palindrome!' 
    }
};
console.log(isPalindrome("abba"))
console.log(isPalindrome("Abba"))
console.log(isPalindrome("ШалаШалаш"))
console.log(isPalindrome("AbbaW"))