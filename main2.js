const toggleBtn = document.querySelector('.navbar__toggleBtn');
const menu = document.querySelector('.navbar__menu');
const links = document.querySelector('.navbar__links');

toggleBtn.addEventListener('click',()=>{
      menu.classList.toggle('active');
      links.classList.toggle('active');
});



var i = 0;

function click_event()
{
    var add = document.getElementById("input").value;

    /* 어떠한 글도 입력하지않을 경우 */
    if(!add)
    {
        alert('Please input your list')
    }
    else
    {
        /* 글 추가 기능 */
        additional(add, i, 'node', 'list');
        /* 완료 버튼 */
        doneBotton(i);
        /* 제거 버튼 생성 */
        removeButton(i);
        /*개행 처리 태그*/
        Next(i, 'br', 'list');
        i++;
    }
}

/* 글 추가 기능 및 수정 */
function additional(text, n, id, spot)
{
    /* 입력한 값 SPAN 태그로 추가하기*/
    var node = document.createElement("SPAN");
    var textnode = document.createTextNode(text);
    node.id = id + n;
    node.appendChild(textnode);
    document.getElementById(spot).appendChild(node);

    node.onclick = function(){
        modify(node.id);
    }
    document.getElementById("input").value = "";
}

/* 완료 버튼 생성 */
function doneBotton(n)
{
    var done_btn = document.createElement("BUTTON");
    done_btn.id = 'done' + n;
    done_btn.className="fas fa-check";
    document.getElementById("list").appendChild(done_btn);

    done_btn.onclick = function(){
        done(n);
    };
}



/* To do list 목록의 삭제 버튼 */
function removeButton(n)
{
    var remove_btn = document.createElement("BUTTON");
    remove_btn.id = n;
    remove_btn.className="fas fa-minus";
    remove_btn.onclick = function(){
        remove(remove_btn.id);
    };
    document.getElementById("list").appendChild(remove_btn);
}

/* To do list에 있는 글과 버튼 삭제 */
function remove(n)
{
    var arr = ['node', 'br', 'done', ''];

    for(var i = 0; i < 6; i++)
    {
        var b = document.getElementById(arr[i] + n);
        b.style.display = "none";
    }
}

/* 글 수정 */
function modify(spot)
{
    var value = prompt("Modify", "What is your list?");

    /* 수정하는 글에 어떠한 내용도 넣지않는다면 기존의 글 유지 */
    if(value)
    {
        document.getElementById(spot).innerHTML = value;
    }
}

/* Done list 목록에 있는 글과 버튼 삭제 */
function remove_d(node, bnt, br)
{
    var arr = [node, bnt, br];

    for(var i = 0; i < 3; i++)
    {
        var a = document.getElementById(arr[i]);
        a.style.display = "none";
    }
}

/* br 태그 생성 */
function Next(n, id, spot)
{
    var br = document.createElement("BR");
    br.id= id + n;
    document.getElementById(spot).appendChild(br);
}
