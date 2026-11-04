# Matrículas IPG — SINDISTAL

Formulário público de matrícula (`/`) e painel administrativo (`/admin`) do Programa de Formação de
Inspetor Periódico de Gás. Feito no [Lovable](https://lovable.dev) com TanStack Start + Supabase (Lovable Cloud).

## Publicar no GitHub Pages
O repositório já traz o fluxo `.github/workflows/github-pages.yml`, que gera uma versão estática do site
(`npm run build:pages`) e publica sozinho a cada envio para a branch `main`.

1. Crie um repositório no GitHub (ex.: `matriculas-ipg`) e envie todos os arquivos desta pasta
   (inclusive as pastas ocultas `.github` e o arquivo `.env`).
2. No repositório: **Settings → Pages → Build and deployment → Source: "GitHub Actions"**.
3. Aba **Actions**: aguarde o fluxo "Publicar no GitHub Pages" ficar verde (2–3 min).
   O site fica em `https://SEU-USUARIO.github.io/matriculas-ipg/` e o painel em `.../admin`.

- **Conta gratuita do GitHub:** o Pages só funciona com repositório **público**. Não há dados de
  candidatos no código — eles ficam no banco. O `.env` só tem a chave pública, que já aparece no
  navegador de qualquer visitante. Para repositório privado é preciso um plano pago (GitHub Pro/Team).
- **Domínio próprio** (ex.: `matriculas.sindistal.org.br`): em *Settings → Secrets and variables →
  Actions → Variables* crie `PAGES_CUSTOM_DOMAIN` com o domínio, aponte o DNS (CNAME) para
  `SEU-USUARIO.github.io` e rode o fluxo de novo.
- Formulário, anexos, assinatura, painel, CSV e chave de exportação funcionam iguais: tudo vai do
  navegador direto para o banco (Lovable Cloud).

Outras opções: **Lovable → Publish**, ou **Cloudflare Workers** com `npm run build` (versão com SSR).

## Antes de divulgar o link
- A **primeira conta criada em `/admin` vira administradora** automaticamente. Crie a sua antes de
  divulgar o site.

## Exportação dos dados
- Painel `/admin` → **Exportar CSV** (abre direto no Excel; respeita os filtros da tela).
- Automático: planilha Google sempre atualizada + Excel por e-mail 2x ao dia →
  ver [`integracoes/google-sheets/LEIA-ME.md`](integracoes/google-sheets/LEIA-ME.md).

## Desenvolvimento local
```sh
npm i
npm run dev     # http://localhost:8080
npm test
npm run build
```
