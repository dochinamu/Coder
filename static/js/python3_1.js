var num=1;
var quiz_list = {
    1: {'type':'block', 'question1': `두 문자열을 이어 붙여서 출력할 때, <span class="highlight_text">+</span>를 사용한다고 배웠어요.`, 'question2': '<br/>',
    'bogi2': 'print("초당"', 'bogi3': '"두부")','block1': `+`, 'answer': ['1'], 'input_text1': true, 'output': '초당두부'},
    2: {'type':'block', 'question1': `하지만 숫자형 자료 <span class="highlight_text">2</span>와 문자열 <span class="highlight_text">“ice cream”</span>을 결합하려고 <span class="highlight_text">+</span>를 쓰면, 어떻게 될까요? `, 'question2': `아래처럼 두 가지의 타입(‘int’ and ‘str’)이 서로 다르기 때문에 연산을 수행할 수 없다는 내용의 에러가 뜨게 되죠.`, 
    'bogi2': 'print(2', 'bogi3': '"apples")', 'block1': `+`, 'answer': ['1'], 'input_text1': true, 'output': 'Traceback(most recent call last): <br> &nbsp &nbsp &nbsp File “script.py”, line 1, in <module> <br> &nbsp &nbsp &nbsp Print(2 + “ice cream”) <br/> TypeError: unsupported operand type(s) for +: ‘int’ and ‘str’'},
    3: {'type':'block', 'question1': `이번 시간에는 <span class="highlight_text">문자열 포맷팅</span>이라는 기능을 통해 서로 다른 종류의 값을 콘솔에 함께 출력하는 방법을 배워볼 거예요.`, 'question2': `<span class="highlight_text">f-string(서식 문자 리터럴)</span>을 사용하면, 숫자와 문자열을 에러 없이 함께 출력할 수 있습니다.`, 
    'bogi2': `print(`, 'bogi3': ')', 'block1': 'f"{2} apples"', 'answer': ['1'], 'input_text1': true, 'output': '2 apples'},
    4: {'type':'block', 'question1': `f-string문은 문자 <span class="highlight_text">f</span> 뒤에 우리가 포맷하고 싶은 문자열을 적어서 완성해요.`, 'question2': ``, 
    'bogi2': 'print(', 'bogi4': ')', 'block1': `“{6} apples”`, 'block2': `f`, 'input_text1': true, 'input_text2': true, 'answer': ['21'], 'output': '6 apples'},
    5: {'type':'typing', 'question1': `하나의 print문에서 여러 자료형의 값을 함께 출력하려면, 문자열 안에 중괄호 <span class = "highlight_text">{ }</span> 사이에 값을 작성해주면 돼요.`, 'question2': `<span class="highlight_text">2 apples</span>를 출력해볼까요?`, 
    'pre_blank': 'print(f"', 'after_blank': ' apples")', 'answer': ['{2}'], 'output': '2 apples'},
    6: {'type':'block', 'question1': `<span class="highlight_text">num_of_apples</span> 같은 변수를 중괄호 <span class = "highlight_text">{ }</span> 사이에 작성해주어도, 2 apples처럼 한 번에 출력할 수 있어요.`, 'question2': ``, 
    'bogi': 'num_of_apples = 2', 'bogi2':  'print(f"{', 'bogi3': '}apples")', 'block1': 'num_of_apples', 'block2': '5', 'answer': ['1'], 'output': '2apples'},
    7: {'type': 'typing', 'question1': '<span class = "highlight_text">new – eaten</span> 같은 표현식을 중괄호 <span class = "highlight_text">{ }</span> 사이에 작성해줄 수도 있어요', 'question2': '',
    'pre_blank': `new= 5 <br/> eaten = 2 <br/> print(f”{`, 'after_blank': '} uneaten apples")', 'answer': ['new - eaten', 'new- eaten', 'new -eaten', 'new-eaten'], 'answer_extra': 'new-eaten', 'output': '3 uneaten apples'}, 
    8: {'type': 'block', 'question1': '중괄호는 2개 이상 사용할 수도 있어요.', 'question2': '<span class="highlight_text">5 apples and 2 peaches</span>를 출력해볼까요?',
    'bogi2': `print(f”{`, 'bogi3': '} apples and {', 'bogi4': '} peaches)', 'block1': `0`, 'block2': `5`, 'block3': `2`, 'input_text1': true, 'input_text2': true, 'answer': ['23'], 'output': '5 apples and 2 peaches'}, 
    9: {'type': 'block', 'question1': 'f-string을 변수에 저장하여 재사용할 수도 있어요.', 'question2': '<span class="highlight_text">status</span>에 알맞은 값을 저장하여, <span class="highlight_text">5 peaches</span>를 출력해볼까요?',
    'bogi': `new = 5`, 'bogi2': ``, 'bogi5': '<br/> &nbsp print(status)', 'block1': `status`, 'block2': `f”{new} peaches” `, 'block3': `=`, 'input_text1': true, 'input_text2': true, 'input_text3': true, 'answer': ['132'], 'output': '5 peaches'}, 
    10: {'type': 'multiple', 'question1': '<span class="highlight_text">f-string</span>의 용도는 무엇일까요?', 'question2': '',
    'choice1': `문자열 값끼리 출력하기 위함`, 'choice2': `자료형이 서로 다른 값을 문자열에서 한꺼번에 출력하기 위함`, 'answer': ['2']}, 
    11: {'type': 'multiple', 'question1': '<span class="highlight_text">f-string</span>으로 숫자형 값을 출력하고 싶다면 어떻게 해야 할까요?', 'question2': '',
    'choice1': `중괄호 {} 사이에 값을 입력한다.`, 'choice2': 'f-string으로는 숫자형 값을 출력할 수 없다.', 'answer': ['1']}, 
    12: {'type': 'typing', 'question1': '<span class="highlight_text">f-string</span>과 변수 <span class="highlight_text">degrees</span>를 사용하여 <br/> <span class="highlight_text">현재 온도: 70F</span>를 출력해보세요.', 'question2': '',
    'pre_blank': `degrees = 70 <br/> print(`, 'after_blank': ')', 'answer': ['f"현재 온도: {degrees}F"', , `f“현재 온도: {degrees}F”`], 'output': '현재 온도: 70F'}, 
};
const num_list = ["","2","3","4","5"]
const num_list_for_input = ["1", "2", "3"]
const num_list_for_block = ["1", "2", "3"]

