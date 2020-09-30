<template>
    <section class="container-contact">

        <div class="col-left">
            <img src="../assets/bg-01.jpg" />
		</div>

        <div class="col-right">
            <form class="contact-form" method="post" role="form" @submit.prevent="sendEmail">
                  <h2>Get In Touch</h2>
                <label for="name">Your Name</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter Your Name..."
                    v-model="nameText"
                    class="input"
                >

                <label for="email">Your Email</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter Your Email..."
                    v-model="emailText"
                    class="input"
                >

                <label for="msg">Your Message</label>
                <input
                    type="text"
                    name="msg"
                    rows="5"
                    id="msg"
                    placeholder="Enter Your Message..."
                    v-model="messageText"
                    class="input"
                >

                <input class="button" type="submit" :disabled="!nameText || !emailText || !messageText">

                <section v-if="loadingMsg">
                    <p class="loading-text">Delivering Your Email...</p>
                </section>
            </form>
        </div>
    </section>
</template>

<script>
import axios from 'axios';

export default {
    name: 'contact',
    data() {
      return {
        loadingMsg: false,
        nameText: '',
        emailText: '',
        messageText: '',
        };
    },

    methods: {
        sendEmail() {      
            this.loadingMsg= true;      
            axios.post(
                'https://formspree.io/xknpgzke',
                {
                name: this.nameText,          
                email: this.emailText,          
                message: this.messageText,
            })
            .then((response) => {
                this.nameText = '';
                this.emailText = '';
                this.messageText = '';
                this.loadingMsg = false;  
                this.$router.push({ path: '/success' });
            }).catch((error) => {        
                if (error.response) {
                    alert(error.response.data);
                }
            });
        },
    },
};

</script>

<style scoped>

html,
body {
  margin: 0;
  padding: 0;
  font-family: 'Montserrat', sans-serif;
}

img {
    max-width:100%;
    height: 500px;

}

div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
}

.container-contact {
   display: flex;
}

.col-left {
    padding: 1rem;
    flex: 1;
    margin-left: 3rem;
    margin-right: 3rem;
}

.col-right {
    padding: 1rem;
    flex: 1;
    margin-right: 3rem;
}

.form {
    width:340px;
    background:#e6e6e6;
    border-radius:8px;
    box-shadow:0 0 40px -10px #000;
    margin:calc(50vh - 220px) auto;
    padding:6rem 8rem;
    max-width:calc(100vw - 40px);
    box-sizing:border-box;
    position:relative
}

h2 {
    margin:10px 0;
    padding-bottom:10px;
    text-align: center;
    color:#78788c;
    border-bottom:3px solid #78788c
}

input {
    width:100%;
    padding: 1.2rem;
    box-sizing:border-box;
    background:none;
    outline:none;
    border:0;
    transition:all .3s;
    border-bottom:2px solid #bebed2
}

input:focus {
    border-bottom:2px solid #78788c
}

label:before {
    content:attr(type);
    display:block;
    margin:28px 0 0;
    font-size:14px;
    color:#5a5a5a
}

.button {
    width: 50%;
    padding: 0.5rem;
    margin: 1.8rem 0 0;
    border: .15rem solid #78788c;
    background:0;
    color:#5a5a6e;
    cursor:pointer;
    transition:all .3s;
    font-family: 'Montserrat', sans-serif;
}

.button:hover {
    background:#78788c;
    color:#fff
}

</style>