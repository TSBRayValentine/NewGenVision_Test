// Список курсов
let courses = [
  { name: "Courses in England", prices: [0, 100] },
  { name: "Courses in Germany", prices: [500, null] },
  { name: "Courses in Italy", prices: [100, 200] },
  { name: "Courses in Russia", prices: [null, 400] },
  { name: "Courses in China", prices: [50, 250] },
  { name: "Courses in USA", prices: [200, null] },
  { name: "Courses in Kazakhstan", prices: [56, 324] },
  { name: "Courses in France", prices: [null, null] },
];

// Варианты цен (фильтры), которые ищет пользователь
let requiredRange1 = [null, 200];
let requiredRange2 = [100, 350];
let requiredRange3 = [200, null];

// Функции
let filter = (range) => {
  min = range[0];
  max = range[1];

  if (max == null) max = Infinity;

  console.log(`ВЫБРАННАЯ ЦЕНОВАЯ КАТЕГОРИЯ ОТ ${min} ДО ${max} `);

  for (let i = 0; i < courses.length; i++) {
    if (courses[i].prices[0] == null && courses[i].prices[1] != null) {
      if (courses[i].prices[1] <= max) {
        console.log(
          `${courses[i].name}, стоимость: от ${courses[i].prices[0]} до ${courses[i].prices[1]}`
        );
      }
    } else if (courses[i].prices[0] != null && courses[i].prices[1] == null) {
      if (courses[i].prices[0] >= min && courses[i].prices[0] <= max) {
        console.log(
          `${courses[i].name}, стоимость: от ${courses[i].prices[0]} до ${courses[i].prices[1]}`
        );
      }
    } else if (courses[i].prices[0] == null && courses[i].prices[1] == null) {
      console.log(
        `${courses[i].name}, стоимость: от ${courses[i].prices[0]} до ${courses[i].prices[1]}`
      );
    } else if (courses[i].prices[0] >= min && courses[i].prices[1] <= max) {
      console.log(
        `${courses[i].name}, стоимость: от ${courses[i].prices[0]} до ${courses[i].prices[1]}`
      );
    }
  }
};

// От самых дешевых к дорогим
let Low = () => {
  console.log("СОРТИРОВКА LOW");

  var item = courses.slice();
  item.sort((a, b) => {
    return a.prices[0] - b.prices[0];
  });

  for (let i = 0; i < item.length; i++) {
    console.log(
      `${item[i].name}, стоимость: от ${item[i].prices[0]} до ${item[i].prices[1]} `
    );
  }
  return item;
};

// От самых дорогих к дешевым
let High = () => {
  console.log("СОРТИРОВКА HIGH");
  var item = courses.slice();
  item.sort((a, b) => {
    return b.prices[1] - a.prices[1];
  });
  for (let i = 0; i < item.length; i++) {
    console.log(
      `${item[i].name}, стоимость: от ${item[i].prices[0]} до ${item[i].prices[1]} `
    );
  }
};

// Вывод
filter(requiredRange1);
filter(requiredRange2);
filter(requiredRange3);

// Сортировка
Low();
High();
