Quando for mexer no estilo, NÃO EDITE o arquivo `style.css`, utilize apenas o `input.css`.

Para que as atualizações de estilo sejam feitas, é necessário rodar o comando:
```
 npx tailwindcss -i ./src/input.css -o ./src/style.css -c tailwind.config.js
```

Lembre-se de criar um arquivo `.env` e dentro dele criar uma varíavel com o valor do seu token da api

```VITE_TOKEN = <sua key>```

Em caso de dúvidas sobre como gerar sua chave, acesse [o site da Exchange Rate API](https://www.exchangerate-api.com/).
