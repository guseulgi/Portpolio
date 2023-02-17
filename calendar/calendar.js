const dayItem = document.querySelector('.part__week-day');
const dateInputField = document.querySelector('.contents__date > input:first-child');

const addItem = document.querySelector('.day > li');
const textInputField = document.querySelector('.contents__date > input:nth-child(2)');
const addItemBtn = document.querySelector('.btn');

let curTarget;

// 날짜 입력
let clickDateInfo = function(e) {
  curTarget = e.target;
  let tmpDate;

  // 에러 해결- 텍스트 노드가 있을 때만
  if((e.target.childNodes[0] === undefined) === false) {
    tmpDate = `${e.target.childNodes[0].textContent.trim()}`;
  } else {
    return;
  } 
  if(curTarget.tagName === "LI") {
    const dateNum = /[0-9]/;
    if(dateNum.test(tmpDate) === true) {
      dateInputField.value = `2023년 2월 ${tmpDate}일`;
    }
  }
}
dayItem.addEventListener('click', clickDateInfo);

// 추가 버튼
let addItemLi = function(e) {
  if(textInputField.value === "") {
    textInputField.placeholder = "스케쥴 입력이 필요합니다.";
    return;
  }
  const contentsItem = document.createElement('div');
  contentsItem.textContent = textInputField.value;
  contentsItem.addEventListener('click', function(e) {
    e.target.remove();
  });

  if(curTarget.tagName === "LI") {
    curTarget.appendChild(contentsItem);
  }

  textInputField.value = "";
}

addItemBtn.addEventListener('click', addItemLi);