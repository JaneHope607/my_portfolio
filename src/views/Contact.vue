<template>
    <div class="contact">
        <h1>Contact</h1>

        <form method="post" action="/"
        @submit="submit">
            <div class="contact-form">
                <label>Name</label>
                <input type="text" v-model="name">
            </div>
            <div>
                <label>Message</label>
                <textarea v-model="msg"></textarea>
            </div>
            <div>
                <button type="submit">Submit</button>
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
