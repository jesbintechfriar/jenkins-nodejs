pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                echo 'Build is running...'
                sh 'cp -r * /var/www/nodeapp'
            }
        }
        stage('Test') {
            steps {
                echo 'Test is running...'
            }
        }
        stage('Deploy') {
            steps {
               sh 'cd /var/www/nodeapp'
               sh 'ls'
               sh 'pm2 stop server.js'
               sh 'pm2 start server.js'
            }
        }
    }
}
