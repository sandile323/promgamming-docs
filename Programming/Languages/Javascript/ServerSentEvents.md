###  EventSource

The EventSource interface is web content's interface to server-sent events.

An EventSource instance opens a persistent connection to an HTTP server, which sends events in text/event-stream format. The connection remains open until closed by calling EventSource.close()


Once the connection is opened, incoming messages from the server are delivered to your code in the form of events. If there is an event field in the incoming message, the triggered event is the same as the event field value. If no event field is present, then a generic message event is fired.

Unlike WebSockets, server-sent events are unidirectional; that is, data messages are delivered in one direction, from the server to the client (such as a user's web browser). That makes them an excellent choice when there's no need to send data from the client to the server in message form. For example, EventSource is a useful approach for handling things like social media status updates, news feeds, or delivering data into a client-side storage mechanism like IndexedDB or web storage.

![image](https://github.com/sandile323/Notes/assets/47978346/32adac26-3338-4ce2-8876-166d348f3825)


#### Instance properties
This interface also inherits properties from its parent, EventTarget.

`EventSource.readyState` Read only
A number representing the state of the connection. Possible values are CONNECTING (0), OPEN (1), or CLOSED (2).

`EventSource.url` Read only
A string representing the URL of the source.

`EventSource.withCredentials` Read only
A boolean value indicating whether the EventSource object was instantiated with cross-origin (CORS) credentials set (true), or not (false, the default).

#### Instance methods
This interface also inherits methods from its parent, EventTarget.

EventSource.close()
Closes the connection, if any, and sets the readyState attribute to CLOSED. If the connection is already closed, the method does nothing.

##### Events
`error`
Fired when a connection to an event source failed to open.

`message`
Fired when data is received from an event source.

`open`
Fired when a connection to an event source has opened.

Additionally, the event source itself may send messages with an event field, which will create ad hoc events keyed to that value.


- Examples
In this basic example, an EventSource is created to receive unnamed events from the server; a page with the name sse.php is responsible for generating the events.

```js
const evtSource = new EventSource("sse.php");
const eventList = document.querySelector("ul");

evtSource.onmessage = (e) => {
  const newElement = document.createElement("li");

  newElement.textContent = `message: ${e.data}`;
  eventList.appendChild(newElement);
};

```
Each received event causes our EventSource object's onmessage event handler to be run. It, in turn, creates a new <li> element and writes the message's data into it, then appends the new element to the list element already in the document.

Note: You can find a full example on GitHub — see Simple SSE demo using PHP.

To listen to named events, you'll require a listener for each type of event sent.

```js

const sse = new EventSource("/api/v1/sse");

/*
 * This will listen only for events
 * similar to the following:
 *
 * event: notice
 * data: useful data
 * id: someid
 */
sse.addEventListener("notice", (e) => {
  console.log(e.data);
});

/*
 * Similarly, this will listen for events
 * with the field `event: update`
 */
sse.addEventListener("update", (e) => {
  console.log(e.data);
});

/*
 * The event "message" is a special case, as it
 * will capture events without an event field
 * as well as events that have the specific type
 * `event: message` It will not trigger on any
 * other event type.
 */
sse.addEventListener("message", (e) => {
  console.log(e.data);
});

```
