const sonarqubeScanner = require('sonarqube-scanner');

sonarqubeScanner({
  serverUrl: 'http://172.17.0.1:9000/sonar',
  options: {
    'sonar.sources': '.',
    'sonar.inclusions': 'src/**' // Entry point of your code
  }}, () => {});
