<template>
    <div class="container">
        <h1>Coding is
        <span class="typed-text">{{ typeValue }}</span>
        <span class="cursor" :class="{'typing': typeStatus}">&nbsp;</span>
        </h1>
    </div>
</template>

<script>
import { setTimeout } from 'timers';

  export default {
    data() {
      return {
        typeValue: '',
        typeStatus: false,
        typeArray: ['inspiring', 'innovative', 'a journey', 'life'],
        typingSpeed: 200,
        erasingSpeed: 100,
        newTextDelay: 2000,
        typeArrayIndex: 0,
        charIndex: 0
      }
    },
    methods: {
      typeText() {
        if(this.charIndex < this.typeArray[this.typeArrayIndex].length) {
          if(!this.typeStatus)
            this.typeStatus = true;
          this.typeValue += this.typeArray[this.typeArrayIndex].charAt(this.charIndex);
          this.charIndex += 1;
          setTimeout(this.typeText, this.typingSpeed);
        }
        else {
          this.typeStatus = false;
          setTimeout(this.eraseText, this.newTextDelay);
        }
      },
      eraseText() {
        if(this.charIndex > 0) {
          if(!this.typeStatus)
            this.typeStatus = true;
          this.typeValue = this.typeArray[this.typeArrayIndex].substring(0, this.charIndex - 1);
          this.charIndex -= 1;
          setTimeout(this.eraseText, this.erasingSpeed);
        }
        else {
          this.typeStatus = false;
          this.typeArrayIndex += 1;
          if(this.typeArrayIndex >= this.typeArray.length)
            this.typeArrayIndex = 0;
          setTimeout(this.typeText, this.typingSpeed + 1000);
        }
      }
    },
    created() {
      setTimeout(this.typeText, this.newTextDelay + 200);
    }
  }
</script>

<style lang="scss" scoped>

  .container {
    display: block;
    justify-content: center;
    align-items: center;
    text-align: center;
    max-width: 100%;
  }

  h1 {
    font-size: 6rem;
    font-weight: normal;
  }

  span.typed-text {
    color: rgb(255, 217, 45);
  }

  span.cursor {
    display: inline-block;
    margin-left: 3px;
    width: 4px;
    background-color: #4d4d4d;
    animation: cursorBlink 1s infinite;
  }

  span.cursor.typing {
    animation: none;
  }

  @keyframes cursorBlink {
    49% { background-color: #4d4d4d; }
    50% { background-color: transparent; }
    99% { background-color: transparent; }
  }


h2 {
  color: #4d4d4d;
  font-size: 5rem;
  font-weight: normal;
  text-align: center;
}

@media only screen and (max-width: 768px) {
  
  h1 {
    font-size: 4rem;
  }
}

</style>