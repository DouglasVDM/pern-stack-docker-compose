node {
    stage('Checkout') {
        git branch: 'main', url: 'https://github.com/DouglasVDM/pern-stack-docker-compose.git'
    }

    stage('Build Docker Image') {
        docker.withRegistry('https://registry.hub.docker.com', 'dockerhub') {
            def customImage = docker.build("douglasvdmerwe/dev-app:${BUILD_NUMBER}", '/frontend')
            customImage.push()
        }
    }
}
