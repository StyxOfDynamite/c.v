module.exports = {
  name: "Luke Storer",
  title: "Software Engineer",
  facts: {
    Residence: "Leicester",
    Homepage: `<a href="https://lukestorer.dev">
                  <span class="print">https://lukestorer.dev</span>
                  <span class="screen">https://lukestorer.dev</span>
                </a>`,
    Email: '<a href="mailto:hello@lukestorer.dev">hello@lukestorer.dev</a>',
  },
  techstack: [
    "PHP",
    "Laravel",
    "Symfony",
    "Slim",
    "MySQL",
    "NoSQL",
    "AWS",
    "JS",
    "React",
    "Vue",
  ],
  jobs: [
    {
      title: "Senior Learning Platform Engineer ",
      company: "Avado",
      dates: "2020 - PRESENT",
      badges: ["Laravel", "Symfony", "React", "SQL-Server", "PostgreSQL"],
      contents: `I lead a team of 5, helping to build and maintain a learning platform solution, using a mix of PHP and
      Javascript. Our approach is focused on a RESTful API Backend, and a SPA Frontend written using
      React. In my role as a team lead, I am responsible for the well being of my direct reports, as well as
      the weekly delivery of work from the team to production servers. As a senior I am also responsible in
      part for deployment of the completed work to the production infrastructure`,
    },
    {
      title: "Senior Web Developer",
      company: "REVIEWS.io",
      dates: "2017 - 2020",
      badges: ["Laravel", "AWS", "AngularJS", "MySQL", "Elasticsearch"],
      contents: `Working with PHP, Javascript and NoSQL and SQL Databases.
      I assisted in the development and maintenance of a world leading, review collection platform.
      This involved building functionality, fixing issues and liaising with customers to solve integration issues.`,
    },
    {
      title: "PHP Web Developer",
      company: "eSterling",
      dates: "2015 - 2016",
      badges: [
        "Laravel",
        "AWS",
        "AngularJS",
        "MySQL",
        "Wordpress",
        "Opencart",
        "Magento",
        "Shopify",
      ],
      contents: `Working at a web development and design agency, I was tasked with PHP development across a
      variety of Open Source products, including Wordpress, Magento and Opencart. I assisted in delivery
      of bespoke functionality for a number of client sites and products.`,
    },
    {
      title: "Software Support Engineer",
      company: "Jadu",
      dates: "2012 - 2015",
      badges: ["PHP", "Rackspace", "HTML", "MySQL", "CSS"],
      contents: `As a member of the support team, I was tasked with issue resolution for various bugs in the PHP
      platform code. Following stringent development and release practices. Building and supporting an
      in-house ticketing system and helping local government clients resolve issues with their site.`,
    },
  ],
  experience: [
    {
      header: "Asynchronous Review Booster ",
      skills: ["SQS", "CSV"],
      contents: `I assisted in the design, development and deployment of the revised asynchronous Review Booster module,
      this utilised off loading work to a an SQS Message Queue and completed processing of large CSV documents in the background,
      notifying users upon completion`,
    },
    {
      header: "Drag and Drop File Upload",
      skills: ["React", "HTML5"],
      contents: `Using React I built a component for uploading profile images to a RESTful API,
      it utilised HTML5 Drag and Drop functionality, as well as a standard files input to offer better UX`,
    },
  ],
};
