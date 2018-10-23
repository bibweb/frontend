pipeline {
	agent none
	stages {
	  stage('Fetch dependencies') {
	    agent {
	      docker 'circleci/node:stretch-browsers'
	    }
	    steps {
	      sh 'yarn'
	      stash includes: 'node_modules/', name: 'node_modules'
	    }
    }
    stage('Unit Test') {
      agent {
        docker 'circleci/node:stretch-browsers'
      }
      steps {
        unstash 'node_modules'
        sh 'yarn test:ci'
        junit 'reports/**/*.xml'
      }
    }
    stage('Compile') {
      agent {
        docker 'circleci/node:stretch-browsers'
      }
      steps {
        unstash 'node_modules'
        sh 'yarn build:prod'
        stash includes: 'dist/', name: 'dist'
      }
    }
    stage('Build Docker Image') {
      agent any
      steps {
        unstash 'dist'
        sh 'docker build -t zuehlke/bibweb-frontend .'
        sh 'docker image prune -f --filter label=stage=intermediate'
      }
    }
    stage('Deploy Docker local') {
      agent any
      steps {
        sh 'docker service update --env-add "JENKINS_META=$JOB_NAME[$BUILD_NUMBER]" bibweb-frontend'
      }
    }
  }
  post {
          cleanup {
              echo 'One way or another, I have finished'
              deleteDir() /* clean up our workspace */
          }
      }
}
