pipeline {
	agent none
	stages {
	  stage('Fetch dependencies') {
	    agent {
	      docker 'node:10.12.0-alpine'
	    }
	    steps {
	      sh 'yarn'
	    }
    }
    stage('Unit Test') {
      agent {
        docker 'circleci/node:stretch-browsers'
      }
      steps {
        sh 'yarn test:ci'
        junit 'reports/**/*.xml'
      }
    }
    stage('Copy SonarQube Scanner to workspace') {
      agent any
      steps {
        sh 'cp -r /opt/sonar-scanner ./'
      }
    }
    stage('Run SonarQube Analysis') {
      agent {
        docker 'node:10.12.0-alpine'
      }
      steps {
        sh 'sonar-scanner/bin/sonar-scanner -Dsonar.host.url=http://172.17.0.1:9000/sonar'
      }
    }
    stage('Compile') {
      agent {
        docker 'node:10.12.0-alpine'
      }
      steps {
        sh 'yarn build:prod'
      }
    }
    stage('Build Docker Image') {
      agent any
      steps {
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
}
