module.exports = [
    {
        id: 121,
        question: `You need to deploy an application on Google Cloud that must run on a Debian Linux environment. The application requires extensive configuration
in order to operate correctly. You want to ensure that you can install Debian distribution updates with minimal manual intervention whenever they
become available. What should you do?`,
        answers: [
            `Create a Compute Engine instance template using the most recent Debian image. Create an instance from this template, and install and configure the application as part of the startup script. Repeat this process whenever a new Google-managed Debian image becomes available.`,
            `Create a Debian-based Compute Engine instance, install and configure the application, and use OS patch management to install available updates. -ans`,
            `Create an instance with the latest available Debian image. Connect to the instance via SSH, and install and configure the application on the instance. Repeat this process whenever a new Google-managed Debian image becomes available.`,
            "Create a Docker container with Debian as the base image. Install and configure the application as part of the Docker image creation process. Host the container on Google Kubernetes Engine and restart the container whenever a new update is available."

        ]
    },
    {
        id: 122,
        question: `You have an application that runs in Google Kubernetes Engine (GKE). Over the last 2 weeks, customers have reported that a specific part of the
application returns errors very frequently. You currently have no logging or monitoring solution enabled on your GKE cluster. You want to diagnose
the problem, but you have not been able to replicate the issue. You want to cause minimal disruption to the application. What should you do?`,
        answers: [
            "1. Update your GKE cluster to use Cloud Operations for GKE. 2. Use the GKE Monitoring dashboard to investigate logs from affected Pods. -ans",
            "1. Create a new GKE cluster with Cloud Operations for GKE enabled. 2. Migrate the affected Pods to the new cluster, and redirect traffic for those Pods to the new cluster. 3. Use the GKE Monitoring dashboard to investigate logs from affected Pods.",
            "1. Update your GKE cluster to use Cloud Operations for GKE, and deploy Prometheus. 2. Set an alert to trigger whenever the application returns an error.",
            "1. Create a new GKE cluster with Cloud Operations for GKE enabled, and deploy Prometheus. 2. Migrate the affected Pods to the new cluster, and redirect traffic for those Pods to the new cluster. 3. Set an alert to trigger whenever the application returns an error.",
        ]
    },
    {
        id: 123,
        question: `You need to deploy a stateful workload on Google Cloud. The workload can scale horizontally, but each instance needs to read and write to the
same POSIX filesystem. At high load, the stateful workload needs to support up to 100 MB/s of writes. What should you do?`,
        answers: [
            "Use a persistent disk for each instance.",
            "Use a regional persistent disk for each instance.",
            "Create a Cloud Filestore instance and mount it in each instance. -ans",
            "Create a Cloud Storage bucket and mount it in each instance using gcsfuse",
        ]
    },
    {
        id: 124,
        question: `Your company has an application deployed on Anthos clusters (formerly Anthos GKE) that is running multiple microservices. The cluster has both Anthos Service Mesh and Anthos Config Management configured. End users inform you that the application is responding very slowly. You want to identify the microservice that is causing the delay. What should you do?`,
        answers: [
            "Use the Service Mesh visualization in the Cloud Console to inspect the telemetry between the microservices. -ans",
            "Use Anthos Config Management to create a ClusterSelector selecting the relevant cluster. On the Google Cloud Console page for Google Kubernetes Engine, view the Workloads and filter on the cluster. Inspect the configurations of the filtered workloads.",
            "Use Anthos Config Management to create a namespaceSelector selecting the relevant cluster namespace. On the Google Cloud Console page for Google Kubernetes Engine, visit the workloads and filter on the namespace. Inspect the configurations of the filtered workloads.",
            "Reinstall istio using the default istio profile in order to collect request latency. Evaluate the telemetry between the microservices in the Cloud Console."
        ]
    },
    {
        id: 125,
        question: `You are working at a financial institution that stores mortgage loan approval documents on Cloud Storage. Any change to these approval documents must be uploaded as a separate approval file, so you want to ensure that these documents cannot be deleted or overwritten for the next 5 years. What should you do?`,
        answers: [
            "Create a retention policy on the bucket for the duration of 5 years. Create a lock on the retention policy. -ans",
            "Create the bucket with uniform bucket-level access, and grant a service account the role of Object Writer. Use the service account to upload new files.",
            "Use a customer-managed key for the encryption of the bucket. Rotate the key after 5 years.",
            "Create the bucket with fine-grained access control, and grant a service account the role of Object Writer. Use the service account to upload new files."
        ]
    },
    {
        id: 126,
        question: `Your team will start developing a new application using microservices architecture on Kubernetes Engine. As part of the development lifecycle, any code change that has been pushed to the remote develop branch on your GitHub repository should be built and tested automatically. When the build and test are successful, the relevant microservice will be deployed automatically in the development environment. You want to ensure that all code deployed in the development environment follows this process. What should you do?`,
        answers: [
            "Have each developer install a pre-commit hook on their workstation that tests the code and builds the container when committing on the development branch. After a successful commit, have the developer deploy the newly built container image on the development cluster.",
            "Install a post-commit hook on the remote git repository that tests the code and builds the container when code is pushed to the development branch. After a successful commit, have the developer deploy the newly built container image on the development cluster.",
            "Create a Cloud Build trigger based on the development branch that tests the code, builds the container, and stores it in Container Registry. Create a deployment pipeline that watches for new images and deploys the new image on the development cluster. Ensure only the deployment tool has access to deploy new versions. -ans",
            "Create a Cloud Build trigger based on the development branch to build a new container image and store it in Container Registry. Rely on Vulnerability Scanning to ensure the code tests succeed. As the final step of the Cloud Build process, deploy the new container image on the development cluster. Ensure only Cloud Build has access to deploy new versions."
        ]
    },
    {
        id: 127,
        question: `Your operations team has asked you to help diagnose a performance issue in a production application that runs on Compute Engine. The
application is dropping requests that reach it when under heavy load. The process list for affected instances shows a single application process
that is consuming all available CPU, and autoscaling has reached the upper limit of instances. There is no abnormal load on any other related
systems, including the database. You want to allow production traffic to be served again as quickly as possible. Which action should you
recommend?`,
        answers: [
            "Change the autoscaling metric to agent.googleapis.com/memory/percent_used.",
            "Restart the affected instances on a staggered schedule.",
            "SSH to each instance and restart the application process.",
            "Increase the maximum number of instances in the autoscaling group. -ans",

        ]
    },
    {
        id: 128,
        question: `You are implementing the infrastructure for a web service on Google Cloud. The web service needs to receive and store the data from 500,000
requests per second. The data will be queried later in real time, based on exact matches of a known set of attributes. There will be periods where
the web service will not receive any requests. The business wants to keep costs low. Which web service platform and database should you use for
the application?`,
        answers: [
            "Cloud Run and BigQuery",
            "Cloud Run and Cloud Bigtable -ans",
            "A Compute Engine autoscaling managed instance group and BigQuery",
            "A Compute Engine autoscaling managed instance group and Cloud Bigtable",

        ]
    },
    {
        id: 129,
        question: `You are developing an application using different microservices that should remain internal to the cluster. You want to be able to configure each
microservice with a specific number of replicas. You also want to be able to address a specific microservice from any other microservice in a
uniform way, regardless of the number of replicas the microservice scales to. You need to implement this solution on Google Kubernetes Engine.
What should you do?`,
        answers: [
            "Deploy each microservice as a Deployment. Expose the Deployment in the cluster using a Service, and use the Service DNS name to address it from other microservices within the cluster. -ans",
            "Deploy each microservice as a Deployment. Expose the Deployment in the cluster using an Ingress, and use the Ingress IP address to address the Deployment from other microservices within the cluster.",
            "Deploy each microservice as a Pod. Expose the Pod in the cluster using a Service, and use the Service DNS name to address the microservice from other microservices within the cluster.",
            "Deploy each microservice as a Pod. Expose the Pod in the cluster using an Ingress, and use the Ingress IP address name to address the Pod from other microservices within the cluster."
        ]
    },
    {
        id: 130,
        question: `Your company has a networking team and a development team. The development team runs applications on Compute Engine instances that
contain sensitive data. The development team requires administrative permissions for Compute Engine. Your company requires all network
resources to be managed by the networking team. The development team does not want the networking team to have access to the sensitive data
on the instances. What should you do?`,
        answers: [
            "1. Create a project with a standalone VPC and assign the Network Admin role to the networking team. 2. Create a second project with a standalone VPC and assign the Compute Admin role to the development team. 3. Use Cloud VPN to join the two VPCs.",
            "1. Create a project with a standalone Virtual Private Cloud (VPC), assign the Network Admin role to the networking team, and assign the Compute Admin role to the development team.",
            "1. Create a project with a Shared VPC and assign the Network Admin role to the networking team. 2. Create a second project without a VPC, configure it as a Shared VPC service project, and assign the Compute Admin role to the development team. -ans",
            "1. Create a project with a standalone VPC and assign the Network Admin role to the networking team. 2. Create a second project with a standalone VPC and assign the Compute Admin role to the development team. 3. Use VPC Peering to join the two VPCs."
        ]
    },
    {
        id: 131,
        question: `Your company wants you to build a highly reliable web application with a few public APIs as the backend. You don't expect a lot of user traffic, but
traffic could spike occasionally. You want to leverage Cloud Load Balancing, and the solution must be cost-effective for users. What should you
do?`,
        answers: [
            "Store static content such as HTML and images in Cloud CDN. Host the APIs on App Engine and store the user data in Cloud SQL.",
            "Store static content such as HTML and images in a Cloud Storage bucket. Host the APIs on a zonal Google Kubernetes Engine cluster with worker nodes in multiple zones, and save the user data in Cloud Spanner.",
            "Store static content such as HTML and images in Cloud CDN. Use Cloud Run to host the APIs and save the user data in Cloud SQL.",
            "Store static content such as HTML and images in a Cloud Storage bucket. Use Cloud Functions to host the APIs and save the user data in Firestore. -ans",
        ]
    },
    {
        id: 132,
        question: `Your company sends all Google Cloud logs to Cloud Logging. Your security team wants to monitor the logs. You want to ensure that the security
team can react quickly if an anomaly such as an unwanted firewall change or server breach is detected. You want to follow Google-recommended
practices. What should you do?`,
        answers: [
            "Schedule a cron job with Cloud Scheduler. The scheduled job queries the logs every minute for the relevant events.",
            "Export logs to BigQuery, and trigger a query in BigQuery to process the log data for the relevant events.",
            "Export logs to a Pub/Sub topic, and trigger Cloud Function with the relevant log events. -ans",
            "Export logs to a Cloud Storage bucket, and trigger Cloud Run with the relevant log events.",
        ]
    },
    {
        id: 133,
        question: `You have deployed several instances on Compute Engine. As a security requirement, instances cannot have a public IP address. There is no VPN
connection between Google Cloud and your office, and you need to connect via SSH into a specific machine without violating the security
requirements. What should you do?`,
        answers: [
            "Configure Cloud NAT on the subnet where the instance is hosted. Create an SSH connection to the Cloud NAT IP address to reach the instance.",
            "Add all instances to an unmanaged instance group. Configure TCP Proxy Load Balancing with the instance group as a backend. Connect to the instance using the TCP Proxy IP.",
            "Configure Identity-Aware Proxy (IAP) for the instance and ensure that you have the role of IAP-secured Tunnel User. Use the gcloud command line tool to ssh into the instance. -ans",
            "Create a bastion host in the network to SSH into the bastion host from your office location. From the bastion host, SSH into the desired instance."
        ]
    },
    {
        id: 134,
        question: `Your company is using Google Cloud. You have two folders under the Organization: Finance and Shopping. The members of the development team
are in a
Google Group. The development team group has been assigned the Project Owner role on the Organization. You want to prevent the development
team from creating resources in projects in the Finance folder. What should you do?`,
        answers: [
            "Assign the development team group the Project Viewer role on the Finance folder, and assign the development team group the Project Owner role on the Shopping folder.",
            "Assign the development team group only the Project Viewer role on the Finance folder.",
            "Assign the development team group the Project Owner role on the Shopping folder, and remove the development team group Project Owner role from the Organization. -ans",
            "Assign the development team group only the Project Owner role on the Shopping folder"
        ]
    },
    {
        id: 135,
        question: `You are developing your microservices application on Google Kubernetes Engine. During testing, you want to validate the behavior of your
application in case a specific microservice should suddenly crash. What should you do?`,
        answers: [
            "Add a taint to one of the nodes of the Kubernetes cluster. For the specific microservice, configure a pod anti-affinity label that has the name of the tainted node as a value.",
            "Use Istio's fault injection on the particular microservice whose faulty behavior you want to simulate. -ans",
            "Destroy one of the nodes of the Kubernetes cluster to observe the behavior.",
            "Configure Istio's traffic management features to steer the traffic away from a crashing microservice."
        ]
    },
    {
        id: 136,
        question: `Your company is developing a new application that will allow globally distributed users to upload pictures and share them with other selected
users. The application will support millions of concurrent users. You want to allow developers to focus on just building code without having to
create and maintain the underlying infrastructure. Which service should you use to deploy the application?`,
        answers: [
            "App Engine -ans",
            "Cloud Endpoints",
            "Compute Engine",
            "Google Kubernetes Engine",
        ]
    },
    {
        id: 137,
        question: `Your company provides a recommendation engine for retail customers. You are providing retail customers with an API where they can submit a
user ID and the
API returns a list of recommendations for that user. You are responsible for the API lifecycle and want to ensure stability for your customers in
case the API makes backward-incompatible changes. You want to follow Google-recommended practices. What should you do?
`,
        answers: [
            "Create a distribution list of all customers to inform them of an upcoming backward-incompatible change at least one month before replacing the old API with the new API.",
            "Create an automated process to generate API documentation, and update the public API documentation as part of the CI/CD process when deploying an update to the API.",
            "Use a versioning strategy for the APIs that increases the version number on every backward-incompatible change. -ans",
            "Use a versioning strategy for the APIs that adds the suffix ג€DEPRECATEDג€ to the current API version number on every backward-incompatible change. Use the current version number for the new API.",
        ]
    },
    {
        id: 138,
        question: `Your company has developed a monolithic, 3-tier application to allow external users to upload and share files. The solution cannot be easily
enhanced and lacks reliability. The development team would like to re-architect the application to adopt microservices and a fully managed
service approach, but they need to convince their leadership that the effort is worthwhile. Which advantage(s) should they highlight to leadership?`,
        answers: [
            "The new approach will be significantly less costly, make it easier to manage the underlying infrastructure, and automatically manage the CI/CD pipelines.",
            "The monolithic solution can be converted to a container with Docker. The generated container can then be deployed into a Kubernetes cluster.",
            "The new approach will make it easier to decouple infrastructure from application, develop and release new features, manage the underlying infrastructure, manage CI/CD pipelines and perform A/B testing, and scale the solution if necessary. -ans",
            "The process can be automated with Migrate for Compute Engine.",
        ]
    },
    {
        id: 139,
        question: `Your team is developing a web application that will be deployed on Google Kubernetes Engine (GKE). Your CTO expects a successful launch and
you need to ensure your application can handle the expected load of tens of thousands of users. You want to test the current deployment to
ensure the latency of your application stays below a certain threshold. What should you do?`,
        answers: [
            "Use a load testing tool to simulate the expected number of concurrent users and total requests to your application, and inspect the results. -ans",
            "Enable autoscaling on the GKE cluster and enable horizontal pod autoscaling on your application deployments. Send curl requests to your application, and validate if the auto scaling works.",
            "Replicate the application over multiple GKE clusters in every Google Cloud region. Configure a global HTTP(S) load balancer to expose the different clusters over a single global IP address.",
            "Use Cloud Debugger in the development environment to understand the latency between the different microservices.",
        ]
    },
    {
        id: 140,
        question: `Your company has a Kubernetes application that pulls messages from Pub/Sub and stores them in Filestore. Because the application is simple, it
was deployed as a single pod. The infrastructure team has analyzed Pub/Sub metrics and discovered that the application cannot process the
messages in real time. Most of them wait for minutes before being processed. You need to scale the elaboration process that is I/O-intensive.
What should you do?`,
        answers: [
            "Use kubectl autoscale deployment APP_NAME --max 6 --min 2 --cpu-percent 50 to configure Kubernetes autoscaling deployment.",
            "Configure a Kubernetes autoscaling deployment based on the subscription/push_request_latencies metric.",
            "Use the --enable-autoscaling flag when you create the Kubernetes cluster.",
            "Configure a Kubernetes autoscaling deployment based on the subscription/num_undelivered_messages metric -ans",
        ]
    },
    {
        id: 141,
        question: `Your company is developing a web-based application. You need to make sure that production deployments are linked to source code commits and
are fully auditable. What should you do?`,
        answers: [
            "Make sure a developer is tagging the code commit with the date and time of commit.",
            "Make sure a developer is adding a comment to the commit that links to the deployment.",
            "Make the container tag match the source code commit hash. -ans",
            "Make sure the developer is tagging the commits with latest.",
        ]
    },
    {
        id: 142,
        question: `An application development team has come to you for advice. They are planning to write and deploy an HTTP(S) API using Go 1.12. The API will
have a very unpredictable workload and must remain reliable during peaks in traffic. They want to minimize operational overhead for this
application. Which approach should you recommend?`,
        answers: [
            "Develop the application with containers, and deploy to Google Kubernetes Engine.",
            "Develop the application for App Engine standard environment. -ans",
            "Use a Managed Instance Group when deploying to Compute Engine.",
            "Develop the application for App Engine flexible environment, using a custom runtime.",
        ]
    },
    {
        id: 143,
        question: `Your company is designing its data lake on Google Cloud and wants to develop different ingestion pipelines to collect unstructured data from
different sources.
After the data is stored in Google Cloud, it will be processed in several data pipelines to build a recommendation engine for end users on the
website. The structure of the data retrieved from the source systems can change at any time. The data must be stored exactly as it was retrieved
for reprocessing purposes in case the data structure is incompatible with the current processing pipelines. You need to design an architecture to
support the use case after you retrieve the data. What should you do?`,
        answers: [
            "Send the data through the processing pipeline, and then store the processed data in a BigQuery table for reprocessing.",
            "Store the data in a BigQuery table. Design the processing pipelines to retrieve the data from the table.",
            "Send the data through the processing pipeline, and then store the processed data in a Cloud Storage bucket for reprocessing.",
            "Store the data in a Cloud Storage bucket. Design the processing pipelines to retrieve the data from the bucket. -ans",
        ]
    },
    {
        id: 144,
        question: `You are responsible for the Google Cloud environment in your company. Multiple departments need access to their own projects, and the
members within each department will have the same project responsibilities. You want to structure your Google Cloud environment for minimal
maintenance and maximum overview of
IAM permissions as each department's projects start and end. You want to follow Google-recommended practices. What should you do?`,
        answers: [
            "Grant all department members the required IAM permissions for their respective projects.",
            "Create a Google Group per department and add all department members to their respective groups. Create a folder per department and grant the respective group the required IAM permissions at the folder level. Add the projects under the respective folders. -ans",
            "Create a folder per department and grant the respective members of the department the required IAM permissions at the folder level. Structure all projects for each department under the respective folders.",
            "Create a Google Group per department and add all department members to their respective groups. Grant each group the required IAM permissions for their respective projects.",
        ]
    },
    {
        id: 145,
        question: `Your company has an application running as a Deployment in a Google Kubernetes Engine (GKE) cluster. You have separate clusters for
development, staging, and production. You have discovered that the team is able to deploy a Docker image to the production cluster without first
testing the deployment in development and then staging. You want to allow the team to have autonomy but want to prevent this from happening.
You want a Google Cloud solution that can be implemented quickly with minimal effort. What should you do?`,
        answers: [
            "Configure a Kubernetes lifecycle hook to prevent the container from starting if it is not approved for usage in the given environment.",
            "Implement a corporate policy to prevent teams from deploying Docker images to an environment unless the Docker image was tested in an earlier environment.",
            "Configure binary authorization policies for the development, staging, and production clusters. Create attestations as part of the continuous integration pipeline. -ans",
            "Create a Kubernetes admissions controller to prevent the container from starting if it is not approved for usage in the given environment.",

        ]
    },
    {
        id: 146,
        question: `Your company wants to migrate their 10-TB on-premises database export into Cloud Storage. You want to minimize the time it takes to complete
this activity, the overall cost, and database load. The bandwidth between the on-premises environment and Google Cloud is 1 Gbps. You want to
follow Google-recommended practices. What should you do?`,
        answers: [
            "Develop a Dataflow job to read data directly from the database and write it into Cloud Storage.",
            "Use the Data Transfer appliance to perform an offline migration.",
            "Use a commercial partner ETL solution to extract the data from the on-premises database and upload it into Cloud Storage.",
            "Compress the data and upload it with gsutil -m to enable multi-threaded copy. -ans",
        ]
    },

]