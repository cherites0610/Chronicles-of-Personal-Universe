import Mock from "mockjs";

Mock.mock('/api/login', 'post',
    {
        "name": '@cname',
        "uId": 1,
        "userPicture": 1
    }
)

Mock.mock('/api/register', 'post',
    {

    }
)
