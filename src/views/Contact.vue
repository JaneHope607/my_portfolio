<template>
    <div class="contact">
        <h1>Contact</h1>

        <form method="post" role="form" @submit.prevent="sendEmail">
            <div class="contact-form">
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
            </div>
        </form>
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

button {
    padding: 10px;
}

</style>