var num=1;
var quiz_list = {
    1: {'type':'typing', 'question1': `이 프로그램은 <span class = "highlight_text">==</span> 연산자를 사용해서 유저가 제출한 답과 퀴즈 정답을 비교해요.`, 'question2': '',
    'pre_blank': 'answer = "바흐" <br/> if answer','after_blank': '"바흐": <br/> &nbsp &nbsp &nbsp print(answer + "가 정답입니다!")', 'answer': '==', 'input_text1': true, 'output': '바흐가 정답입니다!'},
    2: {'type':'block', 'question1': `또한 <span class = "highlight_text">!=</span> 연산자를 사용하면 <span class = "highlight_text">answer</span>가 “바흐”와 다른지 확인할 수 있어요.`, 'question2': ``, 
    'bogi': 'answer = "쇼팽"', 'bogi2': 'if answer', 'bogi3': `"바흐": <br/> &nbsp &nbsp &nbsp print(answer + "은 오답입니다!)`, 'block1': `= =`, 'block2': `!=`, 'block3': '=', 'answer': '2', 'input_text1': true, 'output': '쇼팽은 오답입니다!'},
    3: {'type':'block', 'question1': `지난 시간에 배웠던 비교 연산자는 if문에서도 사용할 수 있어요!  <span class = "highlight_text">age</span>가 20보다 크거나 같은지 확인해볼까요?`, 'question2': ``, 
    'bogi': 'age = 50', 'bogi2': `if`, 'bogi5': `: <br/> &nbsp &nbsp &nbsp print("성인입니다")`, 'block1': `>=`, 'block2': `age`, 'block3': `20`, 'answer': '213', 'input_text1': true, 'input_text2': true, 'input_text3': true, 'output': '성인입니다'},
    4: {'type':'block', 'question1': `<span class = "highlight_text">==</span>을 사용해서 변수 <span class = "highlight_text">is_day</span>와 불린형 값을 비교할 수도 있어요. `, 'question2': ``, 
    'bogi': 'time to sleep = True', 'bogi2': 'if', 'bogi4': 'True: <br/> &nbsp &nbsp &nbsp print("go to bed")', 'block1': `= =`, 'block2': `is_day`, 'input_text1': true, 'input_text2': true, 'answer': '21', 'output': 'go to bed'},
    5: {'type':'typing', 'question1': `변수 <span class = "highlight_text">pass_grade</span>에 값을 저장하고 if문의 조건식에 변수명을 작성하면, 같은 연산식을 여러 번 작성하지 않아도 되겠죠?`, 'question2': `이처럼 변수를 사용하면 연산 결과, 값을 재사용하기 좋답니다! (반복을 줄이면, 코드가 간결해지고 유지/보수도 간편해져요)`, 
    'pre_blank': 'score = 51 <br/> pass _grade = score > 50 <br/> if', 'after_blank': ': <br/> &nbsp &nbsp &nbsp print(pass_grade)', 'answer': 'pass_grade', 'output': 'True'},
    6: {'type':'multiple', 'question1': `if문 조건식을 작성할 때, 비교 연산에 사용하는 연산자는 무엇일까요?`, 'question2': ``, 
    'choice1': `==, !=만 사용`, 'choice2': `>, <, >=, <=, ==, != 모두 사용`, 'answer': '2'},
    7: {'type': 'multiple', 'question1': '조건식에 <span class = "highlight_text">==</span>을 사용해서 비교할 수 있는 자료형은 무엇일까요?', 'question2': '',
    'choice1': `정수형과 문자열만`,'choice2': '정수형, 실수형, 문자열, 불린형', 'answer': '2'}, 
    8: {'type': 'block', 'question1': '<span class = "highlight_text">replay_times</span>의 값이 300보다 크거나 같다면 코드를 실행시키도록 조건식을 완성하세요', 'question2': '',
    'bogi': `song = "A lot" <br/> replay_times = 345`, 'bogi2': 'if', 'bogi5': ': <br/> &nbsp &nbsp &nbsp print("Your top song this week: "+song)', 'block1': '300', 'block2': '>=', 'block3': 'replay_times','input_text1': true, 'input_text2': true, 'input_text3': true, 'answer': '321', 'output': 'Your top song this week: A lot'}, 
    9: {'type': 'typing', 'question1': '변수 <span class = "highlight_text">today</span>의 값이 "Saturday"와 다르다면 코드 블록을 실행시키도록 조건식을 완성하세요', 'question2': '',
    'pre_blank': `today = "Sunday" <br/> if`, 'after_blank': '<br/> &nbsp &nbsp &nbsp print("Ring the alarm at 7:00")', 'answer': 'today != "Saturday":', 'answer2': 'today!="Saturday":', 'answer3': 'today!= "Saturday":', 'answer4': 'today !="Saturday":','output': 'Ring the alarm at 7:00'}, 
    10: {'type': 'typing', 'question1': '<span class = "highlight_text">age</span>가 18보다 큰지 비교해봅시다!', 'question2': '',
    'pre_blank': `can_drive = False <br/> age = 20 <br/> if`,  'after_blank': '<br/> &nbsp &nbsp &nbsp can_drive = True <br/> print(can_drive)', 'answer': 'age > 18:', 'answer2': 'age>18:', 'output': 'True'}, 
    11: {'type': 'block', 'question1': '<span class = "highlight_text">bag_full</span>의 값이 True와 같은지 비교하는 연산을 변수 <span class = "highlight_text">show_alert</span>에 저장해주세요.', 'question2': '',
    'bogi2': `bag_full = True <br/>`, 'bogi2': '&nbsp' , 'bogi5': '<br/> &nbsp &nbsp if show_alert: <br/> &nbsp &nbsp &nbsp &nbsp print("bag_full")', 'block1': 'bag_full = = True', 'block2': '=', 'block3': 'show_alert', 'input_text1': true, 'input_text2': true, 'input_text3': true, 'answer': '321', 'output': 'bag_full'}, 
};
const num_list = ["","2","3","4","5"]
const num_list_for_input = ["1", "2", "3"]
const num_list_for_block = ["1", "2", "3"]

