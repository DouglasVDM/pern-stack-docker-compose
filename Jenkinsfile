pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/DouglasVDM/pern-stack-docker-compose.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    docker.image("douglasvdmerwe/dev-app:${BUILD_NUMBER}").build('/frontend')
                }
            }
        }

        stage('Push to Docker Hub') {
            steps {
                withCredentials([
                    usernamePassword(credentialsId: 'dockerhub', passwordVariable: 'DOCKERHUB_PASSWORD', usernameVariable: 'DOCKERHUB_USERNAME')
                ]) {
                    sh "docker login -u $DOCKERHUB_USERNAME -p $DOCKERHUB_PASSWORD"
                }

                script {
                    docker.image("douglasvdmerwe/dev-app:${BUILD_NUMBER}").withRegistry('https://registry.hub.docker.com', 'dockerhub') {
                        docker.image("douglasvdmerwe/dev-app:${BUILD_NUMBER}").push()
                    }
                }
            }
        }
    }
}
