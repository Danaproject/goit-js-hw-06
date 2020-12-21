import users from "./users.js";

// ------------ Задание 1 ----------------------------------------------

const getUserNames = (users) => users.map((user) => user.name);
console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

// ------------ Задание 2 ----------------------------------------------

const getUsersWithEyeColor = (users, color) =>
  users.filter((user) => user.eyeColor === color);
console.log(getUsersWithEyeColor(users, "blue"));
// [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

// ------------ Задание 3 ----------------------------------------------

const getUsersWithGender = (users, gender) =>
  users
    .filter((user) => user.gender === gender)
    .map((userWithGender) => userWithGender.name);
console.log(getUsersWithGender(users, "male"));
// [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

// ------------ Задание 4 ----------------------------------------------

const getInactiveUsers = (users) => users.filter((user) => !user.isActive);
console.log(getInactiveUsers(users));
// [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

// ------------ Задание 5 ----------------------------------------------

const getUserWithEmail = (users, email) =>
  users.find((user) => user.email === email);

console.log(getUserWithEmail(users, "shereeanthony@kog.com"));
// {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, "elmahead@omatom.com"));
// {объект пользователя Elma Head}

// ------------ Задание 6 ----------------------------------------------

const getUsersWithAge = (users, min, max) =>
  users.filter((user) => min < user.age && user.age < max);

console.log(getUsersWithAge(users, 20, 30));
// [объект Ross Vazquez, объект Elma Head, объект Carey Barr]
console.log(getUsersWithAge(users, 30, 40));
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

// ------------ Задание 7 ----------------------------------------------

const calculateTotalBalance = (users) =>
  users.map((user) => user.balance).reduce((acc, value) => acc + value, 0);
console.log(calculateTotalBalance(users)); // 20916

// ------------ Задание 8 ----------------------------------------------

const getUsersWithFriend = (users, friendName) =>
  users
    .filter((user) => user.friends.includes(friendName))
    .map((userWithFriend) => userWithFriend.name);

console.log(getUsersWithFriend(users, "Briana Decker")); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, "Goldie Gentry")); // [ 'Elma Head', 'Sheree Anthony' ]

// ------------ Задание 9 ----------------------------------------------

const getNamesSortedByFriendsCount = (users) =>
  [...users]
    .sort(
      (prevUser, nextUser) => prevUser.friends.length - nextUser.friends.length
    )
    .map((user) => user.name);
console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

// ------------ Задание 10 ---------------------------------------------

const getSortedUniqueSkills = (users) =>
  users.reduce((allSkills, user) => {
    allSkills.push(...user.skills);
    return [...new Set(allSkills)].sort();
  }, []);

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]

//  Решение 2, используя filter

const getSortedUniqueSkills1 = (users) =>
  users.reduce((allSkills, user) => {
    allSkills.push(...user.skills);
    return allSkills
      .filter((skill, i) => allSkills.indexOf(skill) === i)
      .sort();
  }, []);

console.log(getSortedUniqueSkills1(users));

//  Решение 2, используя chaining снаружи

const getSortedUniqueSkills2 = (users) =>
  users
    .reduce((allSkills, user) => {
      allSkills.push(...user.skills);
      return allSkills;
    }, [])
    .filter((skill, i, allSkills) => allSkills.indexOf(skill) === i)
    .sort();

console.log(getSortedUniqueSkills2(users));

//  Решение 3, в развернутой форме, используя reduce

function getSortedUniqueSkills3(users) {
  const allSkills = users.reduce(function (allSkills, user) {
    allSkills.push(...user.skills);
    return allSkills;
  }, []);

  const uniqueSkills = allSkills.reduce(function (uniqueSkills, skill) {
    if (!uniqueSkills.includes(skill)) {
      uniqueSkills.push(skill);
    }
    return uniqueSkills;
  }, []);

  return uniqueSkills.sort();
}

console.log(getSortedUniqueSkills3(users));

//  Решение 2 в развернутой форме

// function getSortedUniqueSkills4(users) {
//   let allSkills = users.reduce(function (allSkills, user) {
//     allSkills.push(...user.skills);
//     return allSkills;
//   }, []);
//   allSkills = allSkills.filter(function (skill, i, allSkills) {
//     return allSkills.indexOf(skill) === i;
//   });

//   return allSkills.sort();
// }

// console.log(getSortedUniqueSkills4(users));
