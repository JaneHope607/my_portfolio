<template>
    <div class="image-about">
        <div class="profile-image">
            <img class="profile-photo" src='../assets/jane-profile.png' alt="profile image"/>
        </div>
        <div class="title">
            <h2>Developer<span>.</span><br>Designer<span>.</span></h2>
        </div>
    </div>
</template>

<style scoped>

.image-about {
    display: flex;
    width: 100%;
}

.profile-image {
    width: 50%;
    margin: 2rem 2rem 0 2rem;
    padding: 0;
}

.profile-photo {
    max-width: 100%;
    height: auto;
}

span {
    color: rgb(255, 217, 45);
}

.title {
    margin: 2rem 2rem 0 2rem;
    padding: 0;
}

h2 {
    font-size: 6rem;
    font-weight: normal;
    vertical-align:middle;
}

@media only screen and (max-width: 350px) {

.profile-image {
    width: 80%;
}

}

</style>