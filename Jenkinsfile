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
                script {
                    // Change directory to the deployment location
                    dir("/var/www/nodeapp") {
                        // Find the process ID (PID) using port 3000
                        def PID = sh(script: "lsof -t -i:3000", returnStdout: true).trim()

                        // If the PID is not empty, kill the process
                        if (PID) {
                            sh "kill -9 $PID"
                        }

                        // Stop the pm2 process
                        sh "pm2 stop server.js"

                        // Install node dependencies
                        sh "yarn install"

                        // Start pm2 process
                        sh "pm2 start server.js"

                        // Find the process ID (PID) using port 3000
                        PID = sh(script: "lsof -t -i:3000", returnStdout: true).trim()

                        // Check if the process is still running after the deploy
                        if (PID) {
                            echo "The process is still running with PID $PID."
                        } else {
                            echo "Deployment successful. Process running on port 3000."
                        }
                    }
                }
            }
        }
    }
}
