pipeline {
    agent any

    stages {
        stage('Install Dependencies') {
            steps {
                // Install Node.js
                sh 'curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -'
                sh 'sudo apt-get install -y nodejs'

                // Install Angular CLI
                sh 'npm install -g @angular/cli'

                // Install project dependencies
                sh 'npm install'
            }
        }

        stage('Lint') {
            steps {
                // Run ESLint
                sh 'npm run lint'
            }
        }

        stage('Format Code') {
            steps {
                // Run Prettier
                sh 'npm run format'
            }
        }

        stage('Unit Tests') {
            steps {
                // Run Jest unit tests
                sh 'npm test'
            }
        }
    }

    post {
        always {
            // Cleanup
            deleteDir()
        }
    }
}
