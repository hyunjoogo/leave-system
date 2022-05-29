const tableList = document.querySelector('.data-table');

const typeDummyData = [
  {
    id: 1,
    name: '김현주',
    useType: {
      annual: 4, half: 4, sick: 2, alternative: 1,
    },

  },
  {
    id: 2,
    name: '김현조',
    useType: {
      annual: 3, half: 4, sick: 1, alternative: 2,
    },
  },
  {
    id: 3,
    name: '김민혁',
    useType: {
      annual: 6, half: 4, sick: 2, alternative: 3,
    },
  },

];

const makeTypeTable = (data) => {
  // row 만들기
  const tr = document.createElement('tr');

  // td 만들기
  Object.keys(data).forEach((key) => {
    if (key === 'id') {
      tr.className = `tr-${data[key]}`;
      tr.setAttribute('data-id', data[key]);
    } else if (key === 'useType') {
      const dataName = document.querySelectorAll('.table-header th');
      for (const i of dataName) {
        Object.keys(data.useType).forEach((useTypeName) => {
          if (useTypeName === i.dataset.name) {
            const tableData = document.createElement('td');
            tableData.className = `user-${useTypeName}`;
            tableData.textContent = `${data.useType[useTypeName]}`;
            tr.appendChild(tableData);
          }
        });
      }
    } else {
      const tableData = document.createElement('td');
      tableData.className = `user-${key}`;
      tableData.textContent = data[key];
      tr.appendChild(tableData);
    }
  });

  tableList.appendChild(tr);
};

typeDummyData.forEach((value) => {
  makeTypeTable(value);
});
