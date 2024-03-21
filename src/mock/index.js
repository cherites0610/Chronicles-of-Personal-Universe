import Mock from "mockjs";

Mock.setup({
    timeout: 500
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

Mock.mock('/api/getGroupsById', 'post',
    ['毛毛毛毛毛', '專研組', '十叄宿營', '十叄資管']
)

Mock.mock('/api/getWordToUById', 'post',
    [
        {
            year: 2023,
            comment: '我也不知道大哥要說怎麼，但反正我就隨便亂打，你們就隨便亂看'
        },
        {
            year: 2024,
            comment: '感覺如果和2023的一模一樣很沒誠意，所以我決定我在亂打一次，希望你們可以在亂砍一次,感覺如果和2023的一模一樣很沒誠意，所以我決定我在亂打一次，希望你們可以在亂砍一次,感覺如果和2023的一模一樣很沒誠意，所以我決定我在亂打一次，希望你們可以在亂砍一次'
        },
        {
            year: 2025,
            comment: '但反正就是亂打，只要有內容可以測試我就很滿意了'
        }
    ]
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
