var num=1;
var quiz_list = {
    1: {'type':'block', 'question1': `=을 2개 이어붙인 <span class="highlight_text">==</span>를 사용하면, 문자열끼리 같은지 비교할 수 있어요. `, 'question2': '(=과 헷갈리지 않도록 주의하여 기억해둡시다!)',
    'bogi2': 'print("apples"', 'bogi3': '"apple")','block1': `==`, 'block2': '>=', 'block3': '!=', 'answer': ['1'], 'input_text1': true, 'output': 'True'},
    2: {'type':'block', 'question1': "만약 두 값이 같지 않다면, 결과로 False를 반환합니다. ", 'question2': `아래 코드를 완성하여 False를 출력해보세요!`, 
    'bogi2': 'print("apples"', 'bogi4': ')', 'block1': `==`, 'block2': `"orange"`, 'answer': ['12'], 'input_text1': true, 'input_text2': true, 'output': 'False'},
    3: {'type':'block', 'question1': `<span class="highlight_text">==</span>을 사용해서 변수가 저장하고 있는 값이 같은지도 비교할 수 있어요.`, 'question2': `<span class="highlight_text">fruit_1</span>과 <span class="highlight_text">fruit_2</span>에 문자열을 저장한 뒤, 두 변수의 값이 같은지 비교해볼까요?`, 
    'bogi2': `fruit_1`, 'bogi3': '"apple"" <br/> &nbsp; fruit_2', 'bogi4': `"orange <br/> &nbsp; print( fruit_1`, 'bogi5': `fruit_2 )`, 'block1': '==', 'block2': '=', 'answer': ['221'], 'input_text1': true, 'input_text2': true, 'input_text3': true, 'output': 'False'},
    4: {'type':'block', 'question1': `<span class="highlight_text">!=</span>를 사용하면, 문자열끼리 다른지 확인할 수 있어요. (==과는 정반대의 의미예요!)`, 'question2': ` 아래처럼 두 문자열의 값이 서로 다르다면 <span class="highlight_text">True</span>를 반환한답니다.`, 
    'bogi2': 'print("subscribed"', 'bogi3': '"alarm")','block1': `=`, 'block2': `>=`, 'block3': `!=`, 'answer': ['3'], 'input_text1': true, 'output': 'True'},
    5: {'type':'block', 'question1': `반대로 두 문자열의 값이 같을 때 <span class="highlight_text">!=</span>를 사용하면, <span class="highlight_text">False</span>를 반환해요. `, 'question2': `아래의 코드를 완성하여 False를 출력해보세요!`, 
    'bogi2': 'print("subscribed"', 'bogi3': '"subscribed")', 'block1': `==`, 'block2': `!=`, 'block3': '=', 'answer': ['2'], 'input_text1': true, 'output': 'False'},
    6: {'type':'block', 'question1': `<span class="highlight_text">=</span>기호를 사용해서 비교 연산의 결과를 변수에 저장할 수 있어요.`, 'question2': `<span class="highlight_text">( )</span>는 괄호 사이에 적은 <span class="highlight_text">"alarm" != "alarm"</span> 연산을 먼저 실행시키라는 의미예요.`, 
    'bogi2' : 'same', 'bogi3': '("alarm" != "alarm")', 'block1': `==`, 'block2': `=`, 'block3': '!=', 'answer': ['2'], 'input_text1': true},
    7: {'type': 'multiple', 'question1': '<span class="highlight_text">False</span>를 반환하는 비교 연산은 어떤 것일까요?', 'question2': '',
    'choice1': `"apple" != "orange"`, 'choice2': '“apple”== “black”', 'answer': ['2']}, 
    8: {'type': 'multiple', 'question1': '이 코드는 콘솔에 어떤 결과를 출력할까요?', 'question2': '',
    'default_code': `print(“orange” != “yellow”) <br/> print(“apple” == “red”)`, 'choice1': 'True <br/> False', 'choice2': 'False <br/> True', 'answer': ['1']}, 
    9: {'type':'block', 'question1': `wallpaper에 알맞은 값을 저장하여, 콘솔에 False를 출력해보세요.`, 'question2': ``, 
    'bogi2': `wallpaper = `, 'bogi3': `<br/> &nbsp print(wallpaper != "dog.png")`, 'block1': `"dog.png"`, 'block2': `"cat.png"`,'answer': ['1'], 'output': 'False'},    
    10: {'type':'block', 'question1': `big_city와 small_city의 값을 비교하여 True와 False를 차례대로 출력해보세요.`, 'question2': ``, 
    'bogi': `big_city = "New York" <br/> small_city = "Seoul"`, 'bogi2': `print(big_city`, 'bogi3': `small_city) <br/> &nbsp print(big_city`, 'bogi4': `small_city)`, 'block1': '==', 'block2': '!=', 'input_text1': true, 'input_text2': true, 'answer': ['21'], 'output': 'True <br/> False'},    
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
$('.block3').hide()
if (num === 1) {
    $('.bogi2').show()
    $('.bogi2').html(quiz_list[num]['bogi2'])
    $('.bogi3').show()
    $('.bogi3').html(quiz_list[num]['bogi3'])
    $('.block3').show()
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
        location.href='complete_p2_2.html';
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
    $(".progress-bar").attr("style", "width: calc(100/10*" + num + "%)");
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
        
    
        if (num === 2 || num === 6) {
            $('.block3').hide();
        } else if (num === 4) {
            $('.block3').show();
        } else if (num === 10) {
            $('.code_background').attr('style', 'height: 50%')
        }

        $('.block1').html(quiz_list[num]['block1'])
        $('.block2').html(quiz_list[num]['block2'])
        $('.block3').html(quiz_list[num]['block3'])
        $('.blocks').show()
    } 
    
    $("#"+quiz_list[num]['type']).show()
    if (num === 7) {$(".code_background").hide()}
    if (num === 8) {
        $("#default_code").html(quiz_list[num]["default_code"])
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

$('.first_next_btn').click(function() {
    setTimeout(() => $(".progress-bar").attr("style", "width: calc(100/10*1%)"), 500);
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
        if (num === 1 || num === 4 || num === 5 || num === 6 || num === 9) {
            return;
        }
        var input_value = $('#input_text2').attr('value')
        if(input_value === "") {
            value += '1'
            console.log(value)
            $('#input_text2').attr("value", $('.block1').html())
            $('#input_text2').attr("size", $('#input_text2').val().length)

        } else {
            if(num === 2 || num === 10) {
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
        if (num === 1 || num === 4 || num === 5 || num === 6 || num === 9) {
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
            if(num === 2 || num === 10) {
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
        if (num === 1 || num === 4 || num === 5 || num === 6 || num === 9) {
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
            if(num === 2 || num === 10) {
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