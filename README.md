# CreamyCattle
This web application serves as a comprehensive tool for monitoring cattle sheds housing both cows and buffaloes, the primary sources of milk production.

## Tech Stack Used
1. Node.js [Express Frame work] along with Typescript
2. MongoDB [ using mongoose ]
3. React [ Redux tool kit, React hooks] along with Typescript
4. Material UI for styling

## A comprehensive overview encapsulating the entirety of the project.
# Requirements
1. Client have 6 cattle sheds, in 6 diffenet locations
2. Each cattle shed has a manager, six laborers, and 30 to 50 animals, including cows, oxen, buffaloes, bulls, and their calves.
3. Client want to monitor 
    a. labour charges
    b. milk prouction
    c. food supliments and its cost
    d. health of animals 
4. Access control & permissions (only two levels, in future may increase)
    a. each manager has access to to shed, in which he/she was incharge
    b. only client (super admin) can access everything
    c. manager permissions
        1. he/she can do CRUD operations on labour at his shed only
        2. he/she can do CRUD operations on animal at his shed only
        3. he/she can enter milk production of each animal
        4. health reports and photos of animal
    d. super adimn (client) permissions
        1. he can do everything.

