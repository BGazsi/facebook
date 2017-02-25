module.exports = function () {

    return function (req, res, next) {
        res.tpl.posts = [
            {
                id: 'first',
                name: 'Bence Gazsi',
                profpic: '/public/images/user1.jpg',
                time: '2 hrs',
                desc: 'This is the first post',
                img: '/public/images/first.jpg',
                comments: [
                    {
                        name: 'Someone Else',
                        img: '/public/images/se.jpg',
                        comment: 'Im gonna build a wall'
                    },
                    {
                        name: 'Another One',
                        img: '/public/images/ao.png',
                        comment: 'Whos gonna pay for it?'
                    },
                    {
                        name: 'Someone Else',
                        img: '/public/images/se.jpg',
                        comment: 'Mexico of course'
                    }
                ]
            },
            {
                id: 'second',
                name: 'Someone Else',
                profpic: '/public/images/se.jpg',
                time: '4 hrs',
                desc: 'This is the second post',
                img: '/public/images/second.jpg',
                comments: [
                    {
                        name: 'Bence Gazsi',
                        img: '/public/images/user1.jpg',
                        comment: 'Nice car'
                    },
                    {
                        name: 'Another One',
                        img: '/public/images/ao.png',
                        comment: 'Absolutely beautiful'
                    }
                ]
            }
        ];
        return next();
    };
};