var value='';
$('#text1').html(quiz_list[1]['question1'])
$('#text2').html(quiz_list[1]['question2'])
$('#pre_blank').html(quiz_list[num]['pre_blank'])
$('#after_blank').html(quiz_list[num]['after_blank'])


$('#typing').show()
$('#block').hide()
$('.output_t').hide()
if (num === 1) {
    $('.bogi2').show()
    $('.bogi2').html(quiz_list[num]['bogi2'])
    $('.bogi3').show()
    $('.bogi3').html(quiz_list[num]['bogi3'])
    $('#input_text3').hide();
}

function next() {
    //output 숨기기
    $('#output').hide()
    $('.output_t').hide()
    $('.output_m').hide()
    //번호 키우기
    num++;
    value='';
    if (num > Object.keys(quiz_list).length) {
        console.log(num);
        location.href='complete_p3_3.html';
        //location.href="{% url 'python1_1_complete' %}";

    } else {
        console.log('quiz num: ', num)
    //비활 상태의 제출 버튼 띄워!
    $('.submit_btn').attr("disabled", true)
    $('#submit').show();
    //질문 내용 바꿔!
    $("#text1").html(quiz_list[num]['question1'])
    $("#text2").html(quiz_list[num]["question2"]);

    //문제 형식이 바뀐다면, 이전 문제 틀 숨기기
    if (quiz_list[num-1]['type'] != quiz_list[num]['type']) {
        var preType = quiz_list[num-1]['type']
        $("#"+preType).hide()
    }

    //progress bar fill
    $(".progress-bar").attr("style", "width: calc(100/12*" + num + "%)");
    //객관식형: 테두리 색상 없애고 선지 바꾸고, 해당 틀 띄우기
    if (quiz_list[num]['type'] === 'multiple') {
        // for (var i=1; i < quiz_list[num]['choice_num']+1; i++) {
        //     console.log('i:', i)
        //     $("#choice"+String(i)).html(quiz_list[num]["choice"+String(i)]);
        // }
        $('.choice_btn').attr("style", "border: 1px solid rgb(170, 170, 170)")
        
        $("#default_code").html(quiz_list[num]["default_code"])
        
        $("#choice"+1).html(quiz_list[num]["choice"+1]);
        $("#choice"+2).html(quiz_list[num]["choice"+2]);
        // $("#choice"+3).html(quiz_list[num]["choice"+3]);
        // $("#choice"+4).html(quiz_list[num]["choice"+4]);
        

        console.log(quiz_list[num]['type'])
        // $("#"+quiz_list[num]['type']).show();       
    } //타이핑형: 입력된 내용 지우기 + 빈칸 앞 뒤 내용 바꾸고 틀 띄우기
    else if (quiz_list[num]['type'] === 'typing') {
        $('#input_text').val("");
        $('#input_text').show("");

        $('#pre_blank').html(quiz_list[num]['pre_blank']);
        $('#after_blank').html(quiz_list[num]['after_blank']); 
        

        // $("#"+quiz_list[num]['type']).show() 
    } 
    // 블록입력형: 입력된 내용 지우기 + 길이 초기화 + 블럭 내용 바꾸고 틀 띄우기
    else if (quiz_list[num]['type'] === 'block') {
        $('.bogi').html('')
        $('.bogi2').html('')
        $('.bogi3').html('')
        $('.bogi4').html('')
        $('.bogi4').html('')
        $('.underline').attr("value", "");
        $('.underline').attr("size", '1px')          

        num_list.map((it) =>
          {if (("bogi" + it) in quiz_list[num]) {
            console.log('있네~', it);
            $('.bogi' + it).show();
            $(".bogi" + it).html(quiz_list[num]["bogi" + it]);
          } else {
            console.log('없음', it);
            $('.bogi' + it).hide();
          }})
        
        num_list.map((it) =>
          {if (("input_text" + it) in quiz_list[num]) {
            console.log('있네~', it);
            $('#input_text' + it).show();
          } else {
            console.log('없음', it);
            $('#input_text' + it).hide();
          }})
        
    
        if (num === 4) {
            $('.block3').hide();
        }  else if (num === 8) {
            $('.block3').show();
        } 
        else if (num === 10) {
            $('.code_background').attr('style', 'height: 50%')
        }

        $('.block1').html(quiz_list[num]['block1'])
        $('.block2').html(quiz_list[num]['block2'])
        $('.block3').html(quiz_list[num]['block3'])
        $('.blocks').show()
    } 
    
    $("#"+quiz_list[num]['type']).show()
    if (num === 6) {
        $(".code_background").hide()
        $(".file_name").hide()        
    }
    if (num === 8) {
        $(".code_background").show()
        $(".file_name").show()
    }

    } 
}

