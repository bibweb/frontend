pipeline {
	agent any

	stages {
		stage('Update environment') {
			steps {
				sh 'sed -i "/apiUrl/c\\apiUrl: \'http://ec2-52-56-190-16.eu-west-2.compute.amazonaws.com:8090\'" src/environments/environment.ts'
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
