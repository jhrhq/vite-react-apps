# Home Inventory


## Quick start — how to run
Prerequisites:
- Node.js (>= 16 recommended)
- npm or yarn

1. Clone the repo
   ```bash
   git clone https://github.com/jhrhq/home-inventory.git
   cd home-inventory
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn
   pnpm
   ```
3. File routes 
   ```bash
   Just Click on the Sign In to go to dashbaord
   ```
    ```bash
    /dashoard
    /dashboard/inventory
    /dashboard/location
    ```


## File tree
Replace with the repo's actual tree if you want — I can fetch it for you.
```text
.
├── .github/
├── src/
│   ├── @type.ts
    ├── api
│   ├── App.tsx
│   ├── assets
│   ├── components
│   │   └── ui
│   ├── features
│   │   ├── auth
│   │   │   ├── components
│   │   │   │   └── login-form.tsx
│   │   │   └── hooks
│   │   ├── inventory
│   │   │   ├── components
│   │   │   └── hooks
│   │   ├── inventory-details
│   │   │   ├── components
│   │   │   └── hooks
│   │   ├── location
│   │   │   ├── components
│   │   │   └── hooks
│   │   └── pages
│   │       ├── dashboard
│   │       │   ├── index.tsx
│   │       ├── Error
│   │       │   ├── index.tsx
│   │       ├── inventory-details
│   │       │   └── index.tsx
│   │       └── location
│   │           └── index.tsx
│   ├── routes/
│   ├── hooks/
│   └── utils/
├── public/
├── package.json
├── tsconfig.json
├── .env.example
├── README.md
```

