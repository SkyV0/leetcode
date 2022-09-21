// We provided some simple Vue.js template code. 
// Your goal is to create a simple form at the top that allows the user to enter in a first name, last name, and phone number and there should be a submit button. 
// Once the submit button is pressed, the information should be displayed in a list below (automatically sorted by last name)
//  along with all the previous information that was entered. 
//  This way the application can function as a simple phone book. 
//  When your application loads, the input fields (not the phone book list) should be prepopulated with the following values already:

// First name = Coder
// Last name = Byte
// Phone = 8885559999


//  You can use the following code to get started:

<template>
 <div>
  <div id="app">
    <h1 class="block__title">Phone Book</h1>
    <p><strong>Add a new contact:</strong></p>
    <div>
      <label for="first-name">First Name:</label> 
      <input class="input__name"
        :class="{'error': isEmptyNameField}" type="text" id="first-name" name="first-name" v-model="firstName">

      <label class="input__name"
        :class="{'error': isEmptyNameField}" for="last-name">Last Name:</label>
      <input type="text" id="last-name" name="last-name" v-model="lastName">

      <label class="input__phone"
        :class="{'error': isEmptyPhoneField}" for="phone">Phone:</label>
      <input type="text" id="phone" name="phone" v-model="phone">

      <button class="btn__add" type="button" id="add-contact" name="add-contact" v-on:click="addContact">Add Contact</button>
    </div>
    <p><strong>Contacts:</strong></p>
    <div>
      <ul>
        <li class="list__item" v-for="contact in contacts" v-bind:key="contact.name">
          {{contact.firstName}} {{contact.lastName}} - {{contact.phone}}
        </li>
      </ul>
      <tr>
      <td>
        <button class="btn__delete"  type="button" id="clear-contacts" name="clear-contacts" v-on:click="clearContacts">Clear Contacts</button>
      </td>
    </tr>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      firstName: 'Coder',
      lastName: 'Byte',
      phone: '8885559999',
      contacts: []
    }
  },
  methods: {
    addContact() {
      this.contacts.push({
        id: this.contacts.length + 1,
        firstName: this.firstName,
        lastName: this.lastName,
        phone: this.phone
      });
     //automatically sort contacts by last name
      this.contacts.sort((a, b) => {
        if (a.lastName < b.lastName) {
          return -1;
        } else if (a.lastName > b.lastName) {
          return 1;
        } else {
          return 0;
        }
      });
      this.firstName = this.lastName = this.phone = '';
    },
    clearContacts() {
      this.contacts = [];
    }
  }
}
</script>


<style scoped>
  input {
    height: 18px;
  }
  .block {
    width: calc(100% - 32px);
    margin: 0 auto;
  }
  .block__add {
    margin-bottom: 15px;
  }
  .block__search {
    margin-bottom: 15px;
  }
  .list__item {
    position: relative;
    width: 325px;
    margin-bottom: 15px;
  }
  .btn__add {
    padding: 5px;
    color: #fff;
    background-color: limegreen;
    border-radius: 5px;
  }
  .btn__add:hover {
    cursor: pointer;
  }
  .btn__add:focus {
    outline: none;
  }
  .btn__delete {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateX(-120%);
    display: inline-block;
    padding: 5px;
    color: #fff;
    background-color: tomato;
    border-radius: 5px;
  }
  .btn__delete:hover {
    cursor: pointer;
  }
  .btn__delete:focus {
    outline: none;
  }
  
  .input__name.error,
  .input__phone.error {
    border-color: tomato;
  }
  .input__name.error::placeholder,
  .input__phone.error::placeholder {
    color: tomato;
  }
  </style> -->
  