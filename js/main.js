const COUNT = 10;
const TYPE = ["palace", "flat", "house", "bungalow"];
const CHECKIN = ["12:00", "13:00", "14:00"];
const DESCRIPTION = [
  "Номер высшей категории с большой кроватью",
  "Представительский люкс",
  "Стандартный номер с большой кроватью",
  "Стандартный номер с двуспальной кроватью",
  "Семейный номер с большой кроватью",
  "Стандарный номер с двумя односпальными кроватями",
  "Улучшенный номер с большой кровью",
  "Номер для людей с ограниченными возможностями",
  "Экономный номер с двумя кроватями",
  "Экономный номер с одной кроватью",
];

const getRandomArrayElement = (elements) => {
  return elements[_.random(0, elements.length - 1)];
};

let createProfile = () => {
  for (let i = 1; i <= COUNT; i++) {
    let avatarNumber;

    if (i < 10) {
      avatarNumber = "img/avatars/user0";
    } else {
      avatarNumber = "img/avatars/user";
    }

    let addProfile = {
      author: { avatar: avatarNumber + [i] },
      offer: {
        title: "Лучший номер " + [i],
        address: _.random(1.1, 9.9) + ", " + _.random(1.2, 9.9),
        price: _.random(1000, 10000),
        type: getRandomArrayElement(TYPE),
        rooms: _.random(1, 5),
        guests: _.random(1, 5),
        checkin: getRandomArrayElement(CHECKIN),
        checkout: getRandomArrayElement(CHECKIN),
        description: getRandomArrayElement(DESCRIPTION),
      },
      location: {
        x: _.random(35.65, 35.7),
        y: _.random(139.7, 139.8),
      },
    };
    return addProfile;
  }
};

console.log(createProfile());
