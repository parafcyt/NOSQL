#creo la imagen de docker, LA RECETA

FROM python

#directorio de la imagen
WORKDIR /agent 

#lo que necesito instalar y/o ejecutar
RUN pip install requests flask pymongo

#copio el main.py de agente en /agent/agent.py
COPY main.py ./agent.py

#ejecuta:
CMD ["python", "agent.py"]