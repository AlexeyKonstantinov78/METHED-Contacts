interface User {
  name: string,
  age: number,
  group: string,
};

interface Admin {
  name: string;
  age: number;
  role: string;
}

type Person = User | Admin;

const persons: Person[] = [
  {
    name: 'Иван Петров Ad',
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

const isPerson = (person: User | Admin): person is Admin => 'role' in person;

const logPerson = (person: Person) => {
  let information: string;

  // if ('role' in person) {
  //   information = person.role;
  // } else {
  //   information = person.group;
  // }

  if (isPerson(person)) {
    information = person.role;
  } else {
    information = person.group;
  }
  console.log(`${person.name}, ${person.age}, ${information}`);
};

persons.forEach(logPerson);