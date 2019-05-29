#creo la imagen de docker, LA RECETA

FROM python

#para flask
ENV FLASK_APP api.py

#directorio de la imagen
WORKDIR /app

#lo que necesito instalar y/o ejecutar
RUN pip install request flask pymongo flask-cors

#copio el main.py de agente en /agent/agent.py
COPY main.py ./api.py

#puerto para ejecutar el servidor
EXPOSE 5000

#ejecuta:
CMD flask run --host=0.0.0.0