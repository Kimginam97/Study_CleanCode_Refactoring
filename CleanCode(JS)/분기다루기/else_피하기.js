function getActiveUserName(user) {
    if (user.name) {
        return user.name;
    } else {
        return '이름없음';
    }

    // return user.name || '이름없음';
}

function getActiveUserName(user) {

    if (user.name) {
        return user.name;
    } 

    return '이름없음';
}

/*
    age가 20 미만시 특수 함수 실행
*/
function getHelloCustomer(user) {
    if (user.age < 20) {
        report(user);
    } else {
        return '안녕하세요';
    }
}

function getHelloCustomer(user) {
    if (user.age < 20) {
        report(user);
    }

    return '안녕하세요';
}