function delete_key() {
    if ($('#input_text3').attr('value') !== "") {
        $('#input_text3').attr('value', "")
        value = value.slice(0, -1);
        console.log('3번 지움', value)
    } else if ($('#input_text2').attr('value') !== "") {
        $('#input_text2').attr('value', "")
        value = value.slice(0, -1);
        console.log('2번 지움', value)
    } else if ($('#input_text1').attr('value') !== "") {
        $('#input_text1').attr('value', "")
        value = value.slice(0, -1);
        console.log('1번 지움', value)

    } else {
        return;
    }
}

$('.first_next_btn').click(function() {
    setTimeout(() => $(".progress-bar").attr("style", "width: calc(100/12*1%)"), 500);
    $('.explanation').hide();
    $('.question').show();
})

//[객관식형] 선지 선택 시, 제출 버튼 활성화 + 값 받아와서 콘솔에 출력
$('.choice_btn').click(function() {
    $('.submit_btn').attr("disabled", false)
    value = $(this).prop('value');
    // 테두리 표시도 toggle 방식으로 수정해야 함
    // $('#choice'+value).attr('style', 'border: 2px solid blue')
    console.log('선택: ',value)
    
}) 

//[타이핑형] 뭐라도 입력해야 제출 버튼 활성화됨
$('#input_text').on("input", function (e) {
    $('#input_text').attr('size', $('#input_text').val().length)
    if ($('#input_text').val() != '') {
        $('.submit_btn').attr("disabled", false);
    } else {
        $('.submit_btn').attr("disabled", true);
    }
    
})


