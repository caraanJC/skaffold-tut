module.exports = [
    {
        id: 1,
        questionSet: 1,
        question: "Your company has decided to make a major revision of their API in order to create better experiences for their developers. They need to keep the old version of the API available and deployable, while allowing new customers and testers to try out the new API. They want to keep the same SSL and DNS records in place to serve both APIs. What should they do?",
        answers: [
            "Configure a new load balancer for the new version of the API",
            "Reconfigure old clients to use a new endpoint for the new API",
            "Have the old API forward traffic to the new API based on the path",
            "Use separate backend pools for each API path behind the load balancer -ans"
        ]
    },
    {
        id: 2,
        questionSet: 1,
        question: "Your company plans to migrate a multi-petabyte data set to the cloud. The data set must be available 24hrs a day. Your business analysts have experience only with using a SQL interface. How should you store the data to optimize it for ease of analysis?",
        answers: [
            "Load data into Google BigQuery -ans",
            "Insert data into Google Cloud SQL",
            "Put flat files into Google Cloud Storage",
            "Stream data into Google Cloud Datastore",
        ]
    },
    {
        id: 3,
        questionSet: 1,
        question: "The operations manager asks you for a list of recommended practices that she should consider when migrating a J2EE application to the cloud. Which three practices should you recommend? (Choose three.)",
        answers: [
            "Port the application code to run on Google App Engine",
            "Integrate Cloud Dataflow into the application to capture real-time metrics",
            "Instrument the application with a monitoring tool like Stackdriver Debugger -ans",
            "Select an automation framework to reliably provision the cloud infrastructure -ans",
            "Deploy a continuous integration tool with automated testing in a staging environment -ans",
            "Migrate from MySQL to a managed NoSQL database like Google Cloud Datastore or Bigtable",
        ]
    }
]