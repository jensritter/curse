#!/bin/bash
# Zertifikat
CERT=wildcard.mitegro.net.cert
# Privater Key
KEY=wildcard.mitegro.net.key
# Intermedia-CA-Zertifikat
INTER=wildcard.mitegro.net.inter-ca

# Alias ( und Dateiname )
ALIAS=wildcard.mitegro.net

# Key + Keystore-Password
PASSWORD=changeme

rm -f $ALIAS.p12 $ALIAS.jks
test -f "$CERT" && test -f "$KEY" && test -f "$INTER" && FIND="ja"

if [ "$FIND" != "ja" ]; then
    echo "Es fehlen Dateien .."
    exit 1
fi

openssl pkcs12 -export \
    -name $ALIAS \
    -in "$CERT" -inkey "$KEY" \
    -passout  pass:export \
    -out "$ALIAS.p12" && \
keytool -importkeystore \
    	-deststoretype pkcs12 -destkeystore $ALIAS.jks" -deststorepass "$PASSWORD" -destkeypass "$PASSWORD" \
    	-srckeystore "$ALIAS.p12" -srcstoretype pkcs12 \
    	-srcstorepass export \
    	-alias $ALIAS && \
keytool -importcert -alias chain -file "$INTER" -keystore "$ALIAS.jks" -storepass "$PASSWORD" -noprompt && \
rm -f "$ALIAS.p12" && \
echo "Keystore : $ALIAS.jks" && \
echo "Password : $PASSWORD"
