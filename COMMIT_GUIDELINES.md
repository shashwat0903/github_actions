# Commit CI Workflow

This workflow checks that commits follow the [Conventional Commits](https://www.conventionalcommits.org/) format.

## Valid Commit Message Format

Commit messages should follow this format:
```
type(scope): description
```

Where `type` is one of:
- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

The `scope` is optional and represents the area of the codebase being changed.

## Examples

Valid commit messages:
```
feat: add user authentication
fix(login): correct password validation
docs: update README with new instructions
```

Invalid commit messages:
```
added new feature
fixing bug
update docs
```

## File Change Validation

The workflow also checks that certain sensitive files are not modified directly.
