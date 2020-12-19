import users from './users.js'

// ------------ Задание 1 ----------------------------------------------

const getUserNames = users => {
    return users.map(user => user.name);
  };
  console.log(getUserNames(users));
  // [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

// ------------ Задание 2 ----------------------------------------------

const getUsersWithEyeColor = (users, color) => {
    return users.filter(user => user.eyeColor === color);
  };
  console.log(getUsersWithEyeColor(users, 'blue')); 
  // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

// ------------ Задание 3 ----------------------------------------------

const getUsersWithGender = (users, gender) => {
    const usersWithGender = users.filter(user => user.gender === gender);
    return usersWithGender.map(userWithGender => userWithGender.name);
  };
  console.log(getUsersWithGender(users, 'male')); 
  // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

// ------------ Задание 4 ----------------------------------------------

const getInactiveUsers = users => {
    return users.filter(user => !user.isActive)
  };
  console.log(getInactiveUsers(users)); 
  // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]


// ------------ Задание 5 ----------------------------------------------

const getUserWithEmail = (users, email) => {
    return users.find(user => user.email === email);
  };
  
  console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); 
  // {объект пользователя Sheree Anthony}
  console.log(getUserWithEmail(users, 'elmahead@omatom.com')); 
  // {объект пользователя Elma Head}

// ------------ Задание 6 ----------------------------------------------

const getUsersWithAge = (users, min, max) => {
    return users.filter(user => min < user.age && user.age < max);
  };
  
  console.log(getUsersWithAge(users, 20, 30)); 
  // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]
  
  console.log(getUsersWithAge(users, 30, 40));
  // [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

// ------------ Задание 7 ----------------------------------------------