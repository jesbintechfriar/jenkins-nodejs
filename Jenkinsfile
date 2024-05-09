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
               sh '/usr/local/lib/node_modules/.bin/pm2 stop server.js'
               sh '/usr/local/lib/node_modules/.bin/pm2 start server.js'
            }
        }
    }
}
