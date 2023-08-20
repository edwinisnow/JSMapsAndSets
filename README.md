# Map vs. Object

### Same:

    Both contain key-value pairs
    Both allow you to set, get, delete and check for key-value pairs

### Differences:

    Map does not contain default keys; they must be set
    Map keys can be anything
    Map size property
    Map does not allow duplicate keys

# WeakMap vs. Map

### Same:

    Both contain key-value pairs
    Both allow you to set, get, delete and check for key-value pairs

### Differences:

    WeakMap's Keys must be objects (cannot be a primitive value)
    WeakMap does not have all of the same methods and property as Map, including the abiltiy to iterate over the object or get its size

# Set

    No duplicate values
    Set values can be anything
    Several methods: add, has, clear, delete, entires, forEach, values
    Size property

# WeakSet vs. Set

### Same:

    Both store unique values
    Both allow you to add, delete and check values

### Differences:

    WeakSet's value must be objects
    WeakSet does not have all of the same methods and propery as Set, including the ability to iterate over the object or get its size
