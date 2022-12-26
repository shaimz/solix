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


export const messagesru = {
    load:'Показать еще',
    power: 'MВт',
    more: 'Подробнее',
    goto: 'Перейти',
    next:'Продолжить',
    select:'Готово',
    cancel:'Отмена',
    meta:'Солнечные панели Solix',
    moreTitle:'Похожие проекты',
    homeTranslate:'Главная',
    order:'Заказать звонок',
    call:"звонок",
    catalog:"Каталог",
    allFeatures:'Показать полностью',
    thanks:'Спасибо за заявку!',
    subscribe:'Подписаться',
    newsThanks:'Спасибо! Вы успешно подписались на рассылку',
    requestText:'Заявка на [variable] успешно отправлена. Ожидайте звонка оператора в течении 20 минут',
    phoneError:'Номер неверный',
    emailError:'Электронная почта неверна',
    downloadDoc:'Скачать документацию',
    linkCopied: 'Ссылка была скопирована в буфер обмена',
    map:{
        title:'Реализованные проекты на карте',
        list:[
            'Бизнес объекты',
            'Объекты для частных лиц',
            'Госучереждения',
            'Объекты в работе'
        ]
    },
    header: [
        {text: 'О компании', link: 'about'},
        {text: 'Услуги', link: 'services'},
        {text: 'Новости', link: 'news'},
        {text: 'Карьера', link: 'career'},
        {text: 'Контакты', link: 'contacts'}
    ],
    nav: {
        call: 'Заказать звонок',
        pages: [
            {text: 'Для бизнеса', link: 'b2b'},
            {text: 'Частным лицам', link: 'b2c'},
            {text: 'Фиксированный тариф НАРЭ', link: 'b2g'},
            {text: 'Проекты', link: 'projects'},
            {text: 'Продукция', link: 'products'}
        ],
    },
    footer: {
        title: 'Услуги',
        list_services: {
            title: 'Список услуг',
            list: [
                {text: 'item1', link: 'b2b'},
                {text: 'item2', link: 'b2b'},
                {text: 'item3', link: 'b2b'}
            ]
        },
        solix: [
            {text: 'Услуги', link: 'services'},
            {text: 'О компании', link: 'about'},
            {text: 'Проекты', link: 'projects'},
            {text: 'Продукция', link: 'products'},
            {text: 'Новости', link: 'news'},
            {text: 'Карьера', link: 'career'},
        ],
        contact: {title: 'Контакты', address: 'Кишинев, Пушкина 25/3, офис 2'},
        pages: [
            {text: 'Для бизнеса', link: 'b2b'},
            {text: 'Частным лицам', link: 'b2c'},
            {text: 'Фиксированный тариф НАРЭ', link: 'b2g'},
        ],
        policy:"Политика конфиденциальности"
    },
    modalForm: {
        placeholders: {
            email: 'Email',
            phone: 'Телефон',
            comment: 'Комментарий'
        },
        buttons: {
            value: 'Заказать',
            order:'Отправить'
        },
        card: {
            title: 'Заказать',
            call:'звонок',
            service:'услуга',
            terms: 'Отправляя форму, вы соглашаетесь с <a target="_blank" href="/ru/privacy">условиями использования</a>'
        }
    },
    newsModal: {
        placeholders: {
            email: 'Email',
        },
        buttons: {
            value: 'Подписаться'
        },
        card: {
            title: 'Будь в курсе всех новостей!',
            terms: 'Отправляя форму, вы соглашаетесь с <a target="_blank" href="/ru/privacy">условиями использования</a>'
        }
    },
    discount: {
        title: 'Оставь заявку и получи скидку 10%',
        text: 'Хотите сэкономить? Оставьте заявку и мы поможем подобрать оптимальное решение для вашего дома, бизнеса, или предприятия. Дополнительно вы получите скидку 10% на услуги Solix.',
        button: 'Получить скидку'
    },
    cookies:{
        text:'Этот сайт использует файлы cookie. <br class="d-sm-none">Посещая наш сайт, вы соглашаетесь с их использованием. Для дополнительной информации ознакомьтесь с <a target="_blank" href="/ru/privacy" style="text-decoration: underline !important">политикой конфиденциальности</a>',
        accept:'Принять'
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
