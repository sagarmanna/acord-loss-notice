const KEY = "acord_loss_notice_draft_v1";

export function saveDraft(values) {
  localStorage.setItem(KEY, JSON.stringify(values));
}

export function loadDraft() {
  const raw = localStorage.getItem(KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

export function clearDraft() {
  localStorage.removeItem(KEY);
}
