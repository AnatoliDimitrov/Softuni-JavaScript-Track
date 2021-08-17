class Contact{
    constructor(firstName, lastName, phone, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.email = email;
        this.online = false;
    }
    
    _createElement(firstName, lastName, phone, online) {
        let articleElement = document.createElement('article');
        let divTitleElement = document.createElement('div');
        divTitleElement.className = 'Title';
        let btnElement = document.createElement('button');
        btnElement.textContent = '\2139';
        divTitleElement.textContent = `${firstName} ${lastName}`;
        divTitleElement.appendChild(btnElement);
        let divInfo = document.createElement('div');
        divInfo.className = 'info';
        divInfo.style.display = 'none';
        articleElement.appendChild(divTitleElement);
        articleElement.appendChild(divInfo);

        return articleElement;
    }


    render(id) {
        let contactElement = this._createElement(this.firstName, this.lastName, this.phone, this.email);
        let div = document.getElementById(id);
        div.appendChild(contactElement);
    }
}

let contacts = [
    new Contact("Ivan", "Ivanov", "0888 123 456", "i.ivanov@gmail.com"),
    new Contact("Maria", "Petrova", "0899 987 654", "mar4eto@abv.bg"),
    new Contact("Jordan", "Kirov", "0988 456 789", "jordk@gmail.com")
  ];
  contacts.forEach(c => c.render('main'));
  