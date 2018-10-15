pipeline {
	agent any

	stages {
		stage('Update environment') {
			steps {
				sh 'sed -i "/apiUrl/c\\apiUrl: \'ec2-18-130-213-6.eu-west-2.compute.amazonaws.com:8090\'" src/environments/environment.ts'
					sh 'cat src/environments/environment.ts'
			}
		}

		stage('Docker image') {
			steps {
				sh 'docker build -t zuehlke/bibweb-frontend .'
				sh 'docker image prune --filter label=stage=intermediate'
			}
		}

		stage('Deploy Docker local') {
			steps {
				sh 'docker service update --env-add "JENKINS_META=$JOB_NAME[$BUILD_NUMBER]" bibweb-frontend'
			}
		}
	}

}
