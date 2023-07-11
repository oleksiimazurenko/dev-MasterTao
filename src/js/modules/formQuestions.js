const formQuestions = () => {

  const form = document.querySelector('.form-questions');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form); // Создаем объект FormData для сбора данных из формы

    // Получаем значения полей формы вручную.
    const productCategory = formData.get('product-category');
    const weight = formData.get('weight');
    const priceCargo = formData.get('price-cargo');
    const volumeCargo = formData.get('volume-cargo');

    // Создаем объект с данными для отправки на сервер
    const data = {
      productCategory: productCategory,
      weight: weight,
      priceCargo: priceCargo,
      volumeCargo: volumeCargo
    };

    // Отправляем данные на сервер с помощью Fetch API
    fetch('http://localhost:3000/questions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => {
      // Обработка успешного ответа от сервера
      console.log('Данные успешно отправлены');
      console.log(response);
    })
    .catch(error => {
      // Обработка ошибки при отправке данных
      console.error('Ошибка при отправке данных', error);
    })
    .finally(() => {
      form.reset();
    });
  });

}

export { formQuestions };