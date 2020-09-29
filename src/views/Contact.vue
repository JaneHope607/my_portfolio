<template>
    <div class="contact">
        <h1>Contact</h1>

        <form method="post" name="contact-form" @sumbit.prevent="sendEmail">
            <div class="contact-form">
                <label>Your Name</label>
                <input
                    type="text"
                    name="name"
                    placeholder="Enter Your Name..."
                    v-model="name">

                <label>Your Email</label>
                <input
                    type="email"
                    name="email"
                    placeholder="Enter Your Email..."
                    v-model="email">

                <label>Your Message</label>
                <textarea 
                    name="message"
                    rows="5"
                    placeholder="Enter Your Message..."
                    v-model="msg">
                </textarea>

                <button type="submit" :disabled="!name || !email || !msg"></button>

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
    name: 'Contact',
    data() {
      return {
            name: '',
            email: '',
            msg: '',
            loadingMsg: false
        };
    },

    methods: {
        sendEmail() {      
            this.loadingMsg= true;      
            axios.post('https://formspree.io/xknpgzke',
                this.name,          
                this.email,          
                this.msg,
            { headers: {
                'Content-type': 'application/x-www-form-urlencoded',
            }
            }).then((response) => {
                this.name = '';
                this.email = '';
                this.msg = '';
                this.loadingMsg = false;  
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