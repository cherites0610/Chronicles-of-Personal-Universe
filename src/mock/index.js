import Mock from "mockjs";

Mock.setup({
    timeout: 400
})

Mock.mock('/api/login', 'post',
    {
        "name": '@cname',
        "uId": 1,
        "uEmail": '@email',
        "userPicture": 1
    }
)

Mock.mock('/api/register', 'post',
    {

    }
)

Mock.mock('/api/getWordToUById', 'post',
    {
        "comments|1-4": [
            {
                year: "@date(yyyy)",
                comment: "@cparagraph(10)"
            }
        ]
    }
)

Mock.mock('/api/getScheduleById', 'post',
    {
        "schedules|20": [
            {
                'sId': '@natural(0,10)',
                'sName': '@ctitle(2, 4)',
                'dTime': "@date('2024-03-dd')",
                'startTime': '@time("HH:mm")',
                'endTime': '@time("HH:mm")',
                'color': '@color()',
                'y_index': '@natural(1,3)'
            }
        ]
    }
)
