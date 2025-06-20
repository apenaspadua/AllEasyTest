# AllEasyTest

## Instruções para rodar a aplicação

### Pré-requisitos

- [Node.js](https://nodejs.org/) (recomendado v18+)
- [Yarn](https://classic.yarnpkg.com/lang/en/) ou npm
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- [Android Studio](https://developer.android.com/studio) ou [Xcode](https://developer.apple.com/xcode/) para emulador, ou um dispositivo físico

---

### 1. Instale as dependências

```sh
yarn install
```

---

### 2. Rode a aplicação

**Com Expo**

```sh
➜  npx expo run:android
➜  npx expo run:ios
```

(desse forma teremos acesso aos modulos nativos customizados)

#### Observações

- Para rodar no dispositivo físico, escaneie o QR code do **Expo Go** ou conecte seu aparelho via USB.
- Certifique-se de que o emulador ou dispositivo esteja com o modo desenvolvedor ativado.
- Caso enfrente problemas com cache, rode:

```sh
npx expo start -c
# ou
npx react-native start --reset-cache
```

---

### Estrutura de pastas

```
src/
├── assets        # Imagens
├── components    # Componentes reutilizáveis
├── contexts      # Contextos globais
├── hooks         # Hooks customizados
├── interfaces    # Tipos e interfaces TypeScript
├── modulos       # Features do projeto
├── navigation    # Estrutura de nevegação
├── services      # Serviços de API
├── store         # Zustand stores
├── theme         # Temas, cores e fontes
└── utils         # Utilitários
```

---

Pronto! Agora é só começar a usar o app 🚀
