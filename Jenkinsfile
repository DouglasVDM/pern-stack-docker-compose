pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Checkout your source code repository
                // Replace <your-repo-url> with your actual repository URL
                git branch: 'main', url: 'https://github.com/DouglasVDM/pern-stack-docker-compose.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                // Build the Docker image
                script {
                    docker.image('douglasvdmerwe/dev-app:${BUILD_NUMBER} .').build('/frontend')
                }
            }
        }

        stage('Push to Docker Hub') {
            steps {
                // Log in to Docker Hub
                withCredentials([
                    usernamePassword(credentialsId: 'dockerhub', passwordVariable: 'DOCKERHUB_PASSWORD', usernameVariable: 'DOCKERHUB_USERNAME')
                ]) {
                    sh "docker login -u $DOCKERHUB_USERNAME -p $DOCKERHUB_PASSWORD"
                }

                // Tag the Docker image
                script {
                    docker.image('<your-docker-image-name>').withRegistry('https://registry.hub.docker.com', 'docker-hub-credentials') {
                        docker.image('douglasvdmerwe/dev-app:${BUILD_NUMBER}').push()
                    }
                }
            }
        }
    }
}
