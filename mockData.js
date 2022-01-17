const bcrypt = require('bcrypt');

let users = [
  {
    userId: 1,
    email: 'test1@gmail.com',
    password: '123123',
    nickname: 'User1',
    name: '송진영',
    phone: '010-1234-5678',
    avatarUrl: 'src/assets/진영.png',
  },
  {
    userId: 2,
    email: 'test2@gmail.com',
    password: '234234',
    nickname: 'User2',
    name: '김민성',
    phone: '010-2345-6789',
    avatarUrl: 'src/assets/민성.png',
  },
  {
    userId: 3,
    email: '1410ahs@naver.com',
    password: 'gustj123',
    nickname: 'User3',
    name: '안현서',
    phone: '010-3456-7890',
    avatarUrl: 'src/assets/현서.png',
  },
  {
    userId: 4,
    email: 'test4@gmail.com',
    password: '456456',
    nickname: 'User4',
    name: '원종빈',
    phone: '010-4567-8901',
    avatarUrl: 'src/assets/종빈.png',
  },
  {
    userId: 5,
    email: 'test5@gmail.com',
    password: '123456',
    nickname: 'User5',
    name: '앤트맨',
    phone: '010-4362-1156',
    avatarUrl: 'src/assets/defaultAvatar.png',
  },
  {
    userId: 6,
    email: 'test6@gmail.com',
    password: '567890',
    nickname: 'User6',
    name: '원종빈',
    phone: '010-4782-4367',
    avatarUrl: 'src/assets/defaultAvatar.png',
  },
];

users = users.map(user => ({
  ...user,
  password: bcrypt.hashSync(user.password, 10),
}));

