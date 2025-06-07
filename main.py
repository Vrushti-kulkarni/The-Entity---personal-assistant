import eel

# Tell Eel where your frontend files are
eel.init("frontend")

# Start the Eel app, open Edge in app mode
eel.start(
    "index.html",
    mode="edge",  # or provide full path to msedge.exe if this fails
    host='localhost',
    port=8000,
    block=True,
    cmdline_args=["--app=http://localhost:8000"]
)
