<template>
    <div class="wrapper fadeInDown">
      <h2 class="active"> Sign Up </h2> 

    <!-- Icon -->
    <div class="fadeIn first">
      <img src="@/assets/smartc.png" id="icon" alt="User Icon" />
    </div> 

    <!-- Login Form -->
    <form @submit="postData" method="post">
       <input type="text" id="name" autocomplete="off" class="fadeIn second" name="name" placeholder="Name" v-model="signup.name" required>
       <input type="email" id="email_id" autocomplete="off" class="fadeIn second typediff" name="email_id" placeholder="Email" v-model="signup.email_id" required>
       <select name="phoneno" id="phone" @change="changepattern">
         <option value=""></option>
         <option value="pak">Pakistan</option>
         <option value="ind">India</option>
       </select>
       <input type="text" id="phone_num" autocomplete="off" class="fadeIn second typediff" name="phone_num" placeholder="Contact" v-model="signup.phone_num" required>
       <div>
       
        <img id="output" class="imgfile" width="200" height="200" name="imag"  />
        <input type="file"  accept="image/*" name="image" id="file" @change="loadFile">	
        <p><label for="file" class="labelfile" >Upload Image</label></p>
        
      </div>
       <div class="radio">
           <label>
            <input type="radio"  class="fadeIn second" name="user_type_id" value="2" v-model="signup.user_type_id" required>Vendor </label>
            <label>
            <input type="radio"  class="fadeIn second" name="user_type_id" value="3" v-model="signup.user_type_id" required>Buyer </label>
            <label>
            <input type="radio"  class="fadeIn second" name="user_type_id" value="4" v-model="signup.user_type_id" required>Seller </label>
       </div>
    <br><input type="submit" class="fadeIn fourth">
    </form>
    <div>
      <router-link to="/" class="link">
      <a class="underlineHover" href="#">Already Signed up / Login</a>
      </router-link>
    </div>
    
    
    
    </div>
</template>
<script>

import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
// import imag from './imag.vue'

Vue.use(VueAxios,axios)
export default {
  // components: { imag },
  
  
    name:"signup",
    
    data()
    {
        return{
            signup:
        {
            name:null,
            email_id:null,
            phone_num:null,
            user_type_id:null,
            
            
        },
          
            information:{},
             imag:null,
          //  respond:this.info

            profile:null
         }
    },
    methods:
    {
        postData(e)
        {
          let host='http://52.188.203.195:'
          
          const formdata= new FormData()
          formdata.append("name",this.signup.name)
          formdata.append("email_id", this.signup.email_id)
          formdata.append("phone_num", this.signup.phone_num)
          formdata.append("user_type_id", this.signup.user_type_id)
          // formdata.append("picture", this.profile)

          // console.log(formdata.get("picture"))
          let csprng;
           Vue.axios.post(host+'5001/v1/signup',formdata)
          .then((resp)=>{
            
               this.information=resp.data
              // let obj = JSON.stringify(this.information)
                // alert(obj)
              //  console.log(this.information)
              console.log(resp)
              console.log(resp.data)
           csprng= resp.data.csprng
           console.log(csprng)
          }),

            Vue.axios.post('http://52.188.203.195:5001/v1/login',csprng)
           .then((resp)=>{
             console.log(resp)
           })

           e.preventDefault();
        },
        loadFile(event) {
        
        this.imag = document.getElementById('output')
        // // console.log(event)
        // console.log(event.target.files[0])
        // console.log('check')
        this.imag.src = URL.createObjectURL(event.target.files[0])
        this.profile=this.imag.src
        // console.log(this.imag.src)
        // console.log(this.profile)

        },
       changepattern(e) {
        
        console.log(e)
        let see= document.getElementById('phone')
        console.log( see.value );
        if(see.value=='pak')
        {
          console.log('checked in if')
          let phone = document.getElementById('phone_no');
          let att = document.createAttribute("pattern");
          att.value="[0-4]{4}-[0-9]{6}-[0-9]{2}"
          phone.setAttributeNode(att)
        }
// display value property of select list (from selected option)

        // let value=e.selectElement.option[e.selectedIndex].value;
        // console.log(value)
        // let phone = document.getElementById('phone_no');
        // phone.pattern= URL.createObjectURL(event.target.files[0]);
        }
       
       
    }
}
</script>
<style scoped>
    @import url('https://fonts.googleapis.com/css?family=Poppins');

/* BASIC */
.tabs
{
  
  padding: 15px;
  margin: 20px;
  margin-bottom: 5px;
}
.tabs span{
  color:black;
  padding-left: 5px ;
  padding-right: 5px;
  font-size: 25px;
  text-decoration: none;
}

.radio
{
    margin:20px;
}
.typediff
{
    background-color: #f6f6f6;
    border: none;
    color: #0d0d0d;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 5px;
    width: 85%;
    border: 2px solid #f6f6f6;
    transition: all 0.5s ease-in-out;
    border-radius: 5px 5px 5px 5px;
}
html {
  background-color: #56baed;
}

body {
  font-family: "Poppins", sans-serif;
  height: 100vh;
}

a {
  color: #92badd;
  display:inline-block;
  text-decoration: none;
  font-weight: 400;
}

