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
                sh 'pm2 start server.js -- prod'
                sh 'sudo env PATH=$PATH:/usr/bin /usr/local/lib/node_modules/pm2/bin/pm2 startup systemd -u jenkins --hp /var/lib/jenkins'
                sh 'pm2 startup'
                sh 'pm2 save'
                sh 'service nginx start'
            }
        }
    }
}
