/**
 * Created by spick on 19/10/2015.
 */
var TIMES2 = [
    {key: 1,
        pin: true,
        client: 'PEP0001 - Sampling Campaign 2015',
        job: true,
        job_project: 'PEP0001',
        description: "Sampling Campaign 2015",
        costType: 'ARDI',
        ctdescription: 'Art direction',
        billable: true,
        estimate: true,
        actualsEstimate: 35,
        days: [
            {hours: '2.50', note: 'Remove logo. Retouching left hand on paper - add in shadows. '},
            {hours: '2.40', note: 'Brainstorm drafting plan.'},
            {hours: '', note: ''},
            {hours: '2.10', note: 'Retainer review, client meeting.'},
            {hours: '', note: ''},
            {hours: '', note: ''},
            {hours: '', note: ''}
        ],
        total: "10.00"
    },
    {key: 2,
        pin: true,
        client: 'PEP0001 - Sampling Campaign 2015',
        job: true,
        job_project: 'PEP0002',
        description: "Sampling Campaign 2015",
        costType: 'ARDI',
        ctdescription: 'Art direction',
        billable: false,
        estimate: true,
        actualsEstimate: 85,
        days: [
            {hours: '2.50', note: 'Brainstorming and concept development for new identity.'},
            {hours: '2.40', note: 'Proactive work and new name concepts.'},
            {hours: '2.10', note: 'Pitch - briefing, researching, naming, design presentation.'},
            {hours: '', note: ''},
            {hours: '', note: ''},
            {hours: '', note: ''},
            {hours: '', note: ''}
        ],
        total: "7.00"
    },
    {key: 3,
        pin: false,
        client: 'PEP0001 [P] - Non retainer',
        job: false,
        job_project: 'PEP0003',
        description: "Non retainer",
        costType: 'RESE',
        ctdescription: 'Research',
        billable: null,
        estimate: false,
        actualsEstimate: 0,
        days: [
            {hours: '2.50', note: 'Further research to continue finding graphic direction.'},
            {hours: '2.40', note: 'Image and internet research to assist concept development.'},
            {hours: '', note: ''},
            {hours: '2.10', note: 'Try mobile versions of timesheets'},
            {hours: '', note: ''},
            {hours: '', note: ''},
            {hours: '', note: ''}
        ],
        total: "7.00"
    },
    {key: 4,
        pin: false,
        client: '360AUS [P] - Non Billable Client Time',
        job: false,
        job_project: '360AUSADM',
        description: 'Non Billable Client Time',
        costType: 'RESE',
        ctdescription: 'Research',
        billable: null,
        estimate: false,
        actualsEstimate: 0,
        days: [
            {hours: '2.00', note: 'Brand research.'},
            {hours: '2.40', note: 'Concept research.'},
            {hours: '', note: ''},
            {hours: '2.10', note: 'Image research'},
            {hours: '', note: ''},
            {hours: '', note: ''},
            {hours: '', note: ''}
        ],
        total: "6.50"
    }
];

var ClientData = [
    { id: 0, text: 'enhancement' },
    { id: 1, text: 'bug' },
    { id: 2, text: 'duplicate' },
    { id: 3, text: 'invalid' },
    { id: 4, text: 'wontfix' }
];

var TIMES = [
    {key: 1,
        pin: true,
        client: 'PEP0001 - Sampling Campaign 2015',
        job: true,
        job_project: 'PEP0001',
        costType: 'ARDI - Art direction',
        billable: true,
        estimate: true,
        actualsEstimate: 35,
        mon: '2.50',
        monNote: 'Review initial mockups',
        tue: '',
        tueNote: 'Leave feedback on Invision for Graphic Designer',
        wed: '2.50',
        wedNote: 'Leave feedback on Invision for Graphic Designer',
        thu: '2.60',
        thuNote: 'Review customer feedback non mockups',
        fri: '2.40',
        friNote: 'Workshop new designs.',
        stocked: true,
        description: "Billable work for In Scope job" ,
        total: "10.00"
    },
    {key: 2,
        pin: false,
        client: 'PEP0001 - Sampling Campaign 2015',
        job: true,
        job_project: 'PEP0002',
        costType: 'CODE - Concept development',
        billable: false,
        estimate: true,
        actualsEstimate: 85,
        mon: '2.50',
        monNote: 'Workshop concepts',
        tue: '2.40',
        tueNote: 'Interpretive dance of concepts',
        wed: '',
        wedNote: '',
        thu: '',
        thuNote: '',
        fri: '2.10',
        friNote: 'Write I will not do another interpretive dance, 100 times.',
        stocked: true,
        description: "Non billable work for",
        total: "7.00"
    },
{key: 3,
    pin: false,
    client: 'PEP0001 - Non retainer',
    job: false,
    job_project: 'PEP0003',
    costType: 'RESE - Research',
    billable: null,
    estimate: false,
    actualsEstimate: 0,
    mon: '2.50',
    monNote: 'Review competitor sites',
    tue: '2.40',
    tueNote: 'Channel Steve Jobs. Stealing good designs',
    wed: '',
    wedNote: '',
    thu: '',
    thuNote: '',
    fri: '2.10',
    friNote: 'Document review',
    stocked: true,
    description: "Project work",
    total: "7.00"
}
];

