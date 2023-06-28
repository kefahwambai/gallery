pipeline {
  agent any
  stages {
    stage('Clone Repository') {
      steps {
        git 'https://github.com/kefahwambai/gallery.git'
      }
    }

    stage('install dependancies') {
      steps {
        sh 'npm install'
      }
    }

    stage('run test') {
      steps {
        sh 'npm test'
      }
    }

    stage('deploy application') {
      steps {
        echo 'run reployment'
      }
    }
  }
  post {
    success {
      script {
        def slackToken = credentials('iISkceXTwfs4vOidfjNkDcL6')
        
        slackSend(
          color: '#36a64f',
          message: "Pipeline deployed successfully!",
          channel: '#firstnameip',
          tokenCredentialId: slackToken
        )
      }
    }
  }
}
