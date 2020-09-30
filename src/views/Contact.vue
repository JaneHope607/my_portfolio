<template>
    <section class="container-contact">
        <!-- <h1>Get In Touch</h1> -->

        <div class="col-left">
            <img src="../assets/bg-01.jpg" />
		</div>

        <div class="col-right">
            <form class="contact-form" method="post" role="form" @submit.prevent="sendEmail">
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
                <textarea 
                    name="msg"
                    rows="5"
                    id="msg"
                    placeholder="Enter Your Message..."
                    v-model="messageText"
                    class="input"
                >
                </textarea>

                <input type="submit" :disabled="!nameText || !emailText || !messageText">

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

img {
    max-width:100%;
    max-height:100%;
}

div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: red;
    height: 100%;
}

.container-contact {
   display: flex;
}

.col-left {
    padding: 1rem;
    flex: 1;
}

.col-right {
    padding: 1rem;
    flex: 1;
}

</style>