export default {
    header: {
        heading: 'Energia viitorului astăzi, pentru casa și afacerea dvs',
        subheading: 'La Solix oferim o gamă completă de servicii - de la importul de panouri solare până la instalare și punerea în funcțiune. Nu avem „proiecte standard”, pentru fiecare client Solix proiectăm o soluție tehnologică individuală.',
        button: 'Solicitați un apel',
        cards: [
            {
                img: '/assets/icons/ecology.png',
                title: 'Ecologic',
                text: 'Energia solară este o sursă de energie regenerabilă și curată, care reduce dependența de petrol, cărbune și gaze naturale. Panourile solare reprezintă o investiție în viitorul planetei.'
            },
            {
                img: '/assets/icons/plant.png',
                title: 'Economic',
                text: 'Economisiți chiar și în zilele înnorate, energia solară asigură eficiență pe tot parcursul anului și economii în orice climat, precum și reduce factura de energie electrică la zero. Bonus - clienților Solix nu le pasă de schimbarea prețurilor la electricitate.'
            },
            {
                img: '/assets/icons/solar-energy.png',
                title: 'Autoenergie',
                text: 'Casa sau afacerea dvs. este alimentată de panouri pe acoperiș în timpul zilei și energie stocată într-o baterie pe timp de noapte. Panourile solare sunt o alternativă accesibilă, durabilă și eficientă, care elimină incertitudinea și costurile inutile.'
            }
        ]
    },
    solutions: [
        {
            title: 'Soluții complexe pentru afaceri',
            text: 'Proiectăm și construim facilități „la cheie” de orice capacitate, atât pentru rețea, cât și pentru generarea autonomă, luând în considerare toate nevoile clienților noștri. Propria dvs. centrală solară este cea mai bună modalitate de a economisi energie electrică.',
            button: 'Detalii'
        },
        {
            title: 'Soluții personalizate pentru casa dvs.',
            text: 'Scăpați de facturile de energie electrică pentru totdeauna generând energie solară cu Solix. Vom proiecta pentru dvs. un sistem individual ecologic, luând în considerare toate caracteristicile casei dumneavoastră.',
            button: 'Detalii'
        },
        {
            title: 'Proiecte de orice complexitate pentru agențiile guvernamentale.',
            text: 'Oferim soluții cuprinzătoare, rentabile și eficiente pentru proiecte guvernamentale de orice dimensiune. Solix vă poate ajuta să implementați soluții solare eficiente din punct de vedere energetic pentru o sursă de energie fiabilă, 24/7, către site-uri și teritorii semnificative.',
            button: 'Detalii'
        }
    ],
    features: {
        title: 'De ce sa ne alegeți pe noi?',
        text: 'Pentru că punem pe primul loc nevoile clientului. În funcție de cerințele dumneavoastră, și de specificul instituției, va oferim soluții personalizate și adaptate nevoilor dumneavoastra. Soluțiile oferite de noi sunt optimizate pentru fiecare proiect și noi garantăm calitatea serviciilor noastre de proiectare și implementare a sistemelor de energie solară.',
        button: 'Solicitați un apel',
        cards: [
            {
                img: '/assets/icons/features/ecology-1.png',
                title: 'Energie verde',
                text: 'Energia solară este o modalitate excelentă de a reduce amprenta de carbon. O producție tipică de panouri solare elimină între 11 și 24 de tone de emisii de carbon pe an, ceea ce echivalează cu plantarea a peste 600 de copaci anual.'
            },
            {
                img: '/assets/icons/features/plant-1.png',
                title: 'Cost-eficiență',
                text: 'Reduceți sau chiar eliminați facturile de energie electrică. Cu un sistem de panouri solare, veți genera electricitate gratuit pentru întregul ciclu de viață de 30 de ani al sistemului dumneavoastră.'
            },
            {
                img: '/assets/icons/features/light-bulb-1.png',
                title: 'Costuri previzibile',
                text: 'Investind într-un sistem de energie solară acum, vă puteți bloca tariful pentru energie electrică și vă puteți proteja de creșteri imprevizibile ale costurilor. Trecerea la energia solară vă va ajuta, de asemenea, să vă anticipați și să vă gestionați mai bine costurile.'
            },
            {
                img: '/assets/icons/features/diploma-1.png',
                title: 'Competitivitate',
                text: 'Companiile realizează rapid beneficiile economice ale utilizării energiei solare. Deoarece adoptatorii timpurii depășesc deja concurența, vă sugerăm să privim energia solară ca o modalitate de a rămâne competitiv.'
            },
            {
                img: '/assets/icons/features/green-energy-1.png',
                title: 'Sursă gratuită de energie',
                text: 'Energia solară este o sursă gratuită de energie și nimeni nu poate monopoliza lumina soarelui. Panoul dvs. de energie solară va începe să economisească bani din momentul în care îl porniți.'
            },
            {
                img: '/assets/icons/features/gauge-1.png',
                title: 'Autonomie',
                text: 'Panoul dvs. solar este o garanție a liniștii voastre, a independenței și a securității energetice pentru afaceri și acasă. Nu veți mai fi niciodată îngrijorat de vânt, ploaie, zăpadă sau liniile electrice rupte.'
            },
        ]
    },
    economy: {
        title: 'Am ajutat la economisirea a <br> ' +
            ' <span class="number">3 859 357</span> MDL pentru clienții noștri',
        text: 'Energia solară asigură eficiență pe tot parcursul anului și economisirea în orice climă. Pe clienții Solix nu îi preocupă sporirea prețurilor la curentul electric. Sistemul dvs. de energie solară vă va economisi banii începând cu momentul când îl veți aprinde.',
        formula:'Formula de calcul',
        data: [
            {value: '25', name: 'Puterea MW'},
            {value: '1,3', name: 'MLN lei pentru 1 kWh'},
            {value: '50%', name: 'Reducerea costurilor'},
            {value: '5', name: 'Putere kW a SPP',
                tooltip:{
                    text: 'Costul energiei electrice este calculat în perioada de funcționare a SPP - 30 de ani'
                }
            }
        ]
    },
    projects: {
        title: 'Peste {count} <br>' +
            'de proiecte implementate',
        filter: [
            {id:0, tab: 'all', text: 'Toate'},
            {id:3, tab: 'business', text: 'Pentru afaceri'},
            {id:2, tab: 'person', text: 'Persoane fizice'},
            {id:1, tab: 'juridic', text: 'Tarif fix ANRE'}
        ],
        all: 'Toate proiectele'
    },
    questions: {
        title: 'Întrebări<br> și răspunsuri',
        text: 'Dacă aveți întrebări, vă rugăm să ne contactați la <span style="font-weight:bold"><a href="mailto:info@solix.md">info@solix.md</a></span> și vă vom răspunde cu plăcere.',
        list: [
            {title: 'Cum funcționează o centrală solară?', text: 'Principiul de funcționare al centralelor solare moderne (CSM) se bazează pe colectarea energiei solare concentrate folosind oglinzi și reflectarea luminii solare pe receptorii care colectează energia solară și o transformă în căldură.\n' +
                    '\n' +
                    'Într-o centrală solară, rolul panourilor solare nu este de a alimenta direct consumatorii de energie electrică (deși în anumite situații acest lucru este destul de justificat: ceasuri, calculatoare și dispozitive similare), ci de a asigura încărcarea bateriilor funcționale ale unui circuit care:\n' +
                    '<ul><li>primește energie electrică din module solare,</li>' +
                    '<li>acumulează și o transmite consumatorilor.</li></ul>'},
            {
                title: 'Cum se calculează rambursarea panourilor solare?',
                text: 'Pentru a calcula rambursarea, sunt necesari următorii indicatori: puterea panoului solar și producția anuală a acestuia (în funcție de insolație regiunii și de tipul modulelor), tariful electricității sau costul conexiunii în absența centralizării sursa de alimentare, precum și costul instalării la cheie în sine. De exemplu, capacitatea unei centrale este de 3 kW, iar producția anuală estimată este de 5 mii kW * h. Cu tariful de energie electrică la nivelul de 2 lei, o astfel de instalație va economisi 10 mii de lei pe an.'
            },
            {title: 'Cum funcționează panourile solare iarna?', text: 'Panourile solare funcționează atunci când sunt expuse la lumina soarelui. Datorită faptului că durata orelor de vară în timpul iernii este redusă și numărul de zile înnorate este mai mare, panourile nu mai pot genera aceeași cantitate de energie, iar productivitatea lor scade. Cu toate acestea, bateriile nu funcționează din lumina soarelui, ci din lumina soarelui în principiu. Radiațiile electromagnetice ajung pe pământ în orice moment al anului. Prin urmare, iarna, pot exista intervale mici când bateriile nu au timp să se încarce complet, dar acest lucru se întâmplă rar în timpul iernii. Vremea ideală de iarnă pentru un panou solar este o zi geroasă, fără nori. Uneori, în astfel de zile, există chiar înregistrări de generație.'},
            {title: 'Care sunt perspectivele energiei solare astăzi?', text: 'Majoritatea experților în energie consideră că energia solară este energia viitorului. Un număr mare de companii investesc foarte mult în construcția de centrale solare. Se străduiesc să dezvolte energia solară în multe țări ale lumii, considerând-o principala alternativă la sursele tradiționale de energie. De exemplu, Germania, fiind departe de a fi o țară însorită, a devenit liderul mondial în această zonă. Capacitatea totală a centralelor solare moderne (CSM) în Germania crește de la an la an. Serios angajat în dezvoltarea energiei solare în China. Potrivit prognozei optimiste a Agenției Internaționale pentru Energie, centralele solare vor putea produce până la 20-25% din electricitatea lumii până în 2050.'},
        ]
    },
    partners: {
        title: 'Peste 10 clienți pe care i-am ajutat la reducerea costurilor la energie',
        cards: [
            {title: 'Milina', text: '', image:'/assets/components/home/partners/Milina.png'},
            {title: 'Iug Trans', text: '', image:'/assets/components/home/partners/iugtrans.png'},
            {title: 'Cegoltar', text: '', image:'/assets/components/home/partners/cego_ltar.png'},
            {title: 'SunGrow', text: '', image : '/assets/components/home/partners/sun_grow.png'},
            {title: 'Alum', text: '', image : '/assets/components/home/partners/ALUM.png'},
            {title: 'Electrostat', text: '', image : '/assets/components/home/partners/electrostat.png'},
            {title: 'Swiss Solar', text: '', image:'/assets/components/home/partners/swiss_solar.png'},
            {title: 'ZamZam', text: '', image:'/assets/components/home/partners/ZAM_ZAM.png'},
            {title: 'SMA Company', text: '', image:'/assets/components/home/partners/sma.png'},
            {title: 'Nou Const', text: '', image:'/assets/components/home/partners/nou_const_srl.png'},
            {title: 'Vinaria Hancesti ', text: '', image:'/assets/components/home/partners/vinaria_hancesti.png'},
            {title: 'IMSP Hincesti', text: '', image:'/assets/components/home/partners/imsp_hancesti.png'}
        ]
    },
}