const posts = [
  {
    postId: 1,
    userId: 1,
<<<<<<< HEAD
    title: '제목1',
    content: `teststesttsetsetsetsetset`,
=======
    title: '진영이의글1',
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
>>>>>>> c3e99b7875fbd48b76560f5c39c46cb7f94d60a4
    createAt: '2021-01-01',
    likedUsers: [],
    comments: [
      {
        userid: 3,
        comment: '잘봤습니당!',
        createAt: '2021-01-05',
      },
      {
        userid: 4,
        comment: '굳굳 !!',
        createAt: '2021-01-05',
      },
    ],
  },
  {
    postId: 2,
    userId: 2,
    title: '민성쓰',
    content:
      "When the sharpest words wanna cut me down I'm gonna send a flood, gonna drown em out I am brave, I am bruised I am who I'm meant to be, this is me Look out cause here I come And I'm marching on to the beat I drum I'm not scared to be seen I make no apologies, this is me",
    createAt: '2021-01-02',
    likedUsers: [2, 3, 1],
    comments: [
      {
        userid: 2,
        comment: '고맙습니당!',
        createAt: '2021-01-03',
      },
      {
        userid: 4,
        comment: '굳굳 !!',
        createAt: '2021-01-05',
      },
    ],
  },
  {
    postId: 3,
    userId: 1,
    title: '진영이는노래를좋아해',
    content: 'Aliqua nulla do ea laboris velit nisi reprehenderit elit occaecat.',
    createAt: '2021-01-03',
    likedUsers: [2, 1],
    comments: [
      {
        userid: 2,
        comment: '고맙습니당!',
        createAt: '2021-01-03',
      },
      {
        userid: 4,
        comment: '굳굳 !!',
        createAt: '2021-01-06',
      },
    ],
  },
  {
    postId: 4,
    userId: 1,
    title: '글글글',
    content:
      'Enim consequat Lorem ipsum ut laborum officia cillum qui id fugiat duis. Sit incididunt fugiat reprehenderit aute mollit et nostrud laboris do aliqua sint. Magna laboris incididunt voluptate sunt ullamco nostrud exercitation reprehenderit excepteur sunt enim. Velit sunt excepteur tempor id ut. Laborum Lorem duis dolor dolor magna non deserunt quis.',
    createAt: '2021-01-04',
    likedUsers: [],
    comments: [
      {
        userid: 2,
        comment: '고맙습니당!',
        createAt: '2021-01-04',
      },
      {
        userid: 1,
        comment: '굳굳 !!',
        createAt: '2021-01-06',
      },
    ],
  },
  {
    postId: 5,
    userId: 1,
    title: '글입니다',
    content:
      'Enim consequat Lorem ipsum ut laborum officia cillum qui id fugiat duis. Sit incididunt fugiat reprehenderit aute mollit et nostrud laboris do aliqua sint. Magna laboris incididunt voluptate sunt ullamco nostrud exercitation reprehenderit excepteur sunt enim. Velit sunt excepteur tempor id ut. Laborum Lorem duis dolor dolor magna non deserunt quis.',
    createAt: '2021-01-05',
    likedUsers: [3, 6],
    comments: [
      {
        userid: 2,
        comment: '고맙습니당!',
        createAt: '2021-01-08',
      },
      {
        userid: 1,
        comment: '굳굳 !!',
        createAt: '2021-01-06',
      },
    ],
  },
  {
    postId: 6,
    userId: 1,
    title: '제목입니다',
    content: 'Aliqua nulla do ea laboris velit nisi reprehenderit elit occaecat.',
    createAt: '2021-01-06',
    likedUsers: [],
    comments: [
      {
        userid: 2,
        comment: '고맙습니당!',
        createAt: '2021-01-09',
      },
      {
        userid: 1,
        comment: '굳굳 !!',
        createAt: '2021-01-06',
      },
    ],
  },
  {
    postId: 7,
    userId: 1,
    title: '제목7',
    content:
      'Enim consequat Lorem ipsum ut laborum officia cillum qui id fugiat duis. Sit incididunt fugiat reprehenderit aute mollit et nostrud laboris do aliqua sint. Magna laboris incididunt voluptate sunt ullamco nostrud exercitation reprehenderit excepteur sunt enim. Velit sunt excepteur tempor id ut. Laborum Lorem duis dolor dolor magna non deserunt quis.',
    createAt: '2021-01-07',
    likedUsers: [],
    comments: [
      {
        userid: 2,
        comment: '고맙습니당!',
        createAt: '2021-01-08',
      },
      {
        userid: 1,
        comment: '굳굳 !!',
        createAt: '2021-01-18',
      },
    ],
  },
  {
    postId: 8,
    userId: 1,
    title: '제목8',
    content:
      'Enim consequat Lorem ipsum ut laborum officia cillum qui id fugiat duis. Sit incididunt fugiat reprehenderit aute mollit et nostrud laboris do aliqua sint. Magna laboris incididunt voluptate sunt ullamco nostrud exercitation reprehenderit excepteur sunt enim. Velit sunt excepteur tempor id ut. Laborum Lorem duis dolor dolor magna non deserunt quis.',
    createAt: '2021-01-08',
    likedUsers: [],
    comments: [
      {
        userid: 2,
        comment: '고맙습니당!',
        createAt: '2021-01-11',
      },
      {
        userid: 1,
        comment: '굳굳 !!',
        createAt: '2021-01-13',
      },
    ],
  },
  {
    postId: 9,
    userId: 1,
    title: '제목이죠',
    content: 'Aliqua nulla do ea laboris velit nisi reprehenderit elit occaecat.',
    createAt: '2021-01-09',
    likedUsers: [],
    comments: [
      {
        userid: 2,
        comment: '고맙습니당!',
        createAt: '2021-01-10',
      },
      {
        userid: 1,
        comment: '굳굳 !!',
        createAt: '2021-01-21',
      },
    ],
  },
  {
    postId: 10,
    userId: 1,
    title: '제목10',
    content:
      'Enim consequat Lorem ipsum ut laborum officia cillum qui id fugiat duis. Sit incididunt fugiat reprehenderit aute mollit et nostrud laboris do aliqua sint. Magna laboris incididunt voluptate sunt ullamco nostrud exercitation reprehenderit excepteur sunt enim. Velit sunt excepteur tempor id ut. Laborum Lorem duis dolor dolor magna non deserunt quis.',
    createAt: '2021-01-10',
    likedUsers: [],
    comments: [
      {
        userid: 2,
        comment: '고맙습니당!',
        createAt: '2021-01-10',
      },
      {
        userid: 1,
        comment: '굳굳 !!',
        createAt: '2021-01-21',
      },
    ],
  },
  {
    postId: 11,
    userId: 1,
    title: '진영진영',
    content:
      'Enim consequat Lorem ipsum ut laborum officia cillum qui id fugiat duis. Sit incididunt fugiat reprehenderit aute mollit et nostrud laboris do aliqua sint. Magna laboris incididunt voluptate sunt ullamco nostrud exercitation reprehenderit excepteur sunt enim. Velit sunt excepteur tempor id ut. Laborum Lorem duis dolor dolor magna non deserunt quis.',
    createAt: '2021-01-11',
    likedUsers: [],
    comments: [
      {
        userid: 2,
        comment: '고맙습니당!',
        createAt: '2021-01-15',
      },
      {
        userid: 1,
        comment: '굳굳 !!',
        createAt: '2021-01-21',
      },
    ],
  },
  {
    postId: 12,
    userId: 1,
    title: '제목12',
    content: 'Aliqua nulla do ea laboris velit nisi reprehenderit elit occaecat.',
    createAt: '2021-01-12',
    likedUsers: [],
    comments: [
      {
        userid: 2,
        comment: '고맙습니당!',
        createAt: '2021-01-15',
      },
      {
        userid: 1,
        comment: '굳굳 !!',
        createAt: '2021-01-21',
      },
    ],
  },
  {
    postId: 13,
    userId: 1,
    title: '이것은글의제목',
    content:
      'Enim consequat Lorem ipsum ut laborum officia cillum qui id fugiat duis. Sit incididunt fugiat reprehenderit aute mollit et nostrud laboris do aliqua sint. Magna laboris incididunt voluptate sunt ullamco nostrud exercitation reprehenderit excepteur sunt enim. Velit sunt excepteur tempor id ut. Laborum Lorem duis dolor dolor magna non deserunt quis.',
    createAt: '2021-01-13',
    likedUsers: [],
    comments: [
      {
        userid: 2,
        comment: '고맙습니당!',
        createAt: '2021-01-17',
      },
      {
        userid: 1,
        comment: '굳굳 !!',
        createAt: '2021-01-21',
      },
    ],
  },
  {
    postId: 14,
    userId: 1,
    title: '검색테스트제목',
    content:
      'Enim consequat Lorem ipsum ut laborum officia cillum qui id fugiat duis. Sit incididunt fugiat reprehenderit aute mollit et nostrud laboris do aliqua sint. Magna laboris incididunt voluptate sunt ullamco nostrud exercitation reprehenderit excepteur sunt enim. Velit sunt excepteur tempor id ut. Laborum Lorem duis dolor dolor magna non deserunt quis.',
    createAt: '2021-01-14',
    likedUsers: [],
    comments: [
      {
        userid: 2,
        comment: '고맙습니당!',
        createAt: '2021-01-19',
      },
      {
        userid: 1,
        comment: '굳굳 !!',
        createAt: '2021-01-21',
      },
    ],
  },
  {
    postId: 15,
    userId: 1,
    title: '제목15',
    content: 'Aliqua nulla do ea laboris velit nisi reprehenderit elit occaecat.',
    createAt: '2021-01-15',
    likedUsers: [],
    comments: [
      {
        userid: 2,
        comment: '고맙습니당!',
        createAt: '2021-01-15',
      },
      {
        userid: 1,
        comment: '굳굳 !!',
        createAt: '2021-01-21',
      },
    ],
  },
  {
    postId: 16,
    userId: 1,
    title: '제목16',
    content:
      'Enim consequat Lorem ipsum ut laborum officia cillum qui id fugiat duis. Sit incididunt fugiat reprehenderit aute mollit et nostrud laboris do aliqua sint. Magna laboris incididunt voluptate sunt ullamco nostrud exercitation reprehenderit excepteur sunt enim. Velit sunt excepteur tempor id ut. Laborum Lorem duis dolor dolor magna non deserunt quis.',
    createAt: '2021-01-16',
    likedUsers: [],
    comments: [
      {
        userid: 2,
        comment: '고맙습니당!',
        createAt: '2021-01-18',
      },
      {
        userid: 1,
        comment: '굳굳 !!',
        createAt: '2021-01-21',
      },
    ],
  },
  {
    postId: 18,
    userId: 2,
    title: '민소프트',
    content:
      'Enim consequat Lorem ipsum ut laborum officia cillum qui id fugiat duis. Sit incididunt fugiat reprehenderit aute mollit et nostrud laboris do aliqua sint. Magna laboris incididunt voluptate sunt ullamco nostrud exercitation reprehenderit excepteur sunt enim. Velit sunt excepteur tempor id ut. Laborum Lorem duis dolor dolor magna non deserunt quis.',
    createAt: '2021-01-01',
    likedUsers: [1, 2],
    comments: [
      {
        userid: 2,
        comment: '고맙습니당!',
        createAt: '2021-01-10',
      },
      {
        userid: 1,
        comment: '굳굳 !!',
        createAt: '2021-01-21',
      },
    ],
  },
  {
    postId: 19,
    userId: 2,
    title: '민소프트케이',
    content:
      'Enim consequat Lorem ipsum ut laborum officia cillum qui id fugiat duis. Sit incididunt fugiat reprehenderit aute mollit et nostrud laboris do aliqua sint. Magna laboris incididunt voluptate sunt ullamco nostrud exercitation reprehenderit excepteur sunt enim. Velit sunt excepteur tempor id ut. Laborum Lorem duis dolor dolor magna non deserunt quis.',
    createAt: '2021-01-02',
    likedUsers: [],
    comments: [
      {
        userid: 2,
        comment: '고맙습니당!',
        createAt: '2021-01-10',
      },
      {
        userid: 1,
        comment: '굳굳 !!',
        createAt: '2021-01-21',
      },
    ],
  },
  {
    postId: 20,
    userId: 2,
    title: '제목3',
    content: 'Aliqua nulla do ea laboris velit nisi reprehenderit elit occaecat.',
    createAt: '2021-01-03',
    likedUsers: [],
    comments: [
      {
        userid: 2,
        comment: '고맙습니당!',
        createAt: '2021-01-10',
      },
      {
        userid: 1,
        comment: '굳굳 !!',
        createAt: '2021-01-21',
      },
    ],
  },
  {
    postId: 21,
    userId: 2,
    title: '민성의글',
    content:
      'Enim consequat Lorem ipsum ut laborum officia cillum qui id fugiat duis. Sit incididunt fugiat reprehenderit aute mollit et nostrud laboris do aliqua sint. Magna laboris incididunt voluptate sunt ullamco nostrud exercitation reprehenderit excepteur sunt enim. Velit sunt excepteur tempor id ut. Laborum Lorem duis dolor dolor magna non deserunt quis.',
    createAt: '2021-01-04',
    likedUsers: [1, 2, 4],
    comments: [
      {
        userid: 2,
        comment: '고맙습니당!',
        createAt: '2021-01-10',
      },
      {
        userid: 1,
        comment: '굳굳 !!',
        createAt: '2021-01-21',
      },
    ],
  },
  {
    postId: 22,
    userId: 2,
    title: '제목5',
    content:
      'Enim consequat Lorem ipsum ut laborum officia cillum qui id fugiat duis. Sit incididunt fugiat reprehenderit aute mollit et nostrud laboris do aliqua sint. Magna laboris incididunt voluptate sunt ullamco nostrud exercitation reprehenderit excepteur sunt enim. Velit sunt excepteur tempor id ut. Laborum Lorem duis dolor dolor magna non deserunt quis.',
    createAt: '2021-01-05',
    likedUsers: [],
    comments: [
      {
        userid: 2,
        comment: '고맙습니당!',
        createAt: '2021-01-10',
      },
      {
        userid: 1,
        comment: '굳굳 !!',
        createAt: '2021-01-21',
      },
    ],
  },
  {
    postId: 23,
    userId: 2,
    title: '제목6',
    content: 'Aliqua nulla do ea laboris velit nisi reprehenderit elit occaecat.',
    createAt: '2021-01-06',
    likedUsers: [2, 5, 1, 3],
    comments: [
      {
        userid: 2,
        comment: '고맙습니당!',
        createAt: '2021-01-10',
      },
      {
        userid: 1,
        comment: '굳굳 !!',
        createAt: '2021-01-21',
      },
    ],
  },
  {
    postId: 24,
    userId: 3,
    title: '현서는술을좋아해',
    content:
      'Enim consequat Lorem ipsum ut laborum officia cillum qui id fugiat duis. Sit incididunt fugiat reprehenderit aute mollit et nostrud laboris do aliqua sint. Magna laboris incididunt voluptate sunt ullamco nostrud exercitation reprehenderit excepteur sunt enim. Velit sunt excepteur tempor id ut. Laborum Lorem duis dolor dolor magna non deserunt quis.',
    createAt: '2021-01-03',
    likedUsers: [],
    comments: [
      {
        userid: 2,
        comment: '고맙습니당!',
        createAt: '2021-01-10',
      },
      {
        userid: 1,
        comment: '굳굳 !!',
        createAt: '2021-01-21',
      },
    ],
  },
  {
    postId: 25,
    userId: 3,
    title: '현서현서',
    content:
      'Enim consequat Lorem ipsum ut laborum officia cillum qui id fugiat duis. Sit incididunt fugiat reprehenderit aute mollit et nostrud laboris do aliqua sint. Magna laboris incididunt voluptate sunt ullamco nostrud exercitation reprehenderit excepteur sunt enim. Velit sunt excepteur tempor id ut. Laborum Lorem duis dolor dolor magna non deserunt quis.',
    createAt: '2021-01-04',
    likedUsers: [],
    comments: [
      {
        userid: 2,
        comment: '고맙습니당!',
        createAt: '2021-01-10',
      },
      {
        userid: 1,
        comment: '굳굳 !!',
        createAt: '2021-01-21',
      },
    ],
  },
  {
    postId: 26,
    userId: 3,
    title: '현서제목3',
    content: 'Aliqua nulla do ea laboris velit nisi reprehenderit elit occaecat.',
    createAt: '2021-01-05',
    likedUsers: [],
    comments: [
      {
        userid: 2,
        comment: '고맙습니당!',
        createAt: '2021-01-10',
      },
      {
        userid: 1,
        comment: '굳굳 !!',
        createAt: '2021-01-21',
      },
    ],
  },
  {
    postId: 27,
    userId: 4,
    title: '제목1',
    content:
      'Enim consequat Lorem ipsum ut laborum officia cillum qui id fugiat duis. Sit incididunt fugiat reprehenderit aute mollit et nostrud laboris do aliqua sint. Magna laboris incididunt voluptate sunt ullamco nostrud exercitation reprehenderit excepteur sunt enim. Velit sunt excepteur tempor id ut. Laborum Lorem duis dolor dolor magna non deserunt quis.',
    createAt: '2021-01-02',
    likedUsers: [],
    comments: [
      {
        userid: 2,
        comment: '고맙습니당!',
        createAt: '2021-01-10',
      },
      {
        userid: 1,
        comment: '굳굳 !!',
        createAt: '2021-01-21',
      },
    ],
  },
  {
    postId: 28,
    userId: 4,
    title: '종빈이는술을좋아해',
    content:
      'Enim consequat Lorem ipsum ut laborum officia cillum qui id fugiat duis. Sit incididunt fugiat reprehenderit aute mollit et nostrud laboris do aliqua sint. Magna laboris incididunt voluptate sunt ullamco nostrud exercitation reprehenderit excepteur sunt enim. Velit sunt excepteur tempor id ut. Laborum Lorem duis dolor dolor magna non deserunt quis.',
    createAt: '2021-01-03',
    likedUsers: [],
    comments: [
      {
        userid: 2,
        comment: '고맙습니당!',
        createAt: '2021-01-10',
      },
      {
        userid: 1,
        comment: '굳굳 !!',
        createAt: '2021-01-21',
      },
    ],
  },
  {
    postId: 29,
    userId: 4,
    title: '종빈종빈제목3',
    content: 'Aliqua nulla do ea laboris velit nisi reprehenderit elit occaecat.',
    createAt: '2021-01-04',
    likedUsers: [],
    comments: [
      {
        userid: 2,
        comment: '고맙습니당!',
        createAt: '2021-01-10',
      },
      {
        userid: 1,
        comment: '굳굳 !!',
        createAt: '2021-01-21',
      },
    ],
  },
  {
    postId: 30,
    userId: 5,
    title: '유저5제목1',
    content:
      'Enim consequat Lorem ipsum ut laborum officia cillum qui id fugiat duis. Sit incididunt fugiat reprehenderit aute mollit et nostrud laboris do aliqua sint. Magna laboris incididunt voluptate sunt ullamco nostrud exercitation reprehenderit excepteur sunt enim. Velit sunt excepteur tempor id ut. Laborum Lorem duis dolor dolor magna non deserunt quis.',
    createAt: '2021-01-11',
    likedUsers: [],
    comments: [
      {
        userid: 2,
        comment: '고맙습니당!',
        createAt: '2021-01-10',
      },
      {
        userid: 1,
        comment: '굳굳 !!',
        createAt: '2021-01-21',
      },
    ],
  },
  {
    postId: 31,
    userId: 5,
    title: '유저제목2',
    content:
      'Enim consequat Lorem ipsum ut laborum officia cillum qui id fugiat duis. Sit incididunt fugiat reprehenderit aute mollit et nostrud laboris do aliqua sint. Magna laboris incididunt voluptate sunt ullamco nostrud exercitation reprehenderit excepteur sunt enim. Velit sunt excepteur tempor id ut. Laborum Lorem duis dolor dolor magna non deserunt quis.',
    createAt: '2021-01-12',
    likedUsers: [],
    comments: [
      {
        userid: 2,
        comment: '고맙습니당!',
        createAt: '2021-01-10',
      },
      {
        userid: 1,
        comment: '굳굳 !!',
        createAt: '2021-01-21',
      },
    ],
  },
  {
    postId: 32,
    userId: 5,
    title: '제목3',
    content: 'Aliqua nulla do ea laboris velit nisi reprehenderit elit occaecat.',
    createAt: '2021-01-13',
    likedUsers: [],
    comments: [
      {
        userid: 2,
        comment: '고맙습니당!',
        createAt: '2021-01-10',
      },
      {
        userid: 1,
        comment: '굳굳 !!',
        createAt: '2021-01-21',
      },
    ],
  },
  {
    postId: 33,
    userId: 5,
    title: '제목4',
    content:
      'Enim consequat Lorem ipsum ut laborum officia cillum qui id fugiat duis. Sit incididunt fugiat reprehenderit aute mollit et nostrud laboris do aliqua sint. Magna laboris incididunt voluptate sunt ullamco nostrud exercitation reprehenderit excepteur sunt enim. Velit sunt excepteur tempor id ut. Laborum Lorem duis dolor dolor magna non deserunt quis.',
    createAt: '2021-01-14',
    likedUsers: [],
    comments: [
      {
        userid: 2,
        comment: '고맙습니당!',
        createAt: '2021-01-10',
      },
      {
        userid: 1,
        comment: '굳굳 !!',
        createAt: '2021-01-21',
      },
    ],
  },
  {
    postId: 34,
    userId: 5,
    title: '제목5',
    content:
      'Enim consequat Lorem ipsum ut laborum officia cillum qui id fugiat duis. Sit incididunt fugiat reprehenderit aute mollit et nostrud laboris do aliqua sint. Magna laboris incididunt voluptate sunt ullamco nostrud exercitation reprehenderit excepteur sunt enim. Velit sunt excepteur tempor id ut. Laborum Lorem duis dolor dolor magna non deserunt quis.',
    createAt: '2021-01-15',
    likedUsers: [],
    comments: [
      {
        userid: 2,
        comment: '고맙습니당!',
        createAt: '2021-01-10',
      },
      {
        userid: 1,
        comment: '굳굳 !!',
        createAt: '2021-01-21',
      },
    ],
  },
  {
    postId: 35,
    userId: 5,
    title: '제목6',
    content: 'Aliqua nulla do ea laboris velit nisi reprehenderit elit occaecat.',
    createAt: '2021-01-16',
    likedUsers: [],
    comments: [
      {
        userid: 2,
        comment: '고맙습니당!',
        createAt: '2021-01-10',
      },
      {
        userid: 1,
        comment: '굳굳 !!',
        createAt: '2021-01-21',
      },
    ],
  },
  {
    postId: 36,
    userId: 6,
    title: '제목입니다4',
    content:
      'Enim consequat Lorem ipsum ut laborum officia cillum qui id fugiat duis. Sit incididunt fugiat reprehenderit aute mollit et nostrud laboris do aliqua sint. Magna laboris incididunt voluptate sunt ullamco nostrud exercitation reprehenderit excepteur sunt enim. Velit sunt excepteur tempor id ut. Laborum Lorem duis dolor dolor magna non deserunt quis.',
    createAt: '2021-01-06',
    likedUsers: [],
    comments: [
      {
        userid: 2,
        comment: '고맙습니당!',
        createAt: '2021-01-10',
      },
      {
        userid: 1,
        comment: '굳굳 !!',
        createAt: '2021-01-21',
      },
    ],
  },
  {
    postId: 37,
    userId: 6,
    title: '더미제목',
    content:
      'Enim consequat Lorem ipsum ut laborum officia cillum qui id fugiat duis. Sit incididunt fugiat reprehenderit aute mollit et nostrud laboris do aliqua sint. Magna laboris incididunt voluptate sunt ullamco nostrud exercitation reprehenderit excepteur sunt enim. Velit sunt excepteur tempor id ut. Laborum Lorem duis dolor dolor magna non deserunt quis.',
    createAt: '2021-01-07',
    likedUsers: [],
    comments: [
      {
        userid: 2,
        comment: '고맙습니당!',
        createAt: '2021-01-10',
      },
      {
        userid: 1,
        comment: '굳굳 !!',
        createAt: '2021-01-21',
      },
    ],
  },
  {
    postId: 38,
    userId: 6,
    title: '제목6',
    content:
      'Enim consequat Lorem ipsum ut laborum officia cillum qui id fugiat duis. Sit incididunt fugiat reprehenderit aute mollit et nostrud laboris do aliqua sint. Magna laboris incididunt voluptate sunt ullamco nostrud exercitation reprehenderit excepteur sunt enim. Velit sunt excepteur tempor id ut. Laborum Lorem duis dolor dolor magna non deserunt quis.',
    createAt: '2021-01-08',
    likedUsers: [],
    comments: [
      {
        userid: 2,
        comment: '고맙습니당!',
        createAt: '2021-01-10',
      },
      {
        userid: 1,
        comment: '굳굳 !!',
        createAt: '2021-01-21',
      },
    ],
  },
  {
    postId: 39,
    userId: 6,
    title: '더미제목',
    content: 'Aliqua nulla do ea laboris velit nisi reprehenderit elit occaecat.',
    createAt: '2021-01-09',
    likedUsers: [],
    comments: [
      {
        userid: 2,
        comment: '고맙습니당!',
        createAt: '2021-01-10',
      },
      {
        userid: 1,
        comment: '굳굳 !!',
        createAt: '2021-01-21',
      },
    ],
  },
  {
    postId: 40,
    userId: 6,
    title: '노래방가고싶다',
    content:
      'Enim consequat Lorem ipsum ut laborum officia cillum qui id fugiat duis. Sit incididunt fugiat reprehenderit aute mollit et nostrud laboris do aliqua sint. Magna laboris incididunt voluptate sunt ullamco nostrud exercitation reprehenderit excepteur sunt enim. Velit sunt excepteur tempor id ut. Laborum Lorem duis dolor dolor magna non deserunt quis.',
    createAt: '2021-01-10',
    likedUsers: [],
    comments: [
      {
        userid: 2,
        comment: '고맙습니당!',
        createAt: '2021-01-10',
      },
      {
        userid: 1,
        comment: '굳굳 !!',
        createAt: '2021-01-21',
      },
    ],
  },
  {
    postId: 41,
    userId: 1,
    title: '진영이의글',
    content:
      'Enim consequat Lorem ipsum ut laborum officia cillum qui id fugiat duis. Sit incididunt fugiat reprehenderit aute mollit et nostrud laboris do aliqua sint. Magna laboris incididunt voluptate sunt ullamco nostrud exercitation reprehenderit excepteur sunt enim. Velit sunt excepteur tempor id ut. Laborum Lorem duis dolor dolor magna non deserunt quis.',
    createAt: '2021-01-20',
    likedUsers: [],
    comments: [
      {
        userid: 2,
        comment: '고맙습니당!',
        createAt: '2021-01-10',
      },
      {
        userid: 1,
        comment: '굳굳 !!',
        createAt: '2021-01-21',
      },
    ],
  },
  {
    postId: 42,
    userId: 1,
    title: '진영의글',
    content:
      'Enim consequat Lorem cillum qui id fugiat duis. Sit incididunt fugiat reprehenderit aute mollit et nostrud laboris do aliqua sint. Magna laboris incididunt voluptate sunt ullamco nostrud exercitation reprehenderit excepteur sunt enim. Velit sunt excepteur tempor id ut. Laborum Lorem duis dolor dolor magna non deserunt quis.',
    createAt: '2021-01-21',
    likedUsers: [],
    comments: [
      {
        userid: 2,
        comment: '고맙습니당!',
        createAt: '2021-01-10',
      },
      {
        userid: 1,
        comment: '굳굳 !!',
        createAt: '2021-01-21',
      },
    ],
  },
  {
    postId: 43,
    userId: 1,
    title: '제목13',
    content:
      'cillum qui id fugiat duis. Sit incididunt fugiat reprehenderit aute mollit et nostrud laboris do aliqua sint. Magna laboris incididunt voluptate sunt ullamco nostrud exercitation reprehenderit excepteur sunt enim. Velit sunt excepteur tempor id ut. Laborum Lorem duis dolor dolor magna non deserunt quis.',
    createAt: '2021-01-21',
    likedUsers: [],
    comments: [
      {
        userid: 2,
        comment: '고맙습니당!',
        createAt: '2021-01-10',
      },
      {
        userid: 1,
        comment: '굳굳 !!',
        createAt: '2021-01-21',
      },
    ],
  },
];

module.exports = {
  users,
  posts,
};
