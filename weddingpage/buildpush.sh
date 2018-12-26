#!/bin/bash

docker build -t tommykronstal/weddingpage:latest .
docker push tommykronstal/weddingpage:latest

ssh -i ~/.ssh/MyKeyPair.pem ubuntu@kronstal.se '/home/ubuntu/deploy-weddingpage.sh'