import prisma from './prisma';
import { PasswordHelper } from '../hash/password-hash.helper';
import { Movie } from '@prisma/client';

interface User {
  name: string;
  email: string;
  password: string;
}

const movies: Movie[] = [
  {
    id: 1,
    title: 'Inception',
    overview:
      'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
    release_date: '2010-07-16',
    userId: 1,
    poster_path: '',
  },
  {
    id: 2,
    title: 'The Matrix',
    overview:
      'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.',
    release_date: '1999-03-31',
    userId: 2,
    poster_path: '',
  },
  {
    id: 3,
    title: 'Interstellar',
    overview:
      "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    release_date: '2014-11-07',
    userId: 1,
    poster_path: '',
  },
  {
    id: 4,
    title: 'The Dark Knight',
    overview:
      'When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.',
    release_date: '2008-07-18',
    userId: 3,
    poster_path: '',
  },
  {
    id: 5,
    title: 'Fight Club',
    overview:
      'An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into something much, much more.',
    release_date: '1999-10-15',
    userId: 2,
    poster_path: '',
  },
];

const users: User[] = [
  {
    name: 'Alice Johnson',
    email: 'alice.johnson@example.com',
    password: 'password123',
  },
  {
    name: 'Bob Smith',
    email: 'bob.smith@example.com',
    password: 'password123',
  },
  {
    name: 'Charlie Brown',
    email: 'charlie.brown@example.com',
    password: 'password123',
  },
  {
    name: 'David Wilson',
    email: 'david.wilson@example.com',
    password: 'password123',
  },
  {
    name: 'Eva Martinez',
    email: 'eva.martinez@example.com',
    password: 'password123',
  },
  {
    name: 'Frank Miller',
    email: 'frank.miller@example.com',
    password: 'password123',
  },
  {
    name: 'Grace Lee',
    email: 'grace.lee@example.com',
    password: 'password123',
  },
  {
    name: 'Hank Adams',
    email: 'hank.adams@example.com',
    password: 'password123',
  },
  {
    name: 'Ivy Clark',
    email: 'ivy.clark@example.com',
    password: 'password123',
  },
  {
    name: 'Jack Lewis',
    email: 'jack.lewis@example.com',
    password: 'password123',
  },
  {
    name: 'Kate Walker',
    email: 'kate.walker@example.com',
    password: 'password123',
  },
  {
    name: 'Liam Young',
    email: 'liam.young@example.com',
    password: 'password123',
  },
  { name: 'Mia King', email: 'mia.king@example.com', password: 'password123' },
  {
    name: 'Noah Scott',
    email: 'noah.scott@example.com',
    password: 'password123',
  },
  {
    name: 'Olivia White',
    email: 'olivia.white@example.com',
    password: 'password123',
  },
  {
    name: 'Paul Hall',
    email: 'paul.hall@example.com',
    password: 'password123',
  },
  {
    name: 'Quinn Allen',
    email: 'quinn.allen@example.com',
    password: 'password123',
  },
  {
    name: 'Rachel Harris',
    email: 'rachel.harris@example.com',
    password: 'password123',
  },
  {
    name: 'Sam Baker',
    email: 'sam.baker@example.com',
    password: 'password123',
  },
  {
    name: 'Tina Nelson',
    email: 'tina.nelson@example.com',
    password: 'password123',
  },
  { name: 'Uma Reed', email: 'uma.reed@example.com', password: 'password123' },
  {
    name: 'Victor Wright',
    email: 'victor.wright@example.com',
    password: 'password123',
  },
  {
    name: 'Wendy Clark',
    email: 'wendy.clark@example.com',
    password: 'password123',
  },
  {
    name: 'Xander Bell',
    email: 'xander.bell@example.com',
    password: 'password123',
  },
  {
    name: 'Yara Cook',
    email: 'yara.cook@example.com',
    password: 'password123',
  },
  {
    name: 'Zachary Price',
    email: 'zachary.price@example.com',
    password: 'password123',
  },
  {
    name: 'Alex Green',
    email: 'alex.green@example.com',
    password: 'password123',
  },
  {
    name: 'Brianna Foster',
    email: 'brianna.foster@example.com',
    password: 'password123',
  },
  {
    name: 'Cameron Hill',
    email: 'cameron.hill@example.com',
    password: 'password123',
  },
  {
    name: 'Dana Simmons',
    email: 'dana.simmons@example.com',
    password: 'password123',
  },
  {
    name: 'Ethan Perry',
    email: 'ethan.perry@example.com',
    password: 'password123',
  },
  {
    name: 'Fiona Rogers',
    email: 'fiona.rogers@example.com',
    password: 'password123',
  },
  {
    name: 'Gavin Brooks',
    email: 'gavin.brooks@example.com',
    password: 'password123',
  },
  {
    name: 'Holly Griffin',
    email: 'holly.griffin@example.com',
    password: 'password123',
  },
  {
    name: 'Ian Collins',
    email: 'ian.collins@example.com',
    password: 'password123',
  },
  {
    name: 'Jasmine Turner',
    email: 'jasmine.turner@example.com',
    password: 'password123',
  },
  {
    name: 'Kyle Reed',
    email: 'kyle.reed@example.com',
    password: 'password123',
  },
  {
    name: 'Lily Foster',
    email: 'lily.foster@example.com',
    password: 'password123',
  },
  {
    name: 'Mason Parker',
    email: 'mason.parker@example.com',
    password: 'password123',
  },
  {
    name: 'Nina Brooks',
    email: 'nina.brooks@example.com',
    password: 'password123',
  },
  {
    name: 'Oscar Harris',
    email: 'oscar.harris@example.com',
    password: 'password123',
  },
  {
    name: 'Piper Cooper',
    email: 'piper.cooper@example.com',
    password: 'password123',
  },
  {
    name: 'Quentin King',
    email: 'quentin.king@example.com',
    password: 'password123',
  },
  {
    name: 'Ruby Moore',
    email: 'ruby.moore@example.com',
    password: 'password123',
  },
  {
    name: 'Sean Murphy',
    email: 'sean.murphy@example.com',
    password: 'password123',
  },
  { name: 'Tara Lee', email: 'tara.lee@example.com', password: 'password123' },
  {
    name: 'Ulysses Scott',
    email: 'ulysses.scott@example.com',
    password: 'password123',
  },
  {
    name: 'Violet Cox',
    email: 'violet.cox@example.com',
    password: 'password123',
  },
  {
    name: 'Warren Diaz',
    email: 'warren.diaz@example.com',
    password: 'password123',
  },
  {
    name: 'Xenia Edwards',
    email: 'xenia.edwards@example.com',
    password: 'password123',
  },
  {
    name: 'Yusuf Greene',
    email: 'yusuf.greene@example.com',
    password: 'password123',
  },
  {
    name: 'Zoey Hughes',
    email: 'zoey.hughes@example.com',
    password: 'password123',
  },
];

const seed = async (users: User[]) => {
  console.log('seeding data...');
  for (let user of users) {
    const hashedPass = await PasswordHelper.hash(user.password);
    await prisma.user.create({
      data: {
        ...user,
        password: hashedPass,
      },
    });
  }
  for (let movie of movies) {
    await prisma.movie.create({
      data: movie,
    });
  }
};

seed(users)
  .then(() => console.log('seeding data finished'))
  .catch(() => console.log('failed to seed data'));
