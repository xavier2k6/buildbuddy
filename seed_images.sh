if [ "$EUID" -ne 0 ]
    then echo "Please run as root"
    exit
fi

podman pull gcr.io/flame-public/executor-docker-default:enterprise-v1.6.0
podman tag gcr.io/flame-public/executor-docker-default:enterprise-v1.6.0 localhost:8080/flame-public/executor-docker-default:enterprise-v1.6.0
podman push --tls-verify=false localhost:8080/flame-public/executor-docker-default:enterprise-v1.6.

podman pull gcr.io/flame-public/rbe-ubuntu20-04@sha256:09261f2019e9baa7482f7742cdee8e9972a3971b08af27363a61816b2968f622
podman tag gcr.io/flame-public/rbe-ubuntu20-04@sha256:09261f2019e9baa7482f7742cdee8e9972a3971b08af27363a61816b2968f622 localhost:8080/flame-public/rbe-ubuntu20-04:latest
podman push --tls-verify=false localhost:8080/rbe-ubuntu20-04:latest

