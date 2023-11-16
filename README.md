Quando for mexer no estilo, NÃO EDITE o arrquivo style.css, utilize apenas o input.css.
para que as atualizações de estilo sejam feitas, é necessário rodar o comando
```
 npx tailwindcss -i ./src/input.css -o ./src/style.css -c tailwind.config.js
```