const who = [
  "Esperanza Aguirre",
  "Iron Man",
  "Darth Vader",
  "Superman",
  "Belen Esteban"
];
const action = ["eat", "attack me", "infect me", "get me drunk", "kidnap me"];
const what = ["my code", "my project", "my computer", "my food", "my resume"];
const when = [
  "this morning",
  "yesterday",
  "5 minutes ago",
  "at night",
  "the day after tomorrow"
];
const where = [
  "at the capitol.",
  "in the bar downstairs.",
  "in the subway.",
  "at Hogwarts.",
  "in my house."
];
const listOptions = [who, action, what, when, where];

window.onload = () => {
  document.querySelector("#button").addEventListener("click", () => {
    document.querySelector("#excuse").innerHTML = generateExcuses();
  });
};

function getRandomElementOfAnArray(array) {
  return array[Math.floor(Math.random() * array.length)];
}

let generateExcuses = () => {
  let excuses = " ";

  for (var i = 0; i < listOptions.length; i++) {
    excuses = excuses.concat(" ", getRandomElementOfAnArray(listOptions[i]));
  }

  return excuses;
};
