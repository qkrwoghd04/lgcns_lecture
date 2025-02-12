# 빌더 이미지 및 컨테이너를 생성
docker image build -t builder:v2 -f Dockerfile_builder .
docker container create --name builder builder:v2

# 빌더 컨테이너에서 빌더 결과물을 호스트로 추출
docker container cp builder:/goapp/hello.exe .

# 런타임 이미지를 생성
docker image build -t runtime:v2 -f Dockerfile_runtime .

# 불필요한 컨테이너 및 파일을 삭제
docker container rm builder
del hello.exe   # rm hello.exe
