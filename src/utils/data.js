// import React, { useState } from 'react';

// const showdetails = async () => {
//     try {
//         const result = await axios.get()
//     }
//     catch (error) {
//         console.log("error", error)
//     }
// }
// showdetails

export const users = [
    {
        id: 702,
        firstName: 'Dedun',
        lastName: 'Lammers',
        email: 'IMarashi@amet.io',
        phone: '(548)578-1964',
        address: {
            streetAddress: '7276 Placerat Dr',
            city: 'Woodbridge',
            state: 'OH',
            zip: '82628'
        },
        description:
            'amet dolor aliquam sed amet sed magna quis nec vestibulum pulvinar eget pulvinar ante neque vel orci vitae magna sed turpis vitae pulvinar nec molestie lacus elementum ac non consequat in vitae'
    },
    {
        id: 316,
        firstName: 'Kameko',
        lastName: 'Tapia',
        email: 'SShobe@aenean.gov',
        phone: '(165)596-1358',
        address: {
            streetAddress: '4225 Lectus Ave',
            city: 'Zionsville',
            state: 'NY',
            zip: '73012'
        },
        description:
            'ante nullam libero vestibulum id hendrerit risus elementum sollicitudin dui risus neque scelerisque tellus molestie sit tortor et sed sit sed ac dolor et quis porttitor magna dui adipiscing convallis velit porttitor'
    },
    {
        id: 380,
        firstName: 'Halina',
        lastName: 'Reitz',
        email: 'KLeon@molestie.ly',
        phone: '(796)778-7797',
        address: {
            streetAddress: '4595 Facilisis Ct',
            city: 'Augusta',
            state: 'WY',
            zip: '84541'
        },
        description:
            'tortor pharetra odio aliquam tortor vel odio tincidunt velit consequat convallis vestibulum neque aliquam placerat id tincidunt scelerisque turpis velit tincidunt ipsum augue magna sed neque odio adipiscing sit et lorem etiam'
    },
    {
        id: 70,
        firstName: 'Carlo',
        lastName: 'Towers',
        email: 'CRager@odio.ly',
        phone: '(521)060-2106',
        address: {
            streetAddress: '1518 At Ave',
            city: 'Lehigh Acres',
            state: 'AZ',
            zip: '68337'
        },
        description:
            'neque quis orci suspendisse facilisis risus rutrum scelerisque orci lacus adipiscing tempor sollicitudin massa tincidunt neque pulvinar pretium facilisis et velit lacus elementum convallis vestibulum id adipiscing odio sapien tincidunt facilisis vitae'
    },
    {
        id: 194,
        firstName: 'Roger',
        lastName: 'Leon',
        email: 'NHolt@ipsum.com',
        phone: '(693)974-3191',
        address: {
            streetAddress: '3421 Magna Ln',
            city: 'Shorewood',
            state: 'CT',
            zip: '52986'
        },
        description:
            'amet vel mattis lacus egestas nec quis etiam sollicitudin sit odio in sit tortor ipsum aliquam nullam dui ipsum orci magna velit nec non dui odio sed pharetra pulvinar adipiscing sollicitudin at'
    },
    {
        id: 19,
        firstName: 'Francesca',
        lastName: 'Giera',
        email: 'MNolan@suspendisse.io',
        phone: '(510)606-1257',
        address: {
            streetAddress: '3194 Amet Ln',
            city: 'Fort Myers',
            state: 'HI',
            zip: '98664'
        },
        description:
            'et sed mattis dolor ipsum ipsum egestas adipiscing ipsum lacus at consectetur in vitae nec elementum consectetur pulvinar mattis tempor odio porta amet neque magna vitae sapien ipsum pulvinar ante orci tellus'
    },
    {
        id: 490,
        firstName: 'Guillermina',
        lastName: 'Nabors',
        email: 'BDieli@sit.org',
        phone: '(183)420-3395',
        address: {
            streetAddress: '6168 Magna Dr',
            city: 'Pittsburg',
            state: 'NM',
            zip: '82496'
        },
        description:
            'amet hendrerit aliquam nullam dui sagittis turpis magna amet donec fringilla mi eget vestibulum egestas pretium dolor dolor vitae sed sapien donec quis pulvinar donec ac morbi at lacus ac eget sagittis'
    },
    {
        id: 183,
        firstName: 'Tylene',
        lastName: 'Bert',
        email: 'EJohnston@nunc.com',
        phone: '(351)684-4926',
        address: {
            streetAddress: '1232 Tortor Ave',
            city: 'Mystic',
            state: 'MA',
            zip: '76912'
        },
        description:
            'in dolor odio velit lectus tortor at sit fringilla amet tortor convallis dolor quis odio placerat pretium amet neque at lorem porta curabitur dolor etiam rutrum neque dolor sapien non suspendisse mattis'
    },
    {
        id: 833,
        firstName: 'Biswajit',
        lastName: 'Derp',
        email: 'CSimpson@ipsum.ly',
        phone: '(391)295-7909',
        address: {
            streetAddress: '4538 Hendrerit Ln',
            city: 'Saint Clair Shores',
            state: 'NH',
            zip: '52182'
        },
        description:
            'egestas consequat tempor lacus lacus lacus elementum lacus aenean orci convallis elit vestibulum odio tortor ante hendrerit ipsum etiam vel pulvinar et facilisis id mattis tempor massa porta porttitor donec magna porttitor'
    },
    {
        id: 616,
        firstName: 'Markella',
        lastName: 'Duffy',
        email: 'TBarrientos@amet.ly',
        phone: '(582)354-5225',
        address: {
            streetAddress: '4183 Turpis Rd',
            city: 'Centereach',
            state: 'RI',
            zip: '97208'
        },
        description:
            'dolor vitae et massa lectus massa porta tellus ipsum consequat dolor in et nullam aliquam pharetra sit pharetra vel massa suspendisse tincidunt fringilla lorem turpis sollicitudin porttitor convallis et magna nullam hendrerit'
    },
    {
        id: 287,
        firstName: 'Cheryll',
        lastName: 'Llewellyn',
        email: 'BCrosswhite@lectus.gov',
        phone: '(298)954-6852',
        address: {
            streetAddress: '7713 Pulvinar St',
            city: 'Pittsburgh',
            state: 'UT',
            zip: '50703'
        },
        description:
            'consequat magna pretium mi consectetur vitae mi neque porttitor aliquam eget vel scelerisque elit vel ac dui libero sed sollicitudin elementum massa elit sed turpis sollicitudin magna sapien pulvinar adipiscing sapien fringilla'
    },
    {
        id: 331,
        firstName: 'Gerarld',
        lastName: 'Higdon',
        email: 'CArmstrong@convallis.net',
        phone: '(804)565-2311',
        address: {
            streetAddress: '2711 Lacus Rd',
            city: 'Topeka',
            state: 'MI',
            zip: '45900'
        },
        description:
            'ac elementum sed placerat nec magna in risus lacus sit lectus eget lacus placerat at etiam nec aliquam tincidunt massa dolor ipsum vitae pulvinar sed tincidunt ipsum massa tortor lectus sit mi'
    },
    {
        id: 431,
        firstName: 'Adrienne',
        lastName: 'Rioux',
        email: 'TSchnell@ante.ly',
        phone: '(861)164-4982',
        address: {
            streetAddress: '9926 Turpis Ave',
            city: 'Slate Hill',
            state: 'CT',
            zip: '38550'
        },
        description:
            'scelerisque tortor curabitur nunc tincidunt dolor sed fringilla tortor pulvinar elementum curabitur magna ipsum at ac hendrerit aenean hendrerit tortor nec odio ante at mattis sed pulvinar pharetra egestas in nunc amet'
    },
    {
        id: 488,
        firstName: 'Jane',
        lastName: 'Jayn',
        email: 'SDeals@consectetur.org',
        phone: '(368)681-1872',
        address: {
            streetAddress: '4315 Lorem Rd',
            city: 'Tampa',
            state: 'NV',
            zip: '57747'
        },
        description:
            'curabitur donec dolor pretium elit sapien turpis turpis tortor elit sit magna at tortor at molestie ipsum porttitor consectetur scelerisque ac quis aenean sapien massa adipiscing lacus magna velit augue elementum aliquam'
    },
    {
        id: 712,
        firstName: 'Haidi',
        lastName: 'Hellems',
        email: 'LKnowles@et.net',
        phone: '(746)536-4466',
        address: {
            streetAddress: '357 Et Ct',
            city: 'Union City',
            state: 'DC',
            zip: '13860'
        },
        description:
            'lacus pulvinar donec libero at sed magna eget vitae magna donec etiam ac lectus ipsum adipiscing magna porta vitae donec aliquam porttitor lectus non egestas et et risus sagittis tincidunt sed pulvinar'
    },
    {
        id: 22,
        firstName: 'Cathleen',
        lastName: 'Hansen',
        email: 'CFerreira@sit.com',
        phone: '(252)174-1726',
        address: {
            streetAddress: '1919 Mattis Ct',
            city: 'Pine Mountain',
            state: 'FL',
            zip: '25492'
        },
        description:
            'tincidunt mattis vestibulum pulvinar quis mattis ipsum sed pulvinar sit morbi tincidunt ac sagittis aenean sit dolor odio lacus rutrum pretium nullam pulvinar amet turpis velit nec eget ac donec egestas pretium'
    },
    {
        id: 343,
        firstName: 'Alexander',
        lastName: 'Puglisi',
        email: 'JRose@morbi.io',
        phone: '(144)050-1565',
        address: {
            streetAddress: '9395 Dolor St',
            city: 'Centreville',
            state: 'WY',
            zip: '59010'
        },
        description:
            'sed adipiscing sit lacus malesuada porta lacus etiam et risus amet tincidunt at sollicitudin tempor odio aliquam ante tincidunt fringilla curabitur sit at velit mattis tempor vel lacus nullam sapien mattis neque'
    },
    {
        id: 482,
        firstName: 'Alan',
        lastName: 'Wathen',
        email: 'NDehaven@consequat.org',
        phone: '(412)162-6228',
        address: {
            streetAddress: '6198 Amet St',
            city: 'Cranford',
            state: 'CA',
            zip: '60226'
        },
        description:
            'adipiscing malesuada orci mattis massa lacus sit aliquam placerat nullam sit placerat mattis velit sollicitudin vestibulum lacus sed rutrum porttitor dolor tincidunt dolor massa magna magna donec eget pulvinar aliquam consequat sed'
    },
    {
        id: 521,
        firstName: 'Roy',
        lastName: 'Hackman',
        email: 'DCary@mattis.com',
        phone: '(967)799-1287',
        address: {
            streetAddress: '5072 Id Dr',
            city: 'Whitman',
            state: 'NJ',
            zip: '91535'
        },
        description:
            'tincidunt at elementum curabitur sollicitudin porttitor egestas scelerisque risus sit vel risus amet sit nunc curabitur orci dolor sollicitudin curabitur tellus nec pulvinar sed lacus ipsum tincidunt non pretium tincidunt malesuada sit'
    },
    {
        id: 829,
        firstName: 'Allana',
        lastName: 'Bernauer',
        email: 'CCovel@adipiscing.com',
        phone: '(124)258-3656',
        address: {
            streetAddress: '7728 Vestibulum St',
            city: 'Pine Mountain',
            state: 'AZ',
            zip: '21114'
        },
        description:
            'amet sollicitudin amet suspendisse lectus sollicitudin sollicitudin porta rutrum augue scelerisque sit sollicitudin at sit eros tincidunt hendrerit malesuada vitae odio amet vestibulum placerat tortor malesuada nec non magna amet eros consequat'
    },
    {
        id: 47,
        firstName: 'Ingrid',
        lastName: 'Hershfeld',
        email: 'PFrazee@morbi.gov',
        phone: '(455)422-2207',
        address: {
            streetAddress: '9792 Curabitur St',
            city: 'Nicholasville',
            state: 'MS',
            zip: '89932'
        },
        description:
            'vitae sollicitudin sagittis amet consequat vestibulum vel ac nullam mattis ipsum tincidunt consectetur vel sollicitudin nunc et massa dolor et turpis sit adipiscing ipsum augue et mi velit dolor dolor sed tempor'
    },
    {
        id: 765,
        firstName: 'Alvin',
        lastName: 'Arp',
        email: 'EBottone@nec.org',
        phone: '(163)526-0915',
        address: {
            streetAddress: '967 Massa Ln',
            city: 'Marion',
            state: 'IN',
            zip: '26569'
        },
        description:
            'lacus scelerisque amet non pretium at vestibulum tempor sapien magna convallis etiam augue nullam orci suspendisse mattis pulvinar nullam dolor placerat quis pretium tincidunt sed orci vitae adipiscing donec nec hendrerit sollicitudin'
    },
    {
        id: 947,
        firstName: 'Napoleon',
        lastName: 'Otto',
        email: 'RChadwick@lorem.com',
        phone: '(837)647-0565',
        address: {
            streetAddress: '6979 Lacus Ct',
            city: 'Saint Pauls',
            state: 'SC',
            zip: '67183'
        },
        description:
            'pulvinar sed vitae orci at tortor ipsum neque sagittis tortor ante sit risus amet ipsum vitae consectetur pulvinar aliquam at nec dolor etiam eget fringilla lacus amet pulvinar at magna elit lacus'
    },
    {
        id: 595,
        firstName: 'Marek',
        lastName: 'Roazen',
        email: 'NAbundo@sit.io',
        phone: '(772)235-1531',
        address: {
            streetAddress: '9282 Egestas Ln',
            city: 'Sinton',
            state: 'OR',
            zip: '96399'
        },
        description:
            'lacus facilisis sit lacus porttitor placerat fringilla lacus sed elit neque odio placerat molestie sed massa elementum pretium vestibulum odio vestibulum sollicitudin neque velit magna sed magna odio aenean scelerisque aliquam ac'
    },
    {
        id: 658,
        firstName: 'Verlene',
        lastName: 'Theiss',
        email: 'ECheng@ac.net',
        phone: '(825)038-6274',
        address: {
            streetAddress: '4861 Sapien Rd',
            city: 'Fresno',
            state: 'SC',
            zip: '64546'
        },
        description:
            'sed sed amet hendrerit turpis odio placerat sagittis sed mattis nullam vestibulum sollicitudin amet facilisis aliquam ac augue sit quis amet mi placerat mattis sed mattis lectus velit sollicitudin et nullam sit'
    },
    {
        id: 866,
        firstName: 'Natilee',
        lastName: 'Hull',
        email: 'KKohn@tempor.com',
        phone: '(609)830-7413',
        address: {
            streetAddress: '3686 Vel St',
            city: 'Racine',
            state: 'TX',
            zip: '77132'
        },
        description:
            'neque adipiscing suspendisse massa nullam sit sit sed dolor scelerisque porta non et nullam rutrum ipsum pretium odio egestas pulvinar vel vestibulum egestas sed lacus magna ac amet nec molestie libero lacus'
    },
    {
        id: 556,
        firstName: 'Anteria',
        lastName: 'Hook',
        email: 'SStruble@non.ly',
        phone: '(245)817-7466',
        address: {
            streetAddress: '9443 Molestie Ave',
            city: 'Spokane',
            state: 'ND',
            zip: '74926'
        },
        description:
            'fringilla sed consectetur fringilla magna eros porttitor eros pretium elementum donec turpis porta dolor lorem turpis placerat sollicitudin et sollicitudin vitae aenean lacus sed turpis morbi eros vestibulum lectus lacus elit dolor'
    },
    {
        id: 655,
        firstName: 'Cary',
        lastName: 'Jordan',
        email: 'LDarbonne@vitae.net',
        phone: '(754)775-1292',
        address: {
            streetAddress: '9416 Ac St',
            city: 'Patrick Afb',
            state: 'GA',
            zip: '35349'
        },
        description:
            'odio sollicitudin rutrum fringilla ante curabitur suspendisse nunc pulvinar donec porta massa magna porta magna pharetra et ac ipsum velit consectetur sollicitudin vitae eget aliquam quis curabitur elit ipsum sollicitudin mattis magna'
    },
    {
        id: 297,
        firstName: 'Ying',
        lastName: 'Oconnor',
        email: 'RStabile@consectetur.gov',
        phone: '(800)080-3774',
        address: {
            streetAddress: '4272 Ipsum Dr',
            city: 'Brick',
            state: 'AL',
            zip: '28623'
        },
        description:
            'mattis tincidunt sed amet odio mi at placerat lorem aliquam lacus vestibulum sed sapien lorem at rutrum odio vestibulum massa porta mi magna et magna dui in mattis nunc sit ipsum lectus'
    },
    {
        id: 900,
        firstName: 'Veronica',
        lastName: 'Masimore',
        email: 'THudgens@etiam.gov',
        phone: '(243)399-1275',
        address: {
            streetAddress: '8196 Lacus Ct',
            city: 'Knoxville',
            state: 'LA',
            zip: '67455'
        },
        description:
            'placerat libero magna at et amet id facilisis turpis mattis fringilla tempor lacus et sit adipiscing id lorem sapien sed sed tortor aliquam convallis magna etiam velit rutrum amet vestibulum vestibulum massa'
    },
    {
        id: 85,
        firstName: 'Angelique',
        lastName: 'Sacks',
        email: 'YCaudill@placerat.gov',
        phone: '(953)649-5635',
        address: {
            streetAddress: '5929 Quis Ln',
            city: 'Northwest',
            state: 'PA',
            zip: '77470'
        },
        description:
            'lacus eros scelerisque placerat vestibulum magna curabitur pulvinar aliquam elit aliquam vestibulum orci adipiscing dolor quis ac nullam tincidunt aliquam vestibulum risus tortor tempor convallis dolor sit sed in tincidunt tortor nunc'
    },
    {
        id: 251,
        firstName: 'Roger',
        lastName: 'Mckenzie',
        email: 'KDieli@neque.gov',
        phone: '(990)459-3614',
        address: {
            streetAddress: '7109 Nullam St',
            city: 'Pompano Beach',
            state: 'MA',
            zip: '32050'
        },
        description:
            'pharetra et lorem massa rutrum lorem lacus ac magna sit turpis vitae elementum curabitur in dolor amet suspendisse nec porttitor dui orci eros sagittis nec magna lorem adipiscing odio sit sollicitudin tortor'
    }
]