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

export const messagesro = {
    load:'Arată mai multe',
    power:'MW',
    more:'Detalii',
    goto:'Vezi',
    next:'Continuă',
    select:'Gata',
    cancel:'Renunță',
    meta:'Panouri solare Solix',
    moreTitle:'Proiecte similare',
    homeTranslate:'Acasă',
    order:'Solicitați un apel',
    call:"apel",
    catalog:"Catalog",
    allFeatures:'Arată toate',
    thanks:'Mulțumim pentru cerere!',
    subscribe:'Abonează-te',
    newsThanks:'Mulțumesc! V-ați abonat cu succes la buletinul informativ',
    requestText:'Solicitarea pentru [variable] a fost trimisă cu succes. Așteptați un apel operator în termen de 20 de minute',
    phoneError:'Numărul incorect',
    emailError:'Email incorect',
    downloadDoc:'Descarcă documentația',
    linkCopied: 'Linkul a fost copiat cu succes',
    map:{
        title:'Proiecte finalizate pe hartă',
        list:[
            'Proiecte de afaceri',
            'Obiecte pentru persoane fizice',
            'Pentru instituțiile statului',
            'Obiecte în desfășurare'
        ]
    },
    header: [
        {text: 'Despre noi', link: 'about'},
        {text: 'Servicii', link: 'services'},
        {text: 'Noutăți', link: 'news'},
        {text: 'Cariera', link: 'career'},
        {text: 'Contacte', link: 'contacts'},
    ],
    nav: {
        call: 'Solicitați un apel',
        pages: [
            {text: 'Pentru business', link: 'b2b'},
            {text: 'Persoane fizice', link: 'b2c'},
            {text: 'Tarif fix ANRE', link: 'b2g'},
            {text: 'Proiecte', link: 'projects'},
            {text: 'Produse', link: 'products'}
        ],
    },
    footer: {
        title: 'Servicii',
        dropItem:'mobile',
        list_services: {
            title: 'Lista serviciilor',
            list: [
                {text: 'item1', link: 'b2b'},
                {text: 'item2', link: 'b2b'},
                {text: 'item3', link: 'b2b'}
            ]
        },
        solix: [
            {text: 'Servicii', link: 'services'},
            {text: 'Despre noi', link: 'about'},
            {text: 'Proiecte', link: 'projects'},
            {text: 'Produse', link: 'products'},
            {text: 'Noutăți', link: 'news'},
            {text: 'Cariera', link: 'career'},
        ],
        contact: {title: 'Contacte', address: 'Chisinau, Puskin 25/3, oficiul 2'},
        pages: [
            {text: 'Pentru business', link: 'b2b'},
            {text: 'Persoane fizice', link: 'b2c'},
            {text: 'Tarif fix ANRE', link: 'b2g'},
        ],
        policy:"Politica de confidențialitate"
    },
    modalForm: {
        placeholders: {
            email: 'Email',
            phone: 'Telefon',
            comment: 'Comentariu'
        },
        buttons: {
            value: 'Comandă',
            order:'Trimite'
        },
        card: {
            title: 'Comandă',
            call:"apel",
            service:'serviciu',
            terms: 'Prin trimiterea formularului sunteti de acord cu <a target="_blank" href="/privacy">termenii si conditiile</a>'
        }
    },
    newsModal: {
        placeholders: {
            email: 'Email',
        },
        buttons: {
            value: 'Abonează-te'
        },
        card: {
            title: 'Fiti la curent cu toate noutațile!',
            terms: 'Prin trimiterea formularului sunteti de acord cu <a target="_blank" href="/privacy">termenii si conditiile</a>'
        }
    },
    discount:{
        title:'Lăsați o solicitare și obțineți o reducere de 10%',
        text:'Doriți să vă optimizați costurile? Lăsați o solicitare și vă vom ajuta să găsiți cea mai eficientă și mai rentabilă soluție casa, afacere sau întreprindere dvs. În plus, veți primi o reducere de 10% la serviciile Solix.',
        button:'Obține reducerea'
    },
    cookies:{
        text:'Acest site folosește cookies. <br class="d-sm-none">Prin continuarea navigării, vă exprimați acordul asupra folosirii acestora. Pentru mai multe informații consultați <a target="_blank" href="/privacy" style="text-decoration: underline !important">politica de confidențialitate</a>',
        accept:'Acceptă'
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