var TIME = [
    {key: 1,
        client: 'PEPSI',
        job: 'PEP0001',
        costType: 'ADI',
        estimate: '',
        hours: 2.5,
        stocked: true,
        description: "This is my long long long desc" },
    {key: 2,
        client: 'PEPSI',
        job: 'PEP0001',
        costType: 'ADI',
        estimate: '$$',
        hours: 2.75,
        stocked: true,
        description: "This is my desc" }

];

var DAYS = [
    {key: 1,
        day: 'Mon 12 Oct'
    },
    {key: 2,
        day: 'Tue 13 Oct'
    },
    {key: 3,
        day: 'Wed 14 Oct'
    },
    {key: 4,
        day: 'Thu 15 Oct'
    },
    {key: 5,
        day: 'Fri 16 Oct'
    },
    {key: 6,
        day: 'Sat 17 Oct'
    },
    {key: 7,
        day: 'Sun 18 Oct'
    }
];

var COSTTYPES = [
    {
        key: 1,
        code: 'ARDI',
        description: 'Art direction'
    },
    {
        key: 2,
        code: 'CODE',
        description: 'Concept development'
    },
    {
        key: 3,
        code: 'IMP',
        description: 'Implementation, Planning and Configuration'
    },
    {
        key: 4,
        code: 'MKT',
        description: 'Marketing'
    },
    {
        key: 5,
        code: 'POST',
        description: 'Postage'
    },
    {
        key: 6,
        code: 'RESE',
        description: 'Research'
    },    {
        key: 7,
        code: 'STOR',
        description: 'Story boards'
    },
    {
        key: 8,
        code: 'TAXI',
        description: 'Taxis'
    },
    {
        key: 9,
        code: 'STAX',
        description: 'State Tax'
    },
    {
        key: 10,
        code: 'SUP',
        description: 'Support'
    }

];


var DAYS = [
    {key: 1,
        day: 'Mon 12 Oct'
    },
    {key: 2,
        day: 'Tue 13 Oct'
    },
    {key: 3,
        day: 'Wed 14 Oct'
    },
    {key: 4,
        day: 'Thu 15 Oct'
    },
    {key: 5,
        day: 'Fri 16 Oct'
    },
    {key: 6,
        day: 'Sat 17 Oct'
    },
    {key: 7,
        day: 'Sun 18 Oct'
    },
    {key: 8,
        day: 'Sat 17 Oct'
    },
    {key: 9,
        day: 'Sat 17 Oct'
    },
    {key: 10,
        day: 'Sat 17 Oct'
    },
    {key: 11,
        day: 'Sat 17 Oct'
    },
    {key: 12,
        day: 'Sat 17 Oct'
    },
    {key: 13,
        day: 'Sat 17 Oct'
    },
    {key: 14,
        day: 'Sat 17 Oct'
    },
    {key: 15,
        day: 'Sat 17 Oct'
    },
    {key: 16,
        day: 'Sat 17 Oct'
    },
    {key: 17,
        day: 'Sat 17 Oct'
    },
    {key: 18,
        day: 'Sat 17 Oct'
    },
    {key: 19,
        day: 'Sat 17 Oct'
    },
    {key: 20,
        day: 'Sat 17 Oct'
    },
    {key: 21,
        day: 'Sat 17 Oct'
    },
    {key: 22,
        day: 'Sat 17 Oct'
    },
    {key: 23,
        day: 'Sat 17 Oct'
    },
    {key: 24,
        day: 'Sat 17 Oct'
    },
    {key: 25,
        day: 'Sat 17 Oct'
    },
    {key: 26,
        day: 'Sat 17 Oct'
    },
    {key: 27,
        day: 'Sat 17 Oct'
    },
    {key: 28,
        day: 'Sat 17 Oct'
    },
    {key: 29,
        day: 'Sat 17 Oct'
    },
    {key: 30,
        day: 'Sat 17 Oct'
    },
    {key: 31,
        day: 'Sat 17 Oct'
    }
];


