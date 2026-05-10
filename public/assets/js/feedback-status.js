const FEEDBACK_STATUS_BASE_URL =
  "https://script.google.com/macros/s/AKfycbzXq9f6f1MCbmrZeocsYdWXHeKFx0BWpIaExA-rqAOGw4YuJAn7d9Ruaq48rokRreBV/exec";

const CALLBACK_NAME = `betterBodiesFeedbackStatus_${Date.now()}_${Math.random()
  .toString(36)
  .slice(2)}`;

function formatDate(value) {
  if (!value) return "Not submitted yet";

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return value;
  }

  return date.toLocaleString(undefined, {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}

function setText(selector, value) {
  const element = document.querySelector(selector);
  if (element) element.textContent = value;
}

function normalizePercent(value) {
  if (!Number.isFinite(value)) return 0;
  return Math.max(0, Math.min(100, Math.round(value)));
}

function renderProgress(data) {
  const forms = Array.isArray(data?.forms) ? data.forms : [];
  const submitted = forms.filter((item) => item.submitted).length;
  const total = forms.length;
  const percent = total > 0 ? normalizePercent((submitted / total) * 100) : 0;

  const progressBar = document.getElementById("feedbackProgressBar");
  if (progressBar) progressBar.style.width = `${percent}%`;

  setText("#feedbackProgressSummary", `${submitted} of ${total} surveys completed`);
  setText("#feedbackProgressPercent", `${percent}%`);
}

function updateSurveyCard(item) {
  const card = document.querySelector(`[data-form-type="${item.formType}"]`);
  if (!card) return;

  const pill = card.querySelector("[data-status-pill]");
  const action = card.querySelector("[data-card-action]");
  const submittedCount = card.querySelector("[data-submitted-count]");
  const lastSubmitted = card.querySelector("[data-last-submitted]");

  if (pill) {
    pill.classList.remove("ready", "completed", "remaining", "future", "review");

    if (item.submitted) {
      pill.classList.add("completed");
      pill.textContent = "Completed";
      card.setAttribute("data-submission-status", "completed");
    } else {
      pill.classList.add(item.required ? "remaining" : "ready");
      pill.textContent = item.required ? "Remaining" : "Ready";
      card.setAttribute("data-submission-status", "remaining");
    }
  }

  if (action && item.submitted) {
    action.textContent = "Review Again";
  }

  if (submittedCount) {
    const count = Number(item.submittedCount || 0);
    submittedCount.textContent = count === 1 ? "1 submission" : `${count} submissions`;
  }

  if (lastSubmitted) {
    lastSubmitted.textContent = item.submitted
      ? formatDate(item.lastSubmittedAt)
      : "Not submitted yet";
  }
}

function renderFeedbackStatus(data) {
  if (!data?.ok) {
    setText("#feedbackProgressSummary", "Status unavailable");
    setText("#feedbackProgressPercent", "--");
    return;
  }

  renderProgress(data);

  const forms = Array.isArray(data.forms) ? data.forms : [];
  forms.forEach(updateSurveyCard);
}

function loadFeedbackStatus() {
  window[CALLBACK_NAME] = function handleFeedbackStatus(data) {
    try {
      renderFeedbackStatus(data);
    } finally {
      delete window[CALLBACK_NAME];
      const script = document.getElementById("feedback-status-script");
      if (script) script.remove();
    }
  };

  const script = document.createElement("script");
  script.id = "feedback-status-script";
  script.src = `${FEEDBACK_STATUS_BASE_URL}?action=status&callback=${CALLBACK_NAME}`;
  script.onerror = function handleStatusError() {
    setText("#feedbackProgressSummary", "Status unavailable");
    setText("#feedbackProgressPercent", "--");
    delete window[CALLBACK_NAME];
    script.remove();
  };

  document.body.appendChild(script);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", loadFeedbackStatus);
} else {
  loadFeedbackStatus();
}
