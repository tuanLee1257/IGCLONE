import users from './users';

export default POSTS = [
  {
    user: users[0].user,
    profile_picture: users[0].image,
    image: require('../assets/images/girl.jpg'),
    likes: 700,
    caption: 'Helo this is my post',
    comments: [
      {
        user: 'dummy 1',
        comment: 'Tôi ko yêu 1 đứa con gái nào cả :))))',
      },
      {
        user: 'dummy 2',
        comment: 'Wonderfull',
      },
    ],
  },
  {
    user: users[1].user,
    profile_picture: users[1].image,
    image: require('../assets/images/girl2.png'),
    likes: 23,
    caption: 'Helo this is my second  post',
    comments: [
      {
        user: 'dummy 3',
        comment: 'Chắc ăn sáhimi xong bị ải chỉa đag bận ỉa nên k rep dc đó 🙂',
      },
      {
        user: 'dummy 4',
        comment:
          'Không biết thật hư ra sao nhưng có gì đâu , như t đây bạn thân nhắn tin nhiều lúc t seen quên rep ( không biết ST cố ý hay quên nhưng chuyện này có gì đâu mà nói nhỉ ) , t quên rep , nhiều lúc t còn tưởng t rep rồi cơ ý :))',
      },
    ],
  },
  {
    user: users[2].user,
    profile_picture: users[2].image,
    image: require('../assets/images/girl3.jpg'),
    likes: 231232,
    caption: 'Helo this is my third post',
    comments: [
      {
        user: 'dummy 3',
        comment: 'Chắc ăn sáhimi xong bị ải chỉa đag bận ỉa nên k rep dc đó 🙂',
      },
      {
        user: 'dummy 4',
        comment:
          'Không biết thật hư ra sao nhưng có gì đâu , như t đây bạn thân nhắn tin nhiều lúc t seen quên rep ( không biết ST cố ý hay quên nhưng chuyện này có gì đâu mà nói nhỉ ) , t quên rep , nhiều lúc t còn tưởng t rep rồi cơ ý :))',
      },
    ],
  },
];
