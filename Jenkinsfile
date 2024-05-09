pipeline {
    agent any
    environment {
        PATH = '/home/ubuntu/.nvm/versions/node/v20.13.0/bin/yarn'
    }
    stages {
        stage('Build') {
            steps {
                echo 'Build is running...'
                sh 'yarn install'
                sh 'cp -r . * /var/www/nodeapp'
            }
        }
        stage('Test') {
            steps {
                echo 'Test is running...'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deployment is running....'
            }
        }
    }
}
