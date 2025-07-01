# Installation

```
python3 -m venv .venv
.venv/bin/pip install couchbase 'fastapi[standard]'
```

# Try it out

```
.venv/bin/fastapi dev server.py --port 8001
```

Open http://127.0.0.1:8000/docs in a web browser, expand enroll and click "Try it out".
