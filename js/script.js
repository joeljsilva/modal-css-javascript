function initModal(){
    const abrirModal = document.querySelector('[data-modal="abrir"');
    const fecharModal = document.querySelector('[data-modal="fechar"]');
    const modalContainer = document.querySelector('[data-modal="container"]');

    function showModal(event) {
      modalContainer.classList.toggle('ativo');
    };

    function sairModalFora(event) {
      if (event.target === this) {
        showModal();
      }
    };

    abrirModal.addEventListener('click', showModal);
    fecharModal.addEventListener('click', showModal);
    modalContainer.addEventListener('click', sairModalFora);
}
initModal();