var value='';
$('#text1').html(quiz_list[num]['question1'])
$('#text2').html(quiz_list[num]['question2'])
$('.block1').html(quiz_list[num]['block1'])
$('.block2').html(quiz_list[num]['block2'])
$('.block3').html(quiz_list[num]['block3'])


$('.bogi2').hide()
$('.bogi3').hide()
$('.bogi4').hide()
$('.bogi5').hide()
$('.block2').hide()
$('.block3').hide()
if (num === 1 || num === 2) {
    $('.bogi2').show()
    $('.bogi2').html(quiz_list[num]['bogi2'])
    $('.bogi3').show()
    $('.bogi3').html(quiz_list[num]['bogi3'])
    $('#input_text2').hide(); $('#input_text3').hide();
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
        location.href='complete_p3_1.html';

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
        $('#input_text').attr("size", '1px');
        $('#input_text').show();

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
            $('.bogi' + it).show();
            $(".bogi" + it).html(quiz_list[num]["bogi" + it]);
          } else {
            $('.bogi' + it).hide();
          }})
        
        num_list.map((it) =>
          {if (("input_text" + it) in quiz_list[num]) {
            $('#input_text' + it).show();
          } else {
            $('#input_text' + it).hide();
          }})
        
        if (num === 4) {
            $('.block2').show();
        } else if (num === 9) {
            $('.block3').show();
        }
        // else if (num === 10) {
        //     $('.code_background').attr('style', 'height: 50%')
        // }

        $('.block1').html(quiz_list[num]['block1'])
        $('.block2').html(quiz_list[num]['block2'])
        $('.block3').html(quiz_list[num]['block3'])
        $('.blocks').show()
    } 
    
    $("#"+quiz_list[num]['type']).show()
    if (num === 8) {$(".block3").show()}
    if (num === 10) {$(".code_background").hide()}
    if (num === 12) {
        $(".code_background").show()}
    } 
}

