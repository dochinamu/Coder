var num=1;
var quiz_list = {
    1: {'type':'block', 'question1': '<span class="highlight_text">&#60;</span>는 연산자 왼쪽에 있는 숫자가 오른쪽에 있는 숫자보다 작을 때, True를 결과로 반환합니다.', 'question2': '아래 빈칸에 숫자를 입력하여, <span class="highlight_text">True</span>를 출력해보세요.',
    'bogi2': 'print(', 'bogi3': '<', 'bogi4': ')','block1': `235`, 'block2': '1', 'block3': '=', 'answer': '21', 'input_text1': true, 'input_text2': true, 'output': 'True'},
    2: {'type':'block', 'question1': `<span class="highlight_text">&#60</span>는 연산자 왼쪽에 있는 숫자가 오른쪽에 있는 숫자보다 크기가 작지 않으면, False를 결과로 반환합니다.`, 'question2': `아래 빈칸에 숫자를 입력하여, <span class="highlight_text">False</span>를 출력해보세요.`, 
    'bogi2': 'print(', 'bogi3': '<', 'bogi4': ')','block1': `235`, 'block2': '1', 'block3': '=', 'answer': '12', 'input_text1': true, 'input_text2': true, 'output': 'False'},
    3: {'type':'block', 'question1': `<span class="highlight_text">></span>는 연산자 왼쪽에 있는 숫자가 오른쪽에 있는 숫자보다 크면, True 결과로 반환합니다.`, 'question2': '아래 빈칸에 숫자를 입력하여, <span class="highlight_text">True</span>를 출력해보세요.',
    'bogi2': 'print(', 'bogi3': '<', 'bogi4': ')','block1': `101`, 'block2': '90', 'block3': '=', 'answer': '21', 'input_text1': true, 'input_text2': true, 'output': 'True'},
    4: {'type':'multiple', 'question1': `연산자 <span class="highlight_text">></span>의 역할은 무엇인가요?`, 'question2': ``, 
    'choice1': `숫자끼리 값이 같은지 비교하는 역할`, 'choice2': `숫자가 다른 숫자보다 값이 큰지 비교하는 역할`, 'answer': '2'},
    5: {'type':'multiple', 'question1': `이 코드는 콘솔에 어떤 결과를 출력할까요?`, 'question2': ``, 
    'default_code': 'print( 1 < 1 )', 'choice1': `True`, 'choice2': `False`, 'answer': '2', 'output': 'False'},
    6: {'type':'block', 'question1': `<span class="highlight_text"><=</span>는 연산자 왼쪽에 있는 숫자가 오른쪽에 있는 숫자보다 작거나 같을 때, True를 결과로 반환합니다. 반대로, 왼쪽 숫자가 오른쪽 숫자보다 크다면 False를 반환해요`, 'question2': `아래 빈칸에 숫자를 입력하여, <span class="highlight_text">True</span>를 출력해보세요.`, 
    'bogi2': 'print(', 'bogi3': '<=', 'bogi4': ')', 'block1': `3`, 'block2': `1`, 'block3': '없음', 'answer': '21', 'input_text1': true, 'input_text2': true, 'output': 'True'},
    7: {'type': 'block', 'question1': '<span class="highlight_text">>=</span>는 연산자 왼쪽에 있는 숫자가 오른쪽에 있는 숫자보다 작거나 같을 때, True를 결과로 반환합니다.  반대로, 왼쪽 숫자가 오른쪽 숫자보다 작다면 False를 반환해요', 'question2': '아래 빈칸에 숫자를 입력하여, <span class="highlight_text">True</span>를 출력해보세요.',
    'bogi2': `print(`, 'bogi3': '>=', 'bogi4': ')', 'block1': '3099', 'block2': '100', 'block3': '없음', 'answer': '12', 'input_text1': true, 'input_text2': true, 'output': 'True'}, 
    8: {'type': 'block', 'question1': '할당연산자 <span class="highlight_text">=</span>을 사용해서 비교 연산의 결과를 변수에 저장할 수 있어요.', 'question2': '1과 15를 비교 연산한 결과를 result에 저장한 후, result의 값으로 <span class="highlight_text">False</span>를 출력하도록 코드를 완성해보세요.',
    'bogi2': `result`, 'bogi3': '1 <= 15','bogi5': '<br/> &nbsp; print(result)', 'block1': '=', 'block2': '<=', 'block3': '>=', 'answer': '1', 'input_text1': true, 'output': 'False'}, 
    9: {'type':'block', 'question1': `비교 연산자를 사용하면 변수의 값끼리 비교할 수도 있어요.`, 'question2': `min과 max의 비교 연산 결과를 result에 저장한 후, result의 값으로, <span class="highlight_text">True</span>를 출력해보세요.`, 
    'bogi': `min = 5 <br/> max = 10`, 'bogi2': `result = min`, 'bogi3': `max <br/> &nbsp; print(result)`, 'answer': '2', 'output': 'True'},    
    10: {'type':'multiple', 'question1': `숫자가 최소 21 이상이라는 것을 확인하려면 어떤 연산자를 사용해야 할까요?`, 'question2': ``, 
    'choice1': `==`, 'choice2': `>=`, 'answer': '2'},    
    11: {'type':'typing', 'question1': `비교연산자를 사용하여 변수 battery_level의 값이 <span class="highlight_text">20보다 작거나 같은지 비교</span>하고 그 값을 <span class="highlight_text">low에 저장</span>해주세요.`, 'question2': ``,
    'pre_blank': `battery_level = 10 <br/> low`, 'after_blank': `battery_level`, 'after_addblank': '20 <br/> print("low battery: ") <br/> print(low)', 'answer': '=', 'answer2': '<=', 'output': "low battery: <br/> True"}, 
    12: {'type':'multiple', 'question1': `이 코드는 콘솔에 어떤 결과를 출력할까요?`, 'question2': ``, 
    'default_code': `battery_level = 10 <br/> low = battery_level <= 20 <br/> print(low)`, 'choice1': `True`, 'choice2': `False`, 'answer': '1', 'output': 'True'}, 
};
const num_list = ["","2","3","4","5"]
const num_list_for_input = ["1", "2", "3"]
const num_list_for_block = ["1", "2", "3"]

