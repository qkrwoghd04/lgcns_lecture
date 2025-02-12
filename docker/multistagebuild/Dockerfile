FROM	golang AS builder
WORKDIR /goapp
COPY	hello.go .
RUN 	go env -w GO111MODULE=auto
RUN 	go build -o hello.exe .


FROM	alpine AS runtime
WORKDIR /goapp
COPY	--from=builder /goapp/hello.exe .		
ENTRYPOINT [ "./hello.exe" ]
