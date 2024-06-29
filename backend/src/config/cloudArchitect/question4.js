module.exports = [
    {
        id: 113,
        question: "Your organization has decided to restrict the use of external IP addresses on instances to only approved instances. You want to enforce this requirement across all of your Virtual Private Clouds (VPCs). What should you do?",
        answers: [
            "Remove the default route on all VPCs. Move all approved instances into a new subnet that has a default route to an internet gateway.",
            "Create a new VPC in custom mode. Create a new subnet for the approved instances, and set a default route to the internet gateway on this new subnet.",
            "Implement a Cloud NAT solution to remove the need for external IP addresses entirely.",
            "Set an Organization Policy with a constraint on constraints/compute.vmExternalIpAccess. List the approved instances in the allowedValues list. -ans",
        ]
    },
    {
        id: 114,
        question: `Your company uses the Firewall Insights feature in the Google Network Intelligence Center. You have several firewall rules applied to Compute Engine instances. You need to evaluate the efficiency of the applied firewall ruleset. When you bring up the Firewall Insights page in the Google Cloud Console, you notice that there are no log rows to display. What should you do to troubleshoot the issue?`,
        answers: [
            "Enable Virtual Private Cloud (VPC) flow logging.",
            "Enable Firewall Rules Logging for the firewall rules you want to monitor. -ans",
            "Verify that your user account is assigned the compute.networkAdmin Identity and Access Management (IAM) role.",
            "Install the Google Cloud SDK, and verify that there are no Firewall logs in the command line output.",
        ]
    },
    {
        id: 115,
        question: `Your company has sensitive data in Cloud Storage buckets. Data analysts have Identity Access Management (IAM) permissions to read the
buckets. You want to prevent data analysts from retrieving the data in the buckets from outside the office network. What should you do?`,
        answers: [
            "1. Create a VPC Service Controls perimeter that includes the projects with the buckets. 2. Create an access level with the CIDR of the office network. -ans",
            "1. Create a firewall rule for all instances in the Virtual Private Cloud (VPC) network for source range. 2. Use the Classless Inter-domain Routing (CIDR) of the office network.",
            "1. Create a Cloud Function to remove IAM permissions from the buckets, and another Cloud Function to add IAM permissions to the buckets. 2. Schedule the Cloud Functions with Cloud Scheduler to add permissions at the start of business and remove permissions at the end of business.",
            "1. Create a Cloud VPN to the office network. 2. Configure Private Google Access for on-premises hosts.",

        ]
    }
]