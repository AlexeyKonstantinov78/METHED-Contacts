type User = {
  name: string,
  age: number,
  group: string,
};

type Admin = {
  name: string;
  age: number;
  role: string;
}

type Person = User | Admin;

const persons: Person[] = [
  {
    name: 'Иван Петров',
    age: 27,
    role: 'Administrator',
  },
  {
    name: 'Иван Петров',
    age: 27,
    group: 'SEO-специалист',
  },
  {
    name: 'Марат Aляуддинов',
    age: 20,
    group: 'Музыкант',
  },
  {
    name: 'Марат Aляуддинов',
    age: 35,
    group: 'front-end',
  },
  {
    name: 'Марат Aляуддинов',
    age: 25,
    group: 'бек',
  },
  {
    name: 'Марат Aляуддинов',
    age: 23,
    group: 'менеджер',
  }
];

const logPerson = (user: Person) => {
  console.log(`${user.name}, ${user.age}`);
}

console.log('Users:');
persons.forEach(logPerson);