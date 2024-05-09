pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                echo 'Build is running...'
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
