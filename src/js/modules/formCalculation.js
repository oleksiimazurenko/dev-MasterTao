const formCalculation = () => {

  const form = document.querySelector('.form-calculation');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form); // Создаем объект FormData для сбора данных из формы

    // Получаем значения полей формы вручную.
    const productCategory = formData.get('product-category');
    const priceCargo = formData.get('price-cargo');
    const weight = formData.get('weight');
    const volumeCargo = formData.get('volume-cargo');
    const isInsurance = formData.has('html');
    const isCustomsClearance = formData.has('css');
    const codCargo = formData.get('cod-cargo');
    const fileInput = formData.get('fileInput');

    // Создаем объект с данными для отправки на сервер
    const data = {
      productCategory: productCategory,
      priceCargo: priceCargo,
      weight: weight,
      volumeCargo: volumeCargo,
      isInsurance: isInsurance,
      isCustomsClearance: isCustomsClearance,
      codCargo: codCargo,
      fileInput: fileInput
    };

    // Отправляем данные на сервер с помощью Fetch API
    fetch('http://localhost:3000/calculation', {
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

export { formCalculation };