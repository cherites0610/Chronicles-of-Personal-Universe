import Mock from "mockjs";

Mock.mock('/api/test','post', {'list|1-10': [{'id|+1': 1}]})
