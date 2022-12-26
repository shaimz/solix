import home from './home.js';
import projects from './projects.json';
import products from './products.json';
import contacts from './contacts.json';
import b2c from './b2c.json';
import b2b from './b2b.json';
import b2g from './b2g.json';
import about from './about.json';
import news from './news.json';
import career from './career.json';
import sort from './sort.json';
import services from './services.json';
import energy from "./energy.json";
import tarif from './tarif.json';

export const messagesen = {
    load:'Load more',
    power:'MW',
    more:'More',
    goto:'See',
    next:'Next',
    select:'Done',
    cancel:'Cancel',
    meta:'Solix solar panels',
    moreTitle:'Similar projects',
    homeTranslate:'Home',
    order:"Order call",
    call:"call",
    catalog:"Catalog",
    allFeatures:'Show all',
    thanks:'Thank you for the request!',
    subscribe:'Subscribe',
    newsThanks:'Thank you! You have successfully subscribed to the newsletter',
    requestText:'Solicitarea pentru [variable] a fost trimisă cu succes. Așteptați un apel operator în termen de 20 de minute',
    phoneError:'Phone number incorrect',
    emailError:'Email incorrect',
    downloadDoc:'Download documentation',
    linkCopied: 'Link was copied to clipboard',
    map:{
        title:'Completed projects on the map',
        list:[
            'Business projects',
            'Objects for individuals',
            'State institutions',
            'Objects in construction'
        ]
    },
    header: [
        {text: 'About', link: 'about'},
        {text: 'Services', link: 'services'},
        {text: 'News', link: 'news'},
        {text: 'Career', link: 'career'},
        {text: 'Contacts', link: 'contacts'}
    ],
    nav: {
        call: 'Order call',
        pages: [
            {text: 'For business', link: 'b2b'},
            {text: 'For individuals', link: 'b2c'},
            {text: 'Fixed-rate ANRE', link: 'b2g'},
            {text: 'Projects', link: 'projects'},
            {text: 'Products', link: 'products'}
        ],

    },
    footer: {
        title: 'Services',
        list_services: {
            title: 'Services List',
            list: [
                {text: 'item1', link: 'b2b'},
                {text: 'item2', link: 'b2g'},
                {text: 'item3', link: 'b2c'}
            ]
        },
        solix: [
            {text: 'Services', link: 'services'},
            {text: 'About', link: 'about'},
            {text: 'Projects', link: 'projects'},
            {text: 'Products', link: 'products'},
            {text: 'News', link: 'news'},
            {text: 'Career', link: 'career'},
        ],
        contact: {title: 'Contacts', address: 'Chisinau, Pushkin 25/3, office 2'},
        pages: [
            {text: 'For business', link: 'b2b'},
            {text: 'For individuals', link: 'b2c'},
            {text: 'Fixed-rate ANRE', link: 'b2g'},
        ],
        policy:"Privacy Policy"
    },
    modalForm: {
        placeholders: {
            email: 'Email',
            phone: 'Phone',
            comment: 'Comment'
        },
        buttons: {
            value: 'Order',
            order:'Send'
        },
        card: {
            title: 'Order',
            call:'call',
            service:'service',
            terms: `By submitting the form you agree with <a target="_blank" href="/en/privacy">terms and conditions</a>`
        }
    },
    newsModal: {
        placeholders: {
            email: 'Email',
        },
        buttons: {
            value: 'Subscribe'
        },
        card: {
            title: 'Be aware of all the news!',
            terms: 'By submitting the form you agree with <a target="_blank" href="/en/privacy">terms and conditions</a>'
        }
    },
    discount:{
        title:'Leave a request and get a 10% discount',
        text:'Looking to optimize your costs? Leave a request and we will help you find the most effective and cost-efficient solution for your home, business, or enterprise. Additionally, you will receive a 10% discount on Solix services.',
        button:'Get Discount'
    },
    cookies:{
      text:'This site uses cookies. <br class="d-sm-none">By continuing to browse this site, you agree to the use of cookies. For more information see our <a target="_blank" href="/en/privacy" style="text-decoration: underline !important">privacy policy</a>',
      accept:'Accept'
    },
    home,
    projects,
    products,
    contacts,
    b2g,
    b2b,
    b2c,
    about,
    news,
    career,
    sort,
    services,
    energy,
    tarif
}