//[블록입력형] 블록 1: value에 버튼 id 누적 + 제출 버튼 활성화 + 버튼 한 번 클릭 시 input 하나의 placeholder 내용에 버튼 내용 띄우기 
$('.block1').click(function () {
    $('.submit_btn').attr("disabled", false)
    var input_value = $('#input_text1').attr('value')
    if (input_value === "") {
        value += '1'
        console.log(value)
        //만약 block 내용이 >=이라면 >=를 입력해줘!
        if ($('.block1').html() === '&gt;=') {
            $('#input_text1').attr("value", '>=')            
        } else {
            $('#input_text1').attr("value", $('.block1').html())
        }
        
        $('#input_text1').attr("size", $('#input_text1').val().length)

    } else {
        if (num === 2) {
            return;
        }
        var input_value = $('#input_text2').attr('value')
        if(input_value === "") {
            value += '1'
            console.log(value)
            //만약 block 내용이 >=이라면 >=를 입력해줘!
        if ($('.block1').html() === '&gt;=') {
            $('#input_text2').attr("value", '>=')            
        } else {
            $('#input_text2').attr("value", $('.block1').html())
        }
        
        $('#input_text2').attr("size", $('#input_text2').val().length)

        } else {
            if(num === 4) {
                return;
            } else {
            var input_value = $('#input_text3').attr('value')
            if(input_value === "") {
                value += '1'
                console.log(value)
                //만약 block 내용이 >=이라면 >=를 입력해줘!
                if ($('.block1').html() === '&gt;=') {
                    $('#input_text3').attr("value", '>=')            
                } else {
                    $('#input_text3').attr("value", $('.block1').html())
                }
                
                $('#input_text3').attr("size", $('#input_text3').val().length)
                } else {
                return;
            }
        }
        
    }      
    }   
})

//[블록입력형] 블록 2: 위와 동일
$('.block2').click(function () {
    $('.submit_btn').attr("disabled", false)
    var input_value = $('#input_text1').attr('value')
    if (input_value === "") {
        value += '2'
        console.log(value)
        //만약 block 내용이 >=이라면 >=를 입력해줘!
        if ($('.block2').html() === '&gt;=') {
            $('#input_text1').attr("value", '>=')            
        } else {
            $('#input_text1').attr("value", $('.block2').html())
        }
        $('#input_text1').attr("size", $('#input_text1').val().length) 
    } else {
        if (num === 2) {
            return;
        }
        var input_value = $('#input_text2').attr('value')
        if(input_value === "") {
            value += '2'
            console.log(value)
            // 만약 블럭 내용이 >=이라면 >=를 입력해줘
            if ($('.block2').html() === '&gt;=') {
                $('#input_text2').attr("value", '>=')            
            } else {
                $('#input_text2').attr("value", $('.block2').html())
            }
            $('#input_text2').attr("size", $('#input_text2').val().length) 
        } else {
            if(num === 4) {
                return;
            }
            var input_value = $('#input_text3').attr('value')
            if(input_value === "") {
                value += '2'
                console.log(value)
                // 만약 블럭 내용이 >=이라면 >=를 입력해줘
                if ($('.block2').html() === '&gt;=') {
                    $('#input_text3').attr("value", '>=')            
                } else {
                    $('#input_text3').attr("value", $('.block2').html())
                }
                $('#input_text3').attr("size", $('#input_text3').val().length) 
                } else {
                return;
            }
        }      
    }  
})

//[블록입력형] 블록 3: 위와 동일
$('.block3').click(function () {
    $('.submit_btn').attr("disabled", false)
    var input_value = $('#input_text1').attr('value')
    if (input_value === "") {
        value += '3'
        console.log(value)
        //만약 block 내용이 <=이라면 <=를 입력해줘!        

        $('#input_text1').attr("value", $('.block3').html())
        $('#input_text1').attr("size", $('#input_text1').val().length) 
    } else {
        if (num === 2) {
            return;
        }
        var input_value = $('#input_text2').attr('value')
        if(input_value === "") {
            value += '3'
            console.log(value)
            //만약 block 내용이 <=이라면 <=를 입력해줘!                       
            $('#input_text2').attr("value", $('.block3').html())
            $('#input_text2').attr("size", $('#input_text2').val().length) 

        } else {
            if(num === 4) {
                return;
            }
            var input_value = $('#input_text3').attr('value')
            if(input_value === "") {
                value += '3'
                console.log(value)
                $('#input_text3').attr("value", $('.block3').html())
                $('#input_text3').attr("size", $('#input_text3').val().length) 
            } else {
                return;
            }
        }      
    }   
})

