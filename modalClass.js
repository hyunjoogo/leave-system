export default class ModalHandler {
  constructor(state, userData, options) {
    this.state = state;
    this.userData = userData || null;
    console.log(this.state, this.userData);
    this.options = options;
  }

  makeModalContent() {
    const body = document.querySelector('body');
    const section = document.createElement('section');
    // 이벤트리스너까지 등록한 것이 완벽하게 만든거지
    const { size } = this.options;
    section.innerHTML = `
        <section id="modal">
      <div class="modal-window ${size}">
        <button class="modal-close">X</button>
        <header>
          <h2 class="title">삭제하기</h2>
        </header>
        <div class="modal-content">
          <p>해당 휴가를 삭제하시겠습니까?</p>
        </div>
      </div>
    </section>
    `;
    body.appendChild(section);
    const modal = document.getElementById('modal');
    modal.addEventListener('click', (e) => {
      const evTarget = e.target;
      if (evTarget.classList.contains('show')) {
        this.close();
      }
    });
    const modelCloseBtn = document.querySelector('.modal-close');
    modelCloseBtn.addEventListener('click', () => {
      this.close();
    });

    // TODO
    // 취소 버튼을 눌렀을때는 close()
    // 삭제하기 버튼 누르면 sendRequest().then(()=>reload())

    this.body = body;
    this.section = section;
    this.modal = modal;
  }

  open() {
    // 모달창 오픈
    this.modal.classList.add('show');
  }

  close() {
    // 모달창 닫기
    this.modal.classList.remove('show');
    this.body.removeChild(this.section);
  }

  reload() {
    // 화면 리로드
    window.reload();
  }

  sendRequest() {
    // 서버에 요청보내기
    //

  }
}
