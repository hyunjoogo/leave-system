const loginForm = document.querySelector('.login_form');
const input = document.querySelector('#username');

const validityMessage = {
  badInput: '[커스텀 메세지] 잘못된 입력입니다.',
  patternMismatch: '[커스텀 메세지] 패턴에 맞게 입력하세요',
  rangeOverflow: '[커스텀 메세지] 범위를 초과하였습니다',
  rangeUnderflow: '[커스텀 메세지] 범위에 미달하였습니다',
  stepMismatch: '[커스텀 메세지] 간격에 맞게 입력하세요',
  tooLong: '[커스텀 메세지] 최대 글자 미만으로 입력하세요',
  tooShort: '[커스텀 메세지] 최소 글자 미만으로 입력하세요',
  typeMismatch: '[커스텀 메세지] 형식에 맞게 입력하세요',
  valueMissing: '[커스텀 메세지] 이 필드를 반드시 입력하세요',
};

const getMessage = validity => {
  for (const key in validityMessage) {
    if (validity[key]) {
      return validityMessage[key];
    }
  }
};

const onSubmit = event => {
  event.preventDefault();
  const username = document.querySelector('#username').value;
  const password = document.querySelector('#password').value;
  const userData = {
    username,
    password,
  };
  console.log(userData);

  // fetch('/login', {
  //     method: 'POST',
  //     headers: {
  //         'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(userData),
  // }).then(r => console.log(r))
  // token -> save
  // redirect where?
  // .catch(e => console.error(e))
  // server => error.message (1. password, 2. id, 3. server error)
};

function showError(input) {
  document.querySelector('.login-input').classList.add('was-validated');
  document.querySelector('.input-error').textContent = getMessage(
    input.validity
  );
  document.querySelector('.input_wrapper').style.marginBottom = '0';
}

input.addEventListener('input', () => {
  // 커스텀 에러메세지 설정
  showError(input);
});

loginForm.addEventListener('submit', onSubmit);
