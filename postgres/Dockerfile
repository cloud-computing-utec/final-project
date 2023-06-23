FROM postgres:14

# Copia el archivo .env al contenedor
COPY .env /tmp/.env

# Configura las variables de entorno en el contenedor
ENV POSTGRES_USER=""
ENV POSTGRES_PASSWORD=""
ENV POSTGRES_DB=""
ENV POSTGRES_PORT=""

ENV ZOOKEEPER_CLIENT_PORT=""
ENV ZOOKEEPER_TICK_TIME=""

RUN echo "source /tmp/.env" > /docker-entrypoint-initdb.d/load-env.sh

EXPOSE 5432

CMD ["postgres"]
