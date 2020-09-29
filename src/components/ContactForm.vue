<template>
    <div class="contact">
        <h1>Contact</h1>

        <form action="https://formspree.io/xknpgzke" method="post">
            <div class="contact-form">
                <label>Name</label>
                <input type="text" name="name" v-model="name">

                <label>Message</label>
                <textarea v-model="msg"></textarea>

                <button type="submit">Send</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            name: '',
            msg: ''
        }
    },

    methods: {
        submit(e) {
            e.preventDefault();
            console.log('submit');
        }
    }
}
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
