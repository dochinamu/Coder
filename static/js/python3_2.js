var num=1;
var quiz_list = {
    1: {'type':'typing', 'question1': `<span class = "highlight_text">if문</span>을 사용하면, 상황별로 코드를 실행하거나 실행하지 않는 식으로 다르게 실행할 수 있어요.`, 'question2': '<span class = "highlight_text">if</span>를 입력해볼까요?',
    'pre_blank': '','after_blank': 'True: <br/> &nbsp &nbsp &nbsp print("Hello!")', 'bogi3': 'sweet','block1': `"`, 'answer': ['if'], 'input_text1': true, 'output': 'Hello!'},
    2: {'type':'block', 'question1': `<span class = "highlight_text">if문</span>은 if 뒤에 나오는 불린의 값이 <span class = "highlight_text">True</span>일 때만 실행됩니다. ‘만약 무언가 true(참)라면, 이걸 해!’라고 지시하는 거예요`, 'question2': `<span class = "highlight_text">Hello!</span>를 콘솔에 출력해볼까요?`, 
    'bogi2': 'if', 'bogi3': `: <br/> &nbsp &nbsp &nbsp print("Hello!")`, 'block1': `True`, 'block2': `False`, 'answer': ['1'], 'input_text1': true, 'output': 'Hello!'},
    3: {'type':'block', 'question1': `반대로 코드를 실행하지 않고 skip하고 싶다면, 불린의 값을 <span class = "highlight_text">False</span>로 설정하면 된답니다`, 'question2': `print("Hello!") 코드를 실행하지 않고 skip하도록 코드를 완성해주세요.`, 
    'bogi2': `if`, 'bogi3': `: <br/> &nbsp &nbsp &nbsp print("Hello!")`, 'block1': `True`, 'block2': `False`, 'answer': ['2'], 'input_text1': true, 'output': ''},
    4: {'type':'block', 'question1': `True, False와 같은 <span class = "highlight_text">조건(conditions)</span>은 들여쓰기 된 코드를 실행할지, skip할지 결정합니다.`, 'question2': `조건은 <span class = "highlight_text">if</span>와 <span class = "highlight_text">colon(:)</span> 사이에 작성해요 (colon을 빼먹지 않도록 주의합시다!)`, 
    'bogi2': '&nbsp', 'bogi5': '<br/> &nbsp &nbsp &nbsp  &nbsp print("Hello!")', 'block1': `:`, 'block2': `True`, 'block3': `if`, 'answer': ['321'], 'output': 'Hello!'},
    5: {'type':'multiple', 'question1': `이 코드는 콘솔에 어떤 결과를 출력할까요?`, 'question2': ``, 
    'default_code': 'if False: <br/> &nbsp &nbsp &nbsp print("3 2 1 Go!”)', 'choice1': '3 2 1 Go!', 'choice2': `들여쓰기 된 코드를 skip하기 때문에 아무것도 출력되지 않는다.`, 'answer': ['2'], 'output': ''},
    6: {'type':'block', 'question1': `if문은 코드 블록의 실행 여부를 결정합니다. `, 'question2': `코드 블록은 아래처럼 (tab을 통해) <span class = "highlight_text">들여쓰기</span>를 해서 코드를 작성한답니다. if문을 완성해봅시다.`, 
    'bogi2': `&nbsp`, 'bogi3': `<br/> &nbsp &nbsp &nbsp &nbsp`, 'block1': `print("Paris”)`, 'block2': `if True:`, 'input_text1': true, 'input_text2': true, 'answer': ['21'], 'output': 'Paris'},
    7: {'type': 'block', 'question1': '코드 블록은 얼마든지 길어질 수 있어요.', 'question2': '단, 하나의 코드 블록에선 들여쓰기가 일정하게 유지되어야 합니다. <span class = "highlight_text">Hello!</span>를 출력하는 print()문을 작성해볼까요?',
    'bogi': `if True:`,'bogi2': '&nbsp', 'bogi3': `(`, 'bogi4': `) <br/> &nbsp &nbsp &nbsp print("I'm a code block)`, 'block1': '"Hello!"', 'block2': 'print', 'input_text1': true, 'input_text2': true, 'answer': ['21'], 'output': `Hello! <br/> I'm a code block`}, 
    8: {'type': 'typing', 'question1': '불린 값인 True를 바로 입력하지 않고, <span class = "highlight_text">greet</span>과 같이 True 값을 저장하는 변수를 조건으로 사용할 수도 있어요', 'question2': '',
    'pre_blank': `greet = True <br/> if`, 'after_blank': ': <br/> &nbsp &nbsp &nbsp print("Hello!")', 'input_text1': true, 'answer': ['greet'], 'output': 'Hello!'}, 
    9: {'type': 'multiple', 'question1': '<span class = "highlight_text">print(“Low battery”)</span>가 if문 안에 없다는 걸 어떻게 알 수 있을까요?', 'question2': '',
    'default_code': `Is_charged = False <br/> if is_charged: <br/> &nbsp &nbsp &nbsp print(“charged”) <br/> print(“Low battery”)`, 'choice1': '들여쓰기', 'choice2': 'if문은 코드 블록에 더 긴 분량을 작성할 수 없기 때문에', 'answer': ['1'], 'output': 'Low battery'}, 
    10: {'type': 'multiple', 'question1': '이 코드는 콘솔에 어떤 결과를 출력할까요?', 'question2': '',
    'default_code': `is_online = True <br/> if is_online: <br/> &nbsp &nbsp &nbsp print("I'm online”)`,  'answer': ['2'], 'choice1': 'is_online이 불리안형이 아니므로 코드가 실행되지 않아 아무것도 출력되지 않는다', 'choice2': `I'm online`, 'output': `I'm online`}, 
    11: {'type': 'multiple', 'question1': '이 코드는 콘솔에 어떤 결과를 출력할까요?', 'question2': '',
    'default_code': `if False: <br/> &nbsp &nbsp &nbsp print(“Loading…”) <br/> print(“Done!”)`, 'choice1': 'Done!', 'choice2': 'Loading…', 'answer': ['1'], 'output': 'Done!'}, 
    12: {'type': 'block', 'question1': '<span class = "highlight_text">Be quiet, please</span>를 출력해보세요.', 'question2': '',
    'bogi2': `wakeup_time = `, 'bogi3': '<br/> &nbsp if wakeup_time: <br/> &nbsp &nbsp &nbsp print(“Wake up!”) <br/> &nbsp', 'input_text1': true, 'input_text2': true, 'block1': 'print("Be quiet, please")', 'block2': 'False', 'block3': 'True', 'answer': ['21'], 'output': 'Be quiet, please'}, 
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
        location.href='complete_p3_2.html';
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
        
    
        if (num === 2) {
            $('.block3').hide();
        }  else if (num === 4) {
            $('#input_text2').show();
            $('#input_text3').show();
            $('.block3').show();
        }
        else if (num === 12) {
            $('.code_background').attr('style', 'height: 40%')
        }

        $('.block1').html(quiz_list[num]['block1'])
        $('.block2').html(quiz_list[num]['block2'])
        $('.block3').html(quiz_list[num]['block3'])
        $('.blocks').show()
    } 
    
    $("#"+quiz_list[num]['type']).show()
    // if (num === 7) {$(".code_background").hide()}
    // if (num === 8) {$(".code_background").show()}

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
        if (num === 2 || num === 3) {
            return;
        }
        var input_value = $('#input_text2').attr('value')
        if(input_value === "") {
            value += '1'
            console.log(value)
            $('#input_text2').attr("value", $('.block1').html())
            $('#input_text2').attr("size", $('#input_text2').val().length)

        } else {
            if(num === 5 || num === 6 || num === 7 || num === 12) {
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
        if (num === 2 || num === 3) {
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
            if(num === 5 || num === 6 || num === 7 || num === 12) {
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
        if (num === 2 || num === 3) {
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
            if(num === 5 || num === 6 || num === 7 || num === 12) {
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
    if (quiz_list[num]['answer'].includes(value)) {
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


$('.block_delete').click(function() {
    delete_key();
})