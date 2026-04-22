/* ──────────────────────────────────────────────
   search.js  —  키워드 필터링
────────────────────────────────────────────── */

/**
 * 항목 배열을 query 문자열로 필터링합니다.
 * title, description, code, category 필드를 검색합니다.
 */
export function filterItems(items, query) {
  const q = query.trim().toLowerCase();
  if (!q) return items;

  return items.filter(item => {
    const effectFields = (item.effects || []).flatMap(effect => [
      effect.label,
      effect.code,
    ]);

    const fields = [
      item.title,
      item.description,
      item.code,
      item.category,
      item.id,
      ...effectFields,
    ].map(f => (f || '').toLowerCase());

    return fields.some(f => f.includes(q));
  });
}