var value='';
var value_add='';
$('#text1').html(quiz_list[num]['question1'])
$('#text2').html(quiz_list[num]['question2'])
$('.bogi2').hide()
$('.bogi3').hide()
$('.bogi4').hide()
$('.bogi5').hide()

if (num === 1) {
    $('.bogi2').show()
    $('.bogi2').html(quiz_list[num]['bogi2'])
    $('.bogi3').show()
    $('.bogi3').html(quiz_list[num]['bogi3'])
    $('.bogi4').show()
    $('.bogi4').html(quiz_list[num]['bogi4'])
    $('#input_text3').hide();
}

function next() {
    //번호 키우기
    num++;
    value='';
    $('#output').hide()
    $('.output_t').hide()
    $('.output_m').hide()
    if (num > Object.keys(quiz_list).length) {
        console.log(num);
        location.href='complete_p2_1.html';
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
        $('#input_text').show()
        $('#input_text').val("");
        $('#input_text_add').val("");
        $('#pre_blank').html(quiz_list[num]['pre_blank']);
        $('#after_blank').html(quiz_list[num]['after_blank']); 
        $('#after_addblank').html(quiz_list[num]['after_addblank']); 
     

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
        
    
        if (num === 5 || num === 6) {
            $('.block3').hide();
        } else if (num===8){
            $('.block3').show();
        } 

        $('.block1').html(quiz_list[num]['block1'])
        $('.block2').html(quiz_list[num]['block2'])
        $('.block3').html(quiz_list[num]['block3'])
        $('.blocks').show()
    } 
    
    $("#"+quiz_list[num]['type']).show()
    if (num === 4 ||  num === 10) {
        $(".code_background").hide()
        $(".file_name").hide()
    } else if (num === 5 || num === 11) {
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

$('#input_text_add').on("input", function (e) {
    $('#input_text_add').attr('size', $('#input_text_add').val().length)    
})


//[블록입력형] 블록 1: value에 버튼 id 누적 + 제출 버튼 활성화 + 버튼 한 번 클릭 시 input 하나의 placeholder 내용에 버튼 내용 띄우기 
$('.block1').click(function () {
    $('.submit_btn').attr("disabled", false)
    var input_value = $('#input_text1').attr('value')
    if (input_value === "") {
        value += '1'
        console.log(value)
        $('#input_text1').attr("value", $('.block1').html())
        $('#input_text1').attr("size", $('#input_text1').val().length)

    } else {
        if (num === 9 || num === 8) {
            return;
        }
        var input_value = $('#input_text2').attr('value')
        if(input_value === "") {
            value += '1'
            console.log(value)
            $('#input_text2').attr("value", $('.block1').html())
            $('#input_text2').attr("size", $('#input_text2').val().length)

        } else {
            if(num === 1 || num === 2 || num === 3) {
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
        if (num === 8 || num === 9 ) {
            $('#input_text1').attr("value", '<=')
        } else{
            $('#input_text1').attr("value", $('.block2').html())
        }
            $('#input_text1').attr("size", $('#input_text1').val().length)
            if (num === 9 || num === 8) {
                return;
            }                 
    } else {
        var input_value = $('#input_text2').attr('value')
        if(input_value === "") {
            value += '2'
            console.log(value)
            if (num === 8) {
                $('#input_text2').attr("value", '<=')
            } else{
                $('#input_text2').attr("value", $('.block2').html())
            }
                $('#input_text2').attr("size", $('#input_text2').val().length)                 } else {
            if(num === 1 || num === 2 || num === 3) {
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
        if (num === 8 || num===9) {
            $('#input_text1').attr("value", '>=')
        } else(
            $('#input_text1').attr("value", $('.block3').html())
        )
        $('#input_text1').attr("size", $('#input_text1').val().length) 
        if (num === 9 || num === 8) {
            return;
        }
    } else {
        
        var input_value = $('#input_text2').attr('value')
        if(input_value === "") {
            value += '3'
            console.log(value)
            if (num === 8) {
                $('#input_text2').attr("value", '>=')
            } else(
                $('#input_text2').attr("value", $('.block3').html())
            )
                $('#input_text2').attr("size", $('#input_text2').val().length) 

        } else {
            if(num === 1 || num === 2 || num === 3) {
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
    
    // 선지 버튼들 비활성화 하는 거 뭐 때문인지는 모르는데 안 됨 ㅠㅋ
    // $(".choice_btn").attr("disalbed", true);

    //[타이핑형] 답 저장: 입력할 때마다 value값에 저장하려니 console 차는 게 싫어서, '제출'할 때 저장함 
    if (quiz_list[num]['type'] === 'typing') {
        value = $('#input_text').val()
        value_add = $('#input_text_add').val()
        console.log('제출한 답?', value)
        console.log('진짜 답은?', quiz_list[num]['answer'])
    }

    //정답 비교하고, 각 문구/버튼 띄움
    if (value === quiz_list[num]['answer']) {
        if (quiz_list[num]['answer'] === value) {
            if('answer2' in quiz_list[num] && value_add !== quiz_list[num]['answer2']) {
                console.log('제발제발')
                $("#not_correct").show();
                return;
            }
        }
        console.log('정답~')
        $('.blocks').hide();
        if ('output' in quiz_list[num]) {
            console.log('output 있어~')
            $('.output-code').html(quiz_list[num]['output'])
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