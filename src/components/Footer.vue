<template>
    <footer>
      <div class="footerLinks">
        <ul>
          <li>
              <a href="https://github.com/JaneHope607">
                <!-- <img src="../assets/github-logo.png" /> -->
              </a>
          </li>
          <li>
              <a href="https://www.linkedin.com/in/jane-odonnell/">Legal
                <!-- <img src="../assets/linkedin-logo.jpg" /> -->
              </a>
          </li>
          <li><a href="#">Site Map</a>
          </li>
        </ul>
      </div>
    </footer>
</template>

<style lang="scss" scoped>

footer {
    position:relative;
    bottom: 0;
    left: 0;
    right: 0;
    text-align: center;
    font-family: arial;
    height: 10px;
}
.footerLinks {
   text-align: center;
}
.footerLinks ul {
	padding: 0;
    list-style-type: none;
    margin: 0;
}
.footerLinks li {
	display: inline;
}
.footerLinks a {
	color: #d9d9d9;
	text-decoration: none;
	font-size: 13px;
}

img {
    height: 50%
}

</style>