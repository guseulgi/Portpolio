const inputField = document.querySelector('.todo-input > input');
const sendBtn = document.querySelector('.btn.btn--send');
const todoList = document.querySelector('.todo-contents');

let addItem = function() {
  if(inputField.value === "") {
    inputField.setAttribute('placeholder', '내용을 입력해주세요!');
    return;
  }

  const itemLi = document.createElement('li');
  const liCheckBox = document.createElement('input');
  const textSpan = document.createElement('span');
  const liDeleteButton = document.createElement('button');

  // 텍스트 부분
  textSpan.textContent = inputField.value;

  // 체크박스
  liCheckBox.type = 'checkbox';
  liCheckBox.addEventListener('click', function(e) {
    if(liCheckBox.checked === true) {
      textSpan.style.textDecoration = 'line-through';
    } else {
      textSpan.style.textDecoration = 'none';
    }
  });

  // 삭제 버튼
  liDeleteButton.innerText = "삭제";
  liDeleteButton.addEventListener('click', function(e) {
    e.target.parentNode.remove();
  });
  liDeleteButton.classList.add('btn');
  liDeleteButton.classList.add('btn--delete');

  // li에 아이템 추가
  itemLi.appendChild(liCheckBox);
  // itemLi.textContent = inputField.value;
  itemLi.appendChild(textSpan);
  itemLi.appendChild(liDeleteButton);

  // ul에 최종 추가
  todoList.appendChild(itemLi);

  inputField.value = "";
  inputField.focus();
};

sendBtn.addEventListener('click', addItem);