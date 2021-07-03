window.addEventListener('load', solution);

function solution() {
    let inputData = [];

    document.querySelector('#submitBTN').addEventListener('click', (ev) => {
      inputData = [];

        const fullName = document.querySelector('#fname').value;
        const email = document.querySelector('#email').value;
        const phoneNumber = document.querySelector('#phone').value;
        const address = document.querySelector('#address').value;
        const postalCode = document.querySelector('#code').value;

        if (fullName.trim() !== '' && email.trim() !== '') {
            let li1 = document.createElement('li');
            li1.textContent = `Full Name: ${fullName}`;
            document.querySelector('#infoPreview').appendChild(li1);


            let li2 = document.createElement('li');
            li2.textContent = `Email: ${email}`;
            document.querySelector('#infoPreview').appendChild(li2);

            let li3 = document.createElement('li');
            li3.textContent = `Phone Number: ${phoneNumber}`;
            document.querySelector('#infoPreview').appendChild(li3);

            let li4 = document.createElement('li');
            li4.textContent = `Address: ${address}`;
            document.querySelector('#infoPreview').appendChild(li4);

            let li5 = document.createElement('li');
            li5.textContent = `Postal Code: ${postalCode}`;
            document.querySelector('#infoPreview').appendChild(li5);

            inputData.push(fullName, email, phoneNumber, address, postalCode);

            document.querySelector('#submitBTN').disabled = true;

            document.querySelector('#editBTN').disabled = false;
            document.querySelector('#continueBTN').disabled = false;

            document.querySelector('#fname').value = '';
            document.querySelector('#email').value = '';
            document.querySelector('#phone').value = '';
            document.querySelector('#address').value = '';
            document.querySelector('#code').value = '';
        }
    });

    document.querySelector('#editBTN').addEventListener('click', (ev) => {
      Array.from(document.querySelector('#infoPreview').children)
          .forEach(item => item.remove());

        document.querySelector('#infoPreview').innerHTML = '';

        document.querySelector('#fname').value = inputData[0];
        document.querySelector('#email').value = inputData[1];
        document.querySelector('#phone').value = inputData[2];
        document.querySelector('#address').value = inputData[3];
        document.querySelector('#code').value = inputData[4];

      document.querySelector('#editBTN').disabled = true;
      document.querySelector('#continueBTN').disabled = true;

      document.querySelector('#submitBTN').disabled = false;


    });

    document.querySelector('#continueBTN').addEventListener('click', (ev) => {
      Array.from(document.querySelector('#block').children)
          .forEach(item => item.remove());

        document.querySelector('#block').innerHTML = '';

      let h3 = document.createElement('h3');
      h3.textContent = 'Thank you for your reservation!';
      document.querySelector('#block').appendChild(h3);
    });
}
