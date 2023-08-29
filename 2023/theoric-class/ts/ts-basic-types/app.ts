// object
// const person: {
//   name: string;
//   age: number;
// } = {
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: 'Maximilian',
//   age: 30,
//   hobbies: ['Sports', 'Cooking'],
//   role: [2, 'author']
// };

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

//enum
enum Role { 
  ADMIN = 'ADMIN', 
  READ_ONLY = 100, 
  AUTHOR = 'AUTHOR' 
};

const person: {
  name: string | number,
  age: number,
  hobbies: string[],
  role: Role,
  test: [string, Role]
} = {
  name: 35,
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  role: Role.ADMIN,
  test: ['string', Role.AUTHOR]
};

person.hobbies.push('admin');
person.role = Role.READ_ONLY;
// person.role[1] = 10;

// person.role = [0, 'admin', 'user'];

//array
// let favoriteActivities: string[];
// favoriteActivities = ['Sports'];

// console.log(person.name);

// for (const hobby of person.hobbies) {
//   console.log(hobby.toUpperCase());
//   // console.log(hobby.map()); // !!! ERROR !!!
// }
