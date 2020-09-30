<template>
    <div class="container-contact">
        <h1>Get In Touch</h1>

        <div class="col-right">
            <form class="contact-form" method="post" role="form" @submit.prevent="sendEmail">
                <label for="name">Your Name</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter Your Name..."
                    v-model="nameText"
                >

                <label for="email">Your Email</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter Your Email..."
                    v-model="emailText"
                >

                <label for="msg">Your Message</label>
                <textarea 
                    name="msg"
                    rows="5"
                    id="msg"
                    placeholder="Enter Your Message..."
                    v-model="messageText"
                >
                </textarea>

                <input type="submit" :disabled="!nameText || !emailText || !messageText">

                <section v-if="loadingMsg">
                    <p class="loading-text">Delivering Your Email...</p>
                </section>
            </form>
        </div>

         <div class="col-left">
            <img src="../assets/bg-01.jpg" />
		</div>
    </div>
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


body, html {
	height: 100%;
}

input,
textarea {
    background-color: cream;
    border-radius: 2px;
}

input:focus,
textarea:focus {
    background-color: cream;
    border-radius: 2px;
}

label {
  display: block;
  margin: 0;
}

button {
    padding: 10px;
}

.container-contact {
    width: 100%;
}

.col-left {
    height: 100vh;
    width: 50%;
    left: 0;
    position: relative;
}

.col-right {
    height: 100vh;
    width: 50%;
    left: 50%;
    position: relative;
}

</style>