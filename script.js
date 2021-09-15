const question = document.querySelector('.quest_text')
const answer = document.querySelector('.answer')
const a1 = document.querySelector('.answer1')
const a2 = document.querySelector('.answer2')
const a3 = document.querySelector('.answer3')
const a4 = document.querySelector('.answer4')
const aa1 = document.getElementById('aa1')
const aa2 = document.getElementById('aa2')
const aa3 = document.getElementById('aa3')
const aa4 = document.getElementById('aa4')
const countdown = document.getElementById('countdown')
const point_color = document.querySelector('.point_color')
const jokerff = document.querySelector('.fifty-fifty')
const jokerAudience = document.querySelector('.audience')
const jokerA_box = document.querySelector('.jokerA_box')
const v1 = document.getElementById('v1')
const v2 = document.getElementById('v2')
const v3 = document.getElementById('v3')
const v4 = document.getElementById('v4')
const closeJoker = document.getElementById('close_joker')
const endGameScreen = document.querySelector('.endGame')
const congrats = document.getElementById('congrats')
const start = document.getElementById('start')
const quitGame = document.getElementById('quitGame')
const nameI = document.getElementById('name_input')
const load1 = document.getElementById('load1')
const load2 = document.getElementById('load2')
const load3 = document.getElementById('load3')
const load4 = document.getElementById('load4')
const mm_btn = document.getElementById('mainMenu')
const points_box = document.querySelector('.points')
const counter_box = document.querySelector('.counter')
const jokers_box = document.querySelector('.jokers')
const answers_box = document.querySelector('.answers')
const qc = document.getElementById('qc')


var question_counter = 0;
var result = 0;
var point = 1;
var point_color_pos = 03;
var seconds = 30;
countdown.innerHTML = seconds
var userName = '';
document.querySelector('.audience').disabled = true;
document.querySelector('.jokerA_box').disabled = true;

function startGame() {
    points_box.style.display = 'grid'
    counter_box.style.display = 'inline'
    jokers_box.style.display = 'flex'
    answers_box.style.display = 'grid'
    question_counter = 0
    result = 0;
    point = 1;
    point_color_pos = 0;
    seconds = 30;
    countdown.innerHTML = seconds
    document.querySelector('.audience').disabled = false;
    document.querySelector('.jokerA_box').disabled = false;
    start.style.display = 'none'
    quitGame.style.display = 'flex'
    mm_btn.style.display = 'none'
    qc.style.display = 'block'
    next_question()
    setInterval(() => {
        time()
    }, 1000);
}
start.addEventListener('click', () => {
    userName = nameI.value.trim()
    if (userName.length === 0) {
        alert('Enter your name!')
    } else startGame()
})


function question_easy() {
    let num1;
    let num2;
    let operator = Math.floor((Math.random() * 4) + 1);
    let znak;
    let ispis;
    if (operator === 1) {
        znak = '+'
        num1 = Math.floor((Math.random() * 500) + 1);
        num2 = Math.floor((Math.random() * 500) + 1);
        result = num1 + num2
    }
    if (operator === 2) {
        znak = '-'
        num1 = Math.floor((Math.random() * 500) + 1);
        num2 = Math.floor((Math.random() * 500) + 1);
        result = num1 - num2
    }
    if (operator === 3) {
        znak = '*'
        num1 = Math.floor((Math.random() * 50) + 1);
        num2 = Math.floor((Math.random() * 50) + 1);
        result = num1 * num2
    }
    if (operator === 4) {
        znak = '÷';
        num1 = Math.floor(Math.random() * (500 - 20) + 20);
        num1 = Math.floor((Math.random() * 500) + 1);
        num2 = Math.floor((Math.random() * 20) + 1);
        result = Math.floor(num1 / num2)
        r1 = result - 15
        r2 = result + 15
        if (r1 < 0) {
            r1 = 0
        }
    } else {
        r1 = result - 35;
        r2 = result + 35;
    };
    ispis = num1 + znak + num2;
    return ispis
}
function question_mid() {
    let num1;
    let num2;
    let operator = Math.floor((Math.random() * 4) + 1);
    let znak;
    let ispis;
    if (operator === 1) {
        znak = '+'
        num1 = Math.floor(Math.random() * (1000 - 500) + 500);
        num2 = Math.floor(Math.random() * (1000 - 500) + 500);
        result = num1 + num2
    }
    if (operator === 2) {
        znak = '-'
        num1 = Math.floor(Math.random() * (1000 - 500) + 500);
        num2 = Math.floor(Math.random() * (1000 - 500) + 500);
        result = num1 - num2
    }
    if (operator === 3) {
        znak = '*'
        num1 = Math.floor(Math.random() * (100 - 50) + 50);
        num2 = Math.floor(Math.random() * (100 - 50) + 50);
        result = num1 * num2
    }
    if (operator === 4) {
        znak = '÷';
        num1 = Math.floor(Math.random() * (1000 - 500) + 500);
        num2 = Math.floor((Math.random() * 25) + 1);
        result = Math.floor(num1 / num2)
        r1 = result - 15
        r2 = result + 15
        if (r1 < 0) {
            r1 = 0
        }
    } else {
        r1 = result - 50;
        r2 = result + 50;
    };
    ispis = num1 + znak + num2;
    return ispis
}
function question_hard() {
    let num1;
    let num2;
    let operator = Math.floor((Math.random() * 4) + 1);
    let znak;
    let ispis;
    if (operator === 1) {
        znak = '+'
        num1 = Math.floor(Math.random() * (10000 - 1000) + 1000);
        num2 = Math.floor(Math.random() * (10000 - 1000) + 1000);
        result = num1 + num2
    }
    if (operator === 2) {
        znak = '-'
        num1 = Math.floor(Math.random() * (10000 - 1000) + 1000);
        num2 = Math.floor(Math.random() * (10000 - 1000) + 1000);
        result = num1 - num2
    }
    if (operator === 3) {
        znak = '*'
        num1 = Math.floor(Math.random() * (1000 - 100) + 100);
        num2 = Math.floor(Math.random() * (1000 - 100) + 100);
        result = num1 * num2
    }
    if (operator === 4) {
        znak = '÷';
        num1 = Math.floor(Math.random() * (10000 - 1000) + 1000);
        num2 = Math.floor((Math.random() * 50) + 1);
        result = Math.floor(num1 / num2)
        r1 = result - 20
        r2 = result + 20
        if (r1 < 0) {
            r1 = 0
        }
    } else {
        r1 = result - 100;
        r2 = result + 100;
    };
    ispis = num1 + znak + num2;
    return ispis
}

