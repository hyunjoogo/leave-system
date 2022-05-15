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

// fetch().then();

function makeTableData(data) {
  // row 만들기
  const tr = document.createElement('tr');

  // td 만들기
  for (const i in data) {
    if (i === 'id') {
      tr.className = `tr-${data[i]}`;
      continue;
    }
    const tableData = document.createElement('td');
    tableData.className = `user-${i}`;
    tableData.textContent = data[i];
    tr.appendChild(tableData);
  }

  tableList.appendChild(tr);
  /*
  <tr>
    <td>김현주</td>
    <td>10월 27일</td>
    <td>연차</td>
    <td>오후 반차</td>
    <td>0.5일</td>
    <td>13일</td>
    <td>그냥</td>
  </tr>
  */
}

dummyData.map((value) => {
  makeTableData(value);
});
