pipeline {
  agent any
  options {
    buildDiscarder(logRotator(numToKeepStr: '5'))
  }
  // environment {
  //   DOCKERHUB_CREDENTIALS = credentials('dockerhub')
  // }
  stages {
    stage('Build') {
      steps {
        sh '''
        cd frontend
        docker build -t douglasvdmerwe/dev-app:${BUILD_NUMBER} .
        '''
      }
    }
    stage('Push') {
      steps {
        withDockerRegistry([credentialsId:'dockerhub', url:'']) {
          sh '''
        docker push douglasvdmerwe/dev-app:${BUILD_NUMBER}
        '''
        }
      }
    }
    stage('Post') {
      post {
        always {
          sh 'docker logout'
        }
      }
    }
  }
}
