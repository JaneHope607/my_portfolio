<template>
    <div class="image-about">
        <div class="profile-image">
            <img class="profile-photo" src='../assets/jane-profile.png' alt="profile image"/>
        </div>
        <div class="title">
            <h2>Developer<span>.</span><br>Designer<span>.</span></h2>
        </div>
        <!-- <p> I'm a web developer based in Edinburgh, Scotland. I have a passion for web design!</p>
        <img src="../assets/codeclan.png" alt="codeclan logo"/> -->
    </div>
</template>

<style scoped>

.image-about {
    display: flex;
}

.profile-image {
    display: flex;
}

.profile-photo {
    width: 50%;
    height: auto;
}

span {
    color: rgb(255, 217, 45);
}

h2 {
    font-size: 6rem;
    font-weight: normal;
}

</style>