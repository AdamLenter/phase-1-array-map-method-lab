const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];


function convertTitle(title) {
  let newTitle = title.substring(0,1).toUpperCase();
  const titleLength = title.length;
  let i;

  for(i = 1; i < titleLength; i++) {
    if(title.substring(i-1, i) == " ") {
      newTitle += title.substring(i, i + 1).toUpperCase();
      }
    else {
      newTitle += title.substring(i, i + 1);
      }
    }
  return newTitle;
  }


function titleCased() {
  const titleCasedList = tutorials.map(title => convertTitle(title));
  return titleCasedList;
}

const newList = titleCased();
