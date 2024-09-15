function solution(left, right) {
    var answer = 0;
    var obj  = {}

    for(var n=left; n <=right; n++){
        obj[n] = []
        for(var j=1; j <= n; j++) {
            if (n % j === 0) obj[n].push(j)
        }
    }

    for(var key in obj){
        let len = obj[key].length
        if(len % 2 === 0) answer += obj[key][len-1]
        else answer -= obj[key][len-1]
    }

    return answer;
}


solution(13, 17)