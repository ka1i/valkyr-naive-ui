<template>
    <footer>
        <div class="footer-inner">
            <a
                href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh"
                target="_blank"
                rel="noopener"
            >
                <i class="fa fa-fw fa-creative-commons"></i>CC BY-NC-SA 4.0
            </a>
            <div class="copyright">
                © 2017 –
                <span itemprop="copyrightYear">2021</span>
                <span class="with-love" id="animate">
                    <i class="fa fa-heart"></i>
                </span>
                <span class="author" itemprop="copyrightHolder">Mardan · M</span>
            </div>
            <div class="footer-custom">Copyright © 2017 - 2021 Mardan. All Rights Reserved.</div>
        </div>
    </footer>
</template>

<script>
export default {
    name: "Footer",
};
</script>


<style>
footer {
    margin-top: 25px;
    bottom: 15px;
    color: #353535;
    text-align: center;
    font-size: 13px;
}

footer > div > a {
    font-style: italic;
    text-decoration: none;
    color: #353535;
}
</style>
