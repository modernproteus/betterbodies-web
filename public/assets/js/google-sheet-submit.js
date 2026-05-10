const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbzXq9f6f1MCbmrZeocsYdWXHeKFx0BWpIaExA-rqAOGw4YuJAn7d9Ruaq48rokRreBV/exec";

function getFormPayload(form) {
  const formData = new FormData(form);
  const payload = {};

  for (const [key, value] of formData.entries()) {
    if (payload[key]) {
      if (Array.isArray(payload[key])) {
        payload[key].push(value);
      } else {
        payload[key] = [payload[key], value];
      }
    } else {
      payload[key] = value;
    }
  }

  payload.submitted_at = new Date().toISOString();
  payload.page_url = window.location.href;
  payload.user_agent = navigator.userAgent;

  return payload;
}

function ensureStatusElement(form) {
  let status = form.querySelector("[data-form-status]");

  if (!status) {
    status = document.createElement("p");
    status.setAttribute("data-form-status", "");
    status.setAttribute("role", "status");
    status.setAttribute("aria-live", "polite");
    status.className = "helper fineprint small";
    form.appendChild(status);
  }

  return status;
}

document.querySelectorAll("[data-google-sheet-form]").forEach((form) => {
  const status = ensureStatusElement(form);

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    if (!GOOGLE_SCRIPT_URL || GOOGLE_SCRIPT_URL.includes("PASTE_YOUR")) {
      status.textContent = "Form endpoint is not configured yet.";
      return;
    }

    const submitButton = form.querySelector('[type="submit"]');
    const payload = getFormPayload(form);

    console.log("Submitting feedback payload:", payload);
    status.textContent = "Sending submission...";
    if (submitButton) submitButton.disabled = true;

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify(payload),
      });

      status.textContent =
        "Submission sent. Please confirm it appeared in the Google Sheet before closing this page.";
    } catch (error) {
      console.error("Feedback submission failed:", error);
      status.textContent =
        "Sorry, the form could not be sent. Please try again or contact Nick.";
    } finally {
      if (submitButton) submitButton.disabled = false;
    }
  });
});
