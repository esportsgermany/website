<template>
    <b-modal id="esg-login-modal" title="Login or Register" @ok="submit">
      <b-tabs small card ref="tabs" v-model="tabIndex">
        <b-tab title="Login">
          <form @submit.stop.prevent="submit">
            <b-form-input type="text" placeholder="Enter your email" v-model="login.email"></b-form-input>
            <b-form-input type="password" placeholder="Enter your Password" v-model="login.password"></b-form-input>
          </form>
        </b-tab>
        <b-tab title="Registrieren">
          <form @submit.stop.prevent="submit">
            <b-form-input type="text" placeholder="Enter your email" v-model="register.email"></b-form-input>
            <b-form-input type="password" placeholder="Enter your Password" v-model="register.password"></b-form-input>
            <b-form-input type="password" placeholder="Enter your Password" v-model="register.passwordRepeat"></b-form-input>
            <b-form-checkbox id="checkbox1" v-model="register.agb">
              Hiermit akzeptiere ich, dass mir das E-Sports Germany Website Team möglicherweise Emails sendet oder meine Email-Adresse anderweitig für interne Zwecke (als Key) verwendet.
            </b-form-checkbox>
          </form>
        </b-tab>
      </b-tabs>
    </b-modal>
</template>
<script>
  import toastr from 'toastr';
  import firebase from '../utils/firebase';

  export default {
    name: 'esg-login-modal',
    data() {
      return {
        tabIndex: 0,
        login: {
          email: '',
          password: '',
        },
        register: {
          email: '',
          password: '',
          passwordRepeat: '',
          agb: false,
        },
      };
    },
    methods: {
      submit: function submit(e) {
        if (this.tabIndex === 0) {
          if (this.login.email === '' || this.login.password === '') {
            toastr.error('Please enter your Email and Password to Login!');
            return e.cancel();
          }
          firebase.auth().signInWithEmailAndPassword(this.login.email,
            this.login.password).catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              if (errorCode) {
                toastr.error(`Sorry! Something went wrong with your Login!
                  Error is: ${errorMessage}`);
                return e.cancel();
              }
              return true;
            });
        } else {
          if (!this.register.email || !this.register.password ||
            !this.register.passwordRepeat || !this.register.agb) {
            toastr.error('Please fill out the Form to Register and check the Checkbox!');
            return e.cancel();
          }
          if (this.register.password !== this.register.passwordRepeat) {
            toastr.error('Your password und repeated password are not matching!');
            return e.cancel();
          }
          firebase.auth().createUserWithEmailAndPassword(this.register.email,
            this.register.password).catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              if (errorCode) {
                toastr.error(`Sorry! Something went wrong with your Registration!
                Error is: ${errorMessage}`);
                return e.cancel();
              }
              toastr.success(`Your Registration was successful.
              Welcome! You can now Login!`);
              return true;
            });
        }
        return true;
      },
    },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .card-header {
    background-color: #fff;
  }
  .tabs {
    margin: -15px;
  }
</style>