//제출 버튼: 제출 폼 숨기기
$('.submit_btn').click(function() {
    $('#submit').hide();
    
    //[타이핑형] 답 저장: 입력할 때마다 value값에 저장하려니 console 차는 게 싫어서, '제출'할 때 저장함 
    if (quiz_list[num]['type'] === 'typing') {
        value = $('#input_text').val()
        console.log('제출한 답?', value)
        console.log('진짜 답은?', quiz_list[num]['answer'])
    }

    //정답 비교하고, 각 문구/버튼 띄움
    if (value === quiz_list[num]['answer'] ||value === quiz_list[num]['answer2']  ||value === quiz_list[num]['answer3']  ||value === quiz_list[num]['answer4']) {
        console.log('정답~')
        $('.blocks').hide();
        if ('output' in quiz_list[num]) {
            console.log('output 있어~')
            $('.output-code').html(quiz_list[num]['output'])
            console.log(quiz_list[num]['output'])
            if (quiz_list[num]['type'] === 'block') {
                console.log('뷰')
                $('#output').show();
            } else if (quiz_list[num]['type'] === 'typing') {
                $('.output_t').show();
            } else if (quiz_list[num]['type'] === 'multiple') {
                $('.output_m').show();
            }
        }
        $('#correct').show();
    } else {
        $("#not_correct").show();
    }
    if (quiz_list[num]['type'] === 'multiple') {$('#choice'+value).attr("style", "border: 2px solid blue")}

})

//재시도 버튼: 오답 문구 숨기고, 비활 상태의 제출 버튼 보이기 + (혹시 모르니) 저장했던 답안 지우기
$('.retry_btn').click(function() {
    $('#not_correct').hide();
    if (quiz_list[num]['type'] === 'typing') {
        $('#input_text').val('');
    } else if (quiz_list[num]['type'] === 'block') {
        $('#input_text1').attr("value", "");
        $('#input_text3').attr("value", "");
        $('#input_text1').attr("size", '1px')
        $('#input_text3').attr("size", '1px')                    
        $('#input_text2').attr("value", "");  
        $('#input_text2').attr("size", '1px')           
    } else if (quiz_list[num]['type'] === 'multiple') {
        $('#choice'+value).attr("style", "border: 1px solid rgb(170, 170, 170)")
    }
     $('.submit_btn').attr("disabled", true)
    value = ""; //필요 없는 코드일지도
    $('#submit').show();

})

//skip(오답)과 다음(정답) 버튼: 오답 문구 숨기고, next 함수 실행
$('.skip_btn').click(function() {
    $('#not_correct').hide();
    next();
})

$('.correct_btn').click(function() {
    $('#correct').hide();
    next();
})

var quiz_answer;
var clicked=false;
//small quiz 제작 프로젝트
$('.radio1').click(function() {
    quiz_answer = $('.radio1').val();
    clicked=true
})
$('.radio2').click(function() {
    quiz_answer = $('.radio2').val();
    clicked=true
})
$('.project_button1').click(function() {
    if (clicked == true) {    
        $('.project_button1').hide()
        $('.project_button2').show()
        if (quiz_answer === 'Bach') {
            $('.project_correct').html('정답!')
        } else {
            $('.project_correct').html('오답!')
        } 
    } else {
        return;
    }
    
})
$('.project_button2').click(function() {
    $('.project_button2').hide()
    $("input[type=radio]:checked")[0].checked = false;
    $('.project_button1').show()
    $('.project_correct').html('')
    clicked = false
})


$('.block_delete').click(function() {
    delete_key();
})