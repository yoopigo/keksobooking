const AVATAR_NUMBER = [01, 02, 03, 04, 05, 06, 07, 08, 09, 10];

const getRandomArrayElement = (elements) => {
  return elements[_.random(0, elements.length - 1)];
};

const createProfile = () => {
  let addProfile = {
    author: { avatar: "img/avatars/user" },
  };
  return addProfile;
};

console.log(createProfile());
