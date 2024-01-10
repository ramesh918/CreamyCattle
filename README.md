# CreamyCattle
This web application serves as a comprehensive tool for monitoring cattle sheds housing both cows and buffaloes, the primary sources of milk production.
Complete **Code in development branch**
# Requirements
1. The client (user or superuser) has cattle sheds in many locations
2. Each location client appointed a Manager
3. In location they have animals ["Bull", "Cow", "Calf", "Buffalo Bull", "She Buffalo", "Buffalo Calf"], labor for that shed
4. Permissions
   - Every Manager can do CRUD operations on animals, labor in the shed or location where he was appointed
   - Only the Client (Superuser) can create his Managers and he/she can do all other tasks as well
5. Animals will give the milk Every day 2 times (morning and evening)
   - which animal gives how much milk and other  details 
   - entire day capacity of milk production in each shed
## Tech Stack Used
1. Node.js [Express Frame work] along with Typescript
2. MongoDB [ using mongoose ]
3. React [ Redux tool kit, React hooks] along with Typescript
4. Material UI for styling
