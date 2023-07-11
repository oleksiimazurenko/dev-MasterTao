const questionsAccordion = () => {

  const itemQuestion = document.querySelectorAll('.accordion-item');

  const allBtn = document.querySelectorAll('.accordion-button');
  const allBody = document.querySelectorAll('.accordion-collapse');

  itemQuestion.forEach((item, i) => {
    item.addEventListener('click', (e) => {
      const { target } = e;

      if(target.nodeName === 'BUTTON'){
        allBtn.forEach(item => item.classList.add('collapsed'));
        allBody.forEach(item => item.classList.remove('collapse'));
        allBody.forEach(item => item.classList.remove('height-auto'));

        target.classList.toggle('collapsed');
        const a = target.closest('.accordion-item').querySelector('.accordion-collapse')
        a.classList.toggle('collapse');
        a.classList.add('height-auto');
      }
    });
  });

};

export { questionsAccordion };