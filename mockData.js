const bcrypt = require('bcrypt');

let users = [
  {
    userId: 1,
    email: 'test1@gmail.com',
    password: '123123',
    nickname: 'User1',
    name: '송진영',
    phone: '010-1234-5678',
    avatarUrl: 'src/assets/doctorStrange_profile.jpg',
  },
  {
    userId: 2,
    email: 'test2@gmail.com',
    password: '234234',
    nickname: 'User2',
    name: '김민성',
    phone: '010-2345-6789',
    avatarUrl: 'src/assets/ironman_profile.jpg',
  },
  {
    userId: 3,
    email: '1410ahs@naver.com',
    password: 'gustj123',
    nickname: 'User3',
    name: '안현서',
    phone: '010-3456-7890',
    avatarUrl: 'src/assets/최고심 on Twitter.jpg',
  },
  {
    userId: 4,
    email: 'test4@gmail.com',
    password: '456456',
    nickname: 'User4',
    name: '원종빈',
    phone: '010-4567-8901',
    avatarUrl: 'src/assets/종빈이.png',
  },
  {
    userId: 5,
    email: 'test5@gmail.com',
    password: '123456',
    nickname: 'User5',
    name: '앤트맨',
    phone: '010-4362-1156',
    avatarUrl: 'src/assets/antman_profile.jpg',
  },
  {
    userId: 6,
    email: 'test6@gmail.com',
    password: '567890',
    nickname: 'User6',
    name: '원종빈',
    phone: '010-4782-4367',
    avatarUrl: 'src/assets/avatar.png',
  },
];

users = users.map(user => ({
  ...user,
  password: bcrypt.hashSync(user.password, 10),
}));
// export default {

