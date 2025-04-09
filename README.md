# NestJS Boilerplate

A production-ready NestJS boilerplate with TypeScript, MongoDB, Redis, and RabbitMQ.

## Features

- 🚀 **NestJS** - A progressive Node.js framework
- 📦 **TypeScript** - Type safety and better developer experience
- 🗄️ **MongoDB** - NoSQL database
- 🔄 **Redis** - In-memory data structure store
- 🐰 **RabbitMQ** - Message broker
- 🔐 **JWT Authentication** - Secure authentication
- 📝 **Swagger** - API documentation
- 🧪 **Testing** - Unit and E2E tests
- 🛠️ **Docker** - Containerization
- 📏 **ESLint & Prettier** - Code quality and formatting

## Prerequisites

- Node.js (v18 or later)
- Docker and Docker Compose
- Make (optional, but recommended)

## Getting Started

### Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/nestjs-boilerplate.git
cd nestjs-boilerplate
```

2. Install dependencies:

```bash
make install
```

3. Copy environment file:

```bash
cp .env.example .env.development
```

4. Update environment variables in `.env.development` as needed.

### Development

1. Start Docker containers:

```bash
make docker-up
```

2. Start development server:

```bash
make dev
```

The application will be available at `http://localhost:9090/api`

### Available Make Commands

```bash
make help          # Show all available commands
make install       # Install dependencies
make dev          # Start development server
make build        # Build the application
make start        # Start production server
make test         # Run tests
make lint         # Run linter
make format       # Format code
make clean        # Clean build files
make docker-up    # Start Docker containers
make docker-down  # Stop Docker containers
make docker-logs  # Show Docker logs
```

### Docker Commands

```bash
# Start specific service logs
make docker-logs-mongodb
make docker-logs-redis
make docker-logs-rabbitmq

# Docker container management
make docker-restart
make docker-ps
```

### Development Workflow

```bash
# Setup development environment
make dev-setup

# Clean development environment
make dev-clean
```

## Project Structure

```
src/
├── app/              # Application modules
├── configs/          # Configuration files
├── shared/           # Shared modules and utilities
├── main.ts           # Application entry point
└── env.ts            # Environment configuration
```

## API Documentation

Once the application is running, you can access the Swagger documentation at:
`http://localhost:9090/api/docs`

## Testing

```bash
# Run unit tests
make test

# Run e2e tests
npm run test:e2e

# Run test coverage
npm run test:cov
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

If you find this project helpful, please consider giving it a ⭐️ on GitHub!
