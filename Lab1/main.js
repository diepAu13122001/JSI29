// bai 1: In ra một array chứa tên các con vật. ----------------------
// map == for each
const animals = [
  {
    name: "Lion",
    type: "Mammal",
    weight: 190, // kg
  },
  {
    name: "Eagle",
    type: "Bird",
    weight: 6.5, // kg
  },
  {
    name: "Elephant",
    type: "Mammal",
    weight: 6000, // kg
  },
  {
    name: "Shark",
    type: "Fish",
    weight: 1100, // kg
  },
  {
    name: "Crocodile",
    type: "Reptile",
    weight: 500, // kg
  },
];

const animals_name = animals.map((item) => item.name);
document.writeln(animals_name, `<br>`);

// for each
const animals_name_2 = [];
animals.forEach((animal) => {
  animals_name_2.push(animal.name);
});
document.writeln(animals_name_2);

document.writeln(`<pre></pre>`);
// bai 2: Lọc các số chẵn của array bên dưới (theo cú pháp ES6) --------------
const num_list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
// for each
const rs = [];
num_list.forEach((item) => {
  if (item % 2 == 0) {
    rs.push(item);
  }
});
document.writeln(rs, `<br>`);

// filter
const rs_2 = num_list.filter((item) => item % 2 == 0);
document.writeln(rs_2);

document.writeln(`<pre></pre>`);
// bai 3: Lọc ra các từ chứa âm “at” --------------------------
const string_list = ["at", "aat", "java", "cat", "dog"];
// filter + includes
const filtered_list = string_list.filter((item) => item.includes("at"));
document.writeln(filtered_list);

// bai 4: Chuyển đổi array bên dưới thành dạng key value -------------------
const playerProfile = [
  { name: "Ronaldo", team: "Al Nassr" },
  { name: "Messi", team: "Barca" },
  { name: "Neymar", team: "PSG" },
];

const getMapFromArray = (data) => {
  return data.reduce((obj, item) => {
    obj[item.name] = { team: item.team };
    return obj;
  }, {});
};
const playerProfileModified = getMapFromArray(playerProfile);
document.write(`<pre></pre>`);
document.write(JSON.stringify(playerProfileModified));
console.log(playerProfileModified);
