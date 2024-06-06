pipeline {
    agent any
    stages {
        stage('Clone Repository') {
            steps {
                sh '''ssh -o StrictHostKeyChecking=no -i /var/lib/jenkins/.ssh/aws.pem ubuntu@54.226.1.104 << EOF
                    sudo rm -rf jenkins_test
                    sudo rm -rf /var/www/html/*
                    sudo git clone https://github.com/MoamenZyan/jenkins_test.git
                    sudo cp -r jenkins_test/* /var/www/html/
                EOF'''
            }
        }
    }



    post {
        success {
            echo 'Script Ran Successfully'
        }
        failure {
            echo 'Script Failed'
        }
    }
}