window.addEventListener('load', solution);

function solution() {
  let formElement = document.getElementById('form');
  let sbmBtnEl = document.getElementById('submitBTN');
  let infoElement = document.getElementById('infoPreview');
  let blockElement = document.getElementById('block');

  let editBtn = document.getElementById('editBTN');
  editBtn.addEventListener('click', editFunc);
  let continueBtn = document.getElementById('continueBTN');
  continueBtn.addEventListener('click', () => {
    blockElement.innerHTML = '';
    let h3 = document.createElement('h3');
    h3.textContent = 'Thank you for your reservation!';
    blockElement.appendChild(h3);
  });

  sbmBtnEl.addEventListener('click', (e) => {
    e.preventDefault();
    let [name, email, phone, address, post] = Array.from(document.querySelectorAll('#form input'));
    // console.log(name.value);
    // console.log(email.value);
    // console.log(phone.value);
    // console.log(address.value);
    // console.log(post.value);

    if (name.value && email.value) {
      let nameli = document.createElement('li');
      nameli.textContent = `Full Name: ${name.value}`;
      let emailli = document.createElement('li');
      emailli.textContent = `Email: ${email.value}`;
      let phoneli = document.createElement('li');
      phoneli.textContent = `Phone Number: ${phone.value}`;
      let addressli = document.createElement('li');
      addressli.textContent = `Address: ${address.value}`;
      let postli = document.createElement('li');
      postli.textContent = `Postal Code: ${post.value}`;

      infoElement.appendChild(nameli);
      infoElement.appendChild(emailli);
      infoElement.appendChild(phoneli);
      infoElement.appendChild(addressli);
      infoElement.appendChild(postli);

      name.value = '';
      email.value = '';
      phone.value = '';
      address.value = '';
      post.value = '';

      sbmBtnEl.disabled = true;
      editBtn.disabled = false;
      continueBtn.disabled = false;
    }
  });
  
  function editFunc(e) {
    let [name, email, phone, address, post] = Array.from(infoElement.children);
    name = name.textContent.split(': ').filter(x => x)[1];
    email = email.textContent.split(': ').filter(x => x)[1];
    phone = phone.textContent.split(': ').filter(x => x)[1];
    address = address.textContent.split(': ').filter(x => x)[1];
    post = post.textContent.split(': ').filter(x => x)[1];
    
    let [nameEl, emailEl, phoneEl, addressEl, postEl] = Array.from(document.querySelectorAll('#form input'));
    nameEl.value = name;
    emailEl.value = email;
    phoneEl.value = phone;
    addressEl.value = address;
    postEl.value = post;

    infoElement.innerHTML = '';

    sbmBtnEl.disabled = false;
    editBtn.disabled = true;
    continueBtn.disabled = true;
  }
}
