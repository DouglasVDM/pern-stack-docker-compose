pipeline {
    agent any

    stages {
        stage('Init') {
            steps {
                echo 'Initializing..'
                echo "Running ${env.BUILD_ID} on ${env.JENKINS_URL}"
            }
        }
        stage('Build') {
            steps {
                echo 'Running docker build -t sntshk/cotu:latest .'
                sh '''
                    cd /frontend
                    docker build -t douglasvdmerwe/dev-app-image:${env.BUILD_ID} .
                 '''
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
                echo 'Running pytest..'
            }
        }
        stage('Publish') {
            steps {
                echo 'Publishing..'
                echo 'Running docker push..'
            }
        }
        stage('Cleanup') {
            steps {
                echo 'Cleaning..'
                echo 'Running docker rmi..'
            }
        }
    }
}
