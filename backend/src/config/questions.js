module.exports = [
    {
        question: "Your company has decided to make a major revision of their API in order to create better experiences for their developers. They need to keep the old version of the API available and deployable, while allowing new customers and testers to try out the new API. They want to keep the same SSL and DNS records in place to serve both APIs. What should they do?",
        answers: [
            "Configure a new load balancer for the new version of the API",
            "Reconfigure old clients to use a new endpoint for the new API",
            "Have the old API forward traffic to the new API based on the path",
            "Use separate backend pools for each API path behind the load balancer -ans"
        ]
    }
]