FROM python:3.8
WORKDIR /app

ADD . /app/
RUN pip install -r requirements.txt

EXPOSE 5000
RUN python3 load_data.py
CMD ["gunicorn", "-b", ":5000", "app:app"]