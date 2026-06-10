export async function getLessons() {
  const response = await fetch("./data/lessons.json");
  const lessons = await response.json();

  const snippets = {
    "HTML Basics": "<h1>Hello World!</h1>",
    "Tags": "<p>This is a paragraph tag.</p>",
    "Forms": "<form><input type='text' placeholder='Your name'></form>",
    "CSS Intro": "<style>h1 { color: blue; }</style><h1>Styled Heading</h1>",
    "Selectors": "<style>.highlight { color: red; }</style><p class='highlight'>Selected text</p>",
    "Flexbox": "<style>.container { display: flex; gap: 1rem; }</style><div class='container'><div>Box 1</div><div>Box 2</div></div>",
    "Grid": "<style>.grid { display: grid; grid-template-columns: 1fr 1fr; }</style><div class='grid'><div>A</div><div>B</div></div>",
    "JS Basics": "<script>console.log('Hello JS!');</script>",
    "Variables": "<script>let name = 'Raymond'; console.log(name);</script>",
    "Functions": "<script>function greet(){ alert('Hello!'); } greet();</script>",
    "Arrays": "<script>let arr = [1,2,3]; console.log(arr);</script>",
    "Objects": "<script>let person = {name:'Raymond', age:25}; console.log(person);</script>",
    "DOM": "<script>document.body.innerHTML = '<h2>DOM Manipulated!</h2>';</script>",
    "Events": "<button onclick=\"alert('Button clicked!')\">Click Me</button>",
    "Fetch API": "<script>fetch('https://jsonplaceholder.typicode.com/posts/1').then(r=>r.json()).then(d=>console.log(d));</script>"
  };

  return lessons.map(lesson => ({
    ...lesson,
    snippet: snippets[lesson.title] || "<p>No snippet available yet.</p>"
  }));
}

