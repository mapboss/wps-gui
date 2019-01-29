# Pull base image
FROM tomcat:8-jre8-alpine

# Copy to images tomcat path
ADD build/wpsbuilder.war /usr/local/tomcat/webapps/