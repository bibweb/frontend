pipeline {
	agent any

	stages {
		stage('Docker image') {
			steps {
				sh 'docker build -t zuehlke/bibweb-frontend .'
				sh 'docker image prune -f --filter label=stage=intermediate'
			}
		}

		stage('Deploy Docker local') {
			steps {
				sh 'docker service update --env-add "JENKINS_META=$JOB_NAME[$BUILD_NUMBER]" bibweb-frontend'
			}
		}
	}

}
