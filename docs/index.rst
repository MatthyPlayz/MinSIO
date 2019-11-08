########################################
Documentation (1.0.3)
########################################
Retrieve data ``get()``
    Retrieves any data from the connection. In which order you emitted, use ``get()[number]`` to retrieve that data.
    (Remember to subtract the ``int`` by one so that you don't get a out of range error if you go to the last value in the list.)
Open ``open()``
    Open a new connection. (filename: ``minsio.json``).
Emit ``emit(<any type>)``
    Emits the argument to be ``get()`` ted.
Closing emit ``closer(<any type>)``
    Emits the argument, then ``close()`` s the connection
Close ``close()``
    Closes the connection. (``minsio.json``)

