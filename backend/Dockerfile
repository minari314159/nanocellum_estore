# syntax=docker/dockerfile:1.4
FROM --platform=$BUILDPLATFORM python:3.11-alpine3.19 AS builder
WORKDIR /backend 
EXPOSE 8000
COPY requirements.txt /backend
RUN apk add --no-cache gcc musl-dev libffi-dev linux-headers
RUN pip3 install --upgrade pip
RUN pip3 install -r requirements.txt --no-cache-dir
COPY . .
ENTRYPOINT ["python3"] 
CMD ["manage.py", "runserver", "0.0.0.0:8000"]

