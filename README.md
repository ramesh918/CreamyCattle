# CreamyCattle
This web application serves as a comprehensive tool for monitoring cattle sheds housing both cows and buffaloes, the primary sources of milk production.

## Tech Stack Used
1. Node.js [Express Frame work] along with Typescript
2. MongoDB [ using mongoose ]
3. React [ Redux tool kit, React hooks] along with Typescript
4. Material UI for styling

# Requirements
1. The client has 6 cattle sheds, in 6 different locations
2. Each cattle shed has a manager, six laborers, and 30 to 50 animals, including cows, oxen, buffaloes, bulls, and their calves.
3. The client wants to monitor 
    - labor charges
    - milk production
    - food supplements and its cost
    - health of animals 
4. Access control & permissions (only two levels, in future, may increase)
    - each manager has access to  the shed, in which he/she was in charge
    - only the client (super admin) can access everything
    - manager permissions
        1. he/she can do CRUD operations on labor at his shed only
        2. he/she can do CRUD operations on animals at his shed only
        3. he/she can enter milk production of each animal
        4. health reports and photos of animal
        5. labor charges 
        6. feed for animal and its charges
    d. super admin (client) permissions
        1. he/she can do everything.