function delete_key() {
    if ($('#input_text3').attr('value') !== "") {
        $('#input_text3').attr('value', "")
        value = value.slice(0, -1);
        console.log('3번 지움', value)
        if (value === "") {
            $('.submit_btn').attr("disabled", true)
        }
    } else if ($('#input_text2').attr('value') !== "") {
        $('#input_text2').attr('value', "")
        value = value.slice(0, -1);
        console.log('2번 지움', value)
        if (value === "") {
            $('.submit_btn').attr("disabled", true)
        }
    } else if ($('#input_text1').attr('value') !== "") {
        $('#input_text1').attr('value', "")
        value = value.slice(0, -1);
        console.log('1번 지움', value)
        if (value === "") {
            $('.submit_btn').attr("disabled", true)
        }
    } else {
        return;
    }
}


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
    $('#input_text').attr('size', $('#input_text').val().length+1)
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
        
        $('#input_text1').attr("size", $('#input_text1').val().length+1)

    } else {
        if (num === 1 || num === 2 || num === 3  || num === 6) {
            return;
        }
        var input_value = $('#input_text2').attr('value')
        if(input_value === "") {
            value += '1'
            console.log(value)
            $('#input_text2').attr("value", $('.block1').html())
            $('#input_text2').attr("size", $('#input_text2').val().length)

        } else {
            if(num === 4 || num === 8) {
                return;
            } else {
            var input_value = $('#input_text3').attr('value')
            if(input_value === "") {
                value += '1'
                console.log(value)
                $('#input_text3').attr("value", $('.block1').html())
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
        if (num === 1 || num === 2 || num === 3  || num === 6) {
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
            if(num === 4 || num === 8) {
                return;
            }
            var input_value = $('#input_text3').attr('value')
            if(input_value === "") {
                value += '2'
                console.log(value)
                $('#input_text3').attr("value", $('.block2').html())
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
        if ($('.block3').html() === '&lt;=') {
            $('#input_text1').attr("value", )                        
        } else {
            $('#input_text1').attr("value", $('.block3').html())
        }
        $('#input_text1').attr("value", $('.block3').html())
        $('#input_text1').attr("size", $('#input_text1').val().length) 
    } else {
        if (num === 1 || num === 2 || num === 3  || num === 6) {
            return;
        }
        var input_value = $('#input_text2').attr('value')
        if(input_value === "") {
            value += '3'
            console.log(value)
            //만약 block 내용이 <=이라면 <=를 입력해줘!        
            if ($('.block3').html() === '&lt;=') {
                $('#input_text2').attr("value", '<=')            
            } else {
                $('#input_text2').attr("value", $('.block3').html())
            }
            $('#input_text2').attr("size", $('#input_text2').val().length) 

        } else {
            if(num === 4 || num === 8) {
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
    if (quiz_list[num]['answer'].includes(value) || ((num === 7) && (quiz_list[num]['answer'].includes(value) && (value2 === quiz_list[12]['answer_extra'])))) {
        console.log('정답~')
        $('.blocks').hide();
        if ('output' in quiz_list[num]) {
            $('.output-code').html(quiz_list[num]['output'])
            console.log(quiz_list[num]['output'])
            if (quiz_list[num]['type'] === 'block') {
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

$('.block_delete').click(function() {
    delete_key();
})