h2 {
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
  display:inline-block;
  margin: 40px 8px 10px 8px; 
  color: #cccccc;
}



/* STRUCTURE */

.wrapper {
  display: flex;
  align-items: center;
  flex-direction: column; 
  justify-content: center;
  width: 100%;
  min-height: 100%;
  padding: 20px;
}

#formContent {
  -webkit-border-radius: 10px 10px 10px 10px;
  border-radius: 10px 10px 10px 10px;
  background: #fff;
  padding: 30px;
  width: 90%;
  max-width: 450px;
  position: relative;
  padding: 0px;
  -webkit-box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);
  box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);
  text-align: center;
}

#formFooter {
  background-color: #f6f6f6;
  border-top: 1px solid #dce8f1;
  padding: 25px;
  text-align: center;
  -webkit-border-radius: 0 0 10px 10px;
  border-radius: 0 0 10px 10px;
}



/* TABS */

span.inactive {
  color:  #1d1818;
}

h2.active {
  color: #0d0d0d;
  border-bottom: 2px solid #5fbae9;
}



/* FORM TYPOGRAPHY*/

input[type=button], input[type=submit], input[type=reset]  {
  background-color: #56baed;
  border: none;
  color: white;
  padding: 15px 80px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  text-transform: uppercase;
  font-size: 13px;
  -webkit-box-shadow: 0 10px 30px 0 rgba(95,186,233,0.4);
  box-shadow: 0 10px 30px 0 rgba(95,186,233,0.4);
  -webkit-border-radius: 5px 5px 5px 5px;
  border-radius: 5px 5px 5px 5px;
  margin: 5px 20px 40px 20px;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -ms-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}

input[type=button]:hover, input[type=submit]:hover, input[type=reset]:hover  {
  background-color: #39ace7;
}

input[type=button]:active, input[type=submit]:active, input[type=reset]:active  {
  -moz-transform: scale(0.95);
  -webkit-transform: scale(0.95);
  -o-transform: scale(0.95);
  -ms-transform: scale(0.95);
  transform: scale(0.95);
}

input[type=text] {
  background-color: #f6f6f6;
  border: none;
  color: #0d0d0d;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 5px;
  width: 85%;
  border: 2px solid #f6f6f6;
  -webkit-transition: all 0.5s ease-in-out;
  -moz-transition: all 0.5s ease-in-out;
  -ms-transition: all 0.5s ease-in-out;
  -o-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
  -webkit-border-radius: 5px 5px 5px 5px;
  border-radius: 5px 5px 5px 5px;
}

input[type=text]:focus {
  background-color: #fff;
  border-bottom: 2px solid #5fbae9;
}
input[type=email]:focus {
  background-color: #fff;
  border-bottom: 2px solid #5fbae9;
}
input[type=number]:focus {
  background-color: #fff;
  border-bottom: 2px solid #5fbae9;
}


input[type=text]:placeholder {
  color: #cccccc;
}

input[type=file]
{
    display: none;
 }
.labelfile
{
    cursor: pointer;
}
.imgfile
{
    margin-top:5px ;
}


/* ANIMATIONS */

/* Simple CSS3 Fade-in-down Animation */
.fadeInDown {
  -webkit-animation-name: fadeInDown;
  animation-name: fadeInDown;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

@-webkit-keyframes fadeInDown {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }
  100% {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}

@keyframes fadeInDown {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }
  100% {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}

/* Simple CSS3 Fade-in Animation */
@-webkit-keyframes fadeIn { from { opacity:0; } to { opacity:1; } }
@-moz-keyframes fadeIn { from { opacity:0; } to { opacity:1; } }
@keyframes fadeIn { from { opacity:0; } to { opacity:1; } }

.fadeIn {
  opacity:0;
  -webkit-animation:fadeIn ease-in 1;
  -moz-animation:fadeIn ease-in 1;
  animation:fadeIn ease-in 1;

  -webkit-animation-fill-mode:forwards;
  -moz-animation-fill-mode:forwards;
  animation-fill-mode:forwards;

  -webkit-animation-duration:1s;
  -moz-animation-duration:1s;
  animation-duration:1s;
}

.fadeIn.first {
  -webkit-animation-delay: 0.4s;
  -moz-animation-delay: 0.4s;
  animation-delay: 0.4s;
}

.fadeIn.second {
  -webkit-animation-delay: 0.6s;
  -moz-animation-delay: 0.6s;
  animation-delay: 0.6s;
}

.fadeIn.third {
  -webkit-animation-delay: 0.8s;
  -moz-animation-delay: 0.8s;
  animation-delay: 0.8s;
}

.fadeIn.fourth {
  -webkit-animation-delay: 1s;
  -moz-animation-delay: 1s;
  animation-delay: 1s;
}

/* Simple CSS3 Fade-in Animation */
.underlineHover:after {
  display: block;
  left: 0;
  bottom: -10px;
  width: 0;
  height: 2px;
  background-color: #56baed;
  content: "";
  transition: width 0.2s;
}

.underlineHover:hover {
  color: #0d0d0d;
}

.underlineHover:hover:after{
  width: 100%;
}



/* OTHERS */

*:focus {
    outline: none;
} 

#icon {
  width:60px;
  height: 60px;

}

* {
  box-sizing: border-box;
}
</style>