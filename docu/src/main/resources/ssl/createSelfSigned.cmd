keytool -genkeypair ^
    -keystore localhost.jks -storepass changeme ^
    -alias localhost ^
    -keyalg RSA -keysize 4096 -validity 3650 -keypass changeme ^
    -ext SAN=dns:localhost,ip:127.0.0.1,dns:acht.jens.org,ip:192.168.20.191 ^
    -dname "CN=localhost,OU=IT,O=KnightSoft,L=Hannover, ST=Niedersachsen, C=DE"


keytool -exportcert -alias localhost -file localhost.crt -keystore localhost.jks -storepass changeme
