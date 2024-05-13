# syntax=docker/dockerfile:1.4
FROM --platform=$BUILDPLATFORM python:3.11-alpine3.19 AS builder
RUN apk add gcc musl-dev libffi-dev linux-headers
RUN addgroup app && adduser -S -G app app
USER app
WORKDIR /backend 

COPY requirements.txt /backend
RUN pip3 install --upgrade pip
RUN pip3 install -r requirements.txt 

COPY . .
ENV DATABASE_URL=postgresql://postgres:aWrMDELvrqbSUIalaPlUDcCmSrKnSDJw@postgres.railway.internal:5432/railway
EXPOSE 8000
ENTRYPOINT ["python3"] 
CMD ["manage.py", "runserver", "0.0.0.0:8000"]

