# Installation

```
python3 -m venv .venv
.venv/bin/pip install couchbase 'fastapi[standard]'
```

# Try it out

```
.venv/bin/fastapi dev server.py
```

Open http://127.0.0.1:8000/docs in a web browser, expand enroll and click "Try it out".

# Try out airline example

```
DB_PASSWORD=password-posted-in-discord .venv/bin/python airline_example.py
```
