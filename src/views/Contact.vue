<template>
    <section class="container-contact">

        <div v-if="!successfulSend" class="col-left">
            <img src="../assets/contact.jpg" />
		</div>

        <div class="col-right">
            <div class="title-div">
                <h2 v-if="!successfulSend" class="title">GET IN TOUCH</h2>
            </div>
            <form class="contact-form" method="post" role="form" @submit.prevent="sendEmail" v-if="!successfulSend">
                <label for="name">Name</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="John Smith"
                    v-model="nameText"
                    class="input"
                    required
                >

                <label for="email">Email</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="example@email.com"
                    v-model="emailText"
                    class="input"
                    required
                >

                <label for="subject">Subject</label>
                <input
                    type="text"
                    name="subject"
                    id="subject"
                    placeholder="Subject Matter"
                    v-model="subjectText"
                    class="input"
                >

                <label for="msg">Message</label>
                <textarea
                    name="msg"
                    rows="5"
                    id="msg"
                    placeholder="Enter Your Message"
                    v-model="messageText"
                    class="input"
                    required
                >
                </textarea>

                <input class="button" type="submit" :disabled="!nameText || !emailText || !messageText">

                <section v-if="loadingMsg">
                    <p class="loading-text">Delivering Your Email...</p>
                </section>
            </form>
        </div>

        <div class="success" v-if="successfulSend"> 
            <h2>Your message was delivered successfully!</h2>
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
        successfulSend: false,
        };
    },

    mounted() {
        window.scrollTo(0, 0)
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
                this.successfulSend = true;
                // this.$router.push({ path: '/contact' });
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

img {
    width: 100%;
    height: 100%;
    margin-bottom: 2rem;
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
    flex: 1;
    margin: 0 2rem;
    height: 100%;
}

.col-right {
    margin: 0 2rem 0 0;
    flex: 1;
    height: 100%;
}

.title-div {
  background-color: black;
  font-weight: normal;
  text-align: center;
  margin: 0 auto;
  display: inline-block;
  line-height: 1;
  margin-bottom: 4rem;
}

.title {
  color: white;
  text-align: center;
  font-weight:lighter;
  letter-spacing: 6px;
  padding-left: 0.2rem;
}

.form {
    width:340px;
    background:#e6e6e6;
    border-radius:8px;
    box-shadow:0 0 40px -10px #000;
    margin:calc(50vh - 220px) auto;
    padding: 6rem 8rem;
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
    width:100%;
    padding: 1.8rem;
    box-sizing:border-box;
    background:none;
    outline:none;
    border:0;
    transition:all .3s;
    border-bottom:2px solid #bebed2;
    font-family: 'Montserrat', sans-serif;
    resize: none;
    font-size: 1.2rem;
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
}

.button {
    width: 50%;
    padding: 0.5rem;
    margin: 1.8rem 0 0;
    border: .15rem solid rgb(4, 48, 88);;
    background:0;
    color:#5a5a6e;
    cursor:pointer;
    transition:all .3s;
    font-family: 'Montserrat', sans-serif;
    text-align: center;
    display: block;
    margin: 2rem auto;
    background-color: rgb(255, 217, 45);
}

.button:hover {
    background: rgb(4, 48, 88);
    color: #fff;
}

.success {
    text-align: center;
}

@media only screen and (max-width: 768px) {

.col-left {
    display: none;
}

form {
    margin: 0 2rem;
}

}

</style>