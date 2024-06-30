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
    },
    {
        id: 116,
        question: `You have developed a non-critical update to your application that is running in a managed instance group, and have created a new instance
template with the update that you want to release. To prevent any possible impact to the application, you don't want to update any running
instances. You want any new instances that are created by the managed instance group to contain the new update. What should you do?`,
        answers: [
            "Start a new rolling restart operation.",
            "Start a new rolling replace operation.",
            "Start a new rolling update. Select the Proactive update mode.",
            "Start a new rolling update. Select the Opportunistic update mode -ans",
        ]
    },
    {
        id: 117,
        question: `Your company is designing its application landscape on Compute Engine. Whenever a zonal outage occurs, the application should be restored in
another zone as quickly as possible with the latest application data. You need to design the solution to meet this requirement. What should you
do?`,
        answers: [
            "Create a snapshot schedule for the disk containing the application data. Whenever a zonal outage occurs, use the latest snapshot to restore the disk in the same zone.",
            "Configure the Compute Engine instances with an instance template for the application, and use a regional persistent disk for the application data. Whenever a zonal outage occurs, use the instance template to spin up the application in another zone in the same region. Use the regional persistent disk for the application data -ans",
            "Create a snapshot schedule for the disk containing the application data. Whenever a zonal outage occurs, use the latest snapshot to restore the disk in another zone within the same region.",
            "Configure the Compute Engine instances with an instance template for the application, and use a regional persistent disk for the application data. Whenever a zonal outage occurs, use the instance template to spin up the application in another region. Use the regional persistent disk for the application data."
        ]
    },
    {
        id: 118,
        question: `Your company has just acquired another company, and you have been asked to integrate their existing Google Cloud environment into your
company's data center. Upon investigation, you discover that some of the RFC 1918 IP ranges being used in the new company's Virtual Private
Cloud (VPC) overlap with your data center IP space. What should you do to enable connectivity and make sure that there are no routing conflicts
when connectivity is established?`,
        answers: [
            "Create a Cloud VPN connection from the new VPC to the data center, create a Cloud Router, and apply new IP addresses so there is no overlapping IP space. -ans",
            "Create a Cloud VPN connection from the new VPC to the data center, and create a Cloud NAT instance to perform NAT on the overlapping IP space.",
            "Create a Cloud VPN connection from the new VPC to the data center, create a Cloud Router, and apply a custom route advertisement to block the overlapping IP space.",
            "Create a Cloud VPN connection from the new VPC to the data center, and apply a firewall rule that blocks the overlapping IP space.",
        ]
    },


]