1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
answer : getElementById() -This is the most specific and fastest method. It looks for a unique id attribute on an element.ID should be unique within a page, it returns a single element.
getElementsByClassName() -This method searches for elements with a specific class name. It is "plural," meaning it can find multiple elements.
querySelector() and querySelectorAll() -
These are the DOM selection. Uses CSS selector syntax, allowing to target IDs, classes, tags, or complex relationships.

2. How do you create and insert a new element into the DOM?
answer : Creating and inserting elements is a two-step process: first, build the element in the browser's memory, and then "attach" it to the visible page.

3. What is Event Bubbling? And how does it work?
answer : In the world of JavaScript, Event Bubbling is a type of event propagation where an event starts at the most specific element and then "bubbles" up through its ancestors in the DOM tree.
It Works when click a button that is nested inside several <div> tags, the browser doesn't just trigger a click event on that button. It triggers the event in three phases:
Capturing Phase,Target Phase,Bubbling Phase.

4. What is Event Delegation in JavaScript? Why is it useful?
answer : Event Delegation is a clever technique in JavaScript that leverages Event Bubbling to handle events efficiently.
It is useful for Memory Efficiency,handling Dynamic Elements,Cleaner Code.

5. What is the difference between preventDefault() and stopPropagation() methods?
answer : The difference between preventDefault() and stopPropagation() methods like event.preventDefault() -It stops the default browser behavior associated with an event and event.stopPropagation() -It stops the propagation of the event up the DOM tree.