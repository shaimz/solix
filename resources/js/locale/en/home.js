export default {
    header: {
        heading: 'Energy of the future today, for your home and business',
        subheading: 'At Solix we provide a full range of services - from import of solar panels to installation and commissioning. We do not have any "standard projects", for each Solix client, we design an individual tech <br>solution.',
        button:"Order call",
        cards: [
            {
                img: '/assets/icons/ecology.png',
                title: 'Green',
                text: 'Solar energy is a 100% clean renewable energy source that reduces dependence on oil, coal, and natural gas. Solar panels are an investment in the future of the planet.'
            },
            {
                img: '/assets/icons/plant.png',
                title: 'Economical',
                text: 'Save even on cloudy days, solar power provides year-round efficiency and savings in any climate and reduces your electricity bill to zero. Bonus - Solix customers don\'t care about change of the electricity prices.'
            },
            {
                img: '/assets/icons/solar-energy.png',
                title: 'Self-energy',
                text: 'Your home or business is powered by rooftop panels during the day and energy stored in a battery at night. Solar panels are an affordable, sustainable and efficient alternative that eliminates the inconvenience, uncertainty, and unnecessary costs.'
            }
        ]
    },
    solutions: [
        {
            title: 'Complex solutions for business',
            text: 'We design and build "turnkey" facilities of any capacity, both for grid and autonomous generation, taking into account all the needs of our clients. Your own solar power plant is the best way to save on electricity.',
            button: 'Details'
        },
        {
            title: 'Customized solutions for your home',
            text: 'Get rid of your electricity bills forever by generating solar power with Solix. We will design for you an individual eco-friendly system, taking into account all the features of your house.',
            button: 'Details'
        },
        {
            title: 'Projects of any complexity for government agencies',
            text: 'We offer comprehensive, cost-effective, and efficient solutions for government projects of any size. Solix can help you implement energy-efficient solar solutions for reliable, 24/7 power supply to significant sites and territories.',
            button: 'Details'
        }
    ],
    features: {
        title: 'Why choose us?',
        text: 'Because we put the client’s needs first. Depending on your requirements, and the specifics of the institution, we offer customized solutions tailored to your needs. The solutions we offer are optimized for each project and we guarantee the quality of our services for the design and implementation of solar energy systems.',
        button: 'Order call',
        cards: [
            {
                img: '/assets/icons/features/ecology-1.png',
                title: 'Green Energy',
                text: 'Solar power is a great way to reduce your carbon footprint. A typical solar panel manufacturing eliminates 11 to 24 tons of carbon emissions per year, which is equivalent to planting more than 600 trees annually.'
            },
            {
                img: '/assets/icons/features/plant-1.png',
                title: 'Cost-Efficiency',
                text: 'Reduce or even eliminate electricity bills. With a solar panel system, you will generate electricity free of charge for the entire 30-year life cycle of your system.'
            },
            {
                img: '/assets/icons/features/light-bulb-1.png',
                title: 'Predictable Costs',
                text: 'By investing in a solar energy system now, you can lock in your electricity tariff and protect yourself from unpredictable increases in costs. Switching to solar energy will also help you better predict and manage your costs.'
            },
            {
                img: '/assets/icons/features/diploma-1.png',
                title: 'Competitiveness',
                text: 'Companies are quickly realizing the economic benefits of using solar energy. Since early adopters are already outstripping the competition, we suggest looking at solar energy as a way to stay competitive.'
            },
            {
                img: '/assets/icons/features/green-energy-1.png',
                title: 'Free of charge',
                text: 'Solar energy is a free source of energy and no one can monopolize the sunlight. Your solar energy panel will start saving money from the moment you turn it on.'
            },
            {
                img: '/assets/icons/features/gauge-1.png',
                title: 'Autonomy',
                text: 'Your own solar panel is a guarantee of your peace of mind, independence, and energy security for business and home. You will never again be worried about wind, rain, snow, or broken power lines.'
            },
        ]
    },
    economy: {
        title: 'We helped our clients save <br> <span class="number">3 859 357</span>',
        text: 'Solar power provides year-round efficiency and savings in any climate. Solix customers don\'t care about rising electricity prices. Your solar energy system will start saving money since you turn it on.',
        formula:'Calculation formula',
        data: [
            {value: '25', name: 'MW Power'},
            {value: '1,3', name: 'Million MDL per 1 kWh'},
            {value: '50%', name: 'Cost savings'},
            {value: '5', name: 'kW power of SPP',
                tooltip:{
                    text: 'The cost of electricity is calculated during the period of operation of the SPP - 30 years'
                }
            }
        ]
    },
    projects: {
        title: 'More than <br>' +
            '{count} projects implemented',
        filter: [
            {id:0, tab: 'all', text: 'All'},
            {id:3, tab: 'business', text: 'For business'},
            {id:2, tab: 'person', text: 'Individuals'},
            {id:1, tab: 'juridic', text: 'State institutions'}
        ],
        all: 'All projects'
    },
    questions: {
        title: 'Frequently<br> Asked Questions',
        text: 'If you have any additional questions, don’t hesitate to contact us <span style="font-weight:bold"><a href="mailto:info@solix.md">info@solix.md</a></span>',
        list: [
            {title: 'How does a solar power plant work?', text: 'The principle of operation of modern solar power plants (SPP) is based on the collection of concentrated solar energy using mirrors and the reflection of sunlight on receivers that collect solar energy and convert it into heat.\n' +
                    '\n' +
                    'In a solar power plant, the role of solar panels is not to directly power electrical consumers (although in certain situations this is quite justified: watches, calculators, and similar devices), but to ensure the charge of working batteries of a circuit that:\n' +
                    '<ul><li>receive electricity from solar modules,</li>' +
                    '<li>accumulate it and pass it on to consumers.</li></ul>'},
            {
                title: 'How to calculate the payback of solar panels?',
                text: 'To calculate the payback, the following indicators are required: the power of the solar panel and its annual output (depending on the insolation of the region and the type of modules), the electricity tariff, or the cost of connection in the absence of centralized power supply, as well as the cost of the turnkey installation itself.\n' +
                    'For example, the capacity of a power plant is 3 kW, and its estimated annual output is 5 thousand kW * h. With the electricity tariff at the level of 2 lei, such an installation will save 10 thousand lei per year.\n'
            },
            {title: 'How do solar panels work in winter?', text: 'Solar panels work when exposed to sunlight. Due to the fact that the duration of daylight hours in winter is reduced and the number of cloudy days is greater, the panels can no longer generate the same amount of energy, and their productivity decreases. However, batteries do not work from sunlight, but from sunlight in principle. Electromagnetic radiation reaches the earth at any time of the year. Therefore, in winter, there can be small intervals when the batteries do not have time to fully charge, but this rarely happens during the winter. The ideal winter weather for a solar panel is a frosty, cloudless day. Sometimes on such days, there are even generation records.'},
            {title: 'What are the prospects for solar energy today?', text: 'Most energy experts regard solar as the energy of the future. A large number of companies are investing heavily in the construction of solar power plants. They strive to develop solar energy in many countries of the world, considering it the main alternative to traditional energy sources. For example, Germany, being far from being a sunny country, has become the world leader in this area. The total capacity of the SPP in Germany is growing from year to year. Seriously engaged in solar energy development is China. According to the optimistic forecast of the International Energy Agency, solar power plants will be able to produce up to 20-25% of the world\'s electricity by 2050.'},
        ]
    },
    partners: {
        title: 'More than 10 clients that we have helped to reduce energy costs',
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
            {title: 'Hincesti Winery ', text: '', image:'/assets/components/home/partners/vinaria_hancesti.png'},
            {title: 'IMSP Hincesti', text: '', image:'/assets/components/home/partners/imsp_hancesti.png'}
        ]
    },
}
