# ModuleCaching
To learn about node.js module caching

**Node.js module caching**  
Node.js has caching system that caches modules when they called first time. When you call modules later, you will get exactly same object or value.
This means modules are executed only one time, but you can make modules execute several times. To have a module execute code multiple times, export a function, and call that function.

You can get more details in reference : https://nodejs.org/api/modules.html#modules_caching

**Pre-work**  
- You must install node.js in your computer first.

**How to run**  
1. Clone or download project
2. Go to project directory via command prompt
3. Run test01.js (command -> node test01.js)

**Result**  

First try  
Module called!  
test  
Module called!  
test  

Second try  
Module called!  
test  
test  

**What's the difference?**  
First try returns function, so node.js execute module every time when you call.  
Second try returns object, so node.js execute module only one time when you call first time and will return object when you call module later.
