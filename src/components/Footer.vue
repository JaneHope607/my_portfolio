<template>
    <footer id="footer">
        <div class="footer-links">
            <ul>
                <li>
                    <a href="https://github.com/JaneHope607" target="_blank">
                        <img src="../assets/github-logo.png" />
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/jane-odonnell/" target="_blank">
                        <img src="../assets/linkedin-logo.png" />
                    </a>
                </li>
                <li>
                    <a href="https://twitter.com/codes_jane" target="_blank">
                        <img src="../assets/twitter-logo.png" />
                    </a>
                </li>
            </ul>
        </div>
    </footer>
</template>

<style>

#footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 6rem;
    text-align: center;
    margin: 0 auto;
    padding-top: 20px;
}

.footer-links {
   margin: 0 auto;
   display: inline-block;
}

.footer-links ul {
	padding: 0;
    list-style-type: none;
    margin: 0px;
}

.footer-links li {
	display: inline;
    padding: 0 4rem 0 4rem;
    list-style-type: none;
    justify-content: center;
}

img {
    height: 3rem;
    width: auto;
    margin: 0 auto;
}

</style>