function answers() {
    let answ1 = 1;
    let answ2 = 2;
    let answ3 = 3;
    let answ4 = 4;
    let answ_num = Math.floor((Math.random() * 4) + 1)
    if (answ_num === answ1) {
        correct1 = true;
        answ1 = result
    } else answ1 = randomAnswer();
    if (answ_num === answ2) {
        correct2 = true;
        answ2 = result
    } else answ2 = randomAnswer();
    if (answ_num === answ3) {
        correct3 = true;
        answ3 = result
    } else answ3 = randomAnswer();
    if (answ_num === answ4) {
        correct4 = true;
        answ4 = result
    } else answ4 = randomAnswer();
    arr.push(answ1);
    arr.push(answ2);
    arr.push(answ3);
    arr.push(answ4);
    return arr
}

function randomAnswer(max, min) {
    min = r1;
    max = r2;
    let randAnsw = Math.floor(Math.random() * (max - min) + min);
    if (randAnsw === result) {
        randAnsw++;
    };
    return randAnsw
}

function check() {
    if (c === 1 && correct1) {
        correct = true;
    } else if (c === 2 && correct2) {
        correct = true;
    } else if (c === 3 && correct3) {
        correct = true;
    } else if (c === 4 && correct4) {
        correct = true;
    } else correct = false;
    return correct;
}

a1.addEventListener('click', () => {
    c = 1
    seconds = 30;
    if (correct1 === true) {
        a1.style.backgroundColor = 'darkgreen'
    } else a1.style.backgroundColor = '#D2231A'
    check()
    points()
    next_question()

})
a2.addEventListener('click', () => {
    c = 2
    seconds = 30;
    if (correct2 === true) {
        a2.style.backgroundColor = 'darkgreen'
    } else a2.style.backgroundColor = '#D2231A'
    check()
    points()
    next_question()
})
a3.addEventListener('click', () => {
    c = 3
    seconds = 30;
    if (correct3 === true) {
        a3.style.backgroundColor = 'darkgreen'
    } else a3.style.backgroundColor = '#D2231A'
    check()
    points()
    next_question()
})
a4.addEventListener('click', () => {
    c = 4
    seconds = 30;
    if (correct4 === true) {
        a4.style.backgroundColor = 'darkgreen'
    } else a4.style.backgroundColor = '#D2231A'
    check()
    points()
    next_question()
})

