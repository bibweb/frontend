pipeline {
    agent any

    stages {
        stage('Update environment') {
            steps {
                sh 'sed -i "/apiUrl/c\\apiUrl: \'http://jenkins:8090\'" src/environments/environment.ts'
                sh 'cat src/environments/environment.ts'
            }
        }

        stage('Docker image') {
			steps {
				sh 'docker build -t zuehlke/bibweb-frontend .'
			}
		}

        stage('Deploy Docker local') {
            steps {
				sh 'docker service update --env-add "JENKINS_META=$JOB_NAME[$BUILD_NUMBER]" bibweb-frontend'
            }
        }
    }

}