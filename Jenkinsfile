pipeline {
  agent any
  stages {
    stage('Install dependencies'){
      steps {
        bat 'npm install'
      }
    }
    stage('Launch tests'){
      steps {
        bat 'npm run test'
      }
    }
  }
}
