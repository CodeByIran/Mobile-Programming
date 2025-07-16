 Roteiro de Comandos para Corrigir o Projeto (Windows/PowerShell)
 =====================================
1. LIMPEZA GERAL (crucial!)
powershell
Remove-Item -Recurse -Force node_modules, package-lock.json, .expo, metro-*
npm cache clean --force


2. INSTALAÇÃO BASE (versões compatíveis)
powershell
npm install --force react@18.2.0 react-native@0.72.17
npx expo install expo@~49.0.0 expo-router@~3.0.0
npx expo install react-dom@18.2.0 react-native-web@~0.19.0
npx expo install @expo/metro-config@~0.8.0

3. CONFIGURAÇÃO ESSENCIAL
powershell
# Criar arquivo babel.config.js (se não existir)
New-Item babel.config.js -Value @"
module.exports = {
  presets: ['babel-preset-expo'],
  plugins: ['expo-router/babel']
};
"@

# Criar ponto de entrada seguro
New-Item App.js -Value "import 'expo-router/entry';"
4. VERIFICAÇÃO
powershell
npx expo-doctor --fix-dependencies
npm list react-native  # Deve mostrar v0.72.17
5. INICIAR O PROJETO
powershell
npx expo start --clear --offline
⚠️ Se ainda falhar: Comandos Extras
powershell
# Alternativa para erro de bundle
npx expo customize metro.config.js

# Forçar rebuild completo
npx expo prebuild --clean

# Testar em modo produção
npx expo start --no-dev --minify
📌 Fluxo de Trabalho Recomendado:
Sempre use npx expo [comando] (não expo-cli)

Para problemas no celular:

powershell
npx expo start --android
Para problemas na web:

powershell
npx expo start --web
✅ Checklist Pós-Instalação:
Todos componentes usam export default

app/_layout.js existe e está correto

Nenhum arquivo tem module.exports misturado com ES6

Nota: Se depois de tudo isso ainda der erro, recomendo criar um novo projeto com npx create-expo-app --template with-router e migrar seus arquivos para a pasta app/ do novo projeto.