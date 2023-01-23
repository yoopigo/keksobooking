const COUNT = 10;

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
    };
    return addProfile;
  }
};

console.log(createProfile());
