<template>
    <section id="container-contact">

        <div class="contact-div">
            <form class="contact-form" method="post" role="form" @submit.prevent="sendEmail">
            <h3>Get In Touch</h3>
                <label for="name">Name</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter Your Name"
                    v-model="nameText"
                    class="input"
                >

                <label for="email">Email</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter Your Email"
                    v-model="emailText"
                    class="input"
                >

                <label for="subject">Subject</label>
                <input
                    type="text"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                    v-model="subjectText"
                    class="input"
                >

                <label for="msg">Message</label>
                <textarea
                    type="text"
                    name="msg"
                    rows="5"
                    id="msg"
                    placeholder="Enter Your Message"
                    v-model="messageText"
                    class="input"
                ></textarea>

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
        subjectText: '',
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
                subject: this.subjectText
            })
            .then((response) => {
                this.nameText = '';
                this.emailText = '';
                this.messageText = '';
                this.subjectText  = '';
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

#container-contact {
    width: 100%;
	height: 100%;
    margin: 5rem;
}


.form {
    width:340px;
    background:#e6e6e6;
    border-radius:8px;
    box-shadow:0 0 40px -10px #000;
    margin: 0 auto;
    padding:6rem 8rem;
    max-width:calc(100vw - 40px);
    box-sizing:border-box;
    text-align: center;
    height: 100%;
}

h3 {
    padding-bottom:10px;
    text-align: center;
    font-weight: normal;
    font-size: 3rem;
    top: 0;
}

input, textarea {
    width:60%;
    padding: 1.8rem;
    box-sizing:border-box;
    background: rgb(219, 219, 219);
    outline:none;
    border:0;
    transition:all .3s;
    font-family: 'Montserrat', sans-serif;
    resize: none;
}

input:focus {
    border-bottom:2px solid #78788c
}

textarea:focus {
    border-bottom:2px solid #78788c
}

label:before {
    content:attr(type);
    display:block;
    margin:28px 0 0;
    font-size:14px;
    color:#5a5a5a;
}

label {
    font-size: 20px;
    display: none;
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
    text-align: center;
    display: block;
    margin: 3rem auto;
}

.button:hover {
    background:#78788c;
    color:#fff
}

@media only screen and (max-width: 768px) {

.col-left {
    display: none;
}

form {
    margin: 0 2rem 0 2rem;
}

h3 {
    font-size: 4rem;
}
}

</style>