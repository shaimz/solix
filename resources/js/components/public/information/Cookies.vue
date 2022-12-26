<template>
    <div class="container">
        <h1 align="center">Solix’s Cookie Policy</h1>
        <p>Our Cookies Policy explains what cookies are, how we use cookies, how third parties we may partner with may use cookies on the Service, your choices regarding cookies, and further information about cookies.</p>
        <h2>What are cookies</h2>
            <p>Cookies are small pieces of text sent by your web browser by a website you visit. A cookie file is stored in your web browser and allows the Service or a third party to recognize you and make your next visit easier and the Service more useful to you.
            Cookies can be "persistent" or "session" cookies. The cookie allows the website to "remember" your actions or preferences over time.
                Most Internet browsers support cookies; however, users can set their browsers to decline certain types of cookies or specific cookies. Further, users can delete cookies at any time.</p>
        <h2>Why do we use cookies?</h2>
        <p>We use cookies to learn how you interact with our content and to improve your experience when visiting our website. For example, some cookies remember your language or preferences so that you do not have to repeatedly make these choices when you visit one of our websites.</p>
        <h2>What types of cookies do we use?</h2>
        <h3>First-Party and Third-Party Cookies</h3>
            <p>We use both first-party and third-party cookies on our website.
            First-party cookies are cookies issued from the solix.com domain that are generally used to identify language and location preferences or render basic site functionality.
                Third-party cookies belong to and are managed by other parties, such as Solix business partners or service providers. These cookies may be required to render certain forms, such as the submission of a job application, or to allow for some advertising outside of the solix.com website.</p>
        <h3>Session Cookies</h3>
        <p>Session cookies are temporary cookies that are used to remember you during the course of your visit to the website, and they expire when you close the web browser.</p>
        <h3>Persistent Cookies</h3>
        <p>Persistent cookies are used to remember your preferences within the website and remain on your desktop or mobile device even after you close your browser or restart your computer. We use these cookies to analyze user behavior to establish visit patterns so that we can improve our website functionality for you and others who visit our website(s). These cookies also allow us to serve you with targeted advertising and measure the effectiveness of our site functionality and advertising.</p>
        <h2>How are cookies used for advertising purposes?</h2>
            <p>Cookies and ad technology such as web beacons, pixels, and anonymous ad network tags help us serve relevant ads to you more effectively. They also help us collect aggregated audit data, research, and performance reporting for advertisers. Pixels enable us to understand and improve the delivery of ads to you and know when certain ads have been shown to you. Since your web browser may request advertisements and web beacons directly from ad network servers, these networks can view, edit, or set their own cookies, just as if you had requested a web page from their site.
                Although we do not use cookies to create a profile of your browsing behavior on third-party sites, we do use aggregate data from third parties to show you relevant, interest-based advertising. We do not provide any personal information that we collect to advertisers. You can opt out of off-site and third-party-informed advertising by adjusting your cookie settings. Opting out will not remove advertising from the pages you visit, but, instead, opting out will result in the ads you see not being matched to your interests. This implies that the ad(s) you see will not be matched to your interests by those specific cookies.</p>
        <h2>How are third-party cookies used?</h2>
        <p>For some of the functions within our websites, we use third-party suppliers, for example, when you visit a page with videos embedded from or links to YouTube. These videos or links (and any other content from third-party suppliers) may contain third-party cookies, and we encourage you to consult the privacy policies of these third-party vendors on their websites for information regarding their use of cookies.</p>
        <h2>How do I reject and delete cookies?</h2>
            <p>You can choose to reject or block all or specific types of cookies set by virtue of your visit to a solix.com website by clicking on the cookie preferences on our website. You can change your preferences for the solix.com website and/or the websites of any third-party suppliers by changing your browser settings. Please note that most browsers automatically accept cookies. Therefore, if you do not wish cookies to be used, you may need to actively delete or block the cookies. If you reject the use of cookies, you will still be able to visit our websites but some of the functions may not work correctly. You may also visit www.allaboutcookies.org for details on how to delete or reject cookies and for further information on cookies generally. By using our website without deleting or rejecting some or all cookies, you agree that we can place those cookies that you have not deleted or rejected on your device.</p>
    </div>

</template>

<script>
    import {bus} from "../../../event/eventbus";

    export default{
        name:'cookies',
        data(){
            return{

            }
        },
        mounted() {
            bus.$emit('position','relative');
            bus.$emit('theme','light')
        }
    }
</script>
<style scoped>
    h2{
        font-size: 24px !important;
        line-height: 65px;
    }
    h3{
        font-size: 18px !important;
        line-height: 65px;
    }
    h1{
        font-size: 32px !important;
        line-height: 65px;
    }
    p{
        font-size: 14px !important;
    }
</style>
