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
                sh 'sudo pkill -f PM2'
                sh 'sudo pm2 start server.js -- prod'
                sh 'sudo pm2 startup'
                sh 'sudo pm2 save'
                sh 'sudo service nginx start'
            }
        }
    }
}
