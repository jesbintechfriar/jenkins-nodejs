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
                echo 'Deployment is running....'
                sh '''
                    cd /var/www/nodeapp

                    # Find the process ID (PID) using port 3000
                    PID=$(lsof -t -i:3000)

                    # If the PID is not empty, kill the process
                    if [ -n "$PID" ]; then
                      su -c "kill -9 $PID" -s /bin/bash root
                    fi

                    # Navigate to your project directory
                    cd /var/www/nodeapp
                    # stop pm2 process
                    pm2 stop server.js

                    # install node dependency
                    yarn install
                    # start pm2 process
                    pm2 start server.js
                    # Find the process ID (PID) using port 3000
                    PID=$(lsof -t -i:3000)
                    # You may want to check if the process is still running after the deploy
                    if [ -n "$PID" ]; then
                      echo "The process is still running with PID $PID."
                    else
                      echo "Deployment successful.  process running on port 3000."
                    fi
                '''
            }
        }
    }
}
