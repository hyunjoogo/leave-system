// eslint-disable-next-line import/extensions
import ModalHandler from './modalClass.js';

const dummyData = [
  {
    id: 1,
    name: '김현주',
    startDate: '2022-5-13',
    endDate: '2022-5-13',
    leaveType: '연차',
    useType: '일차',
    useDay: '-1',
    remainDay: '10.5',
    description: '떠나고 싶어요.',
  },
  {
    id: 2,
    name: '김민혁',
    startDate: '2022-5-12',
    endDate: '2022-5-12',
    leaveType: '연차',
    useType: '오후반차',
    useDay: '-0.5',
    remainDay: '10.5',
    description: '떠나고 싶어요.',
  },
  {
    id: 3,
    name: '김현주',
    startDate: '2022-5-12',
    endDate: '2022-5-12',
    leaveType: '연차',
    useType: '오후반차',
    useDay: '-0.5',
    remainDay: '10.5',
    description: '떠나고 싶어요.',
  },

];

const tableList = document.querySelector('.data-table');

let modalState = false;

// fetch().then();

function makeTableData(data) {
  // row 만들기
  const tr = document.createElement('tr');

  // td 만들기
  Object.keys(data).forEach((key) => {
    if (key === 'id') {
      tr.className = `tr-${data[key]}`;
      tr.setAttribute('data-id', data[key]);
    } else {
      const tableData = document.createElement('td');
      tableData.className = `user-${key}`;
      tableData.textContent = data[key];
      tr.appendChild(tableData);
    }
  });
  const tableData = document.createElement('td');
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = '삭제';
  deleteBtn.className = 'history-deleteBtn';
  deleteBtn.addEventListener('click', () => {
    console.log('삭제해야할 id', tr.getAttribute('data-id'));
    modalState = true;
    const options = { size: 'sm', backgroundColor: 'red' };
    const a = new ModalHandler(modalState, data, options);
    a.makeModalContent();
    a.open();
  });
  tableData.appendChild(deleteBtn);
  tr.appendChild(tableData);
  tableList.appendChild(tr);
}

// 모달만 띄우는 놈
// 모달 내용만 만들어주는 놈

dummyData.forEach((value) => {
  makeTableData(value);
});

// 눌렀을때 상세 모달창이 나오도록

// 1. 모달창을 각 화면에서 하나씩 추가를 해줄 것이냐?
// 2. 반복되는거니까...?
// 컴포넌트화 시키자
