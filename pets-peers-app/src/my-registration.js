
import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
 import '@polymer/paper-input/paper-input.js';
 import '@polymer/paper-input/paper-textarea.js';
 import '@polymer/paper-button/paper-button.js';
 import '@polymer/iron-form/iron-form.js'


//import './shared-styles.js';

class MyRegistration extends PolymerElement {

  static get properties() {
    return {
        userName: {
            type: String
        },
        mobileNo: {
          type:String
        },
        location: {
          type: String
        },
        psw : {
          type:String
        }

      }
    }
  _handleSubmit() {       
    //if(this.$.demoForm.validate()) {
      var ironAjax = this.$.dataAjax.id;// this.$.dataAjax.url;      
      ironAjax.method = 'post';
      ironAjax.contentType = 'text/plain';
      
        let obj = {userName: this.userName, mobileNo: this.mobileNo, location: this.location, psw: this.psw}
        console.log(obj)

        var valueToSend = obj;
        ironAjax.body = valueToSend;
        ironAjax.generateRequest();
    //}
}

  static get template() {
    return html`
      <style>       
      </style>
      <p> Registration Page </p>
      

      <iron-ajax 
    id="dataAjax"     
    url="http://localhost:4000/register/register"
    on-response="postComplete"></iron-ajax>
    <iron-form id="demoForm">

      <paper-input type="text" name="userName" value={{userName}} label="User Name"></paper-input>
      <paper-input type="text" name="mobileNo" value={{mobileNo}} label="Mobile Number"></paper-input>
      <paper-textarea name="location" value={{location}} label="Location"></paper-textarea>
      <paper-input type="password" name="psw" value={{psw}} label="Password"></paper-input>
      <paper-button raised on-click="_handleSubmit"> submit </paper-button>
      
      </iron-form>
      
    `;
  }

  
}

window.customElements.define('my-registration', MyRegistration);
