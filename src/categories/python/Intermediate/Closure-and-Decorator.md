## Closure

A closure is an inner function that has access to variables in the local scope of the outer function.

```python
import time
from typing import Any

def outer_function(message: str) -> Any:
    # local variables of outer function
    outer_message = "Outer: " + message
    current_time = time.time()

    # inner function has access to local variables of outer function
    # this inner function is a closure
    def inner_function() -> None:
        print(f"Inner: '{outer_message}'")
        print("Current time: ", current_time)
    return inner_function

outer_function("Hello")()
```

# Decorator

- Wraps a function by another function
- Takes a function as an argument, returns a closure
- The closure runs the previous passed in function with the *args and **kwargs arguments

```python
from typing import Callable, Any

# this outer function is a decorator
def outer_function(fn: Callable):
    # inner function is a closure
    def inner_function() -> Any:
        fn_result = fn()
        return fn_result
    return inner_function

# @outer_function is equivalent to:
# decorated_my_function = outer_function(my_function)
# decorated_my_function()

@outer_function
def my_function() -> None:
    print("Hello, World!")

my_function()
```

A more interesting example:

```python
from typing import Any
from typing import Callable
from typing import Optional

def decorator(fn: Callable) -> Callable:
    print("Start decorator function from: ", fn.__name__)

    def wrapper(*args: Any, **kwargs: Any) -> Any:
        print("Start wrapper function from: ", fn.__name__)
        fn_result = fn(*args, **kwargs)
        print("End wrapper function from: ", fn.__name__)
        return fn_result

    print("End decorator function from: ", fn.__name__)
    return wrapper

def print_hello_world() -> None:
    print("Hello World!")

decorated_print_hello_world = decorator(print_hello_world)
decorated_print_hello_world()
# print_hello_world() takes 0 positional arguments but 1 was given
# decorated_print_hello_world(8)

def print_arguments(
    a: int,
    b: int,
    c: Optional[int] = None,
):
    print(f"A: {a}, B: {b}, C: {c}")

decorated_print_arguments = decorator(print_arguments)
decorated_print_arguments(1, b=2, c=3)

@decorator
def print_arguments2(
    a: int,
    b: int,
    c: Optional[int] = None,
):
    print(f"A: {a}, B: {b}, C: {c}")

print_arguments2(2, b=3, c=4)
```
