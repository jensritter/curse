echo private key sollte mit 4096 RSA erstellt worden sein
echo die .p12-datei muss CA-cert + private key + public key enthalten
echo
echo http://hohnstaedt.de/xca verwenden, um das alles zu erstellen.

del acht.jens.org.jks

keytool -importkeystore ^
    -srckeystore certs\acht.jens.org.p12 ^
    -srcstorepass apache01 ^
    -destkeystore acht.jens.org.jks ^
    -deststorepass changeme