const posts = [
  {
    postId: 1,
    userId: 1,
    title: '제목1',
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum labore excepturi repudiandae earum nihil quis
			numquam minus, natus corrupti molestiae blanditiis iure distinctio repellendus, praesentium tenetur! Nisi    tempore repudiandae commodi. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae soluta doloremque
			harum adipisci aliquid quam, explicabo cumque eius, veniam iure quas repudiandae quo voluptatibus blanditiis
			at eligendi dignissimos? Non, repellat.<br><br><br>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum labore excepturi repudiandae earum nihil quis
			numquam minus, natus corrupti molestiae blanditiis iure distinctio repellendus, praesentium tenetur! Nisi
			tempore repudiandae commodi. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae soluta doloremque
			harum adipisci aliquid quam, explicabo cumque eius, veniam iure quas repudiandae quo voluptatibus blanditiis
			at eligendi dignissimos? Non, repellat.<br><br><br>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum labore excepturi repudiandae earum nihil quis
			numquam minus, natus corrupti molestiae blanditiis iure distinctio repellendus, praesentium tenetur! Nisi
			tempore repudiandae commodi. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae soluta doloremque
			harum adipisci aliquid quam, explicabo cumque eius, veniam iure quas repudiandae quo voluptatibus blanditiis
			at eligendi dignissimos? Non, repellat.`,
    createAt: '2021-01-01',
    likedUsers: [],
  },
  {
    postId: 2,
    userId: 2,
    title: '제목2',
    content:
      "When the sharpest words wanna cut me down I'm gonna send a flood, gonna drown em out I am brave, I am bruised I am who I'm meant to be, this is me Look out cause here I come And I'm marching on to the beat I drum I'm not scared to be seen I make no apologies, this is me",
    createAt: '2021-01-02',
    likedUsers: [2, 3, 1],
  },
  {
    postId: 3,
    userId: 1,
    title: '제목3',
    content: 'Aliqua nulla do ea laboris velit nisi reprehenderit elit occaecat.',
    createAt: '2021-01-03',
    likedUsers: [2, 1],
  },
  {
    postId: 4,
    userId: 1,
    title: '제목4',
    content:
      'Enim consequat Lorem ipsum ut laborum officia cillum qui id fugiat duis. Sit incididunt fugiat reprehenderit aute mollit et nostrud laboris do aliqua sint. Magna laboris incididunt voluptate sunt ullamco nostrud exercitation reprehenderit excepteur sunt enim. Velit sunt excepteur tempor id ut. Laborum Lorem duis dolor dolor magna non deserunt quis.',
    createAt: '2021-01-04',
    likedUsers: [],
  },
  {
    postId: 5,
    userId: 1,
    title: '제목5',
    content:
      'Enim consequat Lorem ipsum ut laborum officia cillum qui id fugiat duis. Sit incididunt fugiat reprehenderit aute mollit et nostrud laboris do aliqua sint. Magna laboris incididunt voluptate sunt ullamco nostrud exercitation reprehenderit excepteur sunt enim. Velit sunt excepteur tempor id ut. Laborum Lorem duis dolor dolor magna non deserunt quis.',
    createAt: '2021-01-05',
    likedUsers: [3, 6],
  },
  {
    postId: 6,
    userId: 1,
    title: '제목6',
    content: 'Aliqua nulla do ea laboris velit nisi reprehenderit elit occaecat.',
    createAt: '2021-01-06',
    likedUsers: [],
  },
  {
    postId: 7,
    userId: 1,
    title: '제목7',
    content:
      'Enim consequat Lorem ipsum ut laborum officia cillum qui id fugiat duis. Sit incididunt fugiat reprehenderit aute mollit et nostrud laboris do aliqua sint. Magna laboris incididunt voluptate sunt ullamco nostrud exercitation reprehenderit excepteur sunt enim. Velit sunt excepteur tempor id ut. Laborum Lorem duis dolor dolor magna non deserunt quis.',
    createAt: '2021-01-07',
    likedUsers: [],
  },
  {
    postId: 8,
    userId: 1,
    title: '제목8',
    content:
      'Enim consequat Lorem ipsum ut laborum officia cillum qui id fugiat duis. Sit incididunt fugiat reprehenderit aute mollit et nostrud laboris do aliqua sint. Magna laboris incididunt voluptate sunt ullamco nostrud exercitation reprehenderit excepteur sunt enim. Velit sunt excepteur tempor id ut. Laborum Lorem duis dolor dolor magna non deserunt quis.',
    createAt: '2021-01-08',
    likedUsers: [],
  },
  {
    postId: 9,
    userId: 1,
    title: '제목9',
    content: 'Aliqua nulla do ea laboris velit nisi reprehenderit elit occaecat.',
    createAt: '2021-01-09',
    likedUsers: [],
  },
  {
    postId: 10,
    userId: 1,
    title: '제목10',
    content:
      'Enim consequat Lorem ipsum ut laborum officia cillum qui id fugiat duis. Sit incididunt fugiat reprehenderit aute mollit et nostrud laboris do aliqua sint. Magna laboris incididunt voluptate sunt ullamco nostrud exercitation reprehenderit excepteur sunt enim. Velit sunt excepteur tempor id ut. Laborum Lorem duis dolor dolor magna non deserunt quis.',
    createAt: '2021-01-10',
    likedUsers: [],
  },
  {
    postId: 11,
    userId: 1,
    title: '제목11',
    content:
      'Enim consequat Lorem ipsum ut laborum officia cillum qui id fugiat duis. Sit incididunt fugiat reprehenderit aute mollit et nostrud laboris do aliqua sint. Magna laboris incididunt voluptate sunt ullamco nostrud exercitation reprehenderit excepteur sunt enim. Velit sunt excepteur tempor id ut. Laborum Lorem duis dolor dolor magna non deserunt quis.',
    createAt: '2021-01-11',
    likedUsers: [],
  },
  {
    postId: 12,
    userId: 1,
    title: '제목12',
    content: 'Aliqua nulla do ea laboris velit nisi reprehenderit elit occaecat.',
    createAt: '2021-01-12',
    likedUsers: [],
  },
  {
    postId: 13,
    userId: 1,
    title: '제목13',
    content:
      'Enim consequat Lorem ipsum ut laborum officia cillum qui id fugiat duis. Sit incididunt fugiat reprehenderit aute mollit et nostrud laboris do aliqua sint. Magna laboris incididunt voluptate sunt ullamco nostrud exercitation reprehenderit excepteur sunt enim. Velit sunt excepteur tempor id ut. Laborum Lorem duis dolor dolor magna non deserunt quis.',
    createAt: '2021-01-13',
    likedUsers: [],
  },
  {
    postId: 14,
    userId: 1,
    title: '제목14',
    content:
      'Enim consequat Lorem ipsum ut laborum officia cillum qui id fugiat duis. Sit incididunt fugiat reprehenderit aute mollit et nostrud laboris do aliqua sint. Magna laboris incididunt voluptate sunt ullamco nostrud exercitation reprehenderit excepteur sunt enim. Velit sunt excepteur tempor id ut. Laborum Lorem duis dolor dolor magna non deserunt quis.',
    createAt: '2021-01-14',
    likedUsers: [],
  },
  {
    postId: 15,
    userId: 1,
    title: '제목15',
    content: 'Aliqua nulla do ea laboris velit nisi reprehenderit elit occaecat.',
    createAt: '2021-01-15',
    likedUsers: [],
  },
  {
    postId: 16,
    userId: 1,
    title: '제목16',
    content:
      'Enim consequat Lorem ipsum ut laborum officia cillum qui id fugiat duis. Sit incididunt fugiat reprehenderit aute mollit et nostrud laboris do aliqua sint. Magna laboris incididunt voluptate sunt ullamco nostrud exercitation reprehenderit excepteur sunt enim. Velit sunt excepteur tempor id ut. Laborum Lorem duis dolor dolor magna non deserunt quis.',
    createAt: '2021-01-16',
    likedUsers: [],
  },
  {
    postId: 18,
    userId: 2,
    title: '제목1',
    content:
      'Enim consequat Lorem ipsum ut laborum officia cillum qui id fugiat duis. Sit incididunt fugiat reprehenderit aute mollit et nostrud laboris do aliqua sint. Magna laboris incididunt voluptate sunt ullamco nostrud exercitation reprehenderit excepteur sunt enim. Velit sunt excepteur tempor id ut. Laborum Lorem duis dolor dolor magna non deserunt quis.',
    createAt: '2021-01-01',
    likedUsers: [1, 2],
  },
  {
    postId: 19,
    userId: 2,
    title: '제목2',
    content:
      'Enim consequat Lorem ipsum ut laborum officia cillum qui id fugiat duis. Sit incididunt fugiat reprehenderit aute mollit et nostrud laboris do aliqua sint. Magna laboris incididunt voluptate sunt ullamco nostrud exercitation reprehenderit excepteur sunt enim. Velit sunt excepteur tempor id ut. Laborum Lorem duis dolor dolor magna non deserunt quis.',
    createAt: '2021-01-02',
    likedUsers: [],
  },
  {
    postId: 20,
    userId: 2,
    title: '제목3',
    content: 'Aliqua nulla do ea laboris velit nisi reprehenderit elit occaecat.',
    createAt: '2021-01-03',
    likedUsers: [],
  },
  {
    postId: 21,
    userId: 2,
    title: '제목4',
    content:
      'Enim consequat Lorem ipsum ut laborum officia cillum qui id fugiat duis. Sit incididunt fugiat reprehenderit aute mollit et nostrud laboris do aliqua sint. Magna laboris incididunt voluptate sunt ullamco nostrud exercitation reprehenderit excepteur sunt enim. Velit sunt excepteur tempor id ut. Laborum Lorem duis dolor dolor magna non deserunt quis.',
    createAt: '2021-01-04',
    likedUsers: [1, 2, 4],
  },
  {
    postId: 22,
    userId: 2,
    title: '제목5',
    content:
      'Enim consequat Lorem ipsum ut laborum officia cillum qui id fugiat duis. Sit incididunt fugiat reprehenderit aute mollit et nostrud laboris do aliqua sint. Magna laboris incididunt voluptate sunt ullamco nostrud exercitation reprehenderit excepteur sunt enim. Velit sunt excepteur tempor id ut. Laborum Lorem duis dolor dolor magna non deserunt quis.',
    createAt: '2021-01-05',
    likedUsers: [],
  },
  {
    postId: 23,
    userId: 2,
    title: '제목6',
    content: 'Aliqua nulla do ea laboris velit nisi reprehenderit elit occaecat.',
    createAt: '2021-01-06',
    likedUsers: [2, 5, 1, 3],
  },
  {
    postId: 24,
    userId: 3,
    title: '제목1',
    content:
      'Enim consequat Lorem ipsum ut laborum officia cillum qui id fugiat duis. Sit incididunt fugiat reprehenderit aute mollit et nostrud laboris do aliqua sint. Magna laboris incididunt voluptate sunt ullamco nostrud exercitation reprehenderit excepteur sunt enim. Velit sunt excepteur tempor id ut. Laborum Lorem duis dolor dolor magna non deserunt quis.',
    createAt: '2021-01-03',
    likedUsers: [],
  },
  {
    postId: 25,
    userId: 3,
    title: '제목2',
    content:
      'Enim consequat Lorem ipsum ut laborum officia cillum qui id fugiat duis. Sit incididunt fugiat reprehenderit aute mollit et nostrud laboris do aliqua sint. Magna laboris incididunt voluptate sunt ullamco nostrud exercitation reprehenderit excepteur sunt enim. Velit sunt excepteur tempor id ut. Laborum Lorem duis dolor dolor magna non deserunt quis.',
    createAt: '2021-01-04',
    likedUsers: [],
  },
  {
    postId: 26,
    userId: 3,
    title: '제목3',
    content: 'Aliqua nulla do ea laboris velit nisi reprehenderit elit occaecat.',
    createAt: '2021-01-05',
    likedUsers: [],
  },
  {
    postId: 27,
    userId: 4,
    title: '제목1',
    content:
      'Enim consequat Lorem ipsum ut laborum officia cillum qui id fugiat duis. Sit incididunt fugiat reprehenderit aute mollit et nostrud laboris do aliqua sint. Magna laboris incididunt voluptate sunt ullamco nostrud exercitation reprehenderit excepteur sunt enim. Velit sunt excepteur tempor id ut. Laborum Lorem duis dolor dolor magna non deserunt quis.',
    createAt: '2021-01-02',
    likedUsers: [],
  },
  {
    postId: 28,
    userId: 4,
    title: '제목2',
    content:
      'Enim consequat Lorem ipsum ut laborum officia cillum qui id fugiat duis. Sit incididunt fugiat reprehenderit aute mollit et nostrud laboris do aliqua sint. Magna laboris incididunt voluptate sunt ullamco nostrud exercitation reprehenderit excepteur sunt enim. Velit sunt excepteur tempor id ut. Laborum Lorem duis dolor dolor magna non deserunt quis.',
    createAt: '2021-01-03',
    likedUsers: [],
  },
  {
    postId: 29,
    userId: 4,
    title: '제목3',
    content: 'Aliqua nulla do ea laboris velit nisi reprehenderit elit occaecat.',
    createAt: '2021-01-04',
    likedUsers: [],
  },
  {
    postId: 30,
    userId: 5,
    title: '제목1',
    content:
      'Enim consequat Lorem ipsum ut laborum officia cillum qui id fugiat duis. Sit incididunt fugiat reprehenderit aute mollit et nostrud laboris do aliqua sint. Magna laboris incididunt voluptate sunt ullamco nostrud exercitation reprehenderit excepteur sunt enim. Velit sunt excepteur tempor id ut. Laborum Lorem duis dolor dolor magna non deserunt quis.',
    createAt: '2021-01-11',
    likedUsers: [],
  },
  {
    postId: 31,
    userId: 5,
    title: '제목2',
    content:
      'Enim consequat Lorem ipsum ut laborum officia cillum qui id fugiat duis. Sit incididunt fugiat reprehenderit aute mollit et nostrud laboris do aliqua sint. Magna laboris incididunt voluptate sunt ullamco nostrud exercitation reprehenderit excepteur sunt enim. Velit sunt excepteur tempor id ut. Laborum Lorem duis dolor dolor magna non deserunt quis.',
    createAt: '2021-01-12',
    likedUsers: [],
  },
  {
    postId: 32,
    userId: 5,
    title: '제목3',
    content: 'Aliqua nulla do ea laboris velit nisi reprehenderit elit occaecat.',
    createAt: '2021-01-13',
    likedUsers: [],
  },
  {
    postId: 33,
    userId: 5,
    title: '제목4',
    content:
      'Enim consequat Lorem ipsum ut laborum officia cillum qui id fugiat duis. Sit incididunt fugiat reprehenderit aute mollit et nostrud laboris do aliqua sint. Magna laboris incididunt voluptate sunt ullamco nostrud exercitation reprehenderit excepteur sunt enim. Velit sunt excepteur tempor id ut. Laborum Lorem duis dolor dolor magna non deserunt quis.',
    createAt: '2021-01-14',
    likedUsers: [],
  },
  {
    postId: 34,
    userId: 5,
    title: '제목5',
    content:
      'Enim consequat Lorem ipsum ut laborum officia cillum qui id fugiat duis. Sit incididunt fugiat reprehenderit aute mollit et nostrud laboris do aliqua sint. Magna laboris incididunt voluptate sunt ullamco nostrud exercitation reprehenderit excepteur sunt enim. Velit sunt excepteur tempor id ut. Laborum Lorem duis dolor dolor magna non deserunt quis.',
    createAt: '2021-01-15',
    likedUsers: [],
  },
  {
    postId: 35,
    userId: 5,
    title: '제목6',
    content: 'Aliqua nulla do ea laboris velit nisi reprehenderit elit occaecat.',
    createAt: '2021-01-16',
    likedUsers: [],
  },
  {
    postId: 36,
    userId: 6,
    title: '제목4',
    content:
      'Enim consequat Lorem ipsum ut laborum officia cillum qui id fugiat duis. Sit incididunt fugiat reprehenderit aute mollit et nostrud laboris do aliqua sint. Magna laboris incididunt voluptate sunt ullamco nostrud exercitation reprehenderit excepteur sunt enim. Velit sunt excepteur tempor id ut. Laborum Lorem duis dolor dolor magna non deserunt quis.',
    createAt: '2021-01-06',
    likedUsers: [],
  },
  {
    postId: 37,
    userId: 6,
    title: '제목5',
    content:
      'Enim consequat Lorem ipsum ut laborum officia cillum qui id fugiat duis. Sit incididunt fugiat reprehenderit aute mollit et nostrud laboris do aliqua sint. Magna laboris incididunt voluptate sunt ullamco nostrud exercitation reprehenderit excepteur sunt enim. Velit sunt excepteur tempor id ut. Laborum Lorem duis dolor dolor magna non deserunt quis.',
    createAt: '2021-01-07',
    likedUsers: [],
  },
  {
    postId: 38,
    userId: 6,
    title: '제목6',
    content:
      'Enim consequat Lorem ipsum ut laborum officia cillum qui id fugiat duis. Sit incididunt fugiat reprehenderit aute mollit et nostrud laboris do aliqua sint. Magna laboris incididunt voluptate sunt ullamco nostrud exercitation reprehenderit excepteur sunt enim. Velit sunt excepteur tempor id ut. Laborum Lorem duis dolor dolor magna non deserunt quis.',
    createAt: '2021-01-08',
    likedUsers: [],
  },
  {
    postId: 39,
    userId: 6,
    title: '제목7',
    content: 'Aliqua nulla do ea laboris velit nisi reprehenderit elit occaecat.',
    createAt: '2021-01-09',
    likedUsers: [],
  },
  {
    postId: 40,
    userId: 6,
    title: '제목8',
    content:
      'Enim consequat Lorem ipsum ut laborum officia cillum qui id fugiat duis. Sit incididunt fugiat reprehenderit aute mollit et nostrud laboris do aliqua sint. Magna laboris incididunt voluptate sunt ullamco nostrud exercitation reprehenderit excepteur sunt enim. Velit sunt excepteur tempor id ut. Laborum Lorem duis dolor dolor magna non deserunt quis.',
    createAt: '2021-01-10',
    likedUsers: [],
  },
  {
    postId: 41,
    userId: 1,
    title: '제목16',
    content:
      'Enim consequat Lorem ipsum ut laborum officia cillum qui id fugiat duis. Sit incididunt fugiat reprehenderit aute mollit et nostrud laboris do aliqua sint. Magna laboris incididunt voluptate sunt ullamco nostrud exercitation reprehenderit excepteur sunt enim. Velit sunt excepteur tempor id ut. Laborum Lorem duis dolor dolor magna non deserunt quis.',
    createAt: '2021-01-20',
    likedUsers: [],
  },
  {
    postId: 42,
    userId: 1,
    title: '제목16',
    content:
      'Enim consequat Lorem cillum qui id fugiat duis. Sit incididunt fugiat reprehenderit aute mollit et nostrud laboris do aliqua sint. Magna laboris incididunt voluptate sunt ullamco nostrud exercitation reprehenderit excepteur sunt enim. Velit sunt excepteur tempor id ut. Laborum Lorem duis dolor dolor magna non deserunt quis.',
    createAt: '2021-01-21',
    likedUsers: [],
  },
  {
    postId: 43,
    userId: 1,
    title: '제목13',
    content:
      'cillum qui id fugiat duis. Sit incididunt fugiat reprehenderit aute mollit et nostrud laboris do aliqua sint. Magna laboris incididunt voluptate sunt ullamco nostrud exercitation reprehenderit excepteur sunt enim. Velit sunt excepteur tempor id ut. Laborum Lorem duis dolor dolor magna non deserunt quis.',
    createAt: '2021-01-21',
    likedUsers: [],
  },
];

module.exports = {
  users,
  posts,
};
