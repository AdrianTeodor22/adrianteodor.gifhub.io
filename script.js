const words = [
  "Albert Einstein a revolutionat teoria cuantica.",
  "Isaac Newton a descoperit legea gravitationala universală.",
  "Marie Curie a fost prima femeie care a primit Premiul Nobel.",
  "Galileo Galilei a fost un pionier în astronomie.",
  "Stephen Hawking a fost un fizician teoretician de renume mondial."
];

const word = words[Math.floor(Math.random() * words.length)];
const missingWord = word.split(" ")[3];
const splitWord = word.split(" ");
splitWord[3] = "__________";
const question = splitWord.join(" ");

document.getElementById("question").innerHTML = question;
document.getElementById("answer").innerHTML = "Raspuns: " + missingWord;


