all: dev

.PHONY: dev
dev:
	@npm run dev

.PHONY: build
build:
	@npm run build

.PHONY: install
install:
	@npm install

.PHONY: clean
clean:
	@rm -rf dist
	@rm -rf node_modules
	@echo "clean [ ok ]"