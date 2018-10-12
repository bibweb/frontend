pipeline {
    agent any

    stages {
        stage('Update environment') {
            steps {
                sh 'sed -i "/apiUrl/c\\apiUrl=\'http://localhost:8090\'" src/environments/environment.ts'
                sh 'cat src/environments/environment.ts'
            }
        }
    }

    /*stages {
        stage('Docker image')
        steps {
            sh 'docker build -t zuehlke/bibweb-frontend:dev .'
        }
    }

    stages {
        stage('Deploy Docker local') {
            steps {
                sh 'docker stop bibweb-frontend || true && docker rm -f bibweb-frontend || true'
                sh 'docker run --name=bibweb-frontend --restart unless-stopped -d -p 4200:4200 zuehlke/bibweb-frontend:dev'
            }
        }
    }*/
}