- Clone the repo

```jsx
git clone https://github.com/100xdevs-cohort-2/week-17-final-code
```

- npm install
- Run postgres either locally or on the cloud (neon.tech)

```jsx
docker run  -e POSTGRES_PASSWORD=mysecretpassword -d -p 5432:5432 postgres
```

- Copy over all .env.example files to .env
- Update .env files everywhere with the right db url
- Go to `packages/db`
    - npx prisma migrate dev
    - npx prisma db seed
- Go to `apps/user-app` , run `npm run dev`
- Try logging in using phone - 1111111111 , password - alice (See `seed.ts`)

- ![Screenshot (90)](https://github.com/user-attachments/assets/47f3a087-3c50-417e-9faf-4db892a82db1)
![Screenshot (91)](https://github.com/user-attachments/assets/cb51c33c-7760-4f75-8ee5-bd140105426d)
