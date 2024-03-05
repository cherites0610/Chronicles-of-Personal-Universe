import Mock from "mockjs";

Mock.mock('/api/login', 'post',
    {
        "object": {
            "name": '@cname',
            "uId": 1
        }
    }
)

Mock.mock('/api/register', 'post',
    {
        
    }
)
