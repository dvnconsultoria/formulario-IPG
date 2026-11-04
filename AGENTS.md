<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Matrículas IPG
- Form steps/fields live in `form_config` (versioned jsonb); `src/lib/form-schema.ts` holds the types and the default form used by "Restaurar padrão" — keep it in sync with the seed migration.
- Public submissions go only through the `submit_enrollment` security-definer RPC (generates protocol, anon can't read rows back).
- Admin gate is client-side in `src/routes/admin.tsx` (ssr:false); real protection is RLS via `has_role`.
- Email notifications not wired yet: no sender domain configured; add sends in a server function after status change / submission.
- GitHub Pages: static SPA build via `vite.pages.config.ts` + `pages/index.html` + `src/spa/` (hand-written route tree mirroring `src/routes`; add new routes there too). Workflow in `.github/workflows/github-pages.yml`.
- Automatic export: `exportar_matriculas(_chave)` (migration 0001) is read by the Google Apps Script in `integracoes/google-sheets/`; admin generates the key via `gerar_chave_exportacao()` (card at the bottom of `/admin`). Keep its columns in sync with `exportCsv` in `admin.index.tsx`.