// Not used.

var fakeData =  [
    {
        "Client": "Australian Bag Company",
        "Job / Project": "ABC00001",
        "Clone": "",
        "Cost type": "ACS",
        "Bill": true,
        "Hours": 2.5,
        "Timer": "",
        "Description": "Redesign hipster bag. Lunch on terrace",
        "Estimate": "",
        "Type": "Job"
    },
    {
        "Client": "Australian Bag Company",
        "Job / Project": "ABC00002",
        "Clone": "",
        "Cost type": "ADM",
        "Bill": false,
        "Hours": 2.90,
        "Timer": "",
        "Description": "Timesheets",
        "Estimate": "",
        "Type": "Job"
    },
    {
        "Client": "Australian Bag Company",
        "Job / Project": "ABC00003",
        "Clone": "",
        "Cost type": "ADM",
        "Bill": false,
        "Hours": 2.90,
        "Timer": "",
        "Description": "Timesheets",
        "Estimate": "",
        "Type": "Job"
    },
    {
        "Client": "Australian Bag Company",
        "Job / Project": "ABC00002",
        "Clone": "",
        "Cost type": "ADM",
        "Bill": true,
        "Hours": 2.90,
        "Timer": "",
        "Description": "Timesheets",
        "Estimate": "",
        "Type": "Job"
    },
    {
        "Client": "Australian Bag Company",
        "Job / Project": "ABC00006",
        "Clone": "",
        "Cost type": "ADM",
        "Bill": true,
        "Hours": 2.90,
        "Timer": "",
        "Description": "Timesheets",
        "Estimate": "$$",
        "Type": "Job"
    },
    {
        "Client": "IBM",
        "Job / Project": "IBM00002",
        "Clone": " ",
        "Cost type": "ADM",
        "Bill": false,
        "Hours": 2.90,
        "Timer": " ",
        "Description": "Timesheets",
        "Estimate": " ",
        "Type": "Proj"
    }
];


var DAYVIEWTIMES = [
    {key: 1,
        client: 'PEP0001 - Sampling Campaign 2015',
        job: true,
        job_project: 'PEP0001',
        costType: 'ARDI - Art direction',
        billable: true,
        estimate: true,
        actualsEstimate: 35,
        hours: '2.50',
        Note: 'Review initial mockups'
    },
    {key: 2,
        client: 'PEP0001 - Sampling Campaign 2015',
        job: true,
        job_project: 'PEP0001',
        costType: 'ARDI - Art direction',
        billable: true,
        estimate: true,
        actualsEstimate: 35,
        hours: '2.50',
        Note: 'Review initial mockups',
        tue: '',
        tueNote: 'Leave feedback on Invision for Graphic Designer',
        wed: '2.50',
        wedNote: 'Leave feedback on Invision for Graphic Designer',
        thu: '2.60',
        thuNote: 'Review customer feedback non mockups',
        fri: '2.40',
        friNote: 'Workshop new designs.',
        stocked: true,
        description: "Billable work for In Scope job" ,
        total: "10.00"
    },
    {key: 2,
        pin: false,
        client: 'PEP0001 - Sampling Campaign 2015',
        job: true,
        job_project: 'PEP0002',
        costType: 'CODE - Concept development',
        billable: false,
        estimate: true,
        actualsEstimate: 85,
        mon: '2.50',
        monNote: 'Workshop concepts',
        tue: '2.40',
        tueNote: 'Interpretive dance of concepts',
        wed: '',
        wedNote: '',
        thu: '',
        thuNote: '',
        fri: '2.10',
        friNote: 'Write I will not do another interpretive dance, 100 times.',
        stocked: true,
        description: "Non billable work for",
        total: "7.00"
    },
    {key: 3,
        pin: false,
        client: 'PEP0001 - Non retainer',
        job: false,
        job_project: 'PEP0003',
        costType: 'RESE - Research',
        billable: null,
        estimate: false,
        actualsEstimate: 0,
        mon: '2.50',
        monNote: 'Review competitor sites',
        tue: '2.40',
        tueNote: 'Channel Steve Jobs. Stealing good designs',
        wed: '',
        wedNote: '',
        thu: '',
        thuNote: '',
        fri: '2.10',
        friNote: 'Document review',
        stocked: true,
        description: "Project work",
        total: "7.00"
    }
];

