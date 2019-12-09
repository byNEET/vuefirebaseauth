<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">
            Login
          </div>
          <div class="card-body">
            <div v-if="error" class="alert alert-danger">
              {{ error }}
            </div>
            <form action="#" @submit.prevent="submit">
              <div class="form-group row">
                <label for="email" class="col-md-4 col-form-label text-md-right">Email</label>
                <div class="col-md-6">
                  <input type="email" name="email" id="email" class="form-control" value required autofocus v-model="form.email" />
                </div>
              </div>
              <div class="form-group row">
                <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>
                <div class="col-md-6">
                  <input type="password" name="password" id="password" class="form-control" value required autofocus v-model="form.password" />
                </div>
              </div>
              <div class="form-group row mb-0">
                <div class="col-md-8 offset-md-4">
                  <button type="submit" class="btn btn-primary">Login</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase/app";
import 'firebase/auth'
import 'firebase/database'

export default {
  data(){
    return {
      form:{
        email:'',
        password:''
      },
      error:null
    };
  },
  methods:{
    submit(){
      firebase
        .auth()
        .signInWithEmailAndPassword(this.form.email,this.form.password)
        .then(data=>{
          // console.log(data)
          this.$router.replace({name:"dashboard"});
        })
        .catch(err=>{
          this.error = err.message
        })
    }
  }
}
</script>

<style>

</style>