function points() {
    check()
    if (correct === true) {
        point++;
        point_color_pos += 39;
    } else if (correct === false) {
        if (point < 5) {
            point = 1;
            point_color_pos = 0;
        } else if (point >= 5 && point < 10) {
            point = 5;
            point_color_pos = 156;
        } else if (point >= 10) {
            point = 10;
            point_color_pos = 351;
        }
    }
    if (point_color_pos < 0) {
        point_color_pos = 0;
    }
    if (point < 1) {
        point = 1;
    }
    point_color.style.bottom = `${point_color_pos}px`
}
function next_question() {
    result = 0;
    r1 = 0;
    r2 = 0;
    arr = [];
    correct = false;
    correct1 = false;
    correct2 = false;
    correct3 = false;
    correct4 = false;
    c = 0
    if (point < 5) {
        question.innerHTML = question_easy()
    } else if (point >= 5 && point < 10) {
        question.innerHTML = question_mid()
    } else if (point >= 10) {
        question.innerHTML = question_hard()
    }
    answers()
    aa1.innerHTML = arr[0]
    aa2.innerHTML = arr[1]
    aa3.innerHTML = arr[2]
    aa4.innerHTML = arr[3]
    question_counter++;
    if (question_counter === 16) {
        endGame()
    }
    setTimeout(() => {
        a1.style.backgroundColor = '#131313'
        a2.style.backgroundColor = '#131313'
        a3.style.backgroundColor = '#131313'
        a4.style.backgroundColor = '#131313'

    }, 700);
    qc.innerHTML = `Question ${question_counter}/15`
}

function time() {
    countdown.innerHTML = seconds
    if (seconds === 0) {
        seconds = 30;
        next_question()
        points()
    }
    seconds -= 1;
}

// JOKERI ---------------------------------------------------------

function check_jokerff() {
    if (correct1 == true) {
        a2.style.backgroundColor = '#D2231A'
        a3.style.backgroundColor = '#D2231A'
    } else if (correct2 === true) {
        a1.style.backgroundColor = '#D2231A'
        a4.style.backgroundColor = '#D2231A'
    } else if (correct3 === true) {
        a1.style.backgroundColor = '#D2231A'
        a4.style.backgroundColor = '#D2231A'
    } else if (correct4 === true) {
        a2.style.backgroundColor = '#D2231A'
        a3.style.backgroundColor = '#D2231A'
    }
}

jokerff.addEventListener('click', () => {
    check_jokerff()
    jokerff.style.backgroundColor = '#D2231A'
    document.querySelector('.fifty-fifty').disabled = true;
})
function votes_jokerA() {
    votes_arr = [];
    let counter = 0;
    let a, b, c, d;
    let votes1 = 0;
    let votes2 = 0;
    let votes3 = 0;
    let votes4 = 0;
    while (counter < 100) {
        let rand_vote = Math.floor((Math.random() * 100) + 1)
        if (rand_vote <= 35) {
            votes1++;
        } else if (rand_vote > 35 && rand_vote <= 60) {
            votes2++;
        } else if (rand_vote > 60 && rand_vote <= 80) {
            votes3++;
        } else if (rand_vote > 80 && rand_vote <= 100) {
            votes4++;
        }
        counter++;
    }
    if (correct1 === true) {
        a = votes1;
        b = votes2
        c = votes3
        d = votes4
    } else if (correct2 === true) {
        a = votes2;
        b = votes1
        c = votes3
        d = votes4
    } else if (correct3 === true) {
        a = votes2;
        b = votes3
        c = votes1
        d = votes4
    } else if (correct4 === true) {
        a = votes2;
        b = votes3
        c = votes4
        d = votes1
    }
    votes_arr.push(a)
    votes_arr.push(b)
    votes_arr.push(c)
    votes_arr.push(d)
    return votes_arr
}

jokerAudience.addEventListener('click', () => {
    jokerA_box.style.display = 'block'
    jokerAudience.style.backgroundColor = '#D2231A'
    votes_jokerA()
    loading()
    v1.innerHTML = `${votes_arr[0]}%`
    v2.innerHTML = `${votes_arr[1]}%`
    v3.innerHTML = `${votes_arr[2]}%`
    v4.innerHTML = `${votes_arr[3]}%`
    document.querySelector('.audience').disabled = true;
})


closeJoker.addEventListener('click', () => {
    jokerA_box.style.display = 'none'
})


function endGame() {
    let prize;
    if (point === 1) {
        prize = 100
    } else if (point === 2) {
        prize = 200
    } else if (point === 3) {
        prize = 300
    } else if (point === 4) {
        prize = 500
    } else if (point === 5) {
        prize = 1000
    } else if (point === 6) {
        prize = 2000
    } else if (point === 7) {
        prize = 4000
    } else if (point === 8) {
        prize = 8000
    } else if (point === 9) {
        prize = 16000
    } else if (point === 10) {
        prize = 32000
    } else if (point === 11) {
        prize = 64000
    } else if (point === 12) {
        prize = 125000
    } else if (point === 13) {
        prize = 250000
    } else if (point === 14) {
        prize = 500000
    } else if (point === 15) {
        prize = 1000000
    } else if (point === 16) {
        prize = 1000000
    }
    endGameScreen.style.display = 'flex'
    congrats.innerHTML = `Congratulations ${userName}. You won $${prize}.`
}

function loading() {
    load1.style.width = `${votes_arr[0]}%`
    load2.style.width = `${votes_arr[1]}%`
    load3.style.width = `${votes_arr[2]}%`
    load4.style.width = `${votes_arr[3]}%`
}

quitGame.addEventListener('click', () => {
    endGame()
})

