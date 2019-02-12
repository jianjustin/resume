var app = angular.module('resume', [])
    .controller('personCtrl', function ($scope) {
    $scope.personInfo = {
        img: '../resume/images/myself.JPG',
        name: 'Jian',
        description: 'front end web developer',
        email: {
            text: 'janine.jian.chen@gmail.com',
            url: 'mailto:janine.jian.chen@gmail.com'
        },
        social: [{
                url: 'https://github.com/jianjustin',
                icon: 'fa-github fa-lg'
            }]
    };
})
    .controller('educationCtrl', function ($scope) {
    $scope.schools = [{
            name: 'The Iron Yard',
            program: 'Ruby on Rails Engineering',
            city: 'Tampa Bay',
            state: 'Florida',
            stateAbbr: 'FL',
            dates: '5/2015 - 7/2015'
        }, {
            name: 'East Stroudsburg University',
            program: 'MS Clinical Exercise Physiology',
            city: 'East Stroudsburg',
            state: 'Pennsylvania',
            stateAbbr: 'PA',
            dates: '2010 - 2011'
        }, {
            name: 'Shippensburg University',
            program: 'BS Exercise Science',
            city: 'Shippensburg',
            state: 'Pennsylvania',
            stateAbbr: 'PA',
            dates: '2005 - 2010'
        }];
})
    .controller('languagesCtrl', function ($scope) {
    $scope.languages = [{
            name: 'HTML',
            types: [
                'Slim',
                'Jade',
                'Haml'
            ]
        }, {
            name: 'CSS',
            types: [
                'SCSS',
                'LESS',
                'Bootstrap',
                'Foundation'
            ]
        }, {
            name: 'JavaScript',
            types: [
                'ES2015',
                'React',
                'jQuery',
                'GSAP'
            ]
        }, {
            name: 'Ruby',
            types: [
                'Rails',
                'ERB'
            ]
        }];
})
    .controller('toolsCtrl', function ($scope) {
    $scope.tools = [{
            name: 'Source Control',
            types: [
                'Git',
                'Github',
                'SVN'
            ]
        }, {
            name: 'Tasks',
            types: [
                'Webpack',
                'JSPM',
                'Gulp',
                'Yeoman',
                'Bower'
            ]
        }, {
            name: 'Graphic Tools',
            types: [
                'Sketch',
                'Adobe Photoshop',
                'Adobe Fireworks'
            ]
        }, {
            name: 'Deployment',
            types: [
                'Heroku',
                'Beanstalk',
                'AWS'
            ]
        }, {
            name: 'CMS/Templating',
            types: [
                'WordPress',
                'Handlebars'
            ]
        }];
})
    .controller('organizationCtrl', function ($scope) {
    $scope.organizations = [
        {
            name: 'Ned Davis Research Group',
            url: 'http://www.ndr.com',
            positions: [{
                    title: 'Front End Developer',
                    responsibilities: [
                        'Contribute to the public site and client-facing site',
                        'Use HTML, SCSS, JavaScript and JSP to enhance the design and user experience',
                        'Collaborate with team members on UI/UX ideas for existing and new products',
                        'Participate in Agile methodologies',
                        'Version control with SVN and Git'
                    ]
                }],
            dates: 'January 2016 - Present'
        },
        {
            name: '64 Interactive',
            url: 'http://64interactive.com/',
            positions: [{
                    title: 'Contract Front End Developer',
                    responsibilities: [
                        'Build and contribute to hand-coded  websites and applications',
                        'Write semantic HTML5 and SCSS for scalable and responsive layouts',
                        'Use MVC frameworks such as React and Rails',
                        'Manage tasks with Grunt, Gulp and Webpack',
                        'Version control with Git'
                    ]
                }],
            dates: 'February 2015 - Present'
        },
        {
            name: 'Freelance',
            url: 'https://github.com/amie-wilt',
            positions: [{
                    title: 'Freelance Front End Developer',
                    responsibilities: [
                        'Build both static websites and dynamic applications using semantic HTML5, SCSS & Less, JavaScript and React',
                        'Use tools such as Gulp, Webpack and JSPM for setting up project builds',
                        'Current project is an email app using React and Flux for the frontend with a Rails API for the backend',
                        'Version control with Git'
                    ]
                }],
            dates: 'September 2015 - Present'
        },
        {
            name: 'Drive Digital Group',
            url: 'http://www.drivedigitalgroup.com/',
            positions: [{
                    title: 'Web Developer',
                    responsibilities: [
                        'Maintained client sites on Wordpress and other various CMS platforms',
                        'Built small, one-page sites and landing pages using HTML and CSS',
                        'Answered phones and assisted with customer support',
                        'Implemented white hat SEO tactics'
                    ]
                }],
            dates: 'August 2014 - March 2015'
        }
    ];
})
    .controller('campsCtrl', function ($scope) {
    $scope.camps = [
        {
            name: 'Kids\' HTML/CSS Classes',
            url: 'https://github.com/amie-wilt/tiy-kids-html-css',
            dates: 'March - April 2016',
            description: 'In early spring, I had the pleasure of volunteering as the instructor for the Kids\' HTML/CSS class at The Iron Yard in St Pete. I prepared with some slides and fun ideas only to find out I was a little in over my head! I was surprised by how fast the kids picked up on coding and appreciated the opportunity to not only work with them, but to also have to articulate code.'
        },
        {
            name: 'ReactJS Camp',
            url: 'http://reactjscamp.com/',
            dates: 'December 4 - 9, 2015',
            description: 'ReactJS camp is a 5-day, online coding camp led by Samer Buna. We did a thorough overview on React and JSX, and React\'s implementation with Flux and Relay. We learned how to set up a Node.js server with Express.js and about different development environments for React, such as Webpack and JSPM. He also went over GraphQL, ES2015 and debugging in React.'
        },
        {
            name: 'Front End Design Conference',
            url: 'http://frontenddesignconference.com/2015/',
            dates: 'May 21-22, 2015',
            description: 'Aside from attending numerous talks, I also participated in the front-end testing and tooling workshop. We learned about task runners like Grunt, browser-testing tools like Browserstack, and JS testing frameworks, such as Jasmine.'
        }
    ];
});