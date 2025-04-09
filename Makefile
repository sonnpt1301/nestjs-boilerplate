.PHONY: help install dev build start test lint format clean docker-up docker-down docker-logs

# Default target
help:
	@echo "Available commands:"
	@echo "  make install     - Install dependencies"
	@echo "  make dev        - Start development server"
	@echo "  make build      - Build the application"
	@echo "  make start      - Start production server"
	@echo "  make test       - Run tests"
	@echo "  make lint       - Run linter"
	@echo "  make format     - Format code"
	@echo "  make clean      - Clean build files"
	@echo "  make docker-up  - Start Docker containers"
	@echo "  make docker-down - Stop Docker containers"
	@echo "  make docker-logs - Show Docker logs"

# Install dependencies
install:
	@echo "Installing dependencies..."
	npm install

# Start development server
dev:
	@echo "Starting development server..."
	npm run start:dev

# Build the application
build:
	@echo "Building application..."
	npm run build

# Start production server
start:
	@echo "Starting production server..."
	npm run start:prod

# Run tests
test:
	@echo "Running tests..."
	npm run test

# Run linter
lint:
	@echo "Running linter..."
	npm run lint

# Format code
format:
	@echo "Formatting code..."
	npm run format

# Clean build files
clean:
	@echo "Cleaning build files..."
	rm -rf dist
	rm -rf node_modules

# Docker commands
docker-up:
	@echo "Starting Docker containers..."
	docker-compose --env-file .env.development up -d

docker-down:
	@echo "Stopping Docker containers..."
	docker-compose --env-file .env.development down

docker-logs:
	@echo "Showing Docker logs..."
	docker-compose --env-file .env.development logs -f

# Docker specific service logs
docker-logs-mongodb:
	docker-compose --env-file .env.development logs -f mongodb

docker-logs-redis:
	docker-compose --env-file .env.development logs -f redis

docker-logs-rabbitmq:
	docker-compose --env-file .env.development logs -f rabbitmq

# Docker specific service commands
docker-restart:
	@echo "Restarting Docker containers..."
	docker-compose --env-file .env.development restart

docker-ps:
	@echo "Listing Docker containers..."
	docker-compose --env-file .env.development ps

# Development workflow
dev-setup: install docker-up
	@echo "Development environment setup complete!"

dev-clean: docker-down clean
	@echo "Development environment cleaned!" 