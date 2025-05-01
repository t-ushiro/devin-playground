# Full-Stack Web Application

A full-stack web application with Next.js frontend, NestJS backend, and PostgreSQL database.

## Tech Stack

- **Frontend**: Next.js with shadcn/ui
- **Backend**: NestJS (REST API)
- **Database**: PostgreSQL
- **Containerization**: Docker Compose

## Project Structure

```
fullstack-app/
├── frontend/           # Next.js frontend
├── backend/            # NestJS backend
└── docker-compose.yml  # Docker Compose configuration
```

## Getting Started

### Prerequisites

- Docker and Docker Compose
- Node.js (for local development)

### Running with Docker Compose

1. Clone the repository:

```bash
git clone <repository-url>
cd fullstack-app
```

2. Start the application:

```bash
docker compose up
```

This will start the frontend, backend, and PostgreSQL database.

- Frontend: http://localhost:3000
- Backend API: http://localhost:3001
- PostgreSQL: localhost:5432

### Local Development

#### Frontend

```bash
cd frontend
npm install
npm run dev
```

#### Backend

```bash
cd backend
npm install
npm run start:dev
```

## Features

- User authentication (signup/login) with JWT
- User CRUD operations
- Responsive UI with shadcn/ui components
- PostgreSQL database integration
- Docker containerization

## API Endpoints

- `POST /auth/signup` - Register a new user
- `POST /auth/login` - Login and get JWT token
- `GET /users` - Get all users
- `GET /users/:id` - Get user by ID
- `POST /users` - Create a new user
- `PATCH /users/:id` - Update a user
- `DELETE /users/:id` - Delete a user

## CI/CD

The project includes GitHub Actions workflows for:
- Building Docker images
- Running tests
- Running database migrations
