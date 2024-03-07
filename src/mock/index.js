import Mock from "mockjs";

Mock.setup({
    timeout: 500
})

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

Mock.mock('/api/getScheduleById', 'post',
    {
        "schedules|2": [
            {
                'sId': Mock.Random.natural(0,10),
                'sName': 'test',
                'dTime': Mock.Random.date('2024-03-dd'),
                'color': Mock.Random.color(),
            }
        ]
    }
)
