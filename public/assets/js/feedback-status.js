const FEEDBACK_STATUS_BASE_URL =
  "https://script.google.com/macros/s/AKfycbzXq9f6f1MCbmrZeocsYdWXHeKFx0BWpIaExA-rqAOGw4YuJAn7d9Ruaq48rokRreBV/exec";

function formatStatusDate(value) {
  if (!value) return "";

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return value;
  }

  return date.toLocaleString(undefined, {
    dateStyle: "medium",
    timeStyle: "short",
  });
}

function escapeHtml(value) {
  return String(value || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
function updateFeedbackCards(data) {
  if (!data || !data.ok || !Array.isArray(data.forms)) return;

  data.forms.forEach((item) => {
    const card = document.querySelector(`[data-form-type="${item.formType}"]`);

    if (!card) return;

    const pill = card.querySelector("[data-status-pill]");
    const primaryLink = card.querySelector(".primary-link");

    if (pill) {
      pill.classList.remove(
        "ready",
        "next",
        "future",
        "review",
        "completed",
        "remaining"
      );

      if (item.submitted) {
        pill.classList.add("completed");
        pill.textContent = "Completed";
        card.setAttribute("data-submission-status", "completed");
      } else {
        pill.classList.add("remaining");
        pill.textContent = item.required ? "Remaining" : "Optional";
        card.setAttribute("data-submission-status", "remaining");
      }
    }

    if (primaryLink && item.submitted) {
      primaryLink.textContent = "Review Again";
    }
  });
}
function renderFeedbackStatus(data) {
  const board = document.getElementById("feedbackStatusBoard");

  if (!board) return;

  if (!data || !data.ok || !Array.isArray(data.forms)) {
    board.innerHTML = "<p>Could not load feedback status.</p>";
    return;
  }

  board.innerHTML = data.forms
    .map((item) => {
      const submittedClass = item.submitted ? "submitted" : "not-submitted";
      const submittedText = item.submitted ? "Submitted" : "Not submitted";

      const meta = item.submitted
        ? `Submitted ${escapeHtml(formatStatusDate(item.lastSubmittedAt))}`
        : item.required
        ? "Still needed"
        : "Optional";

      return `
		<article class="status-row">
		  <div>
			<div class="status-row-title">${escapeHtml(item.label)}</div>
			<div class="status-row-meta">${meta}</div>
		  </div>

		  <span class="status-badge ${submittedClass}">
			${submittedText}
		  </span>

		  <a class="status-board-link" href="${escapeHtml(item.url)}">
			${item.submitted ? "Review again" : "Open form"}
		  </a>
		</article>
	  `;
    })
    .join("");
}

function handleFeedbackStatusError() {
  const board = document.getElementById("feedbackStatusBoard");

  if (board) {
    board.innerHTML = `
	  <p>
		Could not load live submission status. Use the form cards below if the status board is unavailable.
	  </p>
	`;
  }
}

function loadFeedbackStatusJsonp() {
  const callbackName = `betterBodiesStatus_${Date.now()}`;
  const script = document.createElement("script");

  window[callbackName] = function (data) {
    renderFeedbackStatus(data);
    updateFeedbackCards(data);
    updateFeedbackProgress(data);
    delete window[callbackName];
    script.remove();
  };

  script.onerror = function () {
    handleFeedbackStatusError();
    delete window[callbackName];
    script.remove();
  };

  script.src = `${FEEDBACK_STATUS_BASE_URL}?action=status&callback=${callbackName}`;

  document.body.appendChild(script);
}
function updateFeedbackProgress(data) {
  const bar = document.getElementById("feedbackProgressBar");

  if (!bar || !data || !data.summary) return;

  const total = data.summary.totalForms || 0;
  const submitted = data.summary.submittedForms || 0;
  const percent = total > 0 ? Math.round((submitted / total) * 100) : 0;

  bar.style.width = `${percent}%`;
  bar.setAttribute("aria-valuenow", String(percent));
}
loadFeedbackStatusJsonp();
