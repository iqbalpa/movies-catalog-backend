import prisma from './prisma';
import { PasswordHelper } from '../hash/password-hash.helper';
interface User {
  name: string;
  email: string;
  password: string;
}

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
};

seed(users)
  .then(() => console.log('seeding data finished'))
  .catch(() => console.log('failed to seed data'));
