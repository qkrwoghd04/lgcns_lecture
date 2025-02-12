FROM  ubuntu
ENV   DEBIAN_FRONTEND=noninterative
RUN   apt-get update
RUN   apt-get install -y apache2
#RUN  apachectl start
RUN   echo "ServerName localhost" >> /etc/apache2/apache2.conf
#RUN  apachectl restart
COPY  hello.html /var/www/html/
CMD   apachectl -D FOREGROUND