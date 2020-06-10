Clone app::

  $ git clone https://github.com/staverne/devtest

Install application dependencies::

  $ npm install

Build TS to JS::

  $ ./node_modules/.bin/webpack

Run application server::

  $ python2 -m SimpleHTTPServer 8000

Open app::

  $ firefox http://localhost:8000

Aller voir::

  $ firefox http://localhost:8000/#!/todo

Install Python virtual environment::
  $ python3 -m venv venv

Run Python virtual environment
  $ . venv/bin/activate

Install Flask::
  $ pip install Flask

Run Flask application::
  $ cd main/api
  $ export FLASK_APP=app.py
  